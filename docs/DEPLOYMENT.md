# Deployment Guide — Putting the Website Live on Vercel

**What is Vercel?** The company behind Next.js. It hosts your site, gives it a fast global address, and updates it automatically whenever you change the code. Free to start.

## Step 1 — Put the code on GitHub (one time)

1. Create a free account at [github.com](https://github.com).
2. Create a new repository called `quran-academy` (private is fine).
3. On your computer, inside the `quran-academy` folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/quran-academy.git
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME` with your GitHub username.)

## Step 2 — Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **Add New → Project** → **Import** next to `quran-academy`.
3. Leave all build settings as they are (Vercel detects Next.js automatically).
4. Click **Deploy**. After ~2 minutes your site is live at `https://quran-academy.vercel.app`.

## Step 3 — Add your secret keys (environment variables)

1. In Vercel, open your project → **Settings → Environment Variables**.
2. Copy each name from `.env.example` and paste your real value:
   - `NEXT_PUBLIC_SITE_URL` → your final domain, e.g. `https://www.quranhub.academy`
   - `NEXT_PUBLIC_GA_ID` → Google Analytics ID (e.g. `G-XXXXXXXXXX`), when ready
   - `NEXT_PUBLIC_META_PIXEL_ID` → Meta Pixel ID, when ready
   - Supabase / Stripe / PayPal / LiveKit keys → added in later steps when those are connected
3. Click **Save**, then **Deployments → Redeploy** so the new values take effect.

> Tip: for local testing, copy `.env.example` to `.env.local` and fill it in. Never commit `.env.local` to GitHub.

## Step 4 — Connect your own domain (optional but recommended)

1. Buy a domain (e.g. `quranhub.academy`) from Namecheap, GoDaddy, etc.
2. In Vercel: project → **Settings → Domains** → **Add** → type your domain.
3. Vercel shows you 2 DNS records. Add them in your domain provider's DNS settings.
4. Wait up to 24 hours. Vercel adds the HTTPS certificate automatically.

## Step 5 — Every future update

Just push to GitHub:
```bash
git add .
git commit -m "Describe what changed"
git push
```
Vercel rebuilds and publishes automatically. You can preview changes on the automatic preview link before they go live.

## Checklist before you call it "live"

- [ ] `NEXT_PUBLIC_SITE_URL` is set to the real domain
- [ ] Site loads with `https://` and no errors
- [ ] WhatsApp buttons open the correct number (+1 917 722 5120)
- [ ] Trial form shows the success message
- [ ] Test on a phone (layout, menu, chat widget)
- [ ] Google Search Console + Analytics connected (see SEO checklist)
