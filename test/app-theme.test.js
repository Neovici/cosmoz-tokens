import { expect } from 'chai';

describe('shared application theme', () => {
	const frames = [];

	afterEach(() => frames.splice(0).forEach((frame) => frame.remove()));

	for (const scheme of ['light', 'dark']) {

		it(`preserves the opaque app appearance through public and existing names in ${scheme}`, async () => {
			const frame = document.createElement('iframe');
			frames.push(frame);
			const loaded = new Promise((resolve) => {
				frame.onload = resolve;
			});
			frame.srcdoc = `
				<link rel="stylesheet" href="${new URL('../src/app-theme.css', import.meta.url)}">
				<style>
					html { color-scheme: ${scheme}; }
					.public {
						background: var(--color-bg-raised);
						color: var(--color-text-primary);
						border-radius: var(--radius-status);
						font-family: var(--font-mono);
						height: var(--control-height-md);
						box-shadow: var(--shadow-action);
						backdrop-filter: var(--backdrop-filter-glass);
						transition-duration: var(--duration-normal);
					}
					.existing {
						background: var(--cz-color-bg-raised);
						color: var(--cz-color-text-primary);
						border-radius: var(--cz-radius-status);
						font-family: var(--cz-font-mono);
						height: var(--cz-control-height-md);
						box-shadow: var(--cz-shadow-action);
						backdrop-filter: var(--cz-backdrop-filter-glass);
						transition-duration: var(--cz-duration-normal);
					}
					.processing { color: var(--color-fg-processing); }
				</style>
				<section class="public">Public tokens</section><section class="existing">Existing tokens</section><span class="processing">Processing</span>
			`;
			document.body.append(frame);
			await loaded;
			const style = (selector) =>
				frame.contentWindow.getComputedStyle(
					frame.contentDocument.querySelector(selector),
				);
			const current = style('.public'),
				existing = style('.existing');
			for (const property of [
				'backgroundColor',
				'color',
				'borderRadius',
				'fontFamily',
				'height',
				'boxShadow',
				'backdropFilter',
				'transitionDuration',
			])
				{expect(current[property], property).to.equal(existing[property]);}
			expect(current.backgroundColor).to.equal(
				scheme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(20, 21, 26)',
			);
			expect(current.borderRadius).to.equal('9999px');
			expect(current.fontFamily).to.include('Geist Mono Variable');
			expect(current.height).to.equal('32px');
			expect(current.transitionDuration).to.equal('0.18s');
			expect(current.backdropFilter).to.equal('none');
			expect(style('.processing').color).to.equal(
				scheme === 'light' ? 'rgb(79, 70, 229)' : 'rgb(99, 102, 241)',
			);
			frame.contentDocument.documentElement.style.setProperty(
				'--color-brand-600',
				'#224466',
			);
			frame.contentDocument.querySelector('.processing').style.color =
				'var(--cz-color-brand-600)';
			expect(style('.processing').color).to.equal('rgb(34, 68, 102)');
		});
	}
});
