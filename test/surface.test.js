import { expect } from 'chai';

const load = async (frames, scheme) => {
	const frame = document.createElement('iframe');
	frames.push(frame);
	const loaded = new Promise((resolve) => {
		frame.onload = resolve;
	});
	frame.srcdoc = `
		<link rel="stylesheet" href="${new URL('../src/primitives.css', import.meta.url)}">
		<link rel="stylesheet" href="${new URL('../src/surface.css', import.meta.url)}">
		<link rel="stylesheet" href="${new URL('../src/motion.css', import.meta.url)}">
		<style>
			:root { color-scheme: ${scheme}; }
			body {
				margin: 0;
				background: var(--cz-canvas-light), var(--cz-color-bg-canvas);
			}
			section {
				background: var(--cz-color-bg-raised);
				box-shadow: var(--cz-shadow-raised);
				backdrop-filter: var(--cz-backdrop-filter-raised);
				transition: opacity var(--cz-duration-fast) var(--cz-ease-out);
			}
		</style>
		<section>Surface content</section>
	`;
	document.body.append(frame);
	await loaded;
	const win = frame.contentWindow;
	return {
		win,
		body: win.getComputedStyle(frame.contentDocument.body),
		section: win.getComputedStyle(
			frame.contentDocument.querySelector('section'),
		),
	};
};

describe('raised surface', () => {
	const frames = [];

	afterEach(() => frames.splice(0).forEach((frame) => frame.remove()));

	for (const scheme of ['light', 'dark']) {

		it(`lifts a ${scheme} surface off the canvas`, async () => {
			const { win, body, section } = await load(frames, scheme);
			expect(body.backgroundColor).not.to.equal('rgba(0, 0, 0, 0)');
			expect(section.backgroundColor).not.to.equal('rgba(0, 0, 0, 0)');
			if (win.matchMedia('(forced-colors: active)').matches) {
				return;
			}
			expect(body.backgroundImage).to.contain('radial-gradient');
			// Edge, lit top edge, contact shadow and long drop.
			expect(section.boxShadow.split(/,(?![^(]*\))/u)).to.have.length(4);
			expect(section.boxShadow).to.contain('inset');
			expect(section.transitionDuration).to.equal('0.15s');
		});
	}

	it('keeps the dark canvas darker than the surfaces on it', async () => {
		const { body, section } = await load(frames, 'dark');
		// Paint the canvas, then the surface over it, the way the page does.
		const ctx = document.createElement('canvas').getContext('2d');
		const paint = (...colors) => {
			colors.forEach((color) => {
				ctx.fillStyle = color;
				ctx.fillRect(0, 0, 1, 1);
			});
			const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
			return r + g + b;
		};
		expect(
			paint(body.backgroundColor, section.backgroundColor),
		).to.be.greaterThan(paint(body.backgroundColor));
	});
});
