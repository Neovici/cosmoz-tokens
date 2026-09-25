---
'@neovici/cosmoz-tokens': minor
---

Re-point the brand scale from Danube blue to the gray scale

`--cz-color-brand-{25-950}` now resolve to `--cz-color-gray-{25-950}`, so
every brand-derived semantic token (solid fills, brand text, selected
surfaces, focus rings) turns neutral. The `--cz-danube-*` primitives stay
available for direct use.
