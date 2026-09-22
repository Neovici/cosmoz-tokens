---
'@neovici/cosmoz-tokens': minor
---

Add border colours for the warning, success and processing statuses

Error and info already had `--cz-color-border-error` / `--cz-color-border-info`
(plus their `-subtle` variants), but warning, success and processing did not.
Anything drawing a status-tinted border — badges, alert cards, highlighted table
rows — had to mix its own colour out of the `fg-*` tokens instead, which meant
every consumer invented a slightly different border.

This fills in the gaps so the whole status family is symmetric:

- `--cz-color-border-warning` / `--cz-color-border-warning-subtle`
- `--cz-color-border-success` / `--cz-color-border-success-subtle`
- `--cz-color-border-processing` / `--cz-color-border-processing-subtle`

Values follow the existing error/info pattern exactly: the strong border is
`500` in light and `400` in dark, the subtle one `300` in light and `500` in
dark. Use `-subtle` for the hairline around a tinted surface (it is the partner
of `--cz-color-bg-*`), and the plain one when the border itself is the signal.
