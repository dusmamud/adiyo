<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { reveal } from '../../lib/reveal';
	import { site } from '../../lib/data';
</script>

<svelte:head>
	<title>Cookie Policy — Adiyo</title>
	<meta
		name="description"
		content="Adiyo's cookie policy: what we store in your browser, and why — strictly necessary, analytics and preference cookies, and how to control them."
	/>
</svelte:head>

<PageHero
	eyebrow="Legal"
	title="Cookie Policy"
	subtitle="What we store in your browser, and why. Last updated: November 2026."
/>

<article class="mx-auto max-w-3xl px-4 py-14 sm:py-20">
	<div class="grid gap-10">
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">What cookies are</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Cookies are small text files your browser stores when you visit a website. Adiyo uses a
				small number of them to keep the product working — to remember that you are signed in, to
				remember your preferences, and to understand, in aggregate, how the product is used. This
				policy explains each kind. This is a demo policy for the Adiyo product preview.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Strictly necessary cookies</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				These cookies are essential for the site to work. They keep you signed in, protect forms
				against abuse, and remember basic choices such as your language. Without them, the product
				cannot run, so they are always on and cannot be switched off from the site itself.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Analytics cookies</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				We use lightweight analytics cookies to see, in aggregate, which pages are visited and
				which features are used. They do not identify you personally, and the data is never sold or
				used to train shared models. You can switch these off in your browser settings and the
				product will keep working.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Preference cookies</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Preference cookies remember choices you make on the site — for example, dismissing a banner
				or keeping a dashboard view the way you left it. They store only the preference itself, not
				your sales data, and they expire after a short period.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">How to control cookies</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				You can control cookies from your browser settings: every modern browser lets you block
				third-party cookies, delete cookies on exit, or clear them for a single site. Blocking
				strictly necessary cookies will sign you out and may stop some features from working;
				blocking analytics and preference cookies will not affect the core product.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Contact</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Questions about cookies or this policy? Email us at
				<a href="mailto:{site.email}" class="font-bold text-brand-600 hover:text-brand-700">{site.email}</a>.
			</p>
		</section>
	</div>
</article>

<CtaBanner />
