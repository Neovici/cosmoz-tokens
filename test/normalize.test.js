import { expect } from '@esm-bundle/chai';
import { normalize } from '../src/normalize.css.js';

describe('normalize', () => {
	it('should export a CSSStyleSheet', () => {
		expect(normalize).to.be.instanceOf(CSSStyleSheet);
	});

	it('should contain CSS rules', () => {
		expect(normalize.cssRules.length).to.be.greaterThan(0);
	});

	it('should include box-sizing border-box rule', () => {
		const rules = Array.from(normalize.cssRules);
		const hasBoxSizing = rules.some(
			(rule) =>
				rule.cssText.includes('box-sizing') &&
				rule.cssText.includes('border-box'),
		);
		expect(hasBoxSizing).to.be.true;
	});
});
