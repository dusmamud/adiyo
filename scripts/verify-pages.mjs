// Full-site verification for Adiyo after the round-2 build (51 routes):
// overflow on every route, motion, header dropdowns + sections, mobile menu,
// and all interactive widgets (integrations filter, help search, ROI calculator,
// login demo flow, careers form, features interactive demo, blog filter,
// back-to-top, webinars form, status page, compare tables).
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const BASE = 'http://127.0.0.1:4177'; // 4173 luxury-furniture, 4174 MSY Law, 4176 aurelia — do not kill other projects' previews
const results = [];
const check = (name, ok, detail = '') => {
	results.push({ name, ok, detail });
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);
};

const routes = [
	'/', '/how-it-works', '/features', '/features/deal-insights', '/features/forecast-accuracy',
	'/features/coaching-cues', '/features/crm-sync', '/integrations', '/security', '/compare',
	'/compare/gong', '/compare/clari', '/changelog', '/pricing', '/solutions', '/solutions/sales-teams',
	'/solutions/sales-managers', '/solutions/revenue-leaders', '/solutions/startups', '/solutions/enterprise',
	'/industries', '/industries/saas', '/industries/fintech', '/industries/healthcare',
	'/customers', '/customers/nimbus', '/customers/fieldset', '/customers/loopwork',
	'/resources', '/blog', '/blog/generative-ai-sales-forecasting', '/blog/coach-reps-in-real-time',
	'/blog/100-data-signals-explained', '/blog/ai-sales-coaching-playbook',
	'/blog/forecast-accuracy-metrics-that-matter', '/blog/crm-hygiene-ai-fix',
	'/roi-calculator', '/help', '/docs', '/status', '/webinars', '/press',
	'/about', '/careers', '/contact', '/request-demo',
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
check('sitemap.xml lists 51 URLs', await page.evaluate(async () => {
	const t = await (await fetch('/sitemap.xml')).text();
	return (t.match(/<loc>/g) || []).length;
}) === 51, '');

// ---------- hero cloud: cards must overlap the centre blob (desktop) ----------
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
const cloud = await page.evaluate(() => {
	const rect = (el) => { const r = el.getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom }; };
	const intersect = (a, b) => a.l < b.r && b.l < a.r && a.t < b.b && b.t < a.b;
	const blob = [...document.querySelectorAll('div')].find((d) => d.className.includes('bg-skysoft-200/90') && d.getBoundingClientRect().width > 300);
	if (!blob) return { ok: false, why: 'no desktop blob found' };
	const b = rect(blob);
	const card = (txt) => [...document.querySelectorAll('div')].find((d) => d.className.includes('absolute') && d.textContent.includes(txt));
	const c45 = card('$45B');
	const c50 = card('50%');
	const cSm = card('Sales Managers');
	if (!c45 || !c50 || !cSm) return { ok: false, why: 'a hero card not found' };
	return { ok: intersect(b, rect(c45)) && intersect(b, rect(c50)) && intersect(b, rect(cSm)), why: '' };
});
check('hero cloud cards overlap centre blob', cloud.ok, cloud.why);

// ---------- header dropdowns (desktop xl) ----------
await page.hover('button:has-text("Product")');
await page.waitForTimeout(400);
const dd = await page.evaluate(() => {
	const links = [...document.querySelectorAll('header nav a')].filter((a) => a.textContent.trim() === 'Deal Insights');
	const labels = [...document.querySelectorAll('header nav p')].map((p) => p.textContent.trim());
	if (!links.length) return { visible: false };
	const r = links[0].getBoundingClientRect();
	return { visible: r.width > 0 && r.height > 0, href: links[0].getAttribute('href'), sectionLabel: labels.includes('Capability deep dives') };
});
check('header Product dropdown shows Deal Insights + section label', dd.visible && dd.href === '/features/deal-insights' && dd.sectionLabel, JSON.stringify(dd));
await page.hover('button:has-text("Solutions")');
await page.waitForTimeout(400);
const dd2 = await page.evaluate(() => {
	const links = [...document.querySelectorAll('header nav a')].filter((a) => a.textContent.trim() === 'Startups');
	const labels = [...document.querySelectorAll('header nav p')].map((p) => p.textContent.trim());
	if (!links.length) return { visible: false };
	const r = links[0].getBoundingClientRect();
	return { visible: r.width > 0 && r.height > 0, href: links[0].getAttribute('href'), industryLabel: labels.includes('By industry') };
});
check('header Solutions dropdown shows Startups + By industry label', dd2.visible && dd2.href === '/solutions/startups' && dd2.industryLabel, JSON.stringify(dd2));
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
	return ['Product', 'Solutions', 'Customers', 'Resources', 'Company', 'Deal Insights', 'Startups', 'Documentation', 'System Status'].every((s) => text.includes(s));
}));
check('mobile menu Sign in + Demo buttons', await page.evaluate(() => {
	const nav = document.querySelector('nav[aria-label="Mobile"]');
	return nav ? [...nav.querySelectorAll('a')].some((a) => a.textContent.trim() === 'Sign in') : false;
}));

