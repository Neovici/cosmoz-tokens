import { expect } from 'chai';

// [text token, background token, minimum WCAG 2.2 ratio]
const PAIRS = [
	['text-primary', 'bg-primary', 4.5],
	['text-secondary', 'bg-primary', 4.5],
	['text-tertiary', 'bg-primary', 4.5],
	['text-quaternary', 'bg-primary', 4.5],
	['text-primary', 'bg-secondary', 4.5],
	['text-tertiary', 'bg-secondary', 4.5],
	['text-brand', 'bg-primary', 4.5],
	['text-link', 'bg-primary', 4.5],
	['text-on-brand', 'bg-brand-solid', 4.5],
	['text-on-brand', 'bg-brand-solid-hover', 4.5],
	['text-on-action', 'bg-action-solid', 4.5],
	['text-on-action', 'bg-action-solid-hover', 4.5],
	['fg-white', 'bg-error-solid', 4.5],
	...['warning', 'success'].flatMap((s) => [
		['fg-white', `bg-${s}-solid`, 4.5],
		[`text-${s}`, `bg-${s}-secondary`, 4.5],
		[`fg-${s}`, `bg-${s}`, 3],
		[`fg-${s}-secondary`, `bg-${s}`, 3],
		[`border-${s}`, 'bg-primary', 3],
	]),
	...['error', 'warning', 'success', 'info'].flatMap((s) => [
		[`text-${s}`, 'bg-primary', 4.5],
		[`text-${s}`, `bg-${s}`, 4.5],
	]),
];

const luminance = ([r, g, b]) => {
	const [R, G, B] = [r, g, b].map((c) => {
		const v = c / 255;
		return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

const ratio = (a, b) => {
	const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (hi + 0.05) / (lo + 0.05);
};

// Resolve any CSS colour (light-dark(), color-mix(), rgb()) to sRGB via canvas.
const ctx = document
	.createElement('canvas')
	.getContext('2d', { willReadFrequently: true });
const toRgb = (css) => {
	ctx.clearRect(0, 0, 1, 1);
	ctx.fillStyle = css;
	ctx.fillRect(0, 0, 1, 1);
	return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)];
};

const resolve = (scheme, token) => {
	const el = document.createElement('div');
	el.style.colorScheme = scheme;
	el.style.color = `var(--cz-color-${token})`;
	document.body.append(el);
	const value = getComputedStyle(el).color;
	el.remove();
	return toRgb(value);
};

describe('contrast', () => {
	before(async () => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = new URL('../src/index.css', import.meta.url).href;
		const loaded = new Promise((res, rej) => {
			link.onload = res;
			link.onerror = rej;
		});
		document.head.append(link);
		await loaded;
	});

	for (const scheme of ['light', 'dark']) {

		describe(scheme, () => {
			for (const [fg, bg, min] of PAIRS) {
				it(`${fg} on ${bg} ≥ ${min}`, () => {
					const r = ratio(resolve(scheme, fg), resolve(scheme, bg));
					expect(r, `${fg} on ${bg}: ${r.toFixed(2)}`).to.be.at.least(min);
				});
			}
		});
	}
});
