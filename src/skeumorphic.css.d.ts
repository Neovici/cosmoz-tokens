/**
 * Skeuomorphic inner highlight using ::before pseudo-element.
 * Provides a subtle "lit from above" effect that fades toward the bottom.
 *
 * Apply to elements that need the highlight effect. The target element
 * will have `position: relative` applied automatically.
 *
 * Customization via CSS custom properties:
 * - `--skeumorphic-radius`: Inner border radius (default: calc(var(--cz-radius-md) - 1px))
 * - `--skeumorphic-color`: Border color (default: rgba(255, 255, 255, 0.12))
 *
 * @example
 * import { skeumorphicHighlight } from '@neovici/cosmoz-tokens/skeumorphic';
 *
 * export const styles = css`
 *   .button {
 *     ${skeumorphicHighlight}
 *   }
 * `;
 */
export const skeumorphicHighlight: string;
