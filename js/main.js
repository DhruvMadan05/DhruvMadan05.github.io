/* Shared rendering logic. You should not need to edit this file —
   all content comes from js/data.js. */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ---------- Shared header / footer ---------- */
  const PAGES = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["resume.html", "Resume"],
    ["timeline.html", "Timeline"],
    ["projects.html", "Projects"],
  ];

  function currentPage() {
    const file = location.pathname.split("/").pop() || "index.html";
    return file;
  }

  function renderChrome() {
    const header = $("#site-header");
    if (header) {
      const cur = currentPage();
      header.innerHTML =
        '<div class="wrap nav">' +
        '<a class="nav-name" href="index.html">' + esc(SITE.name) + "</a>" +
        '<nav class="nav-links" aria-label="Main">' +
        PAGES.map(([href, label]) =>
          '<a href="' + href + '"' + (href === cur ? ' aria-current="page"' : "") + ">" + label + "</a>"
        ).join("") +
        "</nav></div>";
    }
    const footer = $("#site-footer");
    if (footer) {
      footer.innerHTML =
        '<div class="wrap footer-inner">' +
        "<p>© " + new Date().getFullYear() + " " + esc(SITE.name) + "</p>" +
        '<div class="footer-links">' +
        '<a href="mailto:' + esc(SITE.email) + '">Email</a>' +
        SITE.links.map(l => '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>").join("") +
        "</div></div>";
    }
    document.querySelectorAll("[data-site-name]").forEach(el => { el.textContent = SITE.name; });
    document.querySelectorAll("[data-site-role]").forEach(el => { el.textContent = SITE.role + " · " + SITE.location; });
    document.querySelectorAll("[data-site-tagline]").forEach(el => { el.textContent = SITE.tagline; });
    document.querySelectorAll("[data-site-intro]").forEach(el => { el.textContent = SITE.intro; });
    document.querySelectorAll("[data-resume-link]").forEach(el => { el.setAttribute("href", SITE.resumeFile); });
    const initials = SITE.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
    document.querySelectorAll("[data-initials]").forEach(el => { el.textContent = initials; });
  }

  /* ---------- Project cards + expandable detail ---------- */
  const ACCENTS = { teal: "acc-teal", purple: "acc-purple", coral: "acc-coral", blue: "acc-blue", amber: "acc-amber" };

  function cardHTML(p, i) {
    const acc = ACCENTS[p.accent] || "acc-teal";
    return (
      '<button class="project-card" data-project="' + i + '" aria-haspopup="dialog">' +
      '<div class="card-thumb ' + acc + '"><i class="ti ti-' + esc(p.icon || "folder") + '" aria-hidden="true"></i></div>' +
      '<div class="card-title">' + esc(p.title) + "</div>" +
      '<div class="card-sub">' + esc(p.subtitle) + "</div>" +
      '<div class="tag-row">' + (p.tags || []).map(t => '<span class="tag">' + esc(t) + "</span>").join("") + "</div>" +
      "</button>"
    );
  }

  function openProject(p) {
    const dialog = $("#project-dialog");
    if (!dialog) return;
    const inner = $(".dialog-inner", dialog);
    inner.innerHTML =
      '<div class="dialog-top"><div>' +
      '<h2 style="margin-bottom:2px">' + esc(p.title) + "</h2>" +
      '<div class="dialog-year">' + esc(p.year || "") + "</div>" +
      '</div><button class="dialog-close" aria-label="Close">✕</button></div>' +
      '<div class="tag-row">' + (p.tags || []).map(t => '<span class="tag">' + esc(t) + "</span>").join("") + "</div>" +
      '<p class="dialog-desc">' + esc(p.description || p.subtitle) + "</p>" +
      ((p.highlights && p.highlights.length)
        ? '<ul class="dialog-highlights">' + p.highlights.map(h => "<li>" + esc(h) + "</li>").join("") + "</ul>"
        : "") +
      ((p.images && p.images.length)
        ? '<div class="dialog-gallery">' + p.images.map(src =>
            '<img src="images/' + esc(src) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">'
          ).join("") + "</div>"
        : "") +
      ((p.links && p.links.length)
        ? '<div class="btn-row">' + p.links.map(l =>
            '<a class="btn btn-ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>"
          ).join("") + "</div>"
        : "");
    $(".dialog-close", dialog).addEventListener("click", () => dialog.close());
    dialog.showModal();
  }

  function renderProjects(targetSel, list) {
    const grid = $(targetSel);
    if (!grid) return;
    grid.innerHTML = list.map((p, i) => cardHTML(p, PROJECTS.indexOf(p))).join("");
    grid.addEventListener("click", e => {
      const card = e.target.closest("[data-project]");
      if (card) openProject(PROJECTS[Number(card.dataset.project)]);
    });
    const dialog = $("#project-dialog");
    if (dialog) {
      dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
    }
  }

  /* ---------- Timeline ---------- */
  function sortedTimeline() {
    return TIMELINE.slice().sort((a, b) => {
      const endA = a.end === "Present" ? 9999 : Number(a.end);
      const endB = b.end === "Present" ? 9999 : Number(b.end);
      return endB - endA || Number(b.start) - Number(a.start);
    });
  }

  function timelineItemHTML(t) {
    return (
      '<div class="timeline-item ' + esc(t.type) + '">' +
      '<span class="timeline-dot" aria-hidden="true"></span>' +
      '<div class="timeline-dates">' + esc(t.start) + " — " + esc(t.end) + "</div>" +
      '<div class="timeline-title">' + esc(t.title) +
      '<span class="type-badge ' + esc(t.type) + '">' + esc(t.type) + "</span></div>" +
      '<div class="timeline-org">' + esc(t.org) + "</div>" +
      (t.description ? '<div class="timeline-desc">' + esc(t.description) + "</div>" : "") +
      "</div>"
    );
  }

  function renderTimeline(targetSel, opts) {
    const el = $(targetSel);
    if (!el) return;
    const limit = opts && opts.limit;
    let filter = "all";

    function draw() {
      let items = sortedTimeline();
      if (filter !== "all") items = items.filter(t => t.type === filter);
      if (limit) items = items.slice(0, limit);
      el.innerHTML = items.map(timelineItemHTML).join("");
    }

    const filterRow = opts && opts.filterSel ? $(opts.filterSel) : null;
    if (filterRow) {
      filterRow.addEventListener("click", e => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;
        filter = btn.dataset.filter;
        filterRow.querySelectorAll("[data-filter]").forEach(b =>
          b.setAttribute("aria-pressed", String(b === btn)));
        draw();
      });
    }
    draw();
  }

  /* ---------- Resume (work pulled from TIMELINE) ---------- */
  function renderResume() {
    const work = $("#resume-work");
    if (work) {
      work.innerHTML = sortedTimeline().filter(t => t.type === "work").map(t =>
        '<div class="resume-entry">' +
        '<div class="resume-line"><span class="resume-role">' + esc(t.title) + "</span>" +
        '<span class="resume-dates">' + esc(t.start) + " — " + esc(t.end) + "</span></div>" +
        '<div class="resume-org">' + esc(t.org) + "</div>" +
        (t.description ? '<div class="resume-desc">' + esc(t.description) + "</div>" : "") +
        "</div>"
      ).join("");
    }
    const edu = $("#resume-education");
    if (edu) {
      edu.innerHTML = sortedTimeline().filter(t => t.type === "education").map(t =>
        '<div class="resume-entry">' +
        '<div class="resume-line"><span class="resume-role">' + esc(t.title) + "</span>" +
        '<span class="resume-dates">' + esc(t.start) + " — " + esc(t.end) + "</span></div>" +
        '<div class="resume-org">' + esc(t.org) + "</div>" +
        (t.description ? '<div class="resume-desc">' + esc(t.description) + "</div>" : "") +
        "</div>"
      ).join("");
    }
    const skills = $("#resume-skills");
    if (skills && typeof SKILLS !== "undefined") {
      skills.innerHTML = SKILLS.map(g =>
        '<div class="skill-group"><h3>' + esc(g.group) + "</h3>" +
        '<div class="tag-row">' + g.items.map(s => '<span class="tag">' + esc(s) + "</span>").join("") + "</div></div>"
      ).join("");
    }
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    renderProjects("#project-grid", PROJECTS);
    renderProjects("#featured-grid", PROJECTS.slice(0, 3));
    renderTimeline("#timeline-full", { filterSel: "#timeline-filters" });
    renderTimeline("#timeline-preview", { limit: 3 });
    renderResume();
  });
})();
