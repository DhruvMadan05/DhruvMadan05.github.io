/* ============================================================
   YOUR CONTENT LIVES HERE — this is the only file you need to
   edit to add projects, work experience, or education.

   HOW TO ADD A PROJECT:
   Copy one of the blocks in PROJECTS below (from `{` to `},`),
   paste it where you want it to appear, and fill in your info.
   Cards appear on the Projects page in the order listed here.
   The first 3 are also featured on the Home page.

   HOW TO ADD A TIMELINE ENTRY:
   Copy a block in TIMELINE below and fill it in. Entries are
   automatically sorted newest-first. Work entries also appear
   on the Resume page, so you only add a job once.
   ============================================================ */

const SITE = {
  name: "Dhruv Madan",                       // your name (appears in nav + footer)
  role: "Robotics Engineer",                 // short label under your name
  location: "Boston, MA",
  tagline: "Hi, I'm Dhruv. I build cool things with robotics and software.",
  intro: "I'm a Robotics engineer who wants to make the world a better place.",
  email: "Dmadan@wpi.edu",
  resumeFile: "resume.pdf",                  // put your PDF in the site folder with this name
  links: [
    { label: "GitHub",   url: "https://github.com/dhruvmadan05" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ],
};

/* ------------------------- PROJECTS -------------------------
   Fields:
   title       short project name
   subtitle    one-line summary shown on the card
   year        when you built it (shows on card + detail)
   tags        list of technologies / skills
   accent      card color: "teal" | "purple" | "coral" | "blue" | "amber"
   icon        any Tabler icon name from https://tabler.io/icons (e.g. "chart-bar")
   description full paragraph(s) shown when the card is expanded
   highlights  bullet points shown in the expanded view (optional, can be [])
   links       buttons in the expanded view (optional, can be [])
   images      photo filenames inside the images/ folder (optional, can be [])
--------------------------------------------------------------- */

const PROJECTS = [
  {
    title: "Data dashboard",
    subtitle: "Real-time analytics dashboard for tracking team metrics.",
    year: "2025",
    tags: ["Python", "React", "PostgreSQL"],
    accent: "teal",
    icon: "chart-bar",
    description:
      "Replace this with the full story of your project: the problem it solves, how you built it, and what you learned. This text appears when someone clicks the card. You can write multiple sentences — it will wrap naturally.",
    highlights: [
      "Handles 10k events per minute with live updates",
      "Cut weekly reporting time from hours to minutes",
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/yourusername/project" },
      { label: "Live demo", url: "https://example.com" },
    ],
    images: ["sample-project.svg"],
  },
  {
    title: "Mobile app",
    subtitle: "An iOS app for tracking hiking trails offline.",
    year: "2024",
    tags: ["Swift", "MapKit"],
    accent: "purple",
    icon: "device-mobile",
    description:
      "Another placeholder project. Duplicate this block to add more — the cards, the expanded view, and the home-page features all update automatically.",
    highlights: [],
    links: [],
    images: [],
  },
  {
    title: "ML pipeline",
    subtitle: "Training pipeline for image classification experiments.",
    year: "2023",
    tags: ["PyTorch", "Docker"],
    accent: "coral",
    icon: "robot",
    description:
      "A third placeholder so the grid looks full. Delete any of these once you've added your real projects.",
    highlights: [],
    links: [],
    images: [],
  },
];

/* ------------------------- TIMELINE -------------------------
   Fields:
   type        "work" or "education" (controls the badge + filter)
   title       your role or degree
   org         company or school
   start       year (number) — used for sorting
   end         year (number) or "Present"
   description one or two sentences (optional, can be "")

   Work entries automatically appear on the Resume page too.
--------------------------------------------------------------- */

const TIMELINE = [
  {
    type: "work",
    title: "Senior software engineer",
    org: "Acme Co",
    start: 2024,
    end: "Present",
    description: "Lead engineer on the data platform team. Replace with a sentence about what you do.",
  },
  {
    type: "work",
    title: "Software engineer",
    org: "Startup Inc",
    start: 2021,
    end: 2024,
    description: "Built and shipped the company's first mobile product.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    org: "MIT",
    start: 2017,
    end: 2021,
    description: "Focus on systems and machine learning.",
  },
];

/* ------------------------- SKILLS ---------------------------
   Shown on the Resume page, grouped however you like.
--------------------------------------------------------------- */

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "Swift", "SQL"] },
  { group: "Tools", items: ["React", "PyTorch", "Docker", "PostgreSQL", "Git"] },
];
