import { expect } from 'chai';

describe('standalone glass material', () => {
	const frames = [];

	afterEach(() => frames.splice(0).forEach((frame) => frame.remove()));

	for (const scheme of ['light', 'dark']) {

		it(`styles a ${scheme} surface without button recipes`, async () => {
			const frame = document.createElement('iframe');
			frames.push(frame);
			const loaded = new Promise((resolve) => {
				frame.onload = resolve;
			});
			frame.srcdoc = `
				<link rel="stylesheet" href="${new URL('../src/primitives.css', import.meta.url)}">
				<link rel="stylesheet" href="${new URL('../src/glass.css', import.meta.url)}">
				<style>
					:root { color-scheme: ${scheme}; }
					section {
						background: var(--cz-glass-sheen), var(--cz-color-bg-glass);
						border: 1px solid var(--cz-color-border-glass);
						box-shadow: var(--cz-shadow-glass);
						backdrop-filter: var(--cz-backdrop-filter-glass);
						border-radius: 12px;
						padding: 16px;
					}
				</style>
				<section>Surface content</section>
			`;
			document.body.append(frame);
			await loaded;
			const style = frame.contentWindow.getComputedStyle(
				frame.contentDocument.querySelector('section'),
			);
			expect(style.backgroundColor).not.to.equal('rgba(0, 0, 0, 0)');
			expect(style.borderStyle).to.equal('solid');
			expect(style.borderRadius).to.equal('12px');
			expect(style.padding).to.equal('16px');
			if (frame.contentWindow.matchMedia('(forced-colors: active)').matches) {
				expect(style.getPropertyValue('--cz-color-bg-glass').trim()).to.equal(
					'Canvas',
				);
				expect(
					style.getPropertyValue('--cz-color-border-glass').trim(),
				).to.equal('CanvasText');
				expect(style.boxShadow).to.equal('none');
			}
			if (
				frame.contentWindow.matchMedia('(forced-colors: active)').matches ||
				frame.contentWindow.matchMedia('(prefers-reduced-transparency: reduce)')
					.matches
			) {
				expect(
					style.backgroundImage.split(', ').every((layer) => layer === 'none'),
				).to.equal(true);
				expect(style.backdropFilter).to.equal('none');
			}
			for (const token of [
				'--cz-color-bg-glass-hover',
				'--cz-color-bg-glass-pressed',
				'--cz-color-bg-glass-action',
				'--cz-color-bg-glass-destructive',
				'--cz-opacity-disabled',
			]) {
				expect(style.getPropertyValue(token), token).to.equal('');
			}
		});
	}
});
