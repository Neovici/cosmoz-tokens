# Radius roles

Use roles for interface shape and keep the raw scale for special geometry.
The defaults are identical in light and dark themes.

| Token                        | Default | Role                                  |
| ---------------------------- | ------- | ------------------------------------- |
| `--cz-radius-app-shell`      | 24px    | Inset app frame                       |
| `--cz-radius-sheet`          | 32px    | Large mobile sheet                    |
| `--cz-radius-dialog`         | 24px    | Floating dialog                       |
| `--cz-radius-card`           | 16px    | Card, menu, popover                   |
| `--cz-radius-info-box`       | 12px    | Inline info, warning or error box     |
| `--cz-radius-control`        | 8px     | Button, input, select                 |
| `--cz-radius-compact`        | 6px     | Menu item, badge, tooltip, small tile |
| `--cz-radius-control-group`  | 11px    | Segmented-control frame               |
| `--cz-spacing-segment-inset` | 3px     | Inset around segments                 |

The defaults use rem values and therefore follow the root font size.
`--cz-radius-full` and `--cz-radius-none` retain their existing capsule/circle
and square roles.

Closely nested corners should follow their actual inset. Segments are controls,
so the control-group frame is the control radius plus the inset. Segmented
components calculate the segment radius as frame minus inset at the point of use,
so it responds to subtree overrides, and clamp it to zero. A value derived on
`:root` would resolve before a subtree's overrides could affect it.

Do not apply subtraction to every descendant. A button in the middle of a card
still uses the control role. Component-specific overrides remain authoritative.
Continuous table cells and adjoining split panes retain straight inner edges;
round their containing frame instead.
