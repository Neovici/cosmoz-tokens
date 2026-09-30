---
'@neovici/cosmoz-tokens': minor
---

Make the brand ramp gray; only brand text, borders and focus stay Slate

`--cz-color-brand-{25-950}` now points at the gray scale, so brand
surfaces and icons (`bg-brand*`, `fg-brand*`, `border-brand-alt`,
`text-on-brand-secondary`) lose their blue cast against the gray surfaces,
most visibly in dark mode. `bg-brand-solid` goes back to the brand ramp at
step 700, which renders the same gray-700 as before.

`text-brand`, `text-brand-hover`, `border-brand`, `border-brand-subtle` and
the focus ring are pinned to `--cz-color-slate-*` so links and focus stay
distinct from body text. Components that read `--cz-color-brand-*` directly
(for example button pressed states) now render gray.
