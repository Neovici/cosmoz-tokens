---
'@neovici/cosmoz-tokens': minor
---

Switch the body font token from Inter to Geist.

`--cz-font-body` is the token every Cosmoz surface resolves its text through,
so the typeface belongs here rather than being overridden per app.

Geist is OFL, variable across 100–900, and drawn for dense product UI. The
concrete win over stock Inter is `Il1`: Geist's `l` carries a tail, while
Inter's default `l` is a bare stem identical to `I` — which matters in
finance surfaces full of invoice numbers and article codes.

The stack lists `'Geist Variable'` before `'Geist'` so it resolves whether a
consumer self-hosts the fontsource variable build (which registers the family
as `Geist Variable`) or loads it from Google Fonts (`Geist`). Font files are
still the consuming app's job; this package ships tokens only.
