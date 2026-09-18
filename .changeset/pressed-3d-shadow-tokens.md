---
'@neovici/cosmoz-tokens': minor
---

feat: add pressed 3D inset shadow tokens

Adds `--cz-shadow-pressed-3d` and `--cz-shadow-pressed-3d-solid` for the
pressed/selected state of buttons: a subtle inner top shadow that gives
the control a "pushed in" feel.

The shade colors are theme-varying via `light-dark()` color tokens
(`--cz-color-pressed-shade`, `--cz-color-pressed-shade-strong`), so dark
mode follows the document's `color-scheme`, consistent with v4's
approach. `fallback.css` provides static light-theme values for browsers
without `light-dark()` support.
