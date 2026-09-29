---
'@neovici/cosmoz-tokens': minor
---

Move brand surfaces and icons back to gray; only brand text, borders and focus stay Slate

`bg-brand`, `bg-brand-subtle`, `bg-brand-secondary`, `bg-brand-section`,
`fg-brand`, `fg-brand-secondary`, `border-brand-alt` and
`text-on-brand-secondary` now use the gray step they used to take from Slate.
Selected rows, badges, tab underlines and radios no longer have a blue cast,
most visibly in dark mode. `text-brand`, `border-brand`, `border-brand-subtle`
and the focus ring keep Slate so links and focus stay distinct from body text.
