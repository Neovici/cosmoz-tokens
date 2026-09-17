---
'@neovici/cosmoz-tokens': major
---

BREAKING feat: adopt light-dark() for semantic tokens

Semantic color tokens now resolve their dark values via `light-dark()`
instead of a `:root[data-theme='dark']` / `.dark-mode` override block.
Dark mode follows the CSS `color-scheme` of the consuming document —
set it on the root to get dark values:

```css
/* CSS */
:root {
	color-scheme: dark; /* or: light dark to follow the OS */
}
```

```js
// or from JS
document.documentElement.style.colorScheme = 'light dark';
```

The `data-theme='dark'` attribute and `.dark-mode` class no longer flip
these tokens — documents relying on them must migrate to `color-scheme`
or they will silently get light values. Components are unaffected: they
are `var()` consumers and never reference the theme attribute.

Browsers without `light-dark()` support (Chrome < 123, Firefox < 120,
Safari < 17.5) fall back to the frozen light theme via a
`@supports not (color: light-dark(red, blue))` block.

Adds `--cz-color-focus-ring(-error|-info)` and
`--cz-color-skeumorphic-ring/-highlight` color tokens; the shadow and
focus-ring tokens are assembled from them (light-dark() only accepts
colors). This supersedes #34 — a pressed pair can be expressed the same
way without extra per-state override blocks.
