import { expect } from 'chai';

const ICON_SIZES = { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 };

describe('icon sizes', () => {
	let link;
	let probe;
	let rootSize;

	before(async () => {
		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = new URL('../src/spacing.css', import.meta.url).href;
		const loaded = new Promise((resolve, reject) => {
			link.onload = resolve;
			link.onerror = reject;
		});
		document.head.append(link);
		await loaded;
	});

	beforeEach(() => {
		rootSize = document.documentElement.style.fontSize;
		probe = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		probe.setAttribute('viewBox', '0 0 24 24');
		probe.setAttribute('width', '24');
		probe.setAttribute('height', '24');
		document.body.append(probe);
	});

	afterEach(() => {
		probe.remove();
		document.documentElement.style.fontSize = rootSize;
	});

	after(() => link.remove());

	it('resolves the icon size ladder exactly and scales with the root font', () => {
		for (const size of ['xs', 'sm', 'md', 'lg', 'xl']) {
			probe.style.cssText = `width: var(--cz-icon-size-${size}); height: var(--cz-icon-size-${size})`;
			document.documentElement.style.fontSize = '16px';
			const normal = probe.getBoundingClientRect();
			expect(normal.width, size).to.equal(ICON_SIZES[size]);
			expect(normal.height, size).to.equal(ICON_SIZES[size]);
			document.documentElement.style.fontSize = '32px';
			const enlarged = probe.getBoundingClientRect();
			expect(enlarged.width, size).to.equal(ICON_SIZES[size] * 2);
			expect(enlarged.height, size).to.equal(enlarged.width);
		}
		expect(probe.viewBox.baseVal.width).to.equal(24);
	});
});
