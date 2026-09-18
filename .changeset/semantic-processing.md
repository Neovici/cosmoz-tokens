---
'@neovici/cosmoz-tokens': minor
---

Add semantic colors for the "processing" state.

Every other status color — error, warning, success — has a set of semantic
colors that switch automatically between light and dark. Processing did not,
so components showing a processing state had to reach into the raw indigo
scale, which is fixed and always returns light values. That made processing
badges and chips render light colors on dark backgrounds.

Adds the same six colors processing was missing, built on the indigo scale and
matching the other statuses exactly:

- `--cz-color-text-processing`
- `--cz-color-bg-processing`, `--cz-color-bg-processing-secondary`, `--cz-color-bg-processing-solid`
- `--cz-color-fg-processing`, `--cz-color-fg-processing-secondary`
