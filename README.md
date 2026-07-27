# Synapticode Website

A fast, secure, fully static React website for Synapticode — robotics, coding
and AI education. No database, no backend, no hosting cost. You control
everything from one file.

## What's inside

- **React 18 + Vite** — the framework and build tool
- **Tailwind CSS v4** — styling
- **React Router** — pages: Home, Courses, Course Detail, Services, Posts, About, Contact, 404
- **Google Forms** — used for "Enroll Now" and "Service Inquiry" buttons (student data goes straight to your Google Sheet)
- **WhatsApp click-to-chat** — floating button on every page
- **`src/data/data.js`** — the only file you need to edit to update the site

## 1. Your Control Room: `src/data/data.js`

Every editable piece of content lives in this one file:

| Section | What you can edit |
|---|---|
| `siteConfig` | Business name, tagline, phone, WhatsApp number, email, address, map link, social links |
| `formLinks` | Your real Google Form URLs (Enroll Now / Service Inquiry / Contact) |
| `courses` | Add, remove, or edit courses — price, tags (`New`, `Best Seller`, `Coming Soon`, `Trending`), syllabus, duration |
| `services` | Your B2B/B2C services |
| `posts` | Links to your social media posts (Instagram, YouTube, LinkedIn, etc.) |
| `reviews` | Only reviews with `approved: true` are shown on the site |
| `stats` | The number strip on the homepage/about page |

Search the file for **"REPLACE ME"** — those are the dummy values (phone
number, email, address, Google Form links, social URLs) you should swap
for your real details before going live.

To add a new course, copy an existing course object inside the `courses`
array, give it a unique `id`, and fill in the fields. It will automatically
appear on the Courses page and get its own detail page at
`/courses/your-new-id`.

## 2. Running the site locally

You'll need Node.js 18 or newer installed.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

To build the production version:

```bash
npm run build
```

This creates a `dist/` folder with the final, optimized site.

## 3. Deploying (free hosting)

### Option A — Vercel
1. Push this project to a GitHub repository.
2. Go to vercel.com, import the repository.
3. Vercel auto-detects Vite — just click Deploy.
4. `vercel.json` (included) already configures routing and security headers.

### Option B — Netlify
1. Push this project to GitHub.
2. Go to netlify.com, import the repository.
3. Build command: `npm run build`, publish directory: `dist` (already set in `netlify.toml`).
4. Click Deploy.

Both give you a free `.vercel.app` / `.netlify.app` subdomain immediately.
You can connect a custom domain (.in, .com, etc.) later from the
project's dashboard — no code changes needed.

## 4. Security features already included

- Strict security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy,
  Permissions-Policy) configured for both Vercel and Netlify
- Automatic HTTPS (provided by Vercel/Netlify)
- No database, no server, no API keys — nothing for attackers to breach
- No secrets anywhere in the code (Google Form links and WhatsApp numbers
  are not sensitive — they're meant to be public)
- `data.js` runs entirely in the browser and only contains public content,
  so it's safe to keep in your repository

**Before launch, also do this yourself (not code-related):**
- In your Google Forms, consider requiring sign-in or adding a "limit to 1
  response" setting to reduce spam submissions
- Once you have a real domain, update the URLs in `public/robots.txt` and
  `public/sitemap.xml`

## 5. Project structure

```
src/
  data/data.js        <- YOUR CONTROL ROOM (edit this)
  components/          <- Navbar, Footer, WhatsApp button, cards, etc.
  pages/                <- Home, Courses, CourseDetail, Services, Posts, About, Contact, NotFound
public/
  robots.txt
  sitemap.xml
vercel.json             <- Vercel routing + security headers
netlify.toml             <- Netlify routing + security headers
```

## 6. Common edits

**Change the WhatsApp number:** edit `contact.whatsappNumber` in `data.js`
(country code + number, no `+` or spaces, e.g. `919876543210`).

**Change the enroll button link:** edit `formLinks.enrollNow` in `data.js`.

**Add a logo image:** drop your logo file into the `public/` folder (e.g.
`logo.png`) and set `logoImage: "/logo.png"` in `siteConfig` in `data.js`.
