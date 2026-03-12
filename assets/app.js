const profile = {
  name: "Andrew B. Limpiada Jr.",
  role: "Beginner/Computer Engineer Undergraduate",
  location: "Paye, Mogpog, Marinduque, PH",
  tagline: "Kaya yan, Basta may AI!",
  links: [
    { label: "Facebook", href: "https://web.facebook.com/andrewjrlimpiada" },
    { label: "TikTok", href: "https://www.tiktok.com/@anddyyru" },
    { label: "Email", href: "mailto:andrewjrlimpiada34@gmail.com" },
  ],
};

const timeline = [
  {
    id: "t1",
    date: "2023",
    title: "Graduated Senior High School years at Marinduque State University",
    tags: ["Education"],
    summary: "Had an amazing time during Senior High School days, with a very good adviser.",
    details:
      "Events: Research Defense, Capstone Defense, and IHS Intramurials.",
  },
  {
    id: "t2",
    date: "2021",
    title: "Graduated Junior High School years at Marinduque State College",
    tags: ["Education"],
    summary: "Had an amazing time during Junior High School days, with my PANTHERS family.",
    details:
      "Events: Laboratory High School Intramurials.",
  },
  {
    id: "t3",
    date: "2017",
    title: "Graduated Elementary/Primary School years at Paye, Elementary School",
    tags: ["Education"],
    summary: "Had an amazing time during Elementary/Primary School days, with my classmates.",
    details:
      "Events: MTAP, Quiz Bee, and Spelling Bee.",
  },
];

const story = [
 {
  id: "s1",
  title: "Chapter 1: Curiosity First",
  kicker: "When simple questions turn into projects.",
  body:
    "Hi, I’m Andrew Jr., and most of the things I build started with a simple thought: 'Paano kaya ginagawa ‘to?'\n\nAs a computer engineering student, I enjoy exploring how systems work behind the screen. Minsan nagsisimula lang sa maliit na idea, like building a simple website, experimenting with UI designs, or figuring out how databases connect to apps. But along the way, the curiosity turns into something bigger, like a working project, a solution, or sometimes even a new idea to build next.\n\nFor me, programming is not just about writing code. It's about solving problems, improving small details, and creating something that people can actually use. Every project I make is another step in learning how to turn ideas into real applications."
 },
 {
  id: "s2",
  title: "Chapter 2: Learning by Building",
  kicker: "Progress happens one project at a time.",
  body:
    "Fun Fact about me: Mas natututo ako kapag ginagawa ko mismo.\n\nFrom web applications to small coding experiments, I treat every project as a learning ground. Sometimes things break, sometimes the code works on the first try, but most of the time, it's a process of debugging, researching, and improving.\n\nEach project I build helps me understand systems better. How users interact with interfaces, how data flows through an application, and how small design choices can improve the experience."
 },
 {
  id: "s3",
  title: "Chapter 3: Building for Real People",
  kicker: "Technology should solve real problems.",
  body:
    "One thing I realized while studying is that technology becomes meaningful when it solves real problems.\n\nThat’s why I enjoy creating systems that make processes easier or more organized. Whether it's a scheduling system, a web application, or a tool that improves workflows, I focus on building solutions that are practical and usable.\n\nFor me, the goal is simple, create digital tools that are functional, thoughtful, and helpful for the people who use them."
 }
];

const hobbies = [
  {
    id: "h1",
    hobby: "Gaming",
    clues: [
      "Mages.",
      "Battles.",
      "Ang lagggggg!!!.",
    ],
    options: ["Photography", "Cooking", "Gaming", "Gardening"],
  },
  {
    id: "h2",
    hobby: "Chess",
    clues: [
      "Castle.",
      "Knights.",
      "Checkmate.",
      "When bored, i get the board.",
    ],
    options: ["Cooking", "Chess", "Drawing", "Guitar"],
  },
  {
    id: "h3",
    hobby: "Listening to Music",
    clues: [
      "Notes.",
      "Interludes.",
      "Alternative Genres.",
      "Headset.",
    ],
    options: ["Listening to Music", "Writing", "Running", "Baking"],
  },
];

