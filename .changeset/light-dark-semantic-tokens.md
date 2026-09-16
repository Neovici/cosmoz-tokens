---
'@neovici/cosmoz-tokens': minor
---

feat: adopt light-dark() for semantic tokens

Semantic color tokens now resolve their dark values via `light-dark()`
instead of a `:root[data-theme='dark']` / `.dark-mode` override block.
Dark mode now follows the CSS `color-scheme` of the consuming document —
set `color-scheme: dark` (or `light dark` to follow the OS) on the root.
The `data-theme='dark'` attribute and `.dark-mode` class no longer flip
these tokens.

Browsers without `light-dark()` support (Chrome < 123, Firefox < 120,
Safari < 17.5) fall back to the frozen light theme via a
`@supports not (color: light-dark(red, blue))` block.

Adds `--cz-color-focus-ring(-error|-info)` and
`--cz-color-skeumorphic-ring/-highlight` color tokens; the shadow and
focus-ring tokens are assembled from them (light-dark() only accepts
colors). This supersedes #34 — a pressed pair can be expressed the same
way without extra per-state override blocks.
