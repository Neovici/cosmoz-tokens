/**
 * Raw CSS string for utilities - can be used in Light DOM contexts.
 *
 * @example
 * import { utilitiesCSS } from '@neovici/cosmoz-tokens/utilities';
 * html`<style>${utilitiesCSS}</style>`;
 */
export const utilitiesCSS: string;

/**
 * Utilities stylesheet as a CSSStyleSheet for Shadow DOM usage.
 * Use with the `styleSheets` option in @pionjs/pion components.
 *
 * @example
 * import { utilities } from '@neovici/cosmoz-tokens/utilities';
 * customElements.define('my-el', component(MyEl, { styleSheets: [utilities] }));
 */
export const utilities: CSSStyleSheet;
