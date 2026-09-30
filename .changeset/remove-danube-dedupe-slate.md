---
'@neovici/cosmoz-tokens': major
---

Remove the unused `--cz-danube-*` and `--cz-slate-*` scales

Nothing has referenced Danube since the brand ramp moved off it in 4.6.0, and
`--cz-slate-*` duplicated `--cz-color-slate-*`. Use `--cz-color-slate-*`
instead of `--cz-slate-*`; the values are the same.

`--cz-color-slate-25` changes from `rgb(248 250 252)` (a copy of step 50) to
`rgb(252 253 254)`, the value `--cz-slate-25` had.
