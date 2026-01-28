import { expect } from '@esm-bundle/chai';
import { utilities } from '../src/utilities.css.js';

describe('utilities', () => {
	it('should export a CSSStyleSheet', () => {
		expect(utilities).to.be.instanceOf(CSSStyleSheet);
	});

	it('should contain CSS rules', () => {
		expect(utilities.cssRules.length).to.be.greaterThan(0);
	});

	it('should include flex utility', () => {
		const rules = Array.from(utilities.cssRules);
		const hasFlex = rules.some(
			(rule) => rule.selectorText === '.flex' && rule.style.display === 'flex',
		);
		expect(hasFlex).to.be.true;
	});

	it('should include gap utility using --cz-spacing', () => {
		const rules = Array.from(utilities.cssRules);
		const hasGap = rules.some(
			(rule) =>
				rule.selectorText === '.gap-2' &&
				rule.style.gap.includes('--cz-spacing'),
		);
		expect(hasGap).to.be.true;
	});
});
