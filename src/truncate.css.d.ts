/**
 * Truncate text with ellipsis.
 * Prevents text from wrapping and adds an ellipsis (...) when text overflows.
 *
 * Equivalent to Tailwind's `truncate` utility.
 *
 * @example
 * import { truncate } from '@neovici/cosmoz-tokens/truncate';
 *
 * export const styles = css`
 *   .label {
 *     ${truncate}
 *   }
 * `;
 */
export const truncate: string;
