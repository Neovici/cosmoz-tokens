import { expect } from 'chai';

describe('compact typography', () => {
	let link;
	let probe;
	let fontSize;

	before(async () => {
		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = new URL('../src/typography.css', import.meta.url).href;
		const loaded = new Promise((resolve, reject) => {
			link.onload = resolve;
			link.onerror = reject;
		});
		document.head.append(link);
		await loaded;
	});

	beforeEach(() => {
		fontSize = document.documentElement.style.fontSize;
		probe = document.createElement('span');
		probe.textContent = '1 409 166';
		probe.style.cssText =
			'font-size: var(--cz-text-2xs); line-height: var(--cz-text-2xs-line-height)';
		document.body.append(probe);
	});

	afterEach(() => {
		probe.remove();
		document.documentElement.style.fontSize = fontSize;
	});

	after(() => link.remove());

	it('scales compact counter text and line height with the root font', () => {
		for (const rootSize of [16, 32]) {
			document.documentElement.style.fontSize = `${rootSize}px`;
			const style = getComputedStyle(probe);
			expect(parseFloat(style.fontSize)).to.equal((rootSize * 11) / 16);
			expect(parseFloat(style.lineHeight)).to.equal(
				((rootSize * 11) / 16) * 1.5,
			);
		}
	});
});
