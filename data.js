/* ─────────────────────────────────────────────────────────────
   data.js — the whole portfolio's content lives here.
   Edit this file directly, OR (later) flip USE_SHEETS to true
   and point SHEETS_URL at your Apps Script web-app endpoint.
   See SETUP.md for the Sheets + Apps Script + Forms wiring.
   ───────────────────────────────────────────────────────────── */

const USE_SHEETS = false;
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbx7_nrbDON-jNJIh3bO2QZMP7IqYNMkqQtOBfI5w5BtObHUR0HHwK0L9IhWWPxFMS5g/exec";

const DATA = {
  meta: {
    name: "Amit Murkalmath",
    role: "Data Engineer · Automation · ML",
    album_year: "2026",
    location: "Mumbai → College Park",
    email: "murkalmath.amit@gmail.com",
    phone: "+91 869 292 2529",
    socials: {
      github:   "https://github.com/LaFlameX07",
      linkedin: "https://www.linkedin.com/in/amit-murkalmath/",
      leetcode: "https://leetcode.com/u/LaFlameX07/",
      spotify:  "https://open.spotify.com/user/3216fn2s6fnw9o4juc2hedg90?si=351159cbdbb84e31",
    },
  },

  hero: {
    tagline: "Data engineer who ships. Currently running internal data ops at peopleHum — Salesforce, Metabase, cron jobs, AI SDR pipelines, GA4 dashboards. Three published papers in ML/healthcare. Headed to UMD for an MS in Data Science this fall.",
    stats: [
      "11 tracks",
      "Recorded 2021–2026",
      "B.E. CSE (Honors in DS) · VESIT · 9.3 GPA",
      "IELTS 8.5 · C2",
    ],
  },

  side_a_intro: "Side A — the artist",

  about: {
    track: "01",
    title: "INTRO",
    runtime: "0:58",
    body: [
      "I work at the intersection of data engineering, ML, and automation. Day-to-day at peopleHum: keeping internal data systems alive across Webflow, Salesforce, Zoho, Metabase, and a maze of internal portals. Before that: AI SDR voice agents, lead-scoring pipelines, Sheets/Apps Script engines that quietly run marketing.",
      "I like systems that quietly do their job. The best work I've done has been the kind nobody notices — cron jobs that don't break, invoices that aggregate themselves, dashboards that load on time. On the side, three published papers on CNNs for flood mapping and Alzheimer's detection, and I led ops at CSI-VESIT through college.",
    ],
  },

  experience: [
    {
      track: "02",
      title: "DATA OPS",
      runtime: "4:31",
      org: "peopleHum",
      role: "Data Engineer",
      place: "Mumbai · Mar '26 — Jun '26",
      bullets: [
        "Managing internal data and application operations across Webflow, internal finance and sales portals, onboarding systems, Salesforce, Zoho Voice, Salestrail, Metabase, and identifier-based user provisioning.",
        "Maintaining data warehouses, cron jobs, invoice aggregation, auth flows, and internal reporting workflows for GTM teams.",
      ],
    },
    {
      track: "03",
      title: "AUTOMATIONS",
      runtime: "3:48",
      org: "peopleHum",
      role: "Automation Engineer — Marketing",
      place: "Mumbai · Sep '25 — Mar '26",
      bullets: [
        "Built AI SDR automation for voice/email outreach, lead scoring, and LinkedIn enrichment.",
        "Engineered a multi-stage AI lead-scoring pipeline (n8n + Grok + Google Sheets) — pulled CRM leads, found LinkedIn URLs via search API, scored profiles 0–30 on seniority and fit, wrote enriched rows back to Sheets.",
        "Designed a Fibonacci-cadence email drip engine (Apps Script + Gmail API) — industry/country segmentation, open/click tracking via a 1×1 pixel web app, auto-stop on reply, KPI dashboard in-sheet.",
        "Unified GA4 + web traffic into IST-aligned Fri–Thu Sheets dashboards with YTD/MTD/WTD/Day breakdowns by channel.",
        "Built a Playwright + Pytest synthetic-form QA suite — automated regression across 20+ lead forms with CSV logging.",
      ],
    },
    {
      track: "04",
      title: "DASHBOARDS",
      runtime: "2:15",
      org: "JSW (South West Port)",
      role: "Python Developer Intern",
      place: "Goa · Nov '23 — Dec '23",
      bullets: [
        "Ported and adapted the attendance dashboard built in the prior internship to a second port premises, iterating on visualizations and shift logic to match the new location's needs.",
      ],
    },
    {
      track: "05",
      title: "EARLY WORK",
      runtime: "2:02",
      org: "JSW",
      role: "Python Developer Intern",
      place: "Ratnagiri · May '23 — Jul '23",
      bullets: [
        "Built two real-time Python + SQL dashboards for contractor and employee attendance at the port.",
        "Added automated shift-specific email alerts to registered contractors — reduced manual reporting effort, improved data integrity.",
      ],
    },
    {
      track: "06",
      title: "CSI-VESIT",
      runtime: "2:29",
      org: "Computer Society of India · VESIT chapter",
      role: "Technical Head → Operations Secretary → Jr. Ops Officer",
      place: "Mumbai · Jan '23 — May '25",
      bullets: [
        "Led the technical wing as Technical Head (Sep '24 — May '25), ran ops as Operations Secretary the year prior, started as Jr. Ops Officer.",
        "Organized tech events, hackathons, and speaker sessions across the engineering student body.",
      ],
    },
  ],

  side_b_intro: "Side B — the work",

  projects: [
    {
      track: "07",
      title: "AUTOPILOT",
      runtime: "5:12",
      subtitle: "E2E Email Drip Engine — Apps Script + Gmail",
      stack: "Google Apps Script · Gmail API · Sheets · OpenRouter · HTML email",
      body: "Sheet-driven segmented drip campaign. Industry × country template routing, Fibonacci follow-up cadence (1/2/3/5/8/13/21 days), open & click tracking via a 1×1 pixel web app, auto-stop on reply or bounce, KPIs piped to a Marketing Tracker dashboard in-sheet.",
      link: "https://github.com/LaFlameX07",
    },
    {
      track: "08",
      title: "RINGER",
      runtime: "4:08",
      subtitle: "AI SDR Voice Agent + Synthetic Form QA",
      stack: "Voice AI · Twilio · Playwright · Pytest · Python · CRM",
      body: "Outbound voice agent + a Playwright/Pytest synthetic-data harness that hammers 20+ lead-gen forms across countries and form types, verifying success states via ARIA roles and logging every run to CSV.",
      link: "https://github.com/LaFlameX07",
    },
    {
      track: "09",
      title: "LEAD ALCHEMY",
      runtime: "3:44",
      subtitle: "AI Lead Scoring Pipeline — n8n + Grok",
      stack: "n8n · Grok / OpenRouter · Serper · Salesforce · Google Sheets",
      body: "End-to-end CRM-to-Sheets enrichment workflow. Pulls fresh leads, finds LinkedIn profile + company URL via search API, runs two complementary AI scoring passes (metric + holistic), merges branches, writes a final scored row back. Cron-scheduled, fully unattended.",
      link: "https://github.com/LaFlameX07",
    },
    {
      track: "10",
      title: "GA4 FRIDAYS",
      runtime: "3:01",
      subtitle: "GA4 → Sheets Marketing Dashboard",
      stack: "Apps Script · GA4 Data API · Google Sheets",
      body: "Pipes GA4 into a Sheet that thinks in IST Friday–Thursday weeks. YTD / MTD / WTD / Day blocks per channel, a Jan–Dec matrix, scheduled refresh triggers. Single source of truth for new vs active users.",
      link: "https://github.com/LaFlameX07",
    },
    {
      track: "11",
      title: "FROM ABOVE",
      runtime: "3:55",
      subtitle: "EmergeSense — Satellite Flood/Drought Detection",
      stack: "CNNs · Google Earth Engine · React · Flutter",
      body: "CNN-based flood and drought detection on multi-temporal Sentinel-1 SAR imagery, with React dashboards and Flutter mobile views for emergency response teams. Published research compared U-Net vs DeepLabV3 across encoder configurations.",
      link: "https://github.com/LaFlameX07",
    },
    {
      track: "12",
      title: "BLUE PRINTS",
      runtime: "4:22",
      subtitle: "CognitiveCare — Alzheimer's Detection",
      stack: "CNN · VGG16 · InceptionV3 · React · MRI imaging",
      body: "Trained CNN/VGG16/InceptionV3 models on MRI scans for Alzheimer's detection (~91% accuracy), tuned via transfer learning and AUC tracking. Deployed a React interface with severity-based recommendations and cognitive games. Published in two journals.",
      link: "https://github.com/LaFlameX07",
    },
    {
      track: "13",
      title: "WEDA",
      runtime: "2:48",
      subtitle: "Wearable Fall Detection Analysis",
      stack: "Python · Jupyter · Time-series ML",
      body: "Sem-8 Applied Data Science project — analyzed wearable sensor streams for fall-event detection. Feature engineering, model comparison, the works.",
      link: "https://github.com/LaFlameX07/WEDA-Fall-Detection-Analysis",
    },
    {
      track: "14",
      title: "LEGALEASE",
      runtime: "2:33",
      subtitle: "NLP Legal Document Summarization",
      stack: "Python · NLP · Jupyter",
      body: "Sem-7 NLP project — summarization and clause extraction on legal documents.",
      link: "https://github.com/LaFlameX07/LegalEase-NLP-Powered-Legal-Document-Summarization-and-Analysis",
    },
    {
      track: "15",
      title: "DISTRIBUTED TIC-TAC-TOE",
      runtime: "1:54",
      subtitle: "gRPC multiplayer over the network",
      stack: "Python · gRPC · Protocol Buffers",
      body: "Sem-8 Distributed Computing project — multiplayer tic-tac-toe over gRPC, with synchronized state across clients.",
      link: "https://github.com/LaFlameX07/Distributed-Multiplayer-Tic-Tac-Toe-A-gRPC-Based-Implementation",
    },
    {
      track: "16",
      title: "META",
      runtime: "1:33",
      subtitle: "This portfolio",
      stack: "HTML · CSS · Google Sheets · Apps Script",
      body: "Sheets-driven personal site I can edit from a Google Form on my phone — tracklist layout, no framework, no build step. Content lives in a spreadsheet; the page reads it through an Apps Script endpoint.",
      link: "https://github.com/LaFlameX07",
    },
  ],

  publications: [
    {
      title: "Flood Detection Utilizing Sentinel-1 SAR Data",
      desc:  "U-Net vs. DeepLabV3 across ResNet/MobileNet/DenseNet encoders for SAR-based flood mapping. Advances in Nonlinear Variational Inequalities, Dec 2024.",
      link:  "#",
      label: "DOI",
    },
    {
      title: "Innovative Approach for Alzheimer's Disease Detection",
      desc:  "Transfer learning with InceptionV3 + hyperparameter tuning for MRI-based AD detection. Frontiers in Health Informatics, Jun 2024.",
      link:  "#",
      label: "PDF",
    },
    {
      title: "Cognitive Care: Comprehensive Detection and Management of AD",
      desc:  "CNN-based Alzheimer's detection with cognitive games and support forum. Alochana Journal, Mar 2024.",
      link:  "#",
      label: "DOI",
    },
  ],

  // Remix credits — the section name you asked for.
  // Grouped, not music-coded, so it doesn't get tired.
  remix_credits: [
    {
      group: "Job simulations",
      items: [
        "Goldman Sachs — Operations Analyst · Forage · Feb 2025",
        "BCG — Data Science · Forage · Jan 2025",
        "British Airways — Data Science · Forage · Jan 2025",
      ],
    },
    {
      group: "IBM",
      items: [
        "Generative AI: Enhance your Data Analytics Career · Feb 2025",
        "Using R with Databases · Apr 2024",
      ],
    },
    {
      group: "Google",
      items: [
        "The Nuts and Bolts of Machine Learning · Dec 2023",
        "Foundations of Data Science · Dec 2023",
        "Data Analysis with R Programming · Dec 2023",
        "Intro to Augmented Reality & ARCore · Dec 2022",
      ],
    },
    {
      group: "IIT NPTEL",
      items: [
        "Python for Data Science · IIT Madras · Oct 2023",
        "Ethical Hacking · IIT Kharagpur · Apr 2023",
        "Introduction to Programming in C · IIT Kanpur · Apr 2022",
      ],
    },
    {
      group: "Cisco",
      items: [
        "Data Analytics Essentials · Dec 2023",
        "Networking Basics · Oct 2023",
      ],
    },
    {
      group: "Other",
      items: [
        "Data Science & Analytics · HP · Dec 2023",
        "Build a Full Website using WordPress · Coursera · Dec 2022",
      ],
    },
  ],

  education: [
    {
      school: "University of Maryland, College Park",
      degree: "M.S. Data Science",
      place:  "Aug '26 → · incoming",
      detail: "Principles of Data Science · Principles of Machine Learning · Big Data Systems",
    },
    {
      school: "VESIT — Vivekanand Education Society's Institute of Technology, Mumbai",
      degree: "B.E. Computer Engineering · Honors in Data Science",
      place:  "Nov '21 — May '25 · CGPA 9.3 / Honors 9.33",
      detail: "Machine Learning · Algorithms & DS · DBMS · Big Data Analytics · NLP · Distributed Computing · Cloud · Cryptography",
    },
    {
      school: "DAV Public School, New Panvel",
      degree: "HSC · PCM with Computer Science",
      place:  "Jun '19 — Apr '21 · 95%",
      detail: "",
    },
    {
      school: "DAV Public School, New Panvel",
      degree: "SSC · 10th Standard",
      place:  "Jun '17 — Apr '19 · 95.2%",
      detail: "",
    },
  ],

  stack: [
    { k: "Languages",  v: "Python, SQL, R, C, TypeScript, JavaScript" },
    { k: "Data & ML",  v: "Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, PostgreSQL, MS SQL Server" },
    { k: "Automation", v: "n8n, Google Apps Script, Playwright, Selenium, Pytest, Twilio, OpenRouter" },
    { k: "Tools",      v: "Flask, FastAPI, Docker, Git, Grafana, Metabase, Salesforce, Zoho, Webflow, GA4, Tableau, Power BI" },
    { k: "Spoken",     v: "English (C2 · IELTS 8.5) · Hindi · Kannada · Marathi · elementary Russian & Sanskrit" },
  ],

  dividers: [
    "still up at 3am writing scripts that\nnobody asked for but everybody needs",
    "panvel to college park\nsame laptop, different time zone",
    "if it works in prod ship it\nif it works locally pray harder",
  ],

  // ROTATING now-playing — the page picks a different track on each load
  now_playing_rotation: [
    { track: "Family Business",                    artist: "Kanye West",                  album: "The College Dropout",       year: "2004" },
    { track: "Off The Grid",                       artist: "Kanye West",                  album: "Donda",                     year: "2021" },
    { track: "QUINTANA PT. 2",                     artist: "Travis Scott",                album: "Days Before Rodeo",         year: "2014" },
    { track: "Skeletons",                          artist: "Travis Scott",                album: "ASTROWORLD",                year: "2018" },
    { track: "Tous les garçons et les filles",     artist: "Françoise Hardy",             album: "Tous les garçons…",         year: "1962" },
    { track: "Kletka",                             artist: "Molchat Doma",                album: "Etazhi",                    year: "2018" },
    { track: "Don't Cry",                          artist: "J Dilla",                     album: "Donuts",                    year: "2006" },
    { track: "Ode To The Mets",                    artist: "The Strokes",                 album: "The New Abnormal",          year: "2020" },
    { track: "São Paulo",                          artist: "The Weeknd & Anitta",         album: "Hurry Up Tomorrow",         year: "2025" },
    { track: "What Did I Miss?",                   artist: "Drake",                       album: "—",                         year: "2025" },
  ],

  influences: "Travis · Ye · Drake · Frank · Don Toliver · Tame Impala · The Strokes · Molchat Doma · J Dilla · Bay Area classics · everything 2016",
};

/* ─── Loader: local DATA, or fetch from Apps Script ─── */
async function loadData() {
  if (!USE_SHEETS) return DATA;
  try {
    const res = await fetch(SHEETS_URL);
    if (!res.ok) throw new Error("Sheets fetch failed");
    return await res.json();
  } catch (e) {
    console.warn("Sheets fetch failed, using local DATA:", e);
    return DATA;
  }
}