const projects = [
  {
    id: "p1",
    name: "Online WebApp Shop",
    blurb: "A software made by a team (Andrew B. Limpiada Jr., Uver V. Guevara, Oseas Joshua Ramiro, and Gian Madla). NOTE: Not officially a finished software.",
    tags: ["Frontend", "Backend", "API"],
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Online Shop tailored for Severino Perfumes",
      "Theme-preferenced WebApp",
    ],
    links: [{ label: "Severino Perfumes", href: "https://severino-webapp-shop.vercel.app/" }],
  },
  
];

const skills = {
  radar: [
    { label: "Frontend", value: 0.56 },
    { label: "Backend", value: 0.42 },
    { label: "Design", value: 0.78 },
    { label: "Development", value: 0.59 },
    { label: "Testing", value: 0.8 },
    { label: "Writing", value: 0.78 },
  ],
  meters: [
    { name: "Frontend", value: 56, note: "UI, tooling, performance" },
    { name: "Backend", value: 42, note: "tokens, layout, motion" },
    { name: "Design", value: 78, note: "APIs, auth, data modeling" },
    { name: "Development", value: 59, note: "components, state patterns" },
    { name: "Testing", value: 8, note: "queries, schema choices" },
    { name: "Writing", value: 78, note: "clear narratives, specs" },
  ],
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const app = {
  view: $("#view"),
  nav: $("#nav"),
  crumbs: $("#crumbs"),
  themeToggle: $("#themeToggle"),
  themeLabel: $("#themeLabel"),
  burger: $("#burger"),
  modal: $("#modal"),
  modalBody: $("#modalBody"),
  toasts: $("#toasts"),
  palette: $("#palette"),
  paletteInput: $("#paletteInput"),
  paletteList: $("#paletteList"),
  help: $("#help"),
  sideMeta: $("#sideMeta"),
  state: {
    route: "/",
    projectsQuery: "",
    projectsTag: "All",
    timelineTag: "All",
    game: { current: null, picked: null, streak: 0, played: 0 },
    theme: { mode: "auto" },
    keySeq: [],
  },
};

const THEME_KEY = "idd_theme_mode";

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

function nowISODate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function toast(title, msg, ic = "!") {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<div class="t-ic" aria-hidden="true">${esc(ic)}</div>
    <div class="t-msg"><strong>${esc(title)}</strong><div>${esc(msg)}</div></div>`;
  app.toasts.appendChild(el);
  window.setTimeout(() => el.remove(), 3400);
}

function openModal(html) {
  app.modalBody.innerHTML = html;
  app.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  app.modal.setAttribute("aria-hidden", "true");
  app.modalBody.innerHTML = "";
  document.body.style.overflow = "";
}

function openHelp() {
  app.help.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeHelp() {
  app.help.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openPalette() {
  app.palette.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  app.paletteInput.value = "";
  renderPalette("");
  window.setTimeout(() => app.paletteInput.focus(), 0);
}

function closePalette() {
  app.palette.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setThemeMode(mode) {
  app.state.theme.mode = mode;
  safeStorageSet(THEME_KEY, mode);
  applyTheme();
}

function applyTheme() {
  const mode = app.state.theme.mode;
  const root = document.documentElement;

  if (mode === "auto") {
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = prefersDark ? "dark" : "light";
    app.themeLabel.textContent = "Auto";
    return;
  }

  root.dataset.theme = mode;
  app.themeLabel.textContent = mode === "dark" ? "Dark" : "Light";
}

function cycleTheme() {
  const mode = app.state.theme.mode;
  const next = mode === "auto" ? "dark" : mode === "dark" ? "light" : "auto";
  setThemeMode(next);
  toast("Theme", `Set to ${next}`, "o");
}

const routes = [
  { path: "/", name: "Overview", render: renderOverview },
  { path: "/timeline", name: "Timeline", render: renderTimeline },
  { path: "/story", name: "Story", render: renderStory },
  { path: "/game", name: "Guess My Hobby", render: renderGame },
  { path: "/projects", name: "Projects", render: renderProjects },
  { path: "/skills", name: "Skills", render: renderSkills },
  { path: "/settings", name: "Preferences", render: renderSettings },
];

function parseRoute() {
  const h = window.location.hash || "#/";
  const path = h.replace(/^#/, "") || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return routes.some((r) => r.path === normalized) ? normalized : "/";
}

function navName(path) {
  const r = routes.find((x) => x.path === path);
  return r ? r.name : "Overview";
}

function setActiveNav(path) {
  $$(".nav-item", app.nav).forEach((a) => {
    const is = a.dataset.route === path;
    if (is) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  app.crumbs.textContent = `/${navName(path).toLowerCase().replaceAll(" ", "-")}`;
}

function render() {
  app.state.route = parseRoute();
  setActiveNav(app.state.route);
  const r = routes.find((x) => x.path === app.state.route) || routes[0];
  try {
    r.render();
  } catch (err) {
    console.error("Render failed:", err);
    if (app.view) {
      const msg = err && err.message ? err.message : "Unknown error";
      app.view.innerHTML = `
        <div class="card" style="grid-column: span 12;">
          <div class="card-h"><h3>Render Error</h3><div class="sub">Check console for details</div></div>
          <div class="card-b">
            <div class="muted">A runtime error prevented the page from rendering.</div>
            <div class="mono" style="margin-top:10px;">${esc(msg)}</div>
          </div>
        </div>
      `;
    }
  }
  $("#main").focus();
  document.body.classList.remove("menu-open");
  app.burger.setAttribute("aria-expanded", "false");
}

function renderOverview() {
  const tCount = timeline.length;
  const pCount = projects.length;
  const sCount = skills.meters.length;

  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 12;">
        <div class="card-h">
          <div>
            <h2>${esc(profile.name)} <span class="muted">/ ${esc(profile.role)}</span></h2>
            <div class="sub">${esc(profile.tagline)}</div>
          </div>
          <span class="pilltag on">${esc(profile.location)}</span>
        </div>
        <div class="card-b">
          <div class="row">
            <button class="btn acc" data-go="#/projects" type="button">Open Projects</button>
            <button class="btn" data-go="#/timeline" type="button">View Timeline</button>
            <button class="btn" data-go="#/game" type="button">Play Hobby Guess</button>
            <span class="spacer"></span>
            ${profile.links
              .map(
                (l) =>
                  `<a class="pilltag" href="${esc(l.href)}" target="_blank" rel="noreferrer">${esc(
                    l.label
                  )}</a>`
              )
              .join("")}
          </div>
          <p class="muted" style="margin: 14px 0 0; line-height: 1.55;">
            This dashboard is built like a product: keyboard shortcuts, a command palette, and pages that tell a clear story.
            Edit content in <span class="mono">assets/data.js</span>.
          </p>
        </div>
      </div>

      <div class="card" style="grid-column: span 4;">
        <div class="card-h"><h3>Timeline</h3><div class="sub">${tCount} entries</div></div>
        <div class="card-b">
          <div class="muted">Credibility in dates. Expand items for details and filter by tags.</div>
          <div style="margin-top: 12px;"><button class="btn" data-go="#/timeline" type="button">Go Timeline</button></div>
        </div>
      </div>

      <div class="card" style="grid-column: span 4;">
        <div class="card-h"><h3>Projects</h3><div class="sub">${pCount} featured</div></div>
        <div class="card-b">
          <div class="muted">A gallery you can filter by tags and open as a detail modal.</div>
          <div style="margin-top: 12px;"><button class="btn" data-go="#/projects" type="button">Go Projects</button></div>
        </div>
      </div>

      <div class="card" style="grid-column: span 4;">
        <div class="card-h"><h3>Skills</h3><div class="sub">${sCount} meters</div></div>
        <div class="card-b">
          <div class="muted">A radar view for breadth and meters for depth.</div>
          <div style="margin-top: 12px;"><button class="btn" data-go="#/skills" type="button">Go Skills</button></div>
        </div>
      </div>

      <div class="card" style="grid-column: span 6;">
        <div class="card-h"><h3>Story</h3><div class="sub">3 chapters</div></div>
        <div class="card-b">
          <div class="muted">A narrative slice: how you think, what you ship, and why.</div>
          <div style="margin-top: 12px;"><button class="btn" data-go="#/story" type="button">Read Story</button></div>
        </div>
      </div>

      <div class="card" style="grid-column: span 6;">
        <div class="card-h"><h3>Guess My Hobby</h3><div class="sub">mini game</div></div>
        <div class="card-b">
          <div class="muted">A playful way to show personality. Try to guess from clues.</div>
          <div style="margin-top: 12px;"><button class="btn acc" data-go="#/game" type="button">Play</button></div>
        </div>
      </div>
    </div>
  `;
}

function uniqTags(items) {
  const set = new Set();
  items.forEach((x) => (x.tags || []).forEach((t) => set.add(t)));
  return ["All", ...[...set].sort((a, b) => a.localeCompare(b))];
}

function renderTimeline() {
  const tags = uniqTags(timeline);
  const selected = app.state.timelineTag;

  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 12;">
        <div class="card-h">
          <div>
            <h2>Timeline</h2>
            <div class="sub">Click an entry to expand</div>
          </div>
          <div class="row">
            ${tags
              .map(
                (t) =>
                  `<button class="pilltag ${t === selected ? "on" : ""}" type="button" data-tl-tag="${esc(
                    t
                  )}">${esc(t)}</button>`
              )
              .join("")}
          </div>
        </div>
        <div class="card-b">
          <div class="timeline" id="timelineList"></div>
        </div>
      </div>
    </div>
  `;

  const list = $("#timelineList");
  const filtered =
    selected === "All"
      ? timeline
      : timeline.filter((x) => (x.tags || []).some((t) => t === selected));

  list.innerHTML = filtered
    .map(
      (x) => `
      <article class="t-item" data-tid="${esc(x.id)}" tabindex="0" role="button" aria-label="Timeline entry">
        <div class="t-top">
          <div class="t-date">${esc(x.date)}</div>
          <div class="t-title">${esc(x.title)}</div>
          <div class="t-tags">${(x.tags || []).map((t) => `<span class="pilltag">${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="t-desc">${esc(x.summary)}</div>
        <div class="t-more">${esc(x.details || "")}</div>
      </article>
    `
    )
    .join("");
}

function renderStory() {
  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 12;">
        <div class="card-h">
          <div>
            <h2>Storytelling Portfolio</h2>
            <div class="sub">Short chapters with a point of view</div>
          </div>
          <button class="btn" type="button" data-open="help">Shortcuts</button>
        </div>
        <div class="card-b">
          ${story
            .map(
              (c, idx) => `
              <section class="card" style="margin-bottom: 12px;">
                <div class="card-h">
                  <h3>${idx + 1}. ${esc(c.title)}</h3>
                  <div class="sub">${esc(c.kicker)}</div>
                </div>
                <div class="card-b">
                  ${esc(c.body)
                    .replaceAll("\n\n", "</p><p>")
                    .replaceAll("\n", "<br />")
                    .replace(/^/, "<p>")
                    .concat("</p>")}
                </div>
              </section>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function pickGame() {
  const next = hobbies[Math.floor(Math.random() * hobbies.length)];
  app.state.game.current = next;
  app.state.game.picked = null;
}

function renderGame() {
  if (!app.state.game.current) pickGame();
  const g = app.state.game.current;
  const picked = app.state.game.picked;

  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 7;">
        <div class="card-h">
          <div>
            <h2>Guess My Hobby</h2>
            <div class="sub">Clues first. Confidence later.</div>
          </div>
          <div class="row">
            <span class="pilltag">streak: ${app.state.game.streak}</span>
            <span class="pilltag">played: ${app.state.game.played}</span>
          </div>
        </div>
        <div class="card-b">
          <ol class="muted" style="line-height: 1.55; margin: 0; padding-left: 18px;">
            ${g.clues.map((c) => `<li>${esc(c)}</li>`).join("")}
          </ol>
          <div class="row" style="margin-top: 14px;">
            ${g.options
              .map((o) => {
                const isOn = picked === o;
                return `<button class="btn ${isOn ? "acc" : ""}" type="button" data-pick="${esc(
                  o
                )}">${esc(o)}</button>`;
              })
              .join("")}
          </div>
          <div class="row" style="margin-top: 14px;">
            <button class="btn acc" type="button" data-act="submit">Submit</button>
            <button class="btn" type="button" data-act="new">New Round</button>
          </div>
        </div>
      </div>

      <div class="card" style="grid-column: span 5;">
        <div class="card-h">
          <h3>Why This Works</h3>
          <div class="sub">personality, but structured</div>
        </div>
        <div class="card-b">
          <p class="muted" style="line-height: 1.55; margin: 0;">
            Hiring pages often blur together. A small game gives a memorable signal without being gimmicky.
            The trick is making it fast, readable, and optional.
          </p>
  
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const tags = uniqTags(projects);
  const selected = app.state.projectsTag;
  const q = app.state.projectsQuery;

  const filtered = projects.filter((p) => {
    const byTag = selected === "All" ? true : (p.tags || []).includes(selected);
    const byQ = !q
      ? true
      : `${p.name}\n${p.blurb}\n${(p.tags || []).join(" ")}\n${(p.stack || []).join(" ")}`
          .toLowerCase()
          .includes(q.toLowerCase());
    return byTag && byQ;
  });

  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 12;">
        <div class="card-h">
          <div>
            <h2>Project Showcase</h2>
            <div class="sub">${filtered.length} shown</div>
          </div>
          <div class="row" style="min-width: 380px;">
            <input class="input" id="projSearch" type="search" placeholder="Search projects... (press /)" value="${esc(
              q
            )}" />
          </div>
        </div>
        <div class="card-b">
          <div class="row" style="margin-bottom: 12px;">
            ${tags
              .map(
                (t) =>
                  `<button class="pilltag ${t === selected ? "on" : ""}" type="button" data-proj-tag="${esc(
                    t
                  )}">${esc(t)}</button>`
              )
              .join("")}
            <span class="spacer"></span>
            <button class="btn" type="button" data-act="clearSearch">Clear</button>
          </div>
          <div class="gallery" id="projList">
            ${filtered
              .map(
                (p) => `
                <article class="proj" data-pid="${esc(p.id)}" tabindex="0" role="button" aria-label="Open project">
                  <div class="thumb" aria-hidden="true"></div>
                  <div class="meta">
                    <h3 class="name">${esc(p.name)}</h3>
                    <p class="blurb">${esc(p.blurb)}</p>
                    <div class="tags">${(p.tags || []).map((t) => `<span class="pilltag">${esc(t)}</span>`).join("")}</div>
                  </div>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  const input = $("#projSearch");
  input.addEventListener("input", () => {
    app.state.projectsQuery = input.value;
    renderProjects();
  });
}

function polygonPoints(n, cx, cy, r, a0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = a0 + (i * Math.PI * 2) / n;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}

function clamp01(v) {
  return Math.max(0, Math.min(1, Number(v) || 0));
}

function radarSvg(points) {
  const n = points.length;
  const cx = 180;
  const cy = 180;
  const R = 140;
  const angle0 = -Math.PI / 2;

  const spokes = points
    .map((_, i) => {
      const a = angle0 + (i * Math.PI * 2) / n;
      const x = cx + Math.cos(a) * R;
      const y = cy + Math.sin(a) * R;
      return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,0.14)" />`;
    })
    .join("");

  const shape = points
    .map((p, i) => {
      const a = angle0 + (i * Math.PI * 2) / n;
      const r = R * clamp01(p.value);
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const labels = points
    .map((p, i) => {
      const a = angle0 + (i * Math.PI * 2) / n;
      const x = cx + Math.cos(a) * (R + 18);
      const y = cy + Math.sin(a) * (R + 18);
      const anchor = Math.cos(a) > 0.2 ? "start" : Math.cos(a) < -0.2 ? "end" : "middle";
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="middle">${esc(
        p.label
      )}</text>`;
    })
    .join("");

  return `
    <svg viewBox="0 0 360 360" role="img" aria-label="Skills radar">
      <defs>
        <linearGradient id="radG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="rgba(94,240,176,0.88)" />
          <stop offset="1" stop-color="rgba(118,184,255,0.84)" />
        </linearGradient>
      </defs>
      ${[0.25, 0.5, 0.75, 1]
        .map(
          (k) =>
            `<polygon points="${polygonPoints(n, cx, cy, R * k, angle0)}" fill="none" stroke="rgba(255,255,255,0.12)" />`
        )
        .join("")}
      ${spokes}
      <polygon points="${shape}" fill="url(#radG)" opacity="0.25" stroke="rgba(94,240,176,0.65)" stroke-width="2" />
      ${labels}
    </svg>
  `;
}

function renderSkills() {
  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 12;">
        <div class="card-h">
          <div>
            <h2>Skills Dashboard</h2>
            <div class="sub">breadth + depth</div>
          </div>
          <div class="row">
            <span class="pilltag">animated meters</span>
            <span class="pilltag">SVG radar</span>
          </div>
        </div>
        <div class="card-b">
          <div class="skills">
            <div class="skillcol">
              <div class="radar">${radarSvg(skills.radar)}</div>
              <div class="muted" style="margin-top: 10px; line-height: 1.5;">
                Radar values come from <span class="mono">skills.radar</span> in <span class="mono">assets/data.js</span>.
              </div>
            </div>
            <div class="skillcol" id="meters">
              ${skills.meters
                .map(
                  (m) => `
                <div class="meter" data-meter="${esc(m.name)}" data-val="${esc(m.value)}">
                  <div class="meter-top">
                    <div class="meter-name">${esc(m.name)}</div>
                    <div class="meter-val">${esc(m.value)}% - ${esc(m.note || "")}</div>
                  </div>
                  <div class="bar" aria-label="${esc(m.name)} proficiency"><span></span></div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  window.setTimeout(() => {
    $$(".meter", $("#meters")).forEach((m) => {
      const v = Math.max(0, Math.min(100, Number(m.dataset.val) || 0));
      const span = $(".bar > span", m);
      if (span) span.style.width = `${v}%`;
    });
  }, 0);
}

function renderSettings() {
  const mode = app.state.theme.mode;
  app.view.innerHTML = `
    <div class="grid">
      <div class="card" style="grid-column: span 12;">
        <div class="card-h">
          <div>
            <h2>Preferences</h2>
            <div class="sub">theme + small ergonomics</div>
          </div>
          <span class="pilltag">today: ${esc(nowISODate())}</span>
        </div>
        <div class="card-b">
          <div class="row">
            <button class="btn ${mode === "auto" ? "acc" : ""}" type="button" data-theme="auto">Auto</button>
            <button class="btn ${mode === "dark" ? "acc" : ""}" type="button" data-theme="dark">Dark</button>
            <button class="btn ${mode === "light" ? "acc" : ""}" type="button" data-theme="light">Light</button>
            <span class="spacer"></span>
            <button class="btn danger" type="button" data-act="reset">Reset UI State</button>
          </div>
          <p class="muted" style="margin: 14px 0 0; line-height: 1.55;">
            Theme preference persists in <span class="mono">localStorage</span>.
            Reset clears theme and page filters.
          </p>
        </div>
      </div>
    </div>
  `;
}

function projectById(id) {
  return projects.find((p) => p.id === id);
}

function showProject(id) {
  const p = projectById(id);
  if (!p) return;
  openModal(`
    <div class="card" style="border: none; background: transparent; box-shadow: none;">
      <div class="card-h" style="border: 1px solid var(--stroke); border-radius: 18px;">
        <div>
          <h2 style="margin:0;">${esc(p.name)}</h2>
          <div class="sub">${esc((p.tags || []).join(" - "))}</div>
        </div>
        <span class="pilltag on">${esc((p.stack || []).join(" / "))}</span>
      </div>
      <div class="card-b" style="padding: 14px 2px 2px;">
        <p class="muted" style="line-height: 1.55; margin: 0 0 12px;">${esc(p.blurb)}</p>
        <div class="card" style="margin-bottom: 12px;">
          <div class="card-h"><h3>Highlights</h3><div class="sub">what matters</div></div>
          <div class="card-b">
            <ul class="muted" style="margin: 0; padding-left: 18px; line-height: 1.55;">
              ${(p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="row">
          ${(p.links || [])
            .map(
              (l) =>
                `<a class="btn acc" href="${esc(l.href)}" target="_blank" rel="noreferrer">${esc(
                  l.label
                )}</a>`
            )
            .join("")}
          <span class="spacer"></span>
          <button class="btn" type="button" data-close="1">Close</button>
        </div>
      </div>
    </div>
  `);
}

function resetState() {
  app.state.projectsQuery = "";
  app.state.projectsTag = "All";
  app.state.timelineTag = "All";
  app.state.game = { current: null, picked: null, streak: 0, played: 0 };
  safeStorageRemove(THEME_KEY);
  app.state.theme.mode = "auto";
  applyTheme();
  toast("Reset", "UI state cleared", "R");
  render();
}

function renderPalette(query) {
  const q = (query || "").trim().toLowerCase();
  const cmds = [
    { name: "Go Overview", desc: "#/", run: () => (window.location.hash = "#/") },
    { name: "Go Timeline", desc: "#/timeline", run: () => (window.location.hash = "#/timeline") },
    { name: "Go Story", desc: "#/story", run: () => (window.location.hash = "#/story") },
    { name: "Go Guess My Hobby", desc: "#/game", run: () => (window.location.hash = "#/game") },
    { name: "Go Projects", desc: "#/projects", run: () => (window.location.hash = "#/projects") },
    { name: "Go Skills", desc: "#/skills", run: () => (window.location.hash = "#/skills") },
    { name: "Go Preferences", desc: "#/settings", run: () => (window.location.hash = "#/settings") },
    { name: "Theme: Cycle", desc: "auto -> dark -> light", run: () => cycleTheme() },
    { name: "Help: Shortcuts", desc: "show keys", run: () => openHelp() },
    { name: "Reset UI State", desc: "clear filters + theme", run: () => resetState() },
  ];

  const filtered = !q
    ? cmds
    : cmds.filter((c) => `${c.name}\n${c.desc}`.toLowerCase().includes(q));

  app.paletteList.innerHTML = filtered
    .map(
      (c, idx) => `
      <div class="cmd" role="option" tabindex="0" data-cmd="${idx}">
        <div class="c-name">${esc(c.name)}</div>
        <div class="c-desc">${esc(c.desc)}</div>
      </div>
    `
    )
    .join("");

  app.paletteList._cmds = filtered;
}

function boot() {
  app.state.theme.mode = safeStorageGet(THEME_KEY) || "auto";
  applyTheme();
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (app.state.theme.mode === "auto") applyTheme();
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  app.sideMeta.innerHTML = `v1 - ${esc(nowISODate())}<br/>hash routes - no build`;

  window.addEventListener("hashchange", render);
  render();

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    const sideClose = t.closest("[data-side-close='1']");
    if (sideClose) {
      document.body.classList.remove("menu-open");
      app.burger.setAttribute("aria-expanded", "false");
      const bd = $("#sideBackdrop");
      if (bd) bd.setAttribute("aria-hidden", "true");
      return;
    }

    const go = t.closest("[data-go]");
    if (go) {
      window.location.hash = go.getAttribute("data-go");
      return;
    }

    if (t.matches("[data-close='1']") || t.closest("[data-close='1']")) {
      closeModal();
      closePalette();
      closeHelp();
      return;
    }

    if (t.matches("[data-open='help']") || t.closest("[data-open='help']")) {
      openHelp();
      return;
    }

    const tlTag = t.closest("[data-tl-tag]");
    if (tlTag) {
      app.state.timelineTag = tlTag.getAttribute("data-tl-tag") || "All";
      renderTimeline();
      return;
    }

    const projTag = t.closest("[data-proj-tag]");
    if (projTag) {
      app.state.projectsTag = projTag.getAttribute("data-proj-tag") || "All";
      renderProjects();
      return;
    }

    const theme = t.closest("button[data-theme]");
    if (theme) {
      setThemeMode(theme.getAttribute("data-theme"));
      renderSettings();
      return;
    }

    const act = t.closest("[data-act]");
    if (act) {
      const a = act.getAttribute("data-act");
      if (a === "reset") return resetState();
      if (a === "clearSearch") {
        app.state.projectsQuery = "";
        return renderProjects();
      }
      if (a === "new") {
        pickGame();
        return renderGame();
      }
      if (a === "submit") {
        const g = app.state.game.current;
        const picked = app.state.game.picked;
        if (!picked) return toast("Game", "Pick an option first", "?");
        app.state.game.played += 1;
        const ok = picked === g.hobby;
        app.state.game.streak = ok ? app.state.game.streak + 1 : 0;
        toast(ok ? "Correct" : "Not quite", ok ? `It is ${picked}.` : `Answer: ${g.hobby}.`, ok ? "v" : "x");
        return;
      }
    }

    const pick = t.closest("[data-pick]");
    if (pick) {
      app.state.game.picked = pick.getAttribute("data-pick");
      renderGame();
      return;
    }

    const proj = t.closest("[data-pid]");
    if (proj) {
      showProject(proj.getAttribute("data-pid"));
      return;
    }

    const cmd = t.closest("[data-cmd]");
    if (cmd && app.paletteList._cmds) {
      const idx = Number(cmd.getAttribute("data-cmd"));
      const c = app.paletteList._cmds[idx];
      if (c && c.run) {
        closePalette();
        c.run();
      }
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!e.ctrlKey && !e.metaKey && !e.altKey) {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      app.state.keySeq.push(k);
      if (app.state.keySeq.length > 2) app.state.keySeq.shift();
      const seq = app.state.keySeq.join(" ");
      if (seq === "g t") window.location.hash = "#/timeline";
      if (seq === "g p") window.location.hash = "#/projects";
      if (seq === "g s") window.location.hash = "#/skills";
    }

    if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      openHelp();
      e.preventDefault();
      return;
    }

    if (e.key === "Escape") {
      closeModal();
      closePalette();
      closeHelp();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      openPalette();
      e.preventDefault();
      return;
    }

    if (e.key === "/" && app.state.route === "/projects") {
      const input = $("#projSearch");
      if (input) {
        input.focus();
        e.preventDefault();
      }
      return;
    }

    const focused = document.activeElement;
    if (app.state.route === "/timeline" && focused && focused.classList && focused.classList.contains("t-item")) {
      if (e.key === "Enter" || e.key === " ") {
        focused.classList.toggle("open");
        e.preventDefault();
      }
    }

    if (app.state.route === "/projects" && focused && focused.classList && focused.classList.contains("proj")) {
      if (e.key === "Enter" || e.key === " ") {
        showProject(focused.getAttribute("data-pid"));
        e.preventDefault();
      }
    }
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (app.state.route !== "/timeline") return;
    const item = t.closest(".t-item");
    if (item) item.classList.toggle("open");
  });

  app.themeToggle.addEventListener("click", cycleTheme);
  $("#cmdPalette").addEventListener("click", openPalette);

  app.paletteInput.addEventListener("input", () => renderPalette(app.paletteInput.value));
  app.paletteInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = $(".cmd", app.paletteList);
      if (first) first.click();
    }
  });

  app.burger.addEventListener("click", () => {
    const open = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open);
    app.burger.setAttribute("aria-expanded", open ? "true" : "false");
    const bd = $("#sideBackdrop");
    if (bd) bd.setAttribute("aria-hidden", open ? "false" : "true");
  });
}

boot();
