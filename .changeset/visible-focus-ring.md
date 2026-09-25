---
'@neovici/cosmoz-tokens': minor
---

Make focus rings visible

The ring colors move from step 100 (light) / 800 (dark) to 500 / 400, so they
contrast with the surfaces they sit on. The `--cz-focus-ring*` shadows are a
1px ring plus a 1px inner band of `--cz-color-bg-primary`, which keeps the
ring visible on solid fills such as primary buttons. Rings stay inset.
