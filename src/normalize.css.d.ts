/**
 * Normalize stylesheet as a CSSStyleSheet for Shadow DOM usage.
 * Use with the `styleSheets` option in @pionjs/pion components.
 *
 * @example
 * import { normalize } from '@neovici/cosmoz-tokens/normalize';
 * customElements.define('my-el', component(MyEl, { styleSheets: [normalize] }));
 */
export const normalize: CSSStyleSheet;
