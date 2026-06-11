# Your portfolio website

A clean, minimal, five-page portfolio. Everything you'll ever need to edit
lives in **one file: `js/data.js`**.

## Quick start

Open `index.html` in any browser. That's it — no build step, no install.
(For the cleanest experience, serve it locally: `python3 -m http.server`
inside this folder, then visit http://localhost:8000.)

## Adding a new project

1. Open `js/data.js`
2. Find the `PROJECTS` list
3. Copy any existing block from `{` to `},` and paste it where you want
   the card to appear
4. Fill in your title, subtitle, tags, description, highlights, and links
5. Drop any photos into the `images/` folder and list their filenames in
   the `images` field, e.g. `images: ["myapp-1.jpg", "myapp-2.png"]`

The card, its expandable detail view, and the home-page "Featured projects"
section (first 3 in the list) all update automatically.

Card colors: set `accent` to `"teal"`, `"purple"`, `"coral"`, `"blue"`, or
`"amber"`. Card icons: set `icon` to any name from https://tabler.io/icons
(e.g. `"rocket"`, `"camera"`, `"code"`).

## Adding work experience or education

1. Open `js/data.js`
2. Find the `TIMELINE` list
3. Copy a block, set `type` to `"work"` or `"education"`, fill in the rest

Entries are sorted newest-first automatically. Work entries also appear on
the Resume page — you only ever add a job once.

## Other things to personalize

- **Your name, tagline, intro, email, social links** — the `SITE` object at
  the top of `js/data.js`
- **Skills on the resume page** — the `SKILLS` list in `js/data.js`
- **About page text and photo** — edit `about.html` directly (the comments
  in the file show where); put your photo in `images/`
- **Downloadable resume** — drop your PDF into this folder named
  `resume.pdf` (or change `resumeFile` in `js/data.js`)
- **Colors and fonts** — the variables at the top of `css/style.css`

## Publishing for free

- **GitHub Pages**: push this folder to a repo, then Settings → Pages →
  deploy from the main branch
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop this folder into
  their dashboard

No server or database needed — it's a fully static site.
