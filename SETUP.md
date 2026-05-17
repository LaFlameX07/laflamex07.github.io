# Portfolio Setup

Four files: `index.html`, `data.js`, `apps-script.gs`, `SETUP.md` (this one).
You can launch the site today with just the first two. Sheets and Forms come after.

---

## ⚠️ Before anything else — rotate two secrets

The Python files you shared earlier had a LinkedIn `li_at` cookie and an OpenRouter API key (`sk-or-v1-...`) hardcoded into them. Assume both are compromised — they've been exposed in a chat. Rotate them now:

1. **OpenRouter**: log in → API Keys → delete the old key → create a new one. Update any project that used it.
2. **LinkedIn `li_at` cookie**: log out of LinkedIn on every device, log back in. The old cookie becomes invalid.
3. **GitHub**: also change that password if you haven't already.

Always store keys in environment variables or Apps Script Properties, never in source files.

---

## Stage 1 — Deploy the static site (10 minutes)

The website works with just `index.html` and `data.js` side by side. Test locally first:

1. Put both files in a folder on your computer (e.g. `Desktop/portfolio/`).
2. Double-click `index.html` — it should render fully.
3. If blank: open browser DevTools (F12) → Console tab → check for errors.

### Push to GitHub (web UI, no command line)

1. Go to https://github.com/new (logged in as `LaFlameX07`).
2. Repository name: **`laflamex07.github.io`** (this exact name → free URL with no path).
3. Public · Initialize with README · Create.
4. On the repo page → **Add file → Upload files** → drag `index.html` and `data.js` → commit message `initial portfolio` → **Commit changes**.
5. **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / root → Save.
6. Wait ~1–2 minutes. Site is live at **https://laflamex07.github.io**.

To edit anything later: click the file → pencil icon → edit → commit. The site updates within a minute.

---

## Stage 2 — Sheets-driven content (~30 min one-time setup)

Goal: stop editing `data.js`, start editing a spreadsheet. Eventually, edit a form on your phone.

### 2.1 — Create the Sheet

