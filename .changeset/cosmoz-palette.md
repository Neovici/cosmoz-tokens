---
'@neovici/cosmoz-tokens': minor
---

Adopt the Cosmoz palette: lavender brand, graphite gray and new status hues

- `--cz-color-brand-*` now points at a new `--cz-color-lavender-*` scale
  (core #AF9BF4). Every `*-brand` token follows.
- Gray, error, warning, success and sky (info) scales get new values. The
  designer-facing palette is 29 core steps; the other steps are derived in
  OKLCH and marked in `primitives.css`. No step was removed.
- Status text in dark mode moves from step 400 to 300.
- Dark surfaces are re-layered: `bg-primary` is gray-900 and `bg-secondary`
  gray-950, so cards lift off the page.
- New `bg-action-solid`, `bg-action-solid-hover` and `text-on-action` for
  primary buttons (gray in both modes), `bg-highlight` for search/OCR
  highlights, and `chart-1`…`chart-8` for categorical data.
- `--cz-font-display` is now the body font (Geist) and `--cz-font-mono` is
  JetBrains Mono. Apps load the font files themselves.
- Text/background contrast pairs are now tested in CI (`npm test`).
