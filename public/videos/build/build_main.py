#!/usr/bin/env python3
"""Build QuranHub main promo video (16:9) from stills + TTS voiceover + captions."""
import subprocess, os, math

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(HERE, "..", "assets")
IMAGES = os.path.join(HERE, "..", "..", "images")
OUT = os.path.join(HERE, "..", "quranhub-promo.mp4")

TEAL = "0x164449"
GOLD = "#D9A441"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FPS = 30
W, H = 1920, 1080
PAD = 0.5  # extra scene time beyond voiceover

scenes = [
    # (image, vo, caption)
    (f"{ASSETS}/scene-hook.webp", "vo-s1.mp3",
     "Every parent's dream \\N— hear your child recite the Quran, beautifully."),
    (f"{ASSETS}/scene-pain.webp", "vo-s2.mp3",
     "But finding a qualified Quran teacher feels impossible."),
    (f"{ASSETS}/scene-solution.webp", "vo-s3.mp3",
     "QuranHub brings certified tutors home — live, 1-on-1."),
    (f"{ASSETS}/scene-tajweed.webp", "vo-s4.mp3",
     "Qaida · Tajweed · Hifz — with weekly parent progress reports."),
    ("OFFER", "vo-s5.mp3",
     "3 full days of classes — FREE. No credit card."),
    ("ENDCARD", "vo-s6.mp3",
     "Slots fill fast — don't lose your child's slot. WhatsApp us now!"),
]

def run(cmd):
    print("+", " ".join(cmd[:6]), "...")
    subprocess.run(cmd, check=True, cwd=HERE)

def probe_dur(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries",
                          "format=duration", "-of", "csv=p=0", path],
                         capture_output=True, text=True, check=True)
    return float(out.stdout.strip())

def make_offer():
    src = f"{IMAGES}/hero-quran.jpg"
    with open("offer-l1.txt", "w") as f: f.write("3 FULL DAYS OF CLASSES")
    with open("offer-l2.txt", "w") as f: f.write("COMPLETELY FREE")
    with open("offer-l3.txt", "w") as f: f.write("No credit card  ·  No risk  ·  No commitment")
    vf = (
        "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,"
        "drawbox=x=0:y=0:w=iw:h=ih:color=black@0.55:t=fill,"
        f"drawtext=fontfile={FONT}:textfile=offer-l1.txt:fontcolor={GOLD}:fontsize=96:"
        "x=(w-text_w)/2:y=400,"
        f"drawtext=fontfile={FONT}:textfile=offer-l2.txt:fontcolor=white:fontsize=150:"
        "x=(w-text_w)/2:y=520,"
        f"drawtext=fontfile={FONT}:textfile=offer-l3.txt:fontcolor=#FAF6EF:fontsize=44:"
        "x=(w-text_w)/2:y=730"
    )
    run(["ffmpeg", "-y", "-i", src, "-vf", vf, "-frames:v", "1", "offer.png"])

def make_endcard():
    with open("end-l1.txt", "w") as f: f.write("DON'T LOSE YOUR CHILD'S SLOT")
    with open("end-l2.txt", "w") as f: f.write("WhatsApp us now:  +1 917 722 5120")
    with open("end-l3.txt", "w") as f: f.write("Claim your FREE 3-day trial today")
    vf = (
        f"drawbox=x=28:y=28:w=iw-56:h=ih-56:color={GOLD}:t=6,"
        f"drawtext=fontfile={FONT}:textfile=end-l1.txt:fontcolor={GOLD}:fontsize=76:"
        "x=(w-text_w)/2:y=620,"
        f"drawtext=fontfile={FONT}:textfile=end-l2.txt:fontcolor=white:fontsize=58:"
        "x=(w-text_w)/2:y=742,"
        f"drawtext=fontfile={FONT}:textfile=end-l3.txt:fontcolor=#FAF6EF:fontsize=48:"
        "x=(w-text_w)/2:y=852"
    )
    # teal base + logo badge, then text
    run(["ffmpeg", "-y",
         "-f", "lavfi", "-i", f"color=c={TEAL}:s={W}x{H}:d=1",
         "-i", f"{IMAGES}/logo.jpg",
         "-filter_complex",
         f"[1:v]scale=400:400[logo];[0:v][logo]overlay=(W-w)/2:120,"
         f"{vf}",
         "-frames:v", "1", "endcard.png"])

def build_scene(idx, image, vo, caption, start):
    vo_path = os.path.join(HERE, vo)
    dur = probe_dur(vo_path)
    D = dur + PAD
    frames = int(math.ceil(D * FPS))
    seg = f"seg{idx}.mp4"
    if image == "OFFER":
        src = ["-loop", "1", "-framerate", str(FPS), "-i", "offer.png"]
    elif image == "ENDCARD":
        src = ["-loop", "1", "-framerate", str(FPS), "-i", "endcard.png"]
    else:
        src = ["-loop", "1", "-framerate", str(FPS), "-i", image]
    vf = (
        f"scale=2560:-1,"
        f"zoompan=z='min(1+0.0011*on,1.14)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS},"
        f"fade=t=in:st=0:d=0.5,fade=t=out:st={D-0.5:.2f}:d=0.5,"
        "format=yuv420p"
    )
    af = f"adelay=250|250,apad=whole_dur={D:.2f}"
    run(["ffmpeg", "-y"] + src + ["-i", vo_path,
          "-vf", vf, "-af", af,
          "-t", f"{D:.2f}",
          "-c:v", "libx264", "-preset", "medium", "-crf", "20",
          "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-ac", "2",
          "-shortest", seg])
    return seg, start, start + D

def write_ass(events):
    with open("captions.ass", "w") as f:
        f.write("""[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,DejaVu Sans,46,&H00FFFFFF,&H000019FF,&H00000000,&HCC164449,1,0,0,0,100,100,0.5,0,4,2,0,2,60,60,70,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
""")
        def ts(t):
            h = int(t // 3600); m = int((t % 3600) // 60); s = t % 60
            return f"{h}:{m:02d}:{s:05.2f}"
        for (st, en, text) in events:
            f.write(f"Dialogue: 0,{ts(st+0.15)},{ts(en-0.15)},Cap,,0,0,0,,{text}\n")

def main():
    make_offer()
    make_endcard()
    segs, events, t = [], [], 0.0
    for i, (img, vo, cap) in enumerate(scenes, 1):
        seg, st, en = build_scene(i, img, vo, cap, t)
        segs.append(seg); events.append((st, en, cap)); t = en
    print("TOTAL:", round(t, 2), "s")
    with open("concat.txt", "w") as f:
        for s in segs:
            f.write(f"file '{s}'\n")
    write_ass(events)
    run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", "concat.txt",
         "-vf", "ass=captions.ass",
         "-c:v", "libx264", "-preset", "medium", "-crf", "21",
         "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart",
         OUT])
    print("WROTE", OUT, os.path.getsize(OUT) // 1024, "KB")

if __name__ == "__main__":
    main()
