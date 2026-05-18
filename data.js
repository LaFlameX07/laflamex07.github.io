/* ─────────────────────────────────────────────────────────────
   data.js — the whole portfolio's content lives here.
   Edit this file directly, OR (later) flip USE_SHEETS to true
   and point SHEETS_URL at your Apps Script web-app endpoint.
   See SETUP.md for the Sheets + Apps Script + Forms wiring.
   ───────────────────────────────────────────────────────────── */

const USE_SHEETS = true;
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwMM4ugYdYRMItWXrRCGgUmRR6Sw0pmWMR3BEIw1mbpm_IAYSCCgTmWVI5OF-UsNObC/exec";

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
  },

  about: {
    body: [
      "I work at the intersection of data engineering, ML, and automation. Day-to-day at peopleHum: keeping internal data systems alive across Webflow, Salesforce, Zoho, Metabase, and a maze of internal portals. Before that: AI SDR voice agents, lead-scoring pipelines, Sheets/Apps Script engines that quietly run marketing.",
      "I like systems that quietly do their job. The best work I've done has been the kind nobody notices — cron jobs that don't break, invoices that aggregate themselves, dashboards that load on time. On the side, three published papers on CNNs for flood mapping and Alzheimer's detection, and I led ops at CSI-VESIT through college.",
    ],
  },

  experience: [
    {
      title: "Data Engineer",
      org: "peopleHum",
      role: "Data Engineer",
      place: "Mumbai · Mar '26 — Jun '26",
      bullets: [
        "Managing internal data and application operations across Webflow, Salesforce, Zoho Voice, Salestrail, Metabase, and identifier-based user provisioning.",
        "Maintaining data warehouses, cron jobs, invoice aggregation, auth flows, and internal reporting workflows for GTM teams.",
      ],
    },
    {
      title: "Automation Engineer",
      org: "peopleHum",
      role: "Automation Engineer — Marketing",
      place: "Mumbai · Sep '25 — Mar '26",
      bullets: [
        "Built AI SDR automation for voice/email outreach, lead scoring, and LinkedIn enrichment.",
        "Designed a Fibonacci-cadence email drip engine (Apps Script + Gmail API) with open/click tracking via a 1×1 pixel web app, auto-stop on reply, KPI dashboard in-sheet.",
        "Unified GA4 + web traffic into IST-aligned Fri–Thu Sheets dashboards. Built a Playwright + Pytest synthetic-form QA suite for 20+ lead forms.",
      ],
    },
    {
      title: "Python Developer Intern",
      org: "JSW · South West Port",
      role: "Python Developer Intern",
      place: "Goa · Nov '23 — Dec '23",
      bullets: [
        "Ported and adapted the attendance dashboard built in the prior internship to a second port premises, iterating on visualizations and shift logic to match the new location's needs.",
      ],
    },
    {
      title: "Python Developer Intern",
      org: "JSW",
      role: "Python Developer Intern",
      place: "Ratnagiri · May '23 — Jul '23",
      bullets: [
        "Built two real-time Python + SQL dashboards for contractor and employee attendance at the port.",
        "Added automated shift-specific email alerts to registered contractors — reduced manual reporting effort, improved data integrity.",
      ],
    },
    {
      title: "Technical Head / Operations",
      org: "CSI-VESIT",
      role: "Technical Head → Operations Secretary",
      place: "Mumbai · Jan '23 — May '25",
      bullets: [
        "Led the technical wing as Technical Head (Sep '24 — May '25), ran ops as Operations Secretary the year prior, started as Jr. Ops Officer.",
        "Organized tech events, hackathons, and speaker sessions across the engineering student body.",
      ],
    },
  ],

  /* projects — real names (no song-style fakes).
     `title` shows on the right column (short label).
     `subtitle` is the main bold heading. */
  projects: [
    {
      title: "Apps Script · Gmail",
      subtitle: "E2E Email Drip Engine",
      stack: "Apps Script · Gmail API · Sheets · OpenRouter · HTML email",
      body: "Sheet-driven segmented drip campaign. Industry × country template routing, Fibonacci follow-up cadence (1/2/3/5/8/13/21 days), open & click tracking via a 1×1 pixel web app, auto-stop on reply or bounce, KPIs piped to a Marketing Tracker dashboard in-sheet.",
      link: "https://github.com/LaFlameX07",
    },
    {
      title: "Voice AI · QA",
      subtitle: "AI SDR Voice Agent & Form QA",
      stack: "Voice AI · Twilio · Playwright · Pytest · Python · CRM",
      body: "Outbound voice agent + Playwright/Pytest synthetic-data harness that hammers 20+ lead-gen forms across countries and form types, verifying success states via ARIA roles and logging every run to CSV.",
      link: "https://github.com/LaFlameX07",
    },
    {
      title: "n8n · AI Pipeline",
      subtitle: "AI Lead Scoring Pipeline",
      stack: "n8n · Grok / OpenRouter · Serper · Salesforce · Google Sheets",
      body: "End-to-end CRM-to-Sheets enrichment workflow. Pulls fresh leads, finds LinkedIn profile + company URL via search API, runs two complementary AI scoring passes (metric + holistic), merges branches, writes a final scored row back. Cron-scheduled, fully unattended.",
      link: "https://github.com/LaFlameX07",
    },
    {
      title: "GA4 · Sheets",
      subtitle: "GA4 → Sheets Marketing Dashboard",
      stack: "Apps Script · GA4 Data API · Google Sheets",
      body: "Pipes GA4 into a Sheet that thinks in IST Friday–Thursday weeks. YTD / MTD / WTD / Day blocks per channel, a Jan–Dec matrix, scheduled refresh triggers. Single source of truth for new vs active users.",
      link: "https://github.com/LaFlameX07",
    },
    {
      title: "Satellite ML",
      subtitle: "EmergeSense — Flood Detection",
      stack: "CNNs · Google Earth Engine · React · Flutter",
      body: "CNN-based flood and drought detection on multi-temporal Sentinel-1 SAR imagery, with React dashboards and Flutter mobile views for emergency response teams. Published research compared U-Net vs DeepLabV3 across encoder configurations.",
      link: "https://github.com/LaFlameX07",
    },
    {
      title: "Healthcare ML",
      subtitle: "CognitiveCare — Alzheimer's Detection",
      stack: "CNN · VGG16 · InceptionV3 · React · MRI imaging",
      body: "Trained CNN/VGG16/InceptionV3 models on MRI scans for Alzheimer's detection (~91% accuracy), tuned via transfer learning and AUC tracking. Deployed a React interface with severity-based recommendations and cognitive games. Published in two journals.",
      link: "https://github.com/LaFlameX07",
    },
    {
      title: "Time-series ML",
      subtitle: "Wearable Fall Detection",
      stack: "Python · Jupyter · Time-series ML",
      body: "Sem-8 Applied Data Science project — analyzed wearable sensor streams for fall-event detection. Feature engineering, model comparison, the works.",
      link: "https://github.com/LaFlameX07/WEDA-Fall-Detection-Analysis",
    },
    {
      title: "NLP",
      subtitle: "NLP Legal Document Summarization",
      stack: "Python · NLP · Jupyter",
      body: "Sem-7 NLP project — summarization and clause extraction on legal documents.",
      link: "https://github.com/LaFlameX07/LegalEase-NLP-Powered-Legal-Document-Summarization-and-Analysis",
    },
    {
      title: "Distributed Systems",
      subtitle: "Distributed Tic-Tac-Toe (gRPC)",
      stack: "Python · gRPC · Protocol Buffers",
      body: "Sem-8 Distributed Computing project — multiplayer tic-tac-toe over gRPC, with synchronized state across clients.",
      link: "https://github.com/LaFlameX07/Distributed-Multiplayer-Tic-Tac-Toe-A-gRPC-Based-Implementation",
    },
    {
      title: "Personal",
      subtitle: "Sheets-Driven Portfolio (this site)",
      stack: "HTML · CSS · Google Sheets · Apps Script",
      body: "Sheets-driven personal site I can edit from a Google Sheet on my phone — bold editorial layout, no framework, no build step. Content lives in a spreadsheet; the page reads it through an Apps Script endpoint.",
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
      title: "Cognitive Care: Detection and Management of AD",
      desc:  "CNN-based Alzheimer's detection with cognitive games and support forum. Alochana Journal, Mar 2024.",
      link:  "#",
      label: "DOI",
    },
  ],

  remix_credits: [
    {
      group: "Job Simulations",
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
      degree: "M.S. Data Science · incoming",
      place:  "Aug '26 →",
      detail: "Principles of Data Science · Principles of Machine Learning · Big Data Systems",
    },
    {
      school: "VESIT, Mumbai",
      degree: "B.E. Computer Engineering · Honors in Data Science · GPA 9.3/10",
      place:  "Nov '21 — May '25",
      detail: "",
    },
    {
      school: "DAV Public School, New Panvel",
      degree: "HSC · PCM with Computer Science · 95%",
      place:  "Jun '19 — Apr '21",
      detail: "",
    },
    {
      school: "DAV Public School, New Panvel",
      degree: "SSC · 10th Standard · 95.2%",
      place:  "Jun '17 — Apr '19",
      detail: "",
    },
  ],

  stack: [
    { k: "Languages",  v: "Python, SQL, R, C, TypeScript, JavaScript" },
    { k: "Data & ML",  v: "Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, PostgreSQL, MS SQL Server" },
    { k: "Automation", v: "n8n, Google Apps Script, Playwright, Selenium, Pytest, Twilio, OpenRouter" },
    { k: "Tools",      v: "Flask, FastAPI, Docker, Git, Grafana, Metabase, Salesforce, Zoho, Webflow, GA4, Tableau, Power BI" },
    { k: "Spoken",     v: "English (C2 · IELTS 8.5) · Hindi · Kannada · Marathi" },
  ],

  // NEW: cover (image URL) and spotify (track URL) per song
  // The site picks one at random on each load and shows the cover + Spotify link in the popup
  now_playing_rotation: [
    {
      track: "Family Business", artist: "Kanye West", album: "The College Dropout", year: "2004",
      cover: "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
      spotify: "https://open.spotify.com/track/0YGGmgEYVYrSPNGcrM5skl",
    },
    {
      track: "Off The Grid", artist: "Kanye West", album: "Donda", year: "2021",
      cover: "https://i.scdn.co/image/ab67616d0000b273e02d792cc1fb5660cfea7e5d",
      spotify: "https://open.spotify.com/track/5RnQZxe0fTH3I5kIWGtPwm",
    },
    {
      track: "Quintana Pt. 2", artist: "Travis Scott", album: "Days Before Rodeo", year: "2014",
      cover: "",
      spotify: "",
    },
    {
      track: "Skeletons", artist: "Travis Scott", album: "ASTROWORLD", year: "2018",
      cover: "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
      spotify: "https://open.spotify.com/track/35eyrbDQbpwy7d3UMfsuV4",
    },
    {
      track: "Tous les garçons et les filles", artist: "Françoise Hardy", album: "Tous les garçons…", year: "1962",
      cover: "",
      spotify: "",
    },
    {
      track: "Kletka", artist: "Molchat Doma", album: "Etazhi", year: "2018",
      cover: "",
      spotify: "",
    },
    {
      track: "Don't Cry", artist: "J Dilla", album: "Donuts", year: "2006",
      cover: "",
      spotify: "",
    },
    {
      track: "Ode To The Mets", artist: "The Strokes", album: "The New Abnormal", year: "2020",
      cover: "",
      spotify: "",
    },
    {
      track: "São Paulo", artist: "The Weeknd & Anitta", album: "Hurry Up Tomorrow", year: "2025",
      cover: "",
      spotify: "",
    },
    {
      track: "What Did I Miss?", artist: "Drake", album: "—", year: "2025",
      cover: "",
      spotify: "",
    },
  ],

  influences: "Travis · Ye · Drake · Frank · Don Toliver · Tame Impala · The Strokes · Molchat Doma · J Dilla · everything 2016",
};

async function loadData() {
  if (!USE_SHEETS) return DATA;
  try {
    const res = await fetch(SHEETS_URL + "?t=" + Date.now());
    if (!res.ok) throw new Error("Sheets fetch failed");
    return await res.json();
  } catch (e) {
    console.warn("Sheets fetch failed, using local DATA:", e);
    return DATA;
  }
}
