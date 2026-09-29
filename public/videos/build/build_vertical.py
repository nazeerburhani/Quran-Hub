#!/usr/bin/env python3
"""Build QuranHub vertical promo cutdown (9:16) for Reels/TikTok/Shorts."""
import subprocess, os, math

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(HERE, "..", "assets")
IMAGES = os.path.join(HERE, "..", "..", "images")
OUT = os.path.join(HERE, "..", "quranhub-promo-vertical.mp4")

TEAL = "0x164449"
GOLD = "#D9A441"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FPS = 30
W, H = 1080, 1920
PAD = 0.5

scenes = [
    (f"{ASSETS}/scene-hook.webp", "vo-v1.mp3",
     "Every parent's dream \\N— hear your child recite the Quran, beautifully."),
    (f"{ASSETS}/scene-solution.webp", "vo-v2.mp3",
     "Certified tutors — live, 1-on-1, from your home."),
    ("OFFER", "vo-v3.mp3",
     "3 full days of classes — FREE. No credit card."),
    ("ENDCARD", "vo-v4.mp3",
     "Don't lose your child's slot — WhatsApp us now!"),
]

def run(cmd):
    print("+", " ".join(cmd[:6]), "...")
    subprocess.run(cmd, check=True, cwd=HERE)

def probe_dur(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries",
                          "format=duration", "-of", "csv=p=0", path],
                         capture_output=True, text=True, check=True)
    return float(out.stdout.strip())

def make_offer_v():
    src = f"{IMAGES}/hero-quran.jpg"
    with open("voffer-l1.txt", "w") as f: f.write("3 FULL DAYS")
    with open("voffer-l2.txt", "w") as f: f.write("OF CLASSES")
    with open("voffer-l3.txt", "w") as f: f.write("COMPLETELY FREE")
    with open("voffer-l4.txt", "w") as f: f.write("No credit card  ·  No risk")
    vf = (
        "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,"
        "drawbox=x=0:y=0:w=iw:h=ih:color=black@0.55:t=fill,"
        f"drawtext=fontfile={FONT}:textfile=voffer-l1.txt:fontcolor={GOLD}:fontsize=110:"
        "x=(w-text_w)/2:y=700,"
        f"drawtext=fontfile={FONT}:textfile=voffer-l2.txt:fontcolor={GOLD}:fontsize=110:"
        "x=(w-text_w)/2:y=830,"
        f"drawtext=fontfile={FONT}:textfile=voffer-l3.txt:fontcolor=white:fontsize=120:"
        "x=(w-text_w)/2:y=990,"
        f"drawtext=fontfile={FONT}:textfile=voffer-l4.txt:fontcolor=#FAF6EF:fontsize=44:"
        "x=(w-text_w)/2:y=1180"
    )
    run(["ffmpeg", "-y", "-i", src, "-vf", vf, "-frames:v", "1", "offer-v.png"])

def make_endcard_v():
    with open("vend-l1.txt", "w") as f: f.write("DON'T LOSE")
    with open("vend-l2.txt", "w") as f: f.write("YOUR CHILD'S SLOT")
    with open("vend-l3.txt", "w") as f: f.write("WhatsApp us now:")
    with open("vend-l4.txt", "w") as f: f.write("+1 917 722 5120")
    with open("vend-l5.txt", "w") as f: f.write("Claim your FREE 3-day trial")
    vf = (
        f"drawbox=x=28:y=28:w=iw-56:h=ih-56:color={GOLD}:t=6,"
        f"drawtext=fontfile={FONT}:textfile=vend-l1.txt:fontcolor={GOLD}:fontsize=92:"
        "x=(w-text_w)/2:y=860,"
        f"drawtext=fontfile={FONT}:textfile=vend-l2.txt:fontcolor={GOLD}:fontsize=72:"
        "x=(w-text_w)/2:y=980,"
        f"drawtext=fontfile={FONT}:textfile=vend-l3.txt:fontcolor=white:fontsize=52:"
        "x=(w-text_w)/2:y=1140,"
        f"drawtext=fontfile={FONT}:textfile=vend-l4.txt:fontcolor=white:fontsize=80:"
        "x=(w-text_w)/2:y=1220,"
        f"drawtext=fontfile={FONT}:textfile=vend-l5.txt:fontcolor=#FAF6EF:fontsize=48:"
        "x=(w-text_w)/2:y=1380"
    )
    run(["ffmpeg", "-y",
         "-f", "lavfi", "-i", f"color=c={TEAL}:s={W}x{H}:d=1",
         "-i", f"{IMAGES}/logo.jpg",
         "-filter_complex",
         f"[1:v]scale=440:440[logo];[0:v][logo]overlay=(W-w)/2:300,{vf}",
         "-frames:v", "1", "endcard-v.png"])

def build_scene(idx, image, vo, caption, start):
    vo_path = os.path.join(HERE, vo)
    dur = probe_dur(vo_path)
    D = dur + PAD
    frames = int(math.ceil(D * FPS))
    seg = f"vseg{idx}.mp4"
    src = ["-loop", "1", "-framerate", str(FPS), "-i",
           {"OFFER": "offer-v.png", "ENDCARD": "endcard-v.png"}.get(image, image)]
    vf = (
        "scale=1400:2560:force_original_aspect_ratio=increase,crop=1400:2560,"
        f"zoompan=z='min(1+0.0011*on,1.14)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS},"
        f"fade=t=in:st=0:d=0.5,fade=t=out:st={D-0.5:.2f}:d=0.5,"
        "format=yuv420p"
    )
    af = f"adelay=250|250,apad=whole_dur={D:.2f}"
    run(["ffmpeg", "-y"] + src + ["-i", vo_path,
          "-vf", vf, "-af", af,
          "-t", f"{D:.2f}",
          "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
          "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-ac", "2",
          "-shortest", seg])
    return seg, start, start + D

def write_ass(events):
    with open("vcaptions.ass", "w") as f:
        f.write("""[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,DejaVu Sans,52,&H00FFFFFF,&H000019FF,&H00000000,&HCC164449,1,0,0,0,100,100,0.5,0,4,2,0,2,50,50,420,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
""")
        def ts(t):
            h = int(t // 3600); m = int((t % 3600) // 60); s = t % 60
            return f"{h}:{m:02d}:{s:05.2f}"
        for (st, en, text) in events:
            f.write(f"Dialogue: 0,{ts(st+0.15)},{ts(en-0.15)},Cap,,0,0,0,,{text}\n")

def main():
    make_offer_v()
    make_endcard_v()
    segs, events, t = [], [], 0.0
    for i, (img, vo, cap) in enumerate(scenes, 1):
        seg, st, en = build_scene(i, img, vo, cap, t)
        segs.append(seg); events.append((st, en, cap)); t = en
    print("TOTAL:", round(t, 2), "s")
    with open("vconcat.txt", "w") as f:
        for s in segs:
            f.write(f"file '{s}'\n")
    write_ass(events)
    run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", "vconcat.txt",
         "-vf", "vcaptions.ass",
         "-c:v", "libx264", "-preset", "veryfast", "-crf", "22",
         "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart",
         OUT])
    print("WROTE", OUT, os.path.getsize(OUT) // 1024, "KB")

if __name__ == "__main__":
    main()
