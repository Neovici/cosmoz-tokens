---
'@neovici/cosmoz-tokens': minor
---

feat: add pressed 3D inset shadow tokens

Adds `--cz-shadow-pressed-3d` and `--cz-shadow-pressed-3d-solid`: an
inner top shadow giving buttons a "pushed in" pressed feel.

Shade colors are theme-varying via `light-dark()` color tokens
(`--cz-color-pressed-shade(-strong)`), consistent with v4 theming;
`fallback.css` provides static light values for older browsers.
