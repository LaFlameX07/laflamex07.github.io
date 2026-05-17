# laflamex07.github.io

# laflamex07.github.io

My personal portfolio. Tracklist-style layout, cream/iceman dual theme, no framework, no build step. Content lives in a Google Sheet and the site reads from it at runtime, which means I can update any section from the Sheets app on my phone without touching code.

🔗 **Live:** [laflamex07.github.io](https://laflamex07.github.io)

---

## What it is

A single-page portfolio styled like an album. Sections are framed as tracks with runtimes, split across Side A (about + experience) and Side B (projects). The album cover is rendered in pure CSS — a radial gradient with SVG paper grain over it. Section labels use a pixel font (VT323), body uses Fraunces, metadata uses JetBrains Mono.

Includes a theme toggle (cream / iceman dark), a now-spinning widget that rotates randomly through a list of songs on each page load, and a publications/certifications/education breakdown styled like liner notes.

---

## Architecture

```
Google Sheet  ────►  Apps Script (Web App)  ────►  fetch() in browser  ────►  rendered site
   (CMS)               (returns JSON)              (vanilla JS)
```

- **Content** lives in a Google Sheet with 11 tabs (`meta`, `hero`, `about`, `experience`, `projects`, `publications`, `remix_credits`, `education`, `stack`, `dividers`, `now_playing`).
- **Apps Script** is deployed as a Web App that reads the Sheet and returns it as a single JSON blob via `doGet()`.
- **The browser** fetches that JSON at page load and renders every section dynamically with template literals — no framework, no virtual DOM, just `innerHTML`.
- **Fallback:** if the fetch fails for any reason (Sheet permissions, network, Apps Script timeout), the site falls back to a local `DATA` object hardcoded in `data.js`. So the site never goes blank.

The Sheet-driven part is the actual project. The styling was the easy part.

---

## Tech stack

| Layer | Tool |
|---|---|
| Markup & styling | Hand-written HTML & CSS (no framework, no preprocessor) |
| Typography | Fraunces (serif), JetBrains Mono (mono), VT323 (pixel) — all via Google Fonts |
| Theming | CSS custom properties + `[data-theme]` attribute, persisted in `localStorage` |
| Logic | Vanilla JavaScript (no React, no build step) |
| CMS | Google Sheets |
| API | Google Apps Script (deployed as a Web App) |
| Hosting | GitHub Pages |
| Theme art | CSS radial gradients + SVG `feTurbulence` for paper grain |

---

## File map

```
.
├── index.html        ← markup, styles, and render logic in one file
├── data.js           ← local content fallback + Sheets toggle
├── apps-script.gs    ← Google Apps Script (paste this into Extensions → Apps Script)
├── favicon.svg       ← pixel "AM" mark
└── README.md         ← you're here
```

`data.js` has two flags at the top:

```js
const USE_SHEETS = true;     // false → use local DATA object, true → fetch from Sheets
const SHEETS_URL = "...";    // Apps Script Web App URL
```

Flip `USE_SHEETS` to `false` to develop offline without the Sheet.

---

## Editing content

1. Open the Sheet (`portfolio-cms`) on phone or desktop
2. Edit the relevant tab — `projects`, `experience`, `now_playing`, etc.
3. The site picks up the change within ~30 seconds

No git commit needed for content changes. The HTML/CSS/JS only changes when the design changes.

---

## Design notes

- The album cover is pure CSS — a `radial-gradient` with an SVG noise filter layered on top via `mix-blend-mode: multiply`. No image files.
- Section headers use VT323 (pixel font) as a subtle retro detail without making the whole page look retro.
- The theme toggle swaps all colors via CSS custom property overrides under `[data-theme="ice"]`. The user's preference is saved in `localStorage` and respects `prefers-color-scheme` on first visit.
- The now-spinning widget picks a song at random from a list on every page load. It's not connected to a real Spotify API — just a curated rotation.
- Lyric dividers between sections are original lines written in the vibe of the music it references. Not copyrighted lyrics.

---

## Credits

Set in Fraunces & JetBrains Mono, pixel display in VT323. Built with hand-written HTML & CSS — content read from a Google Sheet at runtime.

© 2026 Amit Murkalmath
