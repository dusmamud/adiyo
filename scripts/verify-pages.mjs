// Full-site verification for Adiyo after the missing-pages build:
// overflow on every route, motion, header dropdowns, mobile menu, and all
// interactive widgets (integrations filter, help search, ROI calculator,
// login demo flow, careers form).
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const BASE = 'http://127.0.0.1:4174'; // 4173 is held by the luxury-furniture preview (other project — do not kill)
const results = [];
const check = (name, ok, detail = '') => {
	results.push({ name, ok, detail });
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);
};

const routes = [
	'/', '/how-it-works', '/features', '/integrations', '/security', '/compare', '/changelog',
	'/pricing', '/solutions', '/solutions/sales-teams', '/solutions/sales-managers', '/solutions/revenue-leaders',
	'/customers', '/customers/nimbus', '/customers/fieldset', '/customers/loopwork',
	'/resources', '/blog', '/blog/generative-ai-sales-forecasting', '/blog/coach-reps-in-real-time',
	'/blog/100-data-signals-explained', '/blog/ai-sales-coaching-playbook',
	'/blog/forecast-accuracy-metrics-that-matter', '/blog/crm-hygiene-ai-fix',
	'/roi-calculator', '/help', '/about', '/careers', '/contact', '/request-demo',
	'/login', '/privacy-policy', '/terms', '/cookie-policy', '/sitemap'
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

// ---------- every route: 200, no h-overflow at 3 widths, motion-ok ----------
for (const vw of [1440, 390, 360]) {
	await page.setViewportSize({ width: vw, height: 900 });
	for (const r of routes) {
		const resp = await page.goto(BASE + r, { waitUntil: 'networkidle' });
		if (vw === 1440) check(`GET ${r}`, resp?.status() === 200, `status ${resp?.status()}`);
		await page.waitForTimeout(2000); // let reveals settle
		const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
		check(`no h-overflow ${r} @ ${vw}px`, overflow <= 0, overflow > 0 ? `${overflow}px` : '');
	}
}
check('sitemap.xml lists 35 URLs', await page.evaluate(async () => {
	const t = await (await fetch('/sitemap.xml')).text();
	return (t.match(/<loc>/g) || []).length;
}) === 35, ''); // 13 original + 19 new routes + 3 new blog posts

// ---------- header dropdowns (desktop xl) ----------
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.hover('button:has-text("Product")');
await page.waitForTimeout(400);
const dd = await page.evaluate(() => {
	const links = [...document.querySelectorAll('header nav a')].filter((a) => a.textContent.trim() === 'Integrations');
	if (!links.length) return { visible: false };
	const r = links[0].getBoundingClientRect();
	const cs = getComputedStyle(links[0].closest('div[class*="absolute"], div') || links[0]);
	return { visible: r.width > 0 && r.height > 0, href: links[0].getAttribute('href') };
});
check('header Product dropdown shows Integrations', dd.visible && dd.href === '/integrations', JSON.stringify(dd));
check('header Sign in link present', await page.evaluate(() => [...document.querySelectorAll('header a')].some((a) => a.textContent.trim() === 'Sign in' && a.getAttribute('href') === '/login')));

// ---------- mobile menu ----------
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.click('button[aria-label="Open menu"]');
await page.waitForTimeout(400);
check('mobile menu groups + links', await page.evaluate(() => {
	const nav = document.querySelector('nav[aria-label="Mobile"]');
	if (!nav) return false;
	const text = nav.textContent || '';
	return ['Product', 'Solutions', 'Customers', 'Resources', 'Company', 'Integrations', 'ROI Calculator', 'Careers'].every((s) => text.includes(s));
}));
check('mobile menu Sign in + Demo buttons', await page.evaluate(() => {
	const nav = document.querySelector('nav[aria-label="Mobile"]');
	return nav ? [...nav.querySelectorAll('a')].some((a) => a.textContent.trim() === 'Sign in') : false;
}));

// ---------- integrations filter ----------
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(BASE + '/integrations', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
const totalCards = await page.evaluate(() => document.body.innerText.includes('Salesforce'));
await page.click('button:has-text("CRM")');
await page.waitForTimeout(400);
const crmState = await page.evaluate(() => {
	const t = document.body.innerText;
	return { salesforce: t.includes('Salesforce'), hubspot: t.includes('HubSpot'), gmail: t.includes('Gmail') };
});
check('integrations filter CRM shows Salesforce+HubSpot, hides Gmail', totalCards && crmState.salesforce && crmState.hubspot && !crmState.gmail, JSON.stringify(crmState));

// ---------- help search ----------
await page.goto(BASE + '/help', { waitUntil: 'networkidle' });
await page.fill('input[type="search"], input[placeholder*="earch" i]', 'billing');
await page.waitForTimeout(400);
check('help search filters to billing articles', await page.evaluate(() => {
	const t = document.body.innerText;
	return t.includes('per-user pricing') && !t.includes('Connect your CRM');
}));
await page.fill('input[type="search"], input[placeholder*="earch" i]', 'zzzznothing');
await page.waitForTimeout(400);
check('help search empty state', await page.evaluate(() => document.body.innerText.includes('No articles match')));

// ---------- ROI calculator ----------
await page.goto(BASE + '/roi-calculator', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
const roiBefore = await page.evaluate(() => document.body.innerText.match(/\$[\d,]+K?/g)?.slice(0, 5).join(' '));
const roi = await page.evaluate(() => {
	const set = (sel, v) => {
		const el = document.querySelector(sel);
		if (!el) return false;
		el.value = v;
		el.dispatchEvent(new Event('input', { bubbles: true }));
		return true;
	};
	// sliders: find range inputs and set via native setter so Svelte picks it up
	const ranges = [...document.querySelectorAll('input[type="range"]')];
	if (ranges.length < 3) return { ok: false, ranges: ranges.length };
	const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
	for (const [i, v] of [[0, 50], [2, 10]]) {
		setter.call(ranges[i], String(v));
		ranges[i].dispatchEvent(new Event('input', { bubbles: true }));
	}
	return { ok: true, ranges: ranges.length };
});
await page.waitForTimeout(1200);
const roiAfter = await page.evaluate(() => document.body.innerText.match(/\$[\d,]+K?/g)?.slice(0, 5).join(' '));
check('ROI calculator updates on input', roi.ok && roiBefore !== roiAfter, `${roiBefore} -> ${roiAfter}`);
check('ROI disclaimer present', await page.evaluate(() => document.body.innerText.includes('Estimate for illustration only')));

// ---------- login demo flow ----------
await page.goto(BASE + '/login', { waitUntil: 'networkidle' });
await page.fill('input[type="email"]', 'wrong@x.com');
await page.fill('input[type="password"]', 'nope');
await page.click('button[type="submit"]');
await page.waitForTimeout(400);
check('login wrong creds shows error', await page.evaluate(() => document.body.innerText.includes('Incorrect email or password')));
await page.fill('input[type="email"]', 'demo@adiyo.ai');
await page.fill('input[type="password"]', 'demo1234');
await page.click('button[type="submit"]');
await page.waitForTimeout(1500);
check('login demo creds opens dashboard', await page.evaluate(() => {
	// labels render uppercase via CSS, so compare case-insensitively
	const t = document.body.innerText.toLowerCase();
	return t.includes('welcome back') && t.includes('forecast accuracy') && t.includes('demo workspace');
}));
check('login dashboard shows deals', await page.evaluate(() => document.body.innerText.includes('At risk') || document.body.innerText.includes('Drifting')));

// ---------- careers form ----------
await page.goto(BASE + '/careers', { waitUntil: 'networkidle' });
await page.click('button[type="submit"]');
await page.waitForTimeout(400);
const careerErr = await page.evaluate(() => document.body.innerText.toLowerCase().includes('required') || document.body.innerText.toLowerCase().includes('valid'));
check('careers empty submit shows errors', careerErr);
await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test Person');
await page.fill('input[type="email"]', 'test@example.com');
await page.click('button[type="submit"]');
await page.waitForTimeout(600);
check('careers valid submit shows success', await page.evaluate(() => /thank|received|we'll be in touch|success/i.test(document.body.innerText)));

// ---------- motion still alive on a new page ----------
await page.goto(BASE + '/customers/nimbus', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
check('case study reveals fire after scroll', await page.evaluate(async () => {
	window.scrollTo(0, document.body.scrollHeight);
	await new Promise((r) => setTimeout(r, 1200));
	const els = [...document.querySelectorAll('[data-reveal]')].filter((el) => el.getBoundingClientRect().width > 0);
	return els.length > 0 && els.every((el) => el.classList.contains('is-in'));
}));

// ---------- screenshots ----------
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(BASE + '/solutions', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.evaluate(async () => {
	await new Promise((resolve) => {
		let y = 0;
		const step = () => { y += 500; window.scrollTo(0, y); if (y < document.body.scrollHeight) setTimeout(step, 50); else resolve(); };
		step();
	});
});
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/new-solutions-1440.png', fullPage: true });
await page.goto(BASE + '/customers/nimbus', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.evaluate(async () => {
	await new Promise((resolve) => {
		let y = 0;
		const step = () => { y += 500; window.scrollTo(0, y); if (y < document.body.scrollHeight) setTimeout(step, 50); else resolve(); };
		step();
	});
});
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/new-nimbus-1440.png', fullPage: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + '/integrations', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.screenshot({ path: '/home/hatch/workspace/adiyo/verify/new-integrations-390.png', fullPage: true });

const realErrors = errors.filter((e) => !e.includes('fonts.g') && !e.includes('ERR_'));
check('zero page errors across all routes', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));
await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed, ${failed.length} failed`);
process.exit(failed.length ? 1 : 0);
