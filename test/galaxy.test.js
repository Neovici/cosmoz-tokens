describe('Galaxy opt-in materials', () => {
	let link;
	let surface;

	before(async () => {
		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = '/src/galaxy.css';
		await new Promise((resolve, reject) => {
			link.onload = resolve;
			link.onerror = reject;
			document.head.append(link);
		});
	});

	after(() => link.remove());

	afterEach(() => {
		document.documentElement.removeAttribute('data-galaxy');
		surface.remove();
	});

	it('keeps semantic colors usable alongside composite glass backgrounds', () => {
		surface = document.createElement('div');
		surface.style.cssText =
			'color: var(--cz-color-text-primary, black); background: var(--cz-material-background, white)';
		document.body.append(surface);
		const original = getComputedStyle(surface).background;
		document.documentElement.setAttribute('data-galaxy', '');
		if (
			!getComputedStyle(surface).backgroundImage.includes('linear-gradient')
		) {
			throw new Error('The opt-in material must render a sheen');
		}
		if (getComputedStyle(surface).color === 'rgb(0, 0, 0)') {
			throw new Error('The semantic foreground must remain a valid CSS color');
		}
		document.documentElement.removeAttribute('data-galaxy');
		if (getComputedStyle(surface).background !== original) {
			throw new Error('Removing Galaxy must restore the original material');
		}
	});
});
