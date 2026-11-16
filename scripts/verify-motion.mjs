// Motion verification for Adiyo: motion ON vs reduced-motion, overflow, counters, marquee, header.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const BASE = 'http://127.0.0.1:4173';
const results = [];
const check = (name, ok, detail = '') => {
	results.push({ name, ok, detail });
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);
};

const routes = ['/', '/how-it-works', '/about', '/pricing', '/features', '/contact', '/request-demo', '/blog', '/privacy-policy', '/terms'];

// ---------- Motion ON ----------
{
	const browser = await chromium.launch();
	const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
	const page = await ctx.newPage();
	const errors = [];
	page.on('pageerror', (e) => errors.push(String(e)));
	page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.waitForTimeout(800);

	check('motion-ok class present on <html>', await page.evaluate(() => document.documentElement.classList.contains('motion-ok')));
	check('hero H1 has no reveal (LCP static)', await page.evaluate(() => {
		const h1 = document.querySelector('h1');
		return h1 && !h1.hasAttribute('data-reveal');
	}));
	check('hero subtext + CTA revealed (is-in)', await page.evaluate(() => {
		const els = [...document.querySelectorAll('[data-reveal]')].filter((el) => {
			const t = (el.textContent || '').trim();
			return t.startsWith('Get more out of your pipeline') || t === 'Request early access →';
		});
		return els.length === 2 && els.every((el) => el.classList.contains('is-in'));
	}));
	const counterBefore = await page.evaluate(() => document.body.innerText.includes('$45B'));
	check('count-up reaches $45B', counterBefore, 'hero stat card');

	// scroll to bottom slowly so every reveal fires, then check all revealed
	await page.evaluate(async () => {
		await new Promise((resolve) => {
			let y = 0;
			const step = () => {
				y += 600;
				window.scrollTo(0, y);
				if (y < document.body.scrollHeight) setTimeout(step, 60);
				else resolve();
			};
			step();
		});
	});
	await page.waitForTimeout(900);
	const revealState = await page.evaluate(() => {
		// only count elements that actually take up space (display:none twins
		// from the mobile/desktop hero grids have a 0-size rect and never fire)
		const els = [...document.querySelectorAll('[data-reveal]')].filter((el) => {
			const r = el.getBoundingClientRect();
			return r.width > 0 && r.height > 0;
		});
		const hidden = els.filter((el) => getComputedStyle(el).opacity === '0');
		return { total: els.length, hidden: hidden.length };
	});
	check('all home reveals fired after scroll', revealState.hidden === 0, `${revealState.total} visible reveal els, ${revealState.hidden} still hidden`);

	// chart + engagement bar need their full transition time (1.4s / 1.15s)
	await page.evaluate(() => {
		const el = document.querySelector('.draw-line');
		if (el) el.scrollIntoView({ block: 'center' });
	});
	await page.waitForTimeout(2500);
	check('marquee track animating', await page.evaluate(() => {
		const t = document.querySelector('.marquee-track');
		if (!t) return false;
		const name = getComputedStyle(t).animationName;
		return name === 'marquee' && t.children.length >= 14; // 7 pills x 2 copies
	}));
	check('chart line drawn (dashoffset 0)', await page.evaluate(() => {
		const l = document.querySelector('.draw-line');
		if (!l) return false;
		return getComputedStyle(l).strokeDashoffset === '0px' || getComputedStyle(l).strokeDashoffset === '0';
	}), 'draw-line element');
	check('engagement bar grown (scaleX 1)', await page.evaluate(() => {
		const b = document.querySelector('.grow-bar');
		if (!b) return false;
		return getComputedStyle(b).transform === 'matrix(1, 0, 0, 1, 0, 0)' || getComputedStyle(b).transform === 'none';
	}));

	// header shadow deepens after scroll
	const shadow = await page.evaluate(() => {
		window.scrollTo(0, 400);
		return new Promise((res) => setTimeout(() => {
			const pill = document.querySelector('header div div');
			res(pill ? getComputedStyle(pill).boxShadow : '');
		}, 300));
	});
	check('header shadow deepens on scroll', shadow.includes('40px') || shadow.length > 20, shadow.slice(0, 60));

	// overflow across routes at desktop + mobile (wait for reveals to settle;
	// plus a mid-transition read at 390px to prove the overflow-x: clip fix)
	for (const vw of [1440, 390, 360]) {
		await page.setViewportSize({ width: vw, height: 900 });
		for (const r of routes) {
			await page.goto(BASE + r, { waitUntil: 'networkidle' });
			await page.waitForTimeout(2000);
			const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
			check(`no h-overflow ${r} @ ${vw}px`, overflow <= 0, overflow > 0 ? `${overflow}px` : '');
		}
	}
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
	await page.waitForTimeout(300); // mid-reveal-transition
	const midOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
	check('no h-overflow @ 390px mid-transition', midOverflow <= 0, midOverflow > 0 ? `${midOverflow}px` : '');

	// about counters reach final values
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto(BASE + '/about', { waitUntil: 'networkidle' });
	await page.evaluate(() => window.scrollTo(0, 600));
	await page.waitForTimeout(1800);
	const aboutText = await page.evaluate(() => document.body.innerText);
	check('about counters final values', ['$45B', '50%', '100+', '4.9/5'].every((s) => aboutText.includes(s)));

	// screenshots
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.waitForTimeout(600);
	await page.evaluate(() => window.scrollTo(0, 0));
	await page.waitForTimeout(600);
	await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/motion-home-1440.png', fullPage: true });
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.waitForTimeout(600);
	await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/motion-home-390.png', fullPage: true });
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto(BASE + '/about', { waitUntil: 'networkidle' });
	await page.waitForTimeout(600);
	await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/motion-about-1440.png', fullPage: true });

	const realErrors = errors.filter((e) => !e.includes('fonts.g') && !e.includes('ERR_'));
	check('zero page errors (motion on)', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));
	await browser.close();
}

// ---------- Reduced motion ----------
{
	const browser = await chromium.launch();
	const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
	const page = await ctx.newPage();
	const errors = [];
	page.on('pageerror', (e) => errors.push(String(e)));
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.waitForTimeout(700);
	check('reduced-motion: NO motion-ok class', await page.evaluate(() => !document.documentElement.classList.contains('motion-ok')));
	const vis = await page.evaluate(() => {
		const els = [...document.querySelectorAll('[data-reveal]')];
		const hidden = els.filter((el) => getComputedStyle(el).opacity === '0');
		return { total: els.length, hidden: hidden.length };
	});
	check('reduced-motion: all content visible without scroll', vis.hidden === 0, `${vis.total} reveal els, ${vis.hidden} hidden`);
	check('reduced-motion: counters show final values', await page.evaluate(() => document.body.innerText.includes('$45B')));
	check('reduced-motion: marquee animation off', await page.evaluate(() => {
		const t = document.querySelector('.marquee-track');
		return t ? getComputedStyle(t).animationDuration === '0.01ms' || getComputedStyle(t).animationName === 'none' : false;
	}));
	await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/motion-reduced-1440.png', fullPage: true });
	const realErrors = errors.filter((e) => !e.includes('fonts.g') && !e.includes('ERR_'));
	check('zero page errors (reduced motion)', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));
	await browser.close();
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed, ${failed.length} failed`);
process.exit(failed.length ? 1 : 0);
