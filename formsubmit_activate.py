#!/usr/bin/env python3
"""One-time FormSubmit activation for the QuranHub lead inbox.

Flow: POST a TEST lead to formsubmit.co/ajax/info@quranhub.online
(the same call the website makes). FormSubmit then emails a one-time
activation link to that inbox (Zoho); the link is clicked via the
Zoho webmail browser session (see cron body), after which the marker
file is written and this script no-ops.

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
EMAIL = "info@quranhub.online"
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

    # 1. Trigger the activation email with a TEST submission (same call the website makes).
    status, body = submit_test_lead()
    print(f"test submission -> HTTP {status}: {body[:120]}")
    if status != 200 or "Server Error" in body:
        print("FormSubmit is erroring right now; will retry on next run.")
        return 1
    # 2. Submission accepted: FormSubmit emailed the one-time activation link to
    #    info@quranhub.online (Zoho webmail). The link click is handled via the
    #    browser session (see cron body); this run stays incomplete until the
    #    marker file exists.
    print("SUBMITTED-OK: activation email sent to info@quranhub.online; "
          "activation link must be clicked in Zoho webmail.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
