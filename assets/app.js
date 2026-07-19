const page = document.body.dataset.page || "home";

const navItems = [
  ["home", "Home", "/"],
  ["digital-twin", "Programming & System", "/digital-twin/"],
  ["3d-generalist", "3D Generalist", "/3d-generalist/"],
  ["ui-ux", "UI/UX", "/ui-ux/"],
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

const optimizedCoverPaths = {
  "/images/iCare.png": "/assets/covers/icare.webp",
  "/images/Poco%20Hotel.png": "/assets/covers/poco-hotel.webp",
  "/images/Paper%201%20-%20Digital%20Twin.png": "/assets/covers/paper-1.webp",
  "/images/Paper%202%20-%20Guangdong%20Lion%20Dance.png": "/assets/covers/paper-2.webp",
  "/images/Portrait.JPG": "/assets/covers/portrait.webp",
};

const projectCover = (src, alt, className = "") => `
  <figure class="project-cover ${className}"><img src="${optimizedCoverPaths[src] || src}" alt="${alt}" loading="lazy" decoding="async"></figure>`;

const tagList = (items) => `<ul class="tag-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const galleryImage = (src, alt, className = "") => `
  <button class="gallery-image ${className}" type="button" data-full="${src}" data-alt="${alt}" aria-label="Open ${alt}">
    <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
    <span>View full image ↗</span>
  </button>`;

const videoCard = (id, title, meta) => `
  <article class="video-card reveal">
    <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div><p class="project-kicker">${meta}</p><h3>${title}</h3></div>
  </article>`;

const threeDProjects = [
  {
    number: "01",
    title: "Still-Life Look Development",
    kicker: "LOOK DEVELOPMENT · RENDERING & SHADING",
    description: "Still-life look development created as the final project for the Rendering & Shading class taught by Caleb Kicklighter and Jeff Nichols from DreamWorks Animation. Models were provided by the instructors; I developed the materials, lighting, mesh optimization, and final presentation.",
    tags: ["Substance 3D Painter", "Maya", "RenderMan", "Look development"],
    images: [
      ["/assets/3d/01-lookdev-final.webp", "Final warmly lit composition of the still-life scene"],
      ["/assets/3d/01-lookdev-vdev.webp", "Material-development and rig-lighting stage of the still-life scene"],
      ["/assets/3d/01-lookdev-greyscale.webp", "Greyscale still-life scene with skull, lamp, violin, books, and drawing tools"],
    ],
  },
  {
    number: "02",
    title: "Outdoor Messenger Bag",
    kicker: "REALISTIC TEXTURING · SCHOOL ASSIGNMENT",
    description: "Texturing for an Outdoor Messenger Bag created for a school assignment in a realistic art style.",
    tags: ["Substance 3D Painter", "Maya", "RenderMan", "Realistic"],
    images: [
      ["/assets/3d/02-messenger-01.webp", "Outdoor messenger bag front material detail"],
      ["/assets/3d/02-messenger-02.webp", "Outdoor messenger bag side pocket and hardware detail"],
      ["/assets/3d/02-messenger-03.webp", "Outdoor messenger bag front view"],
      ["/assets/3d/02-messenger-04.webp", "Outdoor messenger bag three-quarter view"],
      ["/assets/3d/02-messenger-05.webp", "Outdoor messenger bag side view"],
      ["/assets/3d/02-messenger-06.webp", "Outdoor messenger bag rear view"],
    ],
  },
  {
    number: "03",
    title: "Coffee Grinder",
    kicker: "REALISTIC TEXTURING · SCHOOL ASSIGNMENT",
    description: "Texturing for a Coffee Grinder created for a school assignment in a realistic art style.",
    tags: ["Substance 3D Painter", "Maya", "RenderMan", "Realistic"],
    images: [
      ["/assets/3d/03-grinder-01.webp", "Vintage coffee grinder reference and rendered comparison"],
      ["/assets/3d/03-grinder-02.webp", "Vintage coffee grinder front three-quarter view"],
      ["/assets/3d/03-grinder-03.webp", "Vintage coffee grinder wood and metal detail"],
      ["/assets/3d/03-grinder-04.webp", "Vintage coffee grinder front view"],
      ["/assets/3d/03-grinder-05.webp", "Vintage coffee grinder side view"],
      ["/assets/3d/03-grinder-06.webp", "Vintage coffee grinder opposite side view"],
      ["/assets/3d/03-grinder-07.webp", "Vintage coffee grinder rear view"],
    ],
  },
];

const assetStudies = [
  ["04", "Duckbill Ground Clamp", "Model for a factory-safety AR game created during my VRTech internship. Realistic art style · Maya · Substance 3D Painter.", "/assets/3d/04-can-opener-01.webp", "/assets/3d/04-can-opener-02.webp"],
  ["05", "Big-Headed Monk Mask / Dai Tou Fut", "Illustrated prop for my capstone research on using AR in the Guangdong Lion Dance · Maya · Substance 3D Painter.", "/assets/3d/05-mask-01.webp", "/assets/3d/05-mask-02.webp"],
  ["06", "Lion Dance Drum (Da Shi Gu 大狮鼓)", "Illustrated prop for my master's capstone research on using AR in the Guangdong Lion Dance. Realistic art style · Maya · Substance 3D Painter.", "/assets/3d/06-drum-01.webp", "/assets/3d/06-drum-02.webp"],
  ["07", "Gong and Mallet", "Illustrated prop for my capstone research on using AR in the Guangdong Lion Dance. Realistic art style · Maya · Substance 3D Painter.", "/assets/3d/07-gong-01.webp", "/assets/3d/07-gong-02.webp"],
  ["08", "Lamppost", "Model created for a 3D Modeling class. Stylized art style · 3ds Max.", "/assets/3d/08-lantern-01.webp", "/assets/3d/08-lantern-02.webp"],
];

const header = () => `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Skylar Trang La, home">
      <span class="brand-mark">SL</span>
      <span>Skylar Trang La<small>Digital Twin · Visualization</small></span>
    </a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span><span></span><em>Menu</em>
    </button>
    <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
      ${navItems.map(([id, label, href]) => `<a href="${href}" ${page === id ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
  </header>`;

const footer = () => `
  <footer class="site-footer" id="contact">
    <div>
      <p class="eyebrow">OPEN TO OPPORTUNITIES · VIETNAM</p>
      <h2>Let’s build something<br><em>that behaves.</em></h2>
    </div>
    <div class="footer-links">
      <a href="mailto:lathuytrang.ftu@gmail.com">lathuytrang.ftu@gmail.com ${icons.arrow}</a>
      <a href="https://github.com/skylartrangla" target="_blank" rel="noreferrer">GitHub ${icons.arrow}</a>
      <a href="https://www.linkedin.com/in/skylar-trang-la/" target="_blank" rel="noreferrer">LinkedIn ${icons.arrow}</a>
    </div>
    <p class="copyright">© ${new Date().getFullYear()} Skylar Trang La · 3D Generalist · Digital Twin Developer · Gaming & AR Developer · Visualization Researcher</p>
  </footer>`;

const home = () => `
  <main>
    <section class="hero home-hero">
      <div class="hero-copy reveal">
        <p class="eyebrow">DIGITAL TWIN DEVELOPER · VISUALIZATION RESEARCHER · 3D GENERALIST</p>
        <h1>I see<br>that <em>the whole system.</em></h1>
        <p class="hero-summary">My multidisciplinary background allows me to approach projects from four connected perspectives—from strategic reasoning and research to technical development and visual execution.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/digital-twin/">Explore digital twin work ${icons.arrow}</a>
          <a class="text-link" href="/3d-generalist/">View 3D portfolio <span>→</span></a>
        </div>
      </div>
      <div class="hero-system reveal" aria-label="Abstract real-time system visualization">
        <div class="system-orbit orbit-one"></div><div class="system-orbit orbit-two"></div>
        <div class="system-node node-a">VISUALIZE<small>3D GENERALIST</small></div>
        <div class="system-node node-b">BUILD<small>DEVELOPER</small></div>
        <div class="system-node node-c">THINK<small>ECONOMIST</small></div>
        <div class="system-node node-d">INVESTIGATE<small>RESEARCHER</small></div>
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
        ${projectCover("/assets/covers/digital-twin.webp", "BovineTwin sustainable livestock digital twin cover")}
        <div class="project-copy">
          <p class="project-kicker">FLAGSHIP · RESEARCH & ENGINEERING</p>
          <h3>Real-time digital twin for sustainable livestock systems</h3>
          <p>An individual-level livestock framework pairing a Mesa agent-based methane-energy model with an interactive Unreal Engine 5.4 interface and a target MQTT–JSON sensor architecture.</p>
          ${tagList(["Unreal Engine 5.4", "Mesa / Python", "MQTT / JSON architecture", "Agent-based simulation"])}
          <a class="text-link" href="/digital-twin/#livestock">View case study <span>→</span></a>
        </div>
      </article>
      <div class="project-grid">
        <article class="project-card reveal">
          ${projectCover("/assets/covers/endeavr.webp", "ENDEAVR connected mobility digital twin cover")}
          <div><p class="project-kicker">DIGITAL TWIN · UX/UI</p><h3>Connected mobility simulation</h3><p>Cesium geospatial context, Unreal Mass AI crowds, and an in-vehicle interface prototype.</p><a class="text-link" href="/digital-twin/#mobility">See project <span>→</span></a></div>
        </article>
        <article class="project-card reveal">
          ${projectCover("/assets/covers/ar-projects.webp", "Three Unity augmented reality projects")}
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
          ["03", "Interface & Experience", "Wireframes · interaction flows · automotive HMI · visual systems · prototyping"],
          ["04", "3D Production", "Modeling · texturing · rigging · animation · environments · motion capture"],
          ["05", "Research & Communication", "Experimental design · technical writing · teaching · visual analytics"],
        ].map(([num, title, text]) => `<article class="capability reveal"><span>${num}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  </main>`;

const digitalTwin = () => `
  <main>
    <section class="page-hero">
      <div class="reveal"><p class="eyebrow">PRIMARY PRACTICE / 01</p><h1>Digital Twin<br><em>& Interactive</em></h1></div>
      <div class="page-hero-aside reveal"><p>I prototype real-time systems where data, simulation, 3D environments, and human decisions meet.</p>${tagList(["Unreal Engine / Blueprints Visual Scripting", "Unity / C#", "MQTT / JSON", "Cesium", "Mass AI", "Maya", "Substance Painter"])}</div>
    </section>
    <section class="case-study" id="livestock">
      ${projectCover("/assets/covers/digital-twin-2.webp", "BovineTwin digital twin development process", "case-cover")}
      <div class="case-layout">
        <aside class="case-meta reveal"><p>ROLE</p><strong>Graduate Research Assistant<br>Digital Twin Developer</strong><p>CONTEXT</p><strong>AI for Sustainable Livestock System Lab<br>Texas A&M University</strong><p>STATUS</p><strong>Research in progress · 2025—Present</strong></aside>
        <article class="case-copy reveal"><p class="eyebrow">CASE STUDY 01</p><h2>Making methane-energy partitioning visible by animal.</h2><p class="lead">BovineTwin combines an individual-level Mesa agent-based model with an interactive Unreal Engine 5.4 feedlot interface.</p><h3>The challenge</h3><p>Herd averages hide which animals drive methane-associated energy loss. The framework calibrates animal-level models and makes individual trajectories and mitigation scenarios inspectable in 3D.</p><h3>My contribution</h3><p>As a shared first author, I contributed conceptualization, methodology, software, data curation, visualization, investigation, writing, supervision, and project administration. I created 3D assets and developed the Unreal Engine interface and the target MQTT–JSON architecture. In this proof of concept, model outputs were transferred through CSV and Unreal DataTables; operational live-sensor validation is future work.</p><div class="process-row"><span>CALIBRATE<small>Individual records</small></span><b>→</b><span>SIMULATE<small>Mesa · Python</small></span><b>→</b><span>VISUALIZE<small>Unreal Engine 5.4</small></span><b>→</b><span>COMPARE<small>Mitigation scenarios</small></span></div>${tagList(["Unreal Engine 5.4", "Mesa / Python", "MQTT / JSON architecture", "CSV / DataTables", "3D Visualization"])}</article>
      </div>
    </section>
    <section class="case-study compact" id="mobility">
      ${projectCover("/assets/covers/endeavr-2.webp", "ENDEAVR connected mobility and automotive interface work", "case-cover")}
      <div class="case-layout"><aside class="case-meta reveal"><p>ROLE</p><strong>Digital Design Intern</strong><p>ORGANIZATION</p><strong>ENDEAVR Institute</strong><p>YEAR</p><strong>2025</strong></aside><article class="case-copy reveal"><p class="eyebrow">CASE STUDY 02</p><h2>Connected mobility, from landscape to interface.</h2><p class="lead">An interactive prototype pairing geospatial context and crowd simulation with a three-mode in-vehicle UX concept.</p><p>I imported Google Earth data through Cesium, drew custom movement paths, and simulated crowds with Unreal Mass AI. In parallel, I translated technical requirements into wireframes for Self-driving, AI Training, and AI Driving modes, supported by a cohesive visual language.</p>${tagList(["Unreal Engine", "Cesium", "Mass AI", "UX/UI", "Crowd simulation"])}</article></div>
    </section>
    <section class="case-study compact" id="ar">
      <div class="case-layout"><aside class="case-meta reveal"><p>FORMAT</p><strong>Three coded assignments</strong><p>FOCUS</p><strong>AR interaction & spatial storytelling</strong><p>MEDIA</p><strong>Three game projects</strong></aside><article class="case-copy reveal"><p class="eyebrow">PROJECT COLLECTION 03</p><h2>Augmented reality studies.</h2><p class="lead">A three-part Unity series investigating how digital content can respond to real-world space.</p><p>I programmed the experiences in C# using Unity. The third assignment extends the pipeline with objects captured through photogrammetry, combining asset acquisition, optimization, interaction, and presentation.</p>${tagList(["Unity", "C#", "AR", "Photogrammetry", "Spatial interaction"])}</article></div>
      <div class="project-video-grid">
        ${videoCard("MfyWqeeUMc8", "TowAR", "3D AR · UNITY · C#")}
        ${videoCard("lXWZT_A-ezY", "MushJump", "3D AR · UNITY · C#")}
        ${videoCard("Nowm-IpWCnc", "WardAR", "3D AR · UNITY · C# · PHOTOGRAMMETRY")}
      </div>
    </section>
    <section class="section interactive-films">
      <div class="section-heading reveal"><p class="eyebrow">04 / INTERACTIVE PROJECT FILMS</p><h2>Code-driven<br><em>worlds in motion.</em></h2></div>
      <div class="project-video-grid">
        ${videoCard("9jZooyXzVAA", "A Miraculous Jungle", "3D PROGRAMMING · HOUDINI · MAYA · UNREAL ENGINE")}
        ${videoCard("KQk7JzZaLH0", "SamSong", "2D & XR GAMING · LEADER · INTERACTIVE DEVELOPMENT")}
      </div>
    </section>
  </main>`;

const generalist = () => `
  <main>
    <section class="page-hero generalist-hero">
      <div class="reveal"><p class="eyebrow">SPECIALIST PORTFOLIO / DIRECT LINK</p><h1>3D<br><em>Generalist</em></h1></div>
      <div class="page-hero-aside reveal"><p>Gaming and animation environmental assets, built with a full understanding of modeling, UV unwrapping, look development, optimization, and the 3D production pipeline.</p>${tagList(["Unreal Engine", "Maya", "Substance 3D Painter", "3ds Max", "RenderMan", "XGen", "Adobe"])}</div>
    </section>
    <section class="section generalist-films">
      <div class="section-heading reveal"><p class="eyebrow">3D GENERALIST FILMS</p><h2>Environment, asset,<br><em>and motion craft.</em></h2></div>
      <p class="section-intro reveal">Animation, layout, motion-capture, environment, and asset-turntable work—separated here from the programming and AR films shown in Digital Twin & Interactive.</p>
      <div class="project-video-grid">
        ${videoCard("Iomz45cYaFY", "The Guangdong Lion Dance", "SOLO CREATOR · MAYA · XGEN · SUBSTANCE PAINTER · UNREAL ENGINE · QUICK MAGIC AI · UNITY")}
        ${videoCard("GVcU2PL8bAs", "Shell You Be Mine?", "LAYOUT ARTIST · UNREAL ENGINE")}
        ${videoCard("0BbA_Cn4XRs", "Arrogance vs. Accuracy", "SOLO CREATOR · MOTIONBUILDER · MAYA · UNREAL ENGINE")}
        ${videoCard("qLj_8T69-k8", "Arctic Appetite", "ENVIRONMENT MODELER AND LAYOUT ARTIST · MAYA · SUBSTANCE PAINTER · ADOBE PREMIERE PRO")}
        ${videoCard("mR1aZ-ybPnw", "The Seal & The Orcas", "ANIMATOR AND COMPOSITION DESIGNER · MAYA · ADOBE PREMIERE PRO")}
      </div>
      <a class="text-link film-playlist-link" href="https://www.youtube.com/playlist?list=PL1tX9HxUBcES6xAiVwDfSMVhmwTR33M7Z" target="_blank" rel="noreferrer">Open full YouTube playlist <span>↗</span></a>
    </section>
    <section class="section production-pipeline">
      <div class="section-heading reveal"><p class="eyebrow">01 / PRODUCTION PIPELINE</p><h2>From blockout<br><em>to real time.</em></h2></div>
      <div class="pipeline-grid">
        ${[
          ["MODEL", "Maya · 3ds Max · Blender", "Hard-surface and organic modeling from reference or real-world imagery."],
          ["SCULPT + UV", "ZBrush · Maya", "High-resolution form development, retopology, UV remapping, and asset preparation."],
          ["TEXTURE", "Substance 3D Painter", "Material definition and PBR texture production for believable surfaces."],
          ["RIG + ANIMATE", "Maya · MotionBuilder", "Rigging, skin weighting, keyframe animation, and motion-capture workflows."],
          ["ASSEMBLE", "Unreal Engine", "Environment composition, lighting, layout, interaction, optimization, and presentation."],
        ].map(([title, tools, desc], i) => `<article class="pipeline-card reveal"><span>0${i + 1}</span><h3>${title}</h3><strong>${tools}</strong><p>${desc}</p></article>`).join("")}
      </div>
    </section>
    <section class="section gallery-section">
      <div class="section-heading reveal"><p class="eyebrow">02 / SELECTED 3D WORK</p><h2>Modeling, materials,<br><em>and look development.</em></h2></div>
      <article class="selected-turntable reveal">
        <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/H4xwnHa51qI" title="3D Animation: Turntable" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div><p class="project-kicker">3D ANIMATION · TURNTABLE</p><h3>Selected assets in rotation.</h3><p>A turntable overview of the modeling, texturing, and presentation work documented below.</p></div>
      </article>
      <div class="portfolio-projects">
        ${threeDProjects.map((project) => `<article class="portfolio-project" id="project-${project.number}">
          <header class="project-header reveal"><span>${project.number}</span><div><p class="project-kicker">${project.kicker}</p><h3>${project.title}</h3><p>${project.description}</p>${tagList(project.tags)}</div></header>
          <div class="project-gallery project-gallery-${project.images.length}">${project.images.map(([src, alt], i) => galleryImage(src, alt, i === 0 ? "gallery-hero" : "")).join("")}</div>
        </article>`).join("")}
      </div>
    </section>
    <section class="section asset-studies">
      <div class="section-heading reveal"><p class="eyebrow">03 / ASSET STUDIES</p><h2>Topology<br><em>to surface.</em></h2></div>
      <div class="asset-study-grid">${assetStudies.map(([number, title, description, wireframe, surfaced]) => `<article class="asset-study reveal"><header><span>${number}</span><div><h3>${title}</h3><p>${description}</p></div></header><div>${galleryImage(wireframe, `${title} wireframe`)}${galleryImage(surfaced, `${title} surfaced render`)}</div></article>`).join("")}</div>
    </section>
    <dialog class="image-viewer" id="image-viewer"><button type="button" aria-label="Close full image">×</button><img alt=""><p></p></dialog>
  </main>`;

const uiUx = () => `
  <main>
    <section class="page-hero ui-hero">
      <div class="reveal"><p class="eyebrow">INTERFACE PRACTICE / 03</p><h1>UI<br><em>& UX</em></h1></div>
      <div class="page-hero-aside reveal"><p>I organize complex interactions into clear flows, wireframes, and visual systems for mobility, care, and hospitality experiences.</p>${tagList(["Wireframing", "Interaction flows", "Automotive HMI", "Prototyping", "Visual design"])}</div>
    </section>
    <section class="section ui-case-featured" id="automotive">
      ${projectCover("/assets/covers/endeavr.webp", "WeDrive automotive HMI wireframe cover", "ui-cover reveal")}
      <article class="ui-case-copy reveal"><p class="eyebrow">01 / ENDEAVR INSTITUTE · 2025</p><h2>WeDrive: three-mode in-vehicle interface.</h2><p class="lead">A wireframe system translating technical documentation into approachable flows for Self-driving, AI Training, and AI Driving modes.</p><p>I mapped the product logic, organized information across three operating states, and established a cohesive visual direction. The UI work accompanied an Unreal Engine mobility prototype using Cesium and Mass AI, giving me experience across both interface and 3D implementation contexts.</p>${tagList(["Automotive HMI", "Wireframes", "Information architecture", "UX/UI", "Unreal Engine context"])}<a class="button button-primary" href="https://www.figma.com/proto/fnip6iH4PDqzlVgrygsrmi/WeDrive?page-id=129%3A989&node-id=129-990&p=f&viewport=711%2C133%2C0.06&t=MB5LuE9SWEGzhRQg-1&scaling=contain&content-scaling=fixed" target="_blank" rel="noreferrer">View WeDrive prototype ${icons.arrow}</a></article>
    </section>
    <section class="section ui-archive">
      <div class="section-heading reveal"><p class="eyebrow">02 / ARENA MULTIMEDIA</p><h2>Interface<br><em>case archive.</em></h2></div>
      <div class="ui-project-grid">
        <article class="ui-project reveal" id="icare">${projectCover("/images/iCare.png", "iCare mobile application and brand system cover", "ui-project-cover")}<div class="ui-project-copy"><p class="project-kicker">ARENA MULTIMEDIA · TEAM PROJECT</p><h3>iCare healthcare experience</h3><p>A healthcare experience developed across mobile UI/UX, brand direction, and a responsive coded website. The prototype begins with a bright blue onboarding system and extends into a complete iCare visual identity.</p><dl class="project-facts"><div><dt>Role</dt><dd>Project lead · UI/UX designer · Web coder</dd></div><div><dt>Deliverables</dt><dd>App prototype · Brand guideline · Static website</dd></div></dl><div class="project-actions"><a class="button button-primary" href="/icare/">Open coded website ${icons.arrow}</a><a class="text-link" href="https://www.figma.com/proto/CIkSlz6yesBMVov96lztob/iCare?page-id=0%3A1&node-id=283-123&starting-point-node-id=283%3A123&t=JmlaIZSLHfanwoXb-1" target="_blank" rel="noreferrer">App prototype <span>↗</span></a><a class="text-link" href="https://www.figma.com/proto/CIkSlz6yesBMVov96lztob/iCare?page-id=513%3A211&node-id=1028-79&p=f&viewport=557%2C990%2C0.13&t=0pPbxYnmsoM1kcNN-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1028%3A79" target="_blank" rel="noreferrer">Brand guideline <span>↗</span></a></div></div></article>
        <article class="ui-project reveal" id="poco-hotel">${projectCover("/images/Poco%20Hotel.png", "Poco Hotel UI and UX design cover", "ui-project-cover")}<div class="ui-project-copy"><p class="project-kicker">ARENA MULTIMEDIA · UI/UX</p><h3>Poco Hotel</h3><p>A hospitality interface study organizing discovery, room selection, and booking-oriented content into a clear and polished digital experience.</p><a class="button button-primary" href="https://www.figma.com/design/Ft4zFyA974fFyzoBz4myAV/Poco-Hotel-%7C-L%C3%A3-Th%E1%BB%8B-Thu%E1%BB%B3-Trang?node-id=119-91&t=Fm36u0iFP3eEHeyt-1" target="_blank" rel="noreferrer">View Figma design ${icons.arrow}</a></div></article>
      </div>
    </section>
  </main>`;

const research = () => `
  <main>
    <section class="page-hero research-hero">
      <div class="reveal"><p class="eyebrow">RESEARCH PRACTICE / 04</p><h1>Research<br><em>& Publications</em></h1></div>
      <div class="page-hero-aside reveal"><p>I study how real-time 3D visualization and digital twins can be applied across disciplines to support and improve people's lives.</p>${tagList(["Digital twins", "Visualization", "3D", "Simulation", "Applied science"])}</div>
    </section>
    <section class="section publication-list">
      <article class="publication featured-publication reveal">
        ${projectCover("/images/Paper%201%20-%20Digital%20Twin.png", "BovineTwin research paper cover", "publication-cover")}
        <div class="publication-copy"><p class="pub-status">PAPER 01 · UNDER REVIEW · COMPUTERS AND ELECTRONICS IN AGRICULTURE</p><h2>BovineTwin: An Individual-Level 3D Digital Twin Framework for Methane-Energy Partitioning in Beef Cattle</h2><p class="lead">A functional proof of concept that calibrates per-animal energy models and renders methane loss and mitigation scenarios through an interactive Unreal Engine 5.4 feedlot.</p><p>The framework integrates a Mesa-based agent model with an Unreal visualization layer and a target MQTT–JSON architecture for future live sensor deployment. It reframes enteric methane as measurable, potentially recoverable feed energy at the individual-animal level.</p><dl><div><dt>Authorship</dt><dd>Shared first author</dd></div><div><dt>Contribution</dt><dd>Conceptualization · Methodology · Software · Data curation · Visualization · Investigation · Writing · Supervision · Project administration</dd></div><div><dt>Affiliation</dt><dd>AI for Sustainable Livestock System Lab · Texas A&M University</dd></div></dl><div class="research-venues"><p>Presented or delivered at</p><ul><li>Viz-a-GoGo 2025 · Texas A&M University</li><li>Texas Digital Twin Symposium</li><li>8th EAAP International Symposium on Energy and Protein Metabolism and Nutrition</li><li>Student Research Week</li><li>Diversity in Science Symposium</li></ul></div></div>
      </article>
      <article class="publication featured-publication publication-reverse reveal">
        ${projectCover("/images/Paper%202%20-%20Guangdong%20Lion%20Dance.png", "Guangdong Lion Dance research paper cover", "publication-cover")}
        <div class="publication-copy"><p class="pub-status">PAPER 02 · MASTER'S CAPSTONE · ACCEPTED AT TEXAS A&M VISUALIZATION FALL RESEARCH SYMPOSIUM</p><h2>From Tradition to Technology: Preserving the Guangdong Lion Dance Through 3D Visualization and Augmented Reality</h2><p class="lead">A research-driven cultural preservation project combining historical scholarship, full-stack 3D production, AI-assisted workflows, and a Unity AR experience.</p><p>I reconstructed lion heads, team members, costumes, masks, and instruments as high-precision 3D assets, then designed an AR interface where audiences can explore their cultural meaning. The project addresses the scarcity of authentic Asian cultural assets and the limited use of AR in Asian museum experiences.</p><dl><div><dt>3D pipeline</dt><dd>Modeling & UVs · Texturing · Grooming · Rigging & animation · Lighting & real-time rendering</dd></div><div><dt>Interactive</dt><dd>Unity · Vuforia · AR programming · Educational interaction design</dd></div><div><dt>Software & AI</dt><dd>Maya · Substance 3D Painter · Unreal Engine · Unity · Character Creator 4 & 5 · Quick Magic AI</dd></div><div><dt>Recognition</dt><dd>Distinguished Student Award · Master of Science in Visualization</dd></div></dl><a class="button button-primary" href="https://canva.link/xustuzgkw5vy8lj" target="_blank" rel="noreferrer">View presentation ${icons.arrow}</a></div>
      </article>
    </section>
  </main>`;

const about = () => `
  <main>
    <section class="page-hero about-hero">
      <div class="reveal"><p class="eyebrow">PROFILE / 05</p><h1>Skylar<br><em>Trang La</em></h1></div>
      <div class="page-hero-aside reveal"><p>A visualization researcher and developer working across simulation, real-time 3D, and design. Now open to opportunities throughout Vietnam.</p><a class="button button-primary" href="#contact">Contact me <span aria-hidden="true">↓</span></a></div>
    </section>
    <section class="section about-layout">
      ${projectCover("/images/Portrait.JPG", "Portrait of Skylar La", "portrait-cover reveal")}
      <div class="about-copy reveal"><p class="eyebrow">ABOUT</p><h2>I translate between<br><em>technical and visual worlds.</em></h2><p class="lead">My path through economics, multimedia, and visualization shaped a practice that combines analytical thinking with hands-on production.</p><p>I hold a Master of Science in Visualization from Texas A&M University, an Advanced Diploma in Multimedia Communications from Arena Multimedia, and a bachelor’s degree in International Economics from Foreign Trade University. My work experience spans research laboratories, AR production, and university teaching related to the 3D field.</p><p>I am particularly interested in digital twin and real-time visualization roles, followed by applied visualization research and focused 3D Generalist opportunities.</p></div>
    </section>
    <section class="section resume-section">
      <div class="section-heading reveal"><p class="eyebrow">01 / EXPERIENCE</p><h2>Selected<br><em>experience.</em></h2></div>
      <div class="timeline">
        ${[
          ["2025—PRESENT", "Graduate Research Assistant", "AI for Sustainable Livestock System Lab · Texas A&M University · USA", "Real-time digital twin development, methane simulation visualization, performance benchmarking, research writing, and undergraduate mentorship."],
          ["2023—2025", "Graduate Teaching Assistant", "Visualization Department · Texas A&M University · USA", "Instruction and course support across design, art history, and visual studies; specialized teaching in Unreal Engine, photogrammetry, and 3D principles."],
          ["2025", "Digital Design Intern", "ENDEAVR Institute · USA", "Interactive mobility digital twin prototype, Unreal Engine crowd simulation, geospatial integration, and in-vehicle UX/UI."],
          ["2024", "3D Artist Intern", "VR Tech Company · Vietnam", "Modeling, texturing, rigging, skin weighting, animation, game testing, and technical localization."],
        ].map(([year, role, org, desc]) => `<article class="timeline-item reveal"><time>${year}</time><div><h3>${role}</h3><strong>${org}</strong><p>${desc}</p></div></article>`).join("")}
      </div>
    </section>
    <section class="section education-section">
      <div class="section-heading reveal"><p class="eyebrow">02 / EDUCATION & RECOGNITION</p><h2>Four disciplines.<br><em>One perspective.</em></h2></div>
      <div class="education-grid">
        <article class="reveal"><span>2025</span><h3>MS · Visualization</h3><p>Texas A&M University · USA</p><small>GPR 3.86 · Distinguished Student Award</small></article>
        <article class="reveal"><span>2023</span><h3>Advanced Diploma · Multimedia Communications</h3><p>Arena Multimedia · Vietnam</p><small>Distinction</small></article>
        <article class="reveal"><span>2023</span><h3>BA · International Economics</h3><p>Foreign Trade University · Vietnam</p><small>Distinction</small></article>
        <article class="reveal"><span>2025</span><h3>IELTS Academic</h3><p>Overall 7.5 · CEFR C1</p><small>Listening 8.5 · Reading 8.5 · Writing 6.5 · Speaking 6.5<br>Tested 09 August 2025 · Full official report available upon request</small></article>
      </div>
      <div class="privacy-note reveal">
        <p>Download my two-page résumé for a concise overview of my experience, research, technical skills, education, and selected recognition.</p>
        <a class="button button-primary" href="/assets/resume/Skylar Trang La Resume.pdf" target="_blank" rel="noreferrer">View résumé PDF ${icons.arrow}</a>
      </div>
    </section>
  </main>`;

const pages = { home, "digital-twin": digitalTwin, "3d-generalist": generalist, "ui-ux": uiUx, research, about };

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

const imageViewer = document.querySelector("#image-viewer");
document.querySelectorAll("[data-full]").forEach((button) => button.addEventListener("click", () => {
  if (!imageViewer) return;
  const viewerImage = imageViewer.querySelector("img");
  viewerImage.src = button.dataset.full;
  viewerImage.alt = button.dataset.alt;
  imageViewer.querySelector("p").textContent = button.dataset.alt;
  imageViewer.showModal();
}));
imageViewer?.querySelector("button")?.addEventListener("click", () => imageViewer.close());
imageViewer?.addEventListener("click", (event) => {
  if (event.target === imageViewer) imageViewer.close();
});
