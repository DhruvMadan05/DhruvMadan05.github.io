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
  intro: "I'm a Robotics engineer who wants to make the world a better place through thoughtful technology.",
  email: "Dmadan@wpi.edu",
  resumeFile: "images/Dhruv_Madan_Resume.pdf",                  // put your PDF in the site folder with this name
  photo: "images/IMG_8003-2.jpg",                                 // optional: path to your headshot, e.g. "images/me.jpg"
  showResumeDetails: false,                  // set true to show work/education/skills above the PDF
  links: [
    { label: "GitHub",   url: "https://github.com/DhruvMadan05" },
    { label: "LinkedIn", url: "https://linkedin.com/in/madan-dhruv/" },
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
    title: "WIP",
    subtitle: "WIP",
    year: "2025",
    tags: ["Python"],
    accent: "teal",
    icon: "chart-bar",
    description:
      "WIP",
    highlights: [
      "WIP",
      "WIP",
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/yourusername/project" },
      { label: "Live demo", url: "https://example.com" },
    ],
    images: ["sample-project.svg"],
  }
];

/* ------------------------- TIMELINE -------------------------
   Fields:
   type        "work" or "education" (controls the badge + filter)
   title       your role or degree
   org         company or school
   start       year (number) — used for sorting
   end         year (number) or "Present"
   startMonth  optional 3-letter month abbreviation, e.g. "May"
   endMonth    optional 3-letter month abbreviation, e.g. "Aug"
   description one or two sentences (optional, can be "")

   Work entries automatically appear on the Resume page too.
--------------------------------------------------------------- */

const TIMELINE = [
  {
    type: "work",
    title: "Teaching Assistant",
    org: "Worceter Polytechnic Institute (WPI) - RBE 2020: Embedded Systems for Robotics",
    start: 2025,
    end: "Present",
    startMonth: "Jan",
    endMonth: "Present",
    description: "",
  },
  {
    type: "work",
    title: "Robot Technician",
    org: "Starship Technologies",
    start: 2024,
    end: 2026,
    startMonth: "Feb",
    endMonth: "Jun",
    description: "",
  },
  {
    type: "work",
    title: "Systems Integration Intern",
    org: "Johnson & Johnson MedTech",
    start: 2026,
    end: "Present",
    description: "",
  },
  {
    type: "work",
    title: "Software Engineer",
    org: "Brooks Automation",
    start: 2025,
    end: 2026,
    startMonth: "May",
    endMonth: "Feb",
    description: "",
  },
  {
    type: "work",
    title: "Process Engineering Intern",
    org: "Titleist Golf",
    start: 2024,
    end: 2024,
    startMonth: "May",
    endMonth: "Aug",
    description: "",
  },
  {
    type: "education",
    title: "B.S. Robotics Engineering",
    org: "Worcester Polytechnic Institute (WPI)",
    start: 2023,
    end: 2027,
    description: "Focus on robotics and automation.",
  },
  {
    type: "education",
    title: "M.S. Robotics Engineering",
    org: "Worcester Polytechnic Institute (WPI)",
    start: 2027,
    end: 2027,
    description: "Focus on robotics and automation.",
  },
  {
    type: "education",
    title: "Minor in Computer Science",
    org: "Worcester Polytechnic Institute (WPI)",
    start: 2023,
    end: 2027,
    description: "Focus on robotics and automation.",
  },
];

/* ------------------------- ABOUT ----------------------------
   Each string becomes one paragraph on the About page.
   Use \n\n for a blank line between sentences if you want more
   breathing room, or just add another item to the array.
--------------------------------------------------------------- */

const ABOUT = [
  "Replace this with your story. Two or three short paragraphs work well: where you're from, what drew you to your field, and what kind of problems you love working on.",
  "A second paragraph can cover what you're doing now — your role, your team, or what you're studying — and what you're hoping to do next.",
  "End with something human: what you do outside work, a hobby, or what someone should reach out to you about.",
];

/* ------------------------- SKILLS ---------------------------
   Shown on the Resume page, grouped however you like.
--------------------------------------------------------------- */

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { group: "Tools", items: ["React", "PyTorch", "Docker", "PostgreSQL", "Git"] },
];
