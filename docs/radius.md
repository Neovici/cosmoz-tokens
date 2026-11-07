# Radius roles

Use roles for interface shape and keep the raw scale for special geometry.
The defaults are identical in light and dark themes.

| Token                        | Default | Role                              |
| ---------------------------- | ------- | --------------------------------- |
| `--cz-radius-shell`          | 24px    | Inset app frame                   |
| `--cz-radius-sheet`          | 32px    | Large mobile sheet                |
| `--cz-radius-dialog`         | 24px    | Floating dialog                   |
| `--cz-radius-surface`        | 16px    | Card, menu, popover               |
| `--cz-radius-control`        | 12px    | Button, input, select             |
| `--cz-radius-item`           | 8px     | Menu/row highlight, compact badge |
| `--cz-radius-group`          | 12px    | Segmented-control frame           |
| `--cz-spacing-segment-inset` | 3px     | Inset around segments             |

The defaults use rem values and therefore follow the root font size.
`--cz-radius-full` and `--cz-radius-none` retain their existing capsule/circle
and square roles.

Closely nested corners should follow their actual inset. Segmented components
calculate their inner radius from their inherited frame and inset at the point
of use. This gives 9px by default, and responds to subtree overrides. The inner
radius is clamped to zero. `--cz-radius-segment` is an optional explicit override;
it is deliberately not defined on `:root`, where a derived value would resolve
before a subtree's group/inset overrides could affect it.

Do not apply subtraction to every descendant. A button in the middle of a card
still uses the control role. Component-specific overrides remain authoritative.
Continuous table cells and adjoining split panes retain straight inner edges;
round their containing frame instead.
