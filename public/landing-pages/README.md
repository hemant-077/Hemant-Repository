# Kage page structure

The portfolio still loads in the existing Kage iframe. Its source is now split by responsibility:

- `kage.html` — semantic page markup: navigation, portfolio sections, contact form, and footer.
- `kage.css` — visual tokens, responsive layouts, card styling, and animation styles.
- `kage.js` — Three.js world creation, WebGL rendering, UI interactions, and page boot logic.
- `secret-pathways-assets/` — fonts, Three.js, foreground images, and generated image assets.

## Runtime map

`kage.js` is intentionally divided with section labels:

1. Basics and helpers
2. Procedural texture generators
3. Scene construction (temple, gate, plants, wordmark, lights)
4. Post-processing and camera rig
5. UI wiring (navigation, reveal effects, contact form)
6. Render loop, resize handling, and boot

Keep the entry URL as `/landing-pages/kage.html`; the React shell loads it through `KagePortfolio`.
