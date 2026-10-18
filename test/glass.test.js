import { expect } from 'chai';

const luminance = (rgb) => {
	const [r, g, b] = rgb.map((channel) => {
		const value = channel / 255;
		return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Composite each sheen extreme over the fill and backdrop before measuring it.
const contrast = (foreground, background, sheen, backdrop) => {
	const canvas = document.createElement('canvas');
	canvas.width = canvas.height = 1;
	const ctx = canvas.getContext('2d', { willReadFrequently: true });
	ctx.fillStyle = backdrop;
	ctx.fillRect(0, 0, 1, 1);
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, 1, 1);
	ctx.fillStyle = sheen;
	ctx.fillRect(0, 0, 1, 1);
	const bg = [...ctx.getImageData(0, 0, 1, 1).data].slice(0, 3);
	ctx.clearRect(0, 0, 1, 1);
	ctx.fillStyle = foreground;
	ctx.fillRect(0, 0, 1, 1);
	const fg = [...ctx.getImageData(0, 0, 1, 1).data].slice(0, 3);
	const high = Math.max(luminance(fg), luminance(bg));
	const low = Math.min(luminance(fg), luminance(bg));
	return (high + 0.05) / (low + 0.05);
};

describe('glass action contrast', () => {
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
		for (const kind of ['action', 'destructive']) {
			for (const state of ['', '-hover', '-pressed']) {
				for (const backdrop of ['white', 'black']) {

					it(`${scheme} ${kind}${state} retains AA contrast over ${backdrop} through the sheen`, () => {
						const probe = document.createElement('span');
						probe.style.colorScheme = scheme;
						document.body.append(probe);
						const resolve = (color) => {
							probe.style.color = color;
							return getComputedStyle(probe).color;
						};
						const fg = resolve(
							kind === 'action'
								? 'var(--cz-color-text-on-glass-action)'
								: 'var(--cz-color-text-on-action)',
						);
						const bg = resolve(`var(--cz-color-bg-glass-${kind}${state})`);
						const sheen = resolve(
							kind === 'action'
								? 'var(--cz-color-glass-button-action-highlight)'
								: 'var(--cz-color-glass-action-highlight)',
						);
						for (const overlay of [
							sheen,
							'transparent',
							resolve('var(--cz-color-glass-shade)'),
						]) {
							expect(contrast(fg, bg, overlay, backdrop)).to.be.at.least(4.5);
						}
						probe.remove();
					});
				}
			}
		}
	}
});