1. Go to [sheets.new](https://sheets.new), name it `portfolio-cms`.
2. Create **eleven tabs** with these exact lowercase names:

   `meta`, `hero`, `about`, `experience`, `projects`, `publications`, `remix_credits`, `education`, `stack`, `dividers`, `now_playing`

3. For each tab, set up the first row as header (exact spelling), then add rows below.

#### `meta` — columns: `key`, `value`
```
name           Amit Murkalmath
role           Data Engineer · Automation · ML
album_year     2026
location       Mumbai → College Park
email          murkalmath.amit@gmail.com
phone          +91 869 292 2529
github         https://github.com/LaFlameX07
linkedin       https://www.linkedin.com/in/amit-murkalmath/
leetcode       https://leetcode.com/u/LaFlameX07/
spotify        https://open.spotify.com/user/3216fn2s6fnw9o4juc2hedg90
influences     Travis · Ye · Drake · Frank · Don Toliver · Tame Impala · The Strokes · J Dilla · Miyagi · 2016
```

#### `hero` — `key`, `value`
```
tagline   <your tagline>
stats     11 tracks, Recorded 2021–2026, B.E. CSE (Honors in DS) · VESIT · 9.3 GPA, IELTS 8.5 · C2
```
(stats are **comma-separated** — the script splits them.)

#### `about` — single column `paragraph`
One row per paragraph. Currently two.

#### `experience` — `track, title, runtime, org, role, place, bullets`
Each row is one job/role. **`bullets` uses ` | ` (space-pipe-space)** to separate multiple bullets in one cell.

#### `projects` — `track, title, runtime, subtitle, stack, body, link`
Each row is one project.

#### `publications` — `title, desc, link, label`
Each row is one paper.

#### `remix_credits` — `group, item`
**One row per certification.** Multiple rows can share a group name; the script collects them.
```
group          item
Job simulations    Goldman Sachs — Operations Analyst · Forage · Feb 2025
Job simulations    BCG — Data Science · Forage · Jan 2025
Job simulations    British Airways — Data Science · Forage · Jan 2025
IBM                Generative AI: Enhance your Data Analytics Career · Feb 2025
IBM                Using R with Databases · Apr 2024
Google             The Nuts and Bolts of Machine Learning · Dec 2023
...
```

#### `education` — `school, degree, place, detail`
One row per institution. `detail` can be blank.

#### `stack` — `k, v`
One row per category (Languages, Data & ML, etc).

#### `dividers` — single column `line`
One row per lyric divider. Multi-line text within one cell: use **Alt+Enter** (mobile: just press return inside the cell).

#### `now_playing` — `track, artist, album, year`
**Add as many songs as you want.** The site picks one at random on each page load. Start with these 10:
```
Family Business                       Kanye West                    The College Dropout       2004
Off The Grid                          Kanye West                    Donda                     2021
QUINTANA PT. 2                        Travis Scott                  Days Before Rodeo         2014
Skeletons                             Travis Scott                  ASTROWORLD                2018
Tous les garçons et les filles        Françoise Hardy               Tous les garçons…         1962
Kletka                                Miyagi & Andy Panda           Kletka                    2020
Don't Cry                             J Dilla                       Donuts                    2006
Ode To The Mets                       The Strokes                   The New Abnormal          2020
São Paulo                             The Weeknd & Anitta           Hurry Up Tomorrow         2025
What Did I Miss?                      Drake                         —                         2025
```

### 2.2 — Add the Apps Script

1. In the Sheet, **Extensions → Apps Script**.
2. Delete the placeholder code, paste everything from `apps-script.gs`.
3. Save (Ctrl/Cmd+S).
4. **Deploy → New deployment** → Type: **Web app** → Execute as: **Me** → Who has access: **Anyone** → Deploy.
5. Authorize when prompted.
6. **Copy the Web app URL.**

### 2.3 — Wire it up

Open `data.js` and change the top two lines:
```js
const USE_SHEETS = true;
const SHEETS_URL = "PASTE THE WEB APP URL HERE";
```
Commit + push. The site now reads from your Sheet.

If the Sheet fetch ever fails, the page falls back to the local `DATA` object. So nothing ever goes blank.

---

## Stage 3 — Edit from a Google Form

This is the part you asked for: a form on your phone that updates the site.

**Honest take first:** for sections where there are many fields per item (projects, experience), a form makes sense for *adding* a new entry but not for *editing existing ones* — you'd still go to the Sheet for edits. The sections where forms are genuinely useful:

| Section | Form-friendly? | Why |
|---|---|---|
| `now_playing` | ★★★★★ | Just 4 fields. Perfect mobile add. |
| `dividers` | ★★★★ | One field. Add a new lyric line in seconds. |
| `projects` | ★★★ | 7 fields, but adding a new project from phone is realistic. |
| `experience` | ★★ | Bullets with `|` separator is awkward on phone. Edit Sheet directly. |
| `remix_credits` | ★★★★ | Two fields (group, item). Mobile add is fast. |
| `publications` | ★★★ | Four fields. Doable from phone. |
| `meta`, `hero`, `stack` | ★ | Edit Sheet directly. Forms add overhead with no benefit. |

### Recipe: create a form for `now_playing` (the easiest)

1. Open the `now_playing` tab in your Sheet.
2. Top menu: **Tools → Create a new form**.
3. The form opens with no questions yet. Add 4 short-answer questions named exactly: `track`, `artist`, `album`, `year`.
4. **Send** (top right) → grab the link → save to phone home screen.

When you fill the form, responses land in a new tab called `Form responses 1`. **This is the problem** — your script reads from `now_playing`, not `Form responses 1`.

**The fix:** in the script's `rowsSheet` reader, point it at the form responses tab instead. Open `apps-script.gs` and change one line. Find:

```js
now_playing_rotation: rowsSheet(ss, "now_playing"),
```

Change to:

```js
now_playing_rotation: rowsSheet(ss, "Form responses 1"),
```

Save. Redeploy: **Deploy → Manage deployments → pencil icon → Version: New version → Deploy.** Done.

Now: every form submission becomes a new song the site rotates through.

### Recipe: form for `remix_credits` (certifications)

Same flow — create a form with two questions (`group`, `item`), point the script at its responses tab. Each submission adds a certification.

### Recipe: form for `dividers`

One question (`line`), one short-answer. Point script at its responses tab.

### What about `projects` and `experience`?

For these, the cleanest approach is to **leave them in their normal tabs and just edit those tabs from the Google Sheets mobile app**. The form approach gets clunky once you have more than ~4 fields. The mobile Sheets app lets you tap a cell and type — that's the actual phone-editing experience.

---

## Stage 4 — When in doubt

- **Site went blank?** The `data.js` fallback still works. Check the browser console (F12).
- **Sheets fetch is slow first time?** Apps Script web apps have a 1–3s cold start. Subsequent loads are instant. Normal.
- **Want to test changes before they go live?** Edit `data.js` directly with `USE_SHEETS = false`, refresh locally. Once it looks right, copy values into the Sheet.

---

## File map

```
.
├── index.html        ← the website
├── data.js           ← content + the Sheets toggle (USE_SHEETS, SHEETS_URL)
├── apps-script.gs    ← paste into Apps Script editor
└── SETUP.md          ← this file
```

That's the whole stack.
