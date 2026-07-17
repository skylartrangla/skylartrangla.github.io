# Skylar La — Portfolio

A hand-coded, responsive portfolio for digital twin development, visualization research, interactive systems, and 3D production.

## Architecture

The site is dependency-free and built with semantic HTML, modern CSS, and modular vanilla JavaScript. Shared navigation, page content, project cards, and transitions are rendered from a single source in `assets/app.js`; each discipline also has a dedicated, indexable URL.

## Where the full code lives

- `assets/app.js` contains the shared navigation, all page content, project data, gallery rendering, and interactions.
- `assets/styles.css` contains the complete visual system, layouts, animation, and responsive rules.
- Files such as `3d-generalist/index.html` are intentionally small page entry points. Their `data-page` value tells `app.js` which full page to render.
- `assets/3d/` contains web-optimized portfolio images; the original uploads remain in `images/`.
- `icare/` is a self-contained static academic prototype linked from the UI/UX case study. Its forms are intentionally demo-only, and no API key is shipped.

## Local preview

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content roadmap

- Replace the remaining digital-twin media placeholders with approved research stills.
- Add final UI/UX project screenshots when exported from Figma.
- Add final manuscript metadata after publication.
- Add a public résumé PDF after contact details are reviewed for privacy.

© Skylar La. Portfolio content may not be reused without permission.
