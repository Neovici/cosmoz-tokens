---
'@neovici/cosmoz-tokens': minor
---

Make the brand ramp gray and add link text tokens

`--cz-color-brand-{25-950}` now points at the gray scale, so everything on
the brand ramp loses its blue cast against the gray surfaces, most visibly
in dark mode. `bg-brand-solid` goes back to the brand ramp at step 700,
which renders the same gray-700 as before.

New `--cz-color-text-link` and `--cz-color-text-link-hover` keep links Slate
so they stay distinct from body text. `text-brand` and `text-brand-hover`
are now gray; switch links to the new tokens. The focus ring stays Slate.
Components that read `--cz-color-brand-*` directly (for example button
pressed states) now render gray.
