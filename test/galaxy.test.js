describe('Galaxy opt-in materials', () => {
	let link;
	let surface;
	let originalScheme;

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

	beforeEach(() => {
		originalScheme = document.documentElement.style.colorScheme;
	});

	afterEach(() => {
		document.documentElement.style.colorScheme = originalScheme;
		document.documentElement.removeAttribute('data-galaxy');
		surface.remove();
	});

	it('renders both schemes and restores the original materials on opt-out', () => {
		surface = document.createElement('div');
		surface.style.cssText =
			'color: var(--cz-color-text-primary, black); background: var(--cz-material-background, white)';
		document.body.append(surface);
		for (const scheme of ['light', 'dark']) {
			document.documentElement.style.colorScheme = scheme;
			const original = getComputedStyle(surface).background;
			document.documentElement.setAttribute('data-galaxy', '');
			if (
				!getComputedStyle(surface).backgroundImage.includes('linear-gradient')
			) {
				throw new Error(`${scheme}: the opt-in material must render a sheen`);
			}
			if (getComputedStyle(surface).color === 'rgb(0, 0, 0)') {
				throw new Error(`${scheme}: foreground must remain a valid CSS color`);
			}
			document.documentElement.removeAttribute('data-galaxy');
			if (getComputedStyle(surface).background !== original) {
				throw new Error(
					`${scheme}: opting out must restore the original material`,
				);
			}
		}
	});
});
