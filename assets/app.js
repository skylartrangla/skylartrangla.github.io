const page = document.body.dataset.page || "home";

const navItems = [
  ["home", "Home", "/"],
  ["digital-twin", "Digital Twin & Interactive", "/digital-twin/"],
  ["3d-generalist", "3D Generalist", "/3d-generalist/"],
  ["research", "Research", "/research/"],
  ["about", "About & Résumé", "/about/"],
];

const icons = {
  arrow: '<span aria-hidden="true">↗</span>',
  play: '<span class="play-icon" aria-hidden="true">▶</span>',
};

const projectVisual = (type, label, index = "01") => `
  <div class="project-visual visual-${type}" role="img" aria-label="Media placeholder for ${label}">
    <div class="visual-grid"></div>
    <span class="visual-index">${index}</span>
    <div class="visual-object">
      <i></i><i></i><i></i>
    </div>
    <div class="media-placeholder">${icons.play}<span>Project film<br><small>Video coming soon</small></span></div>
  </div>`;

const tagList = (items) => `<ul class="tag-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const header = () => `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Skylar La, home">
      <span class="brand-mark">SL</span>
      <span>Skylar La<small>Digital Twin · Visualization</small></span>
    </a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span><span></span><em>Menu</em>
    </button>
    <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
      ${navItems.map(([id, label, href]) => `<a href="${href}" ${page === id ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
  </header>`;

const footer = () => `
  <footer class="site-footer">
    <div>
      <p class="eyebrow">OPEN TO OPPORTUNITIES · VIETNAM</p>
      <h2>Let’s build something<br><em>that behaves.</em></h2>
    </div>
    <div class="footer-links">
      <a href="mailto:lathuytrang16@tamu.edu">lathuytrang16@tamu.edu ${icons.arrow}</a>
      <a href="https://github.com/skylartrangla" target="_blank" rel="noreferrer">GitHub ${icons.arrow}</a>
      <a href="https://lathuytrang16.myportfolio.com/" target="_blank" rel="noreferrer">Archive portfolio ${icons.arrow}</a>
    </div>
    <p class="copyright">© ${new Date().getFullYear()} Skylar La · Designed & coded from scratch</p>
  </footer>`;

const home = () => `
  <main>
    <section class="hero home-hero">
      <div class="hero-copy reveal">
        <p class="eyebrow">DIGITAL TWIN DEVELOPER · VISUALIZATION RESEARCHER · 3D GENERALIST</p>
        <h1>I build virtual worlds<br>that <em>think back.</em></h1>
        <p class="hero-summary">I connect real-time simulation, research, and cinematic 3D to make complex systems visible, interactive, and useful.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/digital-twin/">Explore digital twin work ${icons.arrow}</a>
          <a class="text-link" href="/3d-generalist/">View 3D portfolio <span>→</span></a>
        </div>
      </div>
      <div class="hero-system reveal" aria-label="Abstract real-time system visualization">
        <div class="system-orbit orbit-one"></div><div class="system-orbit orbit-two"></div>
        <div class="system-core"><span>REAL</span><strong>↔</strong><span>VIRTUAL</span></div>
        <div class="system-node node-a">MQTT<small>DATA STREAM</small></div>
        <div class="system-node node-b">UE5<small>SIMULATION</small></div>
        <div class="system-node node-c">3D<small>EXPERIENCE</small></div>
        <div class="system-readout"><span>SYNC</span><b>24 FPS</b><i></i></div>
      </div>
      <div class="scroll-cue"><span></span>Scroll to selected work</div>
    </section>

    <section class="section selected-work">
      <div class="section-heading reveal">
        <p class="eyebrow">01 / SELECTED WORK</p>
        <h2>Systems, stories,<br><em>and spatial experiences.</em></h2>
      </div>
      <article class="featured-project reveal">
        ${projectVisual("twin", "Sustainable livestock digital twin", "01")}
        <div class="project-copy">
          <p class="project-kicker">FLAGSHIP · RESEARCH & ENGINEERING</p>
          <h3>Real-time digital twin for sustainable livestock systems</h3>
          <p>An Unreal Engine environment that streams agent-based cattle methane simulation data from Google Colab through MQTT and JSON—turning model outputs into synchronized, interactive visual analytics.</p>
          ${tagList(["Unreal Engine", "MQTT / JSON", "Google Colab", "Agent-based simulation"])}
          <a class="text-link" href="/digital-twin/#livestock">View case study <span>→</span></a>
        </div>
      </article>
      <div class="project-grid">
        <article class="project-card reveal">
          ${projectVisual("mobility", "Connected mobility digital twin", "02")}
          <div><p class="project-kicker">DIGITAL TWIN · UX/UI</p><h3>Connected mobility simulation</h3><p>Cesium geospatial context, Unreal Mass AI crowds, and an in-vehicle interface prototype.</p><a class="text-link" href="/digital-twin/#mobility">See project <span>→</span></a></div>
        </article>
        <article class="project-card reveal">
          ${projectVisual("ar", "Augmented reality coursework", "03")}
          <div><p class="project-kicker">AR · UNITY · PHOTOGRAMMETRY</p><h3>Augmented reality studies</h3><p>Three coded AR experiences exploring interaction, spatial composition, and scanned assets.</p><a class="text-link" href="/digital-twin/#ar">See project <span>→</span></a></div>
        </article>
      </div>
    </section>

    <section class="section capability-band">
      <div class="section-heading reveal"><p class="eyebrow">02 / CAPABILITIES</p><h2>One practice.<br><em>Four outcomes.</em></h2></div>
      <p class="section-intro reveal">Capabilities describe what I can deliver; projects are the evidence. Grouping by outcome keeps the portfolio clear even when tools—especially Unreal Engine—serve more than one discipline.</p>
      <div class="capability-grid">
        ${[
          ["01", "Systems & Simulation", "Digital twins · real-time data · agent-based simulation · performance validation"],
          ["02", "Interactive & Spatial", "AR · Unity/C# · interaction design · photogrammetry · projection mapping"],
          ["03", "3D Production", "Modeling · texturing · rigging · animation · environments · motion capture"],
          ["04", "Research & Communication", "Experimental design · technical writing · teaching · visual analytics"],
        ].map(([num, title, text]) => `<article class="capability reveal"><span>${num}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  </main>`;

const digitalTwin = () => `
  <main>
    <section class="page-hero">
      <div class="reveal"><p class="eyebrow">PRIMARY PRACTICE / 01</p><h1>Digital Twin<br><em>& Interactive</em></h1></div>
      <div class="page-hero-aside reveal"><p>I prototype real-time systems where data, simulation, 3D environments, and human decisions meet.</p>${tagList(["Unreal Engine", "Unity / C#", "MQTT / JSON", "Cesium", "Mass AI", "Photogrammetry"])}</div>
    </section>
    <section class="case-study" id="livestock">
      ${projectVisual("twin", "Sustainable livestock digital twin", "01")}
      <div class="case-layout">
        <aside class="case-meta reveal"><p>ROLE</p><strong>Graduate Research Assistant<br>Digital Twin Developer</strong><p>CONTEXT</p><strong>AI for Sustainable Livestock System Lab<br>Texas A&M University</strong><p>STATUS</p><strong>Research in progress · 2025—Present</strong></aside>
        <article class="case-copy reveal"><p class="eyebrow">CASE STUDY 01</p><h2>Making methane simulation visible in real time.</h2><p class="lead">A two-way digital twin prototype that brings agent-based cattle methane simulation into an interactive Unreal Engine environment.</p><h3>The challenge</h3><p>Complex model outputs are difficult for non-technical stakeholders to inspect. The project explores how synchronized 3D visualization can make animal-level behavior and emissions easier to understand and evaluate.</p><h3>My contribution</h3><p>I developed the Unreal Engine environment and connected it to simulations running in Google Colab using MQTT and JSON. I designed the streaming logic, synchronized feedback, interactive visualizations, and performance benchmarks while contributing to the research manuscript and guiding five undergraduate co-authors.</p><div class="process-row"><span>SIMULATE<small>Agent-based model</small></span><b>→</b><span>STREAM<small>MQTT · JSON</small></span><b>→</b><span>VISUALIZE<small>Unreal Engine</small></span><b>→</b><span>EVALUATE<small>Benchmarks</small></span></div>${tagList(["Unreal Engine", "Blueprints / C++", "Google Colab", "MQTT", "JSON", "Visual analytics"])}</article>
      </div>
    </section>
    <section class="case-study compact" id="mobility">
      ${projectVisual("mobility", "Connected mobility digital twin", "02")}
      <div class="case-layout"><aside class="case-meta reveal"><p>ROLE</p><strong>Digital Design Intern</strong><p>ORGANIZATION</p><strong>ENDEAVR Institute</strong><p>YEAR</p><strong>2025</strong></aside><article class="case-copy reveal"><p class="eyebrow">CASE STUDY 02</p><h2>Connected mobility, from landscape to interface.</h2><p class="lead">An interactive prototype pairing geospatial context and crowd simulation with a three-mode in-vehicle UX concept.</p><p>I imported Google Earth data through Cesium, drew custom movement paths, and simulated crowds with Unreal Mass AI. In parallel, I translated technical requirements into wireframes for Self-driving, AI Training, and AI Driving modes, supported by a cohesive visual language.</p>${tagList(["Unreal Engine", "Cesium", "Mass AI", "UX/UI", "Crowd simulation"])}</article></div>
    </section>
    <section class="case-study compact" id="ar">
      ${projectVisual("ar", "Augmented reality studies", "03")}
      <div class="case-layout"><aside class="case-meta reveal"><p>FORMAT</p><strong>Three coded assignments</strong><p>FOCUS</p><strong>AR interaction & spatial storytelling</strong><p>MEDIA</p><strong>Video links coming soon</strong></aside><article class="case-copy reveal"><p class="eyebrow">PROJECT COLLECTION 03</p><h2>Augmented reality studies.</h2><p class="lead">A three-part Unity series investigating how digital content can respond to real-world space.</p><p>I programmed the experiences in C# using Unity. The third assignment extends the pipeline with objects captured through photogrammetry, combining asset acquisition, optimization, interaction, and presentation.</p>${tagList(["Unity", "C#", "AR", "Photogrammetry", "Spatial interaction"])}</article></div>
    </section>
  </main>`;

const generalist = () => `
  <main>
    <section class="page-hero generalist-hero">
      <div class="reveal"><p class="eyebrow">SPECIALIST PORTFOLIO / DIRECT LINK</p><h1>3D<br><em>Generalist</em></h1></div>
      <div class="page-hero-aside reveal"><p>Real-time-ready environments and assets, built with a full understanding of the 3D production pipeline.</p>${tagList(["Unreal Engine", "Maya", "Substance 3D Painter", "ZBrush", "Blender", "MotionBuilder"])}</div>
    </section>
    <section class="reel-panel section">
      <div class="reel-frame reveal"><div class="reel-title"><span>2026</span><strong>3D GENERALIST<br>SHOWREEL</strong><small>VIDEO PLACEHOLDER</small></div>${icons.play}</div>
      <div class="reel-copy reveal"><p class="eyebrow">REEL BREAKDOWN</p><h2>Environment, asset,<br><em>and motion craft.</em></h2><p>This focused page leads with Unreal Engine, Maya, and Substance 3D Painter for 3D Generalist applications. Engineering and research remain accessible through the navigation without competing with the visual work.</p></div>
    </section>
    <section class="section production-pipeline">
      <div class="section-heading reveal"><p class="eyebrow">01 / PRODUCTION PIPELINE</p><h2>From blockout<br><em>to real time.</em></h2></div>
      <div class="pipeline-grid">
        ${[
          ["MODEL", "Maya · 3ds Max · Blender", "Hard-surface and organic modeling from reference or real-world imagery."],
          ["SCULPT + UV", "ZBrush · Maya", "High-resolution form development, retopology, UV remapping, and asset preparation."],
          ["TEXTURE", "Substance 3D Painter", "Material definition and PBR texture production for believable surfaces."],
          ["RIG + ANIMATE", "Maya · MotionBuilder", "Rigging, skin weighting, keyframe animation, and motion-capture workflows."],
          ["ASSEMBLE", "Unreal Engine", "Environment composition, lighting, interaction, optimization, and presentation."],
        ].map(([title, tools, desc], i) => `<article class="pipeline-card reveal"><span>0${i + 1}</span><h3>${title}</h3><strong>${tools}</strong><p>${desc}</p></article>`).join("")}
      </div>
    </section>
    <section class="section gallery-section">
      <div class="section-heading reveal"><p class="eyebrow">02 / SELECTED 3D WORK</p><h2>Gallery incoming.</h2></div>
      <p class="section-intro reveal">Final stills and project films will be placed here after media selection. Each entry will show the visual result first, followed by role, tools, pipeline, and a concise breakdown.</p>
      <div class="gallery-grid">${["ENVIRONMENT / UNREAL", "ASSET / MAYA + SUBSTANCE", "ANIMATION / MAYA", "PHOTOGRAMMETRY / REAL-TIME"].map((label, i) => `<div class="gallery-placeholder reveal"><span>0${i + 1}</span><strong>${label}</strong><small>MEDIA PLACEHOLDER</small></div>`).join("")}</div>
    </section>
  </main>`;

const research = () => `
  <main>
    <section class="page-hero research-hero">
      <div class="reveal"><p class="eyebrow">RESEARCH PRACTICE / 03</p><h1>Research<br><em>& Publications</em></h1></div>
      <div class="page-hero-aside reveal"><p>I study how real-time visualization and digital twins can make scientific systems more legible and actionable.</p>${tagList(["Digital twins", "Visual analytics", "Sustainability", "Simulation", "Technical writing"])}</div>
    </section>
    <section class="section publication-list">
      <article class="publication featured-publication reveal">
        <div class="publication-image"><span>RESEARCH FIGURE PLACEHOLDER</span><div class="figure-lines"></div></div>
        <div class="publication-copy"><p class="pub-status">MANUSCRIPT IN PROGRESS · 2025—PRESENT</p><h2>Digital twin visualization for sustainable livestock systems</h2><p>Research exploring the integration of agent-based methane simulation, real-time data exchange, and interactive Unreal Engine visualization for animal science and sustainability decision-making.</p><dl><div><dt>Contribution</dt><dd>Digital twin development, interaction design, performance benchmarking, technical writing, undergraduate research leadership</dd></div><div><dt>Affiliation</dt><dd>AI for Sustainable Livestock System Lab · Texas A&M University</dd></div></dl><p class="note">Formal title, author list, figures, and publication link will be added when approved for public release.</p></div>
      </article>
      <article class="publication text-publication reveal"><div><span class="pub-number">02</span><p class="pub-status">BOOK CHAPTER · CONTRIBUTOR</p></div><div><h2>Artificial Intelligence in Veterinary and Animal Science</h2><p><em>Principles, Applications, and Future Directions</em></p><p>Technical writing contribution developed with Animal Science doctoral researchers, including digital twin perspectives and applications.</p></div></article>
      <article class="publication text-publication reveal"><div><span class="pub-number">03</span><p class="pub-status">TEACHING & KNOWLEDGE TRANSFER</p></div><div><h2>Visualization education</h2><p>Graduate teaching across Visual Studies Studio, Principles of Design, and History of Modern Art, including specialized instruction in Unreal Engine, photogrammetry, and 3D design principles.</p></div></article>
    </section>
  </main>`;

const about = () => `
  <main>
    <section class="page-hero about-hero">
      <div class="reveal"><p class="eyebrow">PROFILE / 04</p><h1>Skylar<br><em>La</em></h1></div>
      <div class="page-hero-aside reveal"><p>A visualization researcher and developer working across simulation, real-time 3D, and design—now open to opportunities throughout Vietnam.</p><a class="button button-primary" href="mailto:lathuytrang16@tamu.edu?subject=Portfolio%20inquiry">Contact me ${icons.arrow}</a></div>
    </section>
    <section class="section about-layout">
      <div class="portrait-placeholder reveal"><span>SL</span><small>PORTRAIT PLACEHOLDER</small></div>
      <div class="about-copy reveal"><p class="eyebrow">ABOUT</p><h2>I translate between<br><em>technical and visual worlds.</em></h2><p class="lead">My path through economics, multimedia, and visualization shaped a practice that combines analytical thinking with hands-on production.</p><p>I hold an MS in Visualization from Texas A&M University, an Advanced Diploma in Multimedia Communications from Arena Multimedia, and a bachelor’s degree in International Economics from Foreign Trade University. My work spans research laboratories, mobility innovation, VR production, and university teaching.</p><p>I am particularly interested in digital twin and real-time visualization roles, followed by applied visualization research and focused 3D Generalist opportunities.</p></div>
    </section>
    <section class="section resume-section">
      <div class="section-heading reveal"><p class="eyebrow">01 / EXPERIENCE</p><h2>Selected<br><em>experience.</em></h2></div>
      <div class="timeline">
        ${[
          ["2025—PRESENT", "Graduate Research Assistant", "AI for Sustainable Livestock System Lab · Texas A&M", "Real-time digital twin development, methane simulation visualization, performance benchmarking, research writing, and undergraduate mentorship."],
          ["2023—2025", "Graduate Teaching Assistant", "Visualization Department · Texas A&M", "Instruction and course support across design, art history, and visual studies; specialized teaching in Unreal Engine, photogrammetry, and 3D principles."],
          ["2025", "Digital Design Intern", "ENDEAVR Institute", "Interactive mobility digital twin prototype, Unreal Engine crowd simulation, geospatial integration, and in-vehicle UX/UI."],
          ["2024", "3D Artist Intern", "Vietnam VR Tech Company", "Modeling, texturing, rigging, skin weighting, animation, game testing, and technical localization."],
        ].map(([year, role, org, desc]) => `<article class="timeline-item reveal"><time>${year}</time><div><h3>${role}</h3><strong>${org}</strong><p>${desc}</p></div></article>`).join("")}
      </div>
    </section>
    <section class="section education-section">
      <div class="section-heading reveal"><p class="eyebrow">02 / EDUCATION & RECOGNITION</p><h2>Three disciplines.<br><em>One perspective.</em></h2></div>
      <div class="education-grid">
        <article class="reveal"><span>2025</span><h3>MS · Visualization</h3><p>Texas A&M University</p><small>GPR 3.86 · Distinguished Student Award</small></article>
        <article class="reveal"><span>2023</span><h3>Advanced Diploma · Multimedia Communications</h3><p>Arena Multimedia · Hanoi</p><small>Distinction</small></article>
        <article class="reveal"><span>2023</span><h3>BA · International Economics</h3><p>Foreign Trade University · Hanoi</p><small>Distinction</small></article>
      </div>
      <p class="privacy-note reveal">A public résumé PDF will be added after phone and address details are reviewed for privacy.</p>
    </section>
  </main>`;

const pages = { home, "digital-twin": digitalTwin, "3d-generalist": generalist, research, about };

document.getElementById("app").innerHTML = `${header()}${pages[page] ? pages[page]() : home()}${footer()}<div class="cursor-glow" aria-hidden="true"></div>`;

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"));
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.setProperty("--x", `${event.clientX}px`);
  glow.style.setProperty("--y", `${event.clientY}px`);
});