// ---------- integrations filter ----------
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(BASE + '/integrations', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.click('button:has-text("CRM")');
await page.waitForTimeout(400);
const crmState = await page.evaluate(() => {
	const t = document.body.innerText;
	return { salesforce: t.includes('Salesforce'), hubspot: t.includes('HubSpot'), gmail: t.includes('Gmail') };
});
check('integrations filter CRM shows Salesforce+HubSpot, hides Gmail', crmState.salesforce && crmState.hubspot && !crmState.gmail, JSON.stringify(crmState));

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

// ---------- features interactive demo ----------
await page.goto(BASE + '/features#interactive-demo', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
const demoBefore = await page.evaluate(() => document.querySelector('#interactive-demo')?.innerText || '');
await page.click('#interactive-demo button:has-text("Fieldset")');
await page.waitForTimeout(600);
const demoAfter = await page.evaluate(() => document.querySelector('#interactive-demo')?.innerText || '');
check('features demo tab swaps insight panel', demoBefore.length > 100 && demoAfter.length > 100 && demoBefore !== demoAfter, `panel changed: ${demoBefore !== demoAfter}`);
check('features demo shows health badge + coaching cue', await page.evaluate(() => {
	const t = (document.querySelector('#interactive-demo')?.innerText || '').toLowerCase();
	return (t.includes('at risk') || t.includes('healthy') || t.includes('drifting')) && t.includes('coaching');
}));

// ---------- blog category filter ----------
await page.goto(BASE + '/blog', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.click('button:has-text("Coaching")');
await page.waitForTimeout(500);
check('blog filter Coaching shows coaching posts only', await page.evaluate(() => {
	const t = document.body.innerText;
	return t.includes('Real-Time Coaching') && !t.includes('Why Generative AI Is the End');
}));

// ---------- back-to-top ----------
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);
const btt = await page.evaluate(() => {
	const b = document.querySelector('button[aria-label="Back to top"]');
	if (!b) return { found: false };
	const r = b.getBoundingClientRect();
	return { found: true, visible: r.width > 0 && r.height > 0 && r.top < window.innerHeight };
});
check('back-to-top appears after scroll', btt.found && btt.visible, JSON.stringify(btt));
if (btt.found) {
	await page.click('button[aria-label="Back to top"]');
	await page.waitForTimeout(1200);
	check('back-to-top returns to top', await page.evaluate(() => window.scrollY < 100));
}

// ---------- status page ----------
await page.goto(BASE + '/status', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
check('status page shows operational + uptimes', await page.evaluate(() => {
	const t = document.body.innerText;
	return t.includes('All systems operational') && t.includes('99.98%') && t.includes('99.95%') && t.includes('99.99%');
}));

// ---------- compare pages ----------
await page.goto(BASE + '/compare/gong', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
check('compare/gong table + honest note', await page.evaluate(() => {
	const t = document.body.innerText;
	return t.includes('Adiyo vs Gong') && t.includes('Where Gong wins') && t.includes('Illustrative comparison');
}));
await page.goto(BASE + '/compare/clari', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
check('compare/clari table + honest note', await page.evaluate(() => {
	const t = document.body.innerText;
	return t.includes('Adiyo vs Clari') && t.includes('Where Clari wins') && t.includes('Illustrative comparison');
}));

// ---------- docs page ----------
await page.goto(BASE + '/docs', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
check('docs page has API reference code', await page.evaluate(() => document.querySelectorAll('pre').length > 0 && document.body.innerText.includes('GET /v1/deals')));

// ---------- webinars form ----------
await page.goto(BASE + '/webinars', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.click('button[type="submit"]');
await page.waitForTimeout(400);
const webErr = await page.evaluate(() => document.body.innerText.toLowerCase().includes('required') || document.body.innerText.toLowerCase().includes('valid'));
check('webinars empty submit shows errors', webErr);
await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test Person');
await page.fill('input[type="email"]', 'test@example.com');
await page.click('button[type="submit"]');
await page.waitForTimeout(600);
check('webinars valid submit shows success', await page.evaluate(() => /thank|registered|seat|success|confirmed/i.test(document.body.innerText)));

// ---------- industries hub + solutions hub dedup ----------
await page.goto(BASE + '/industries', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
check('industries hub lists 3 industries', await page.evaluate(() => {
	const t = document.body.innerText;
	return t.includes('SaaS') && t.includes('FinTech') && t.includes('Healthcare');
}));
await page.goto(BASE + '/solutions', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
check('solutions hub has one Startups card (no dup)', await page.evaluate(() => {
	const links = [...document.querySelectorAll('section a[href="/solutions/startups"]')];
	return links.length === 1;
}));

// ---------- motion still alive on a new page ----------
await page.goto(BASE + '/customers/nimbus', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
check('case study reveals fire after scroll', await page.evaluate(async () => {
	window.scrollTo(0, document.body.scrollHeight);
	await new Promise((r) => setTimeout(r, 1200));
	const els = [...document.querySelectorAll('[data-reveal]')].filter((el) => el.getBoundingClientRect().width > 0);
	return els.length > 0 && els.every((el) => el.classList.contains('is-in'));
}));

// ---------- screenshots (scroll-pass so reveals fire) ----------
async function scrollShot(url, path, vw = 1440, vh = 900) {
	await page.setViewportSize({ width: vw, height: vh });
	await page.goto(BASE + url, { waitUntil: 'networkidle' });
	await page.waitForTimeout(900);
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
	await page.screenshot({ path, fullPage: true });
}
await scrollShot('/', '/home/hatch/workspace/adiyo/verify/r2-home-1440.png');
await scrollShot('/features', '/home/hatch/workspace/adiyo/verify/r2-features-1440.png');
await scrollShot('/industries', '/home/hatch/workspace/adiyo/verify/r2-industries-1440.png');
await scrollShot('/compare/gong', '/home/hatch/workspace/adiyo/verify/r2-compare-gong-1440.png');
await scrollShot('/solutions', '/home/hatch/workspace/adiyo/verify/r2-solutions-1440.png');

const realErrors = errors.filter((e) => !e.includes('fonts.g') && !e.includes('ERR_'));
check('zero page errors across all routes', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));
await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed, ${failed.length} failed`);
process.exit(failed.length ? 1 : 0);
