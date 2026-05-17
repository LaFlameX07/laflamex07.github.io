/**
 * apps-script.gs
 * ─────────────────────────────────────────────────────────────
 * Google Apps Script that reads your portfolio Sheet and returns
 * JSON for the website. Deploy as a Web App and paste the URL
 * into data.js → SHEETS_URL.
 *
 * SHEETS YOU NEED (one tab per dataset, exact lowercase names):
 *
 *   meta              (key, value)
 *   hero              (key, value)         ← tagline; stats comma-sep
 *   about             (paragraph)          ← one row per paragraph
 *   experience        (track, title, runtime, org, role, place, bullets)
 *   projects          (track, title, runtime, subtitle, stack, body, link)
 *   publications      (title, desc, link, label)
 *   remix_credits     (group, item)        ← repeat group per row
 *   education         (school, degree, place, detail)
 *   stack             (k, v)
 *   dividers          (line)
 *   now_playing       (track, artist, album, year)   ← multi-row, one per song
 *
 * First row of every tab is the header. Script reads the rest.
 * Bullets column in experience uses " | " to separate bullets.
 * ───────────────────────────────────────────────────────────── */

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const metaRaw = kvSheet(ss, "meta");
    const data = {
      meta: {
        name:       metaRaw.name,
        role:       metaRaw.role,
        album_year: metaRaw.album_year,
        location:   metaRaw.location,
        email:      metaRaw.email,
        phone:      metaRaw.phone,
        socials: {
          github:   metaRaw.github,
          linkedin: metaRaw.linkedin,
          leetcode: metaRaw.leetcode,
          spotify:  metaRaw.spotify,
        },
      },
      hero:          heroSheet(ss),
      about:         { body: colSheet(ss, "about", "paragraph") },
      experience:    experienceSheet(ss),
      projects:      projectsSheet(ss),
      publications:  rowsSheet(ss, "publications"),
      remix_credits: remixSheet(ss),
      education:     rowsSheet(ss, "education"),
      stack:         rowsSheet(ss, "stack"),
      dividers:      colSheet(ss, "dividers", "line"),
      now_playing_rotation: rowsSheet(ss, "now_playing"),
      side_a_intro:  "Side A — the artist",
      side_b_intro:  "Side B — the work",
      influences:    metaRaw.influences || "",
    };

    return ContentService
      .createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/* ─── helpers ─── */

function kvSheet(ss, name) {
  const sh = ss.getSheetByName(name);
  if (!sh) return {};
  const rows = sh.getDataRange().getValues().slice(1);
  const obj = {};
  rows.forEach(r => { if (r[0]) obj[String(r[0]).trim()] = r[1]; });
  return obj;
}

function colSheet(ss, name, colName) {
  const sh = ss.getSheetByName(name);
  if (!sh) return [];
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const idx = headers.indexOf(colName);
  if (idx === -1) return [];
  return values.slice(1).map(r => r[idx]).filter(v => v !== "" && v != null);
}

function rowsSheet(ss, name) {
  const sh = ss.getSheetByName(name);
  if (!sh) return [];
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  return values.slice(1)
    .filter(r => r.some(c => c !== "" && c != null))
    .map(r => {
      const o = {};
      headers.forEach((h, i) => { o[h] = r[i]; });
      return o;
    });
}

function heroSheet(ss) {
  const kv = kvSheet(ss, "hero");
  return {
    tagline: kv.tagline || "",
    stats: String(kv.stats || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean),
  };
}

function experienceSheet(ss) {
  return rowsSheet(ss, "experience").map(r => ({
    track:   r.track,
    title:   r.title,
    runtime: r.runtime,
    org:     r.org,
    role:    r.role,
    place:   r.place,
    bullets: String(r.bullets || "").split(" | ").filter(Boolean),
  }));
}

function projectsSheet(ss) {
  return rowsSheet(ss, "projects").map(r => ({
    track:    r.track,
    title:    r.title,
    runtime:  r.runtime,
    subtitle: r.subtitle,
    stack:    r.stack,
    body:     r.body,
    link:     r.link,
  }));
}

/* remix_credits: each row is (group, item).
   Group rows together by group name preserving order. */
function remixSheet(ss) {
  const rows = rowsSheet(ss, "remix_credits");
  const order = [];
  const map = {};
  rows.forEach(r => {
    const g = String(r.group || "").trim();
    if (!g) return;
    if (!map[g]) { map[g] = []; order.push(g); }
    map[g].push(r.item);
  });
  return order.map(g => ({ group: g, items: map[g] }));
}
