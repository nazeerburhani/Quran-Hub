#!/usr/bin/env python3
"""One-time FormSubmit activation for the QuranHub lead inbox.

Flow: POST a TEST lead to formsubmit.co/ajax/nazeerahmad.sbg@gmail.com
(the same call the website makes). FormSubmit then emails a one-time
activation link to that inbox; this script finds it in Gmail and opens it.

Idempotent: exits quietly if ~/workspace/quran-academy/.formsubmit_activated
exists. Safe to run on a schedule until it succeeds.
"""
import json
import os
import re
import subprocess
import sys
import time
import urllib.request
import urllib.error

MARKER = os.path.expanduser("~/workspace/quran-academy/.formsubmit_activated")
EMAIL = "nazeerahmad.sbg@gmail.com"
ENDPOINT = f"https://formsubmit.co/ajax/{EMAIL}"


def gmail(*args):
    r = subprocess.run(
        ["hatch_gws_cli", "gmail", *args],
        capture_output=True, text=True, timeout=120,
    )
    return r.stdout.strip()


def find_activation_email():
    """Return (message_id,) of the newest FormSubmit activation email, or None."""
    out = gmail("+triage", "--query", "formsubmit (activat OR confirm)",
                "--max", "5", "--format", "json")
    try:
        data = json.loads(out)
    except Exception:
        return None
    msgs = data.get("messages") or data if isinstance(data, list) else []
    if isinstance(data, dict):
        msgs = data.get("messages", []) or data.get("results", [])
    for m in msgs:
        mid = m.get("id") or m.get("message_id")
        if mid:
            return mid
    return None


def extract_activation_link(message_id):
    out = gmail("+read", "--id", message_id, "--format", "json")
    # find any formsubmit.co activation/confirm URL in the body
    urls = re.findall(r'https://formsubmit\.co/[A-Za-z0-9_\-./?=&%#;:@+$,~]+', out)
    for u in urls:
        u = u.rstrip(').,;\'"')
        if "activat" in u.lower() or "confirm" in u.lower() or len(u) > 30:
            return u
    return urls[0] if urls else None


def open_url(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.status


def submit_test_lead():
    payload = {
        "_subject": "[QuranHub Website] TEST - activation check, please ignore",
        "_template": "table",
        "Note": "TEST submission to activate FormSubmit email delivery. Please ignore.",
        "Name": "Activation Test",
    }
    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json", "Accept": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as resp:
            body = resp.read().decode(errors="replace")
            return resp.status, body
    except urllib.error.HTTPError as e:
        try:
            body = e.read().decode(errors="replace")[:200]
        except Exception:
            body = f"<unreadable {type(e).__name__}>"
        return e.code, body
    except Exception as e:
        return -1, f"{type(e).__name__}: {e}"


def main():
    if os.path.exists(MARKER):
        print("already activated (marker exists) — nothing to do")
        return 0

    # 1. Maybe the activation email already arrived (e.g. an earlier attempt worked).
    mid = find_activation_email()
    if not mid:
        # 2. Trigger it with a TEST submission (same call the website makes).
        status, body = submit_test_lead()
        print(f"test submission -> HTTP {status}: {body[:120]}")
        if status != 200 or "Server Error" in body:
            print("FormSubmit is erroring right now; will retry on next run.")
            return 1
        time.sleep(90)  # give the activation email time to arrive
        mid = find_activation_email()

    if not mid:
        print("no activation email in Gmail yet; will retry on next run.")
        return 1

    link = extract_activation_link(mid)
    if not link:
        print(f"activation email {mid} found but no link extracted; will retry.")
        return 1

    try:
        st = open_url(link)
        print(f"opened activation link -> HTTP {st}")
    except Exception as e:
        print(f"failed to open activation link: {e}; will retry.")
        return 1

    open(MARKER, "w").write("activated\n")
    print("ACTIVATION COMPLETE")
    return 0


if __name__ == "__main__":
    sys.exit(main())
