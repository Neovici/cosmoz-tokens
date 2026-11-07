import { expect } from 'chai';

describe('shape roles', () => {
	before(async () => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = new URL('../src/index.css', import.meta.url).href;
		const loaded = new Promise((resolve, reject) => {
			link.onload = resolve;
			link.onerror = reject;
		});
		document.head.append(link);
		await loaded;
	});

	for (const scheme of ['light', 'dark']) {

		it(`provides the same role hierarchy in ${scheme} mode`, () => {
			const probe = document.createElement('div');
			probe.style.colorScheme = scheme;
			document.body.append(probe);
			for (const [role, px] of Object.entries({
				shell: 24,
				dialog: 24,
				sheet: 32,
				surface: 16,
				control: 12,
				item: 8,
				group: 16,
			})) {
				probe.style.borderRadius = `var(--cz-radius-${role})`;
				expect(getComputedStyle(probe).borderRadius, role).to.equal(`${px}px`);
			}
			probe.style.padding = 'var(--cz-spacing-segment-inset)';
			expect(getComputedStyle(probe).padding).to.equal('3px');
			probe.remove();
		});
	}
});
