<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { reveal } from '../../lib/reveal';
	import { site } from '../../lib/data';
</script>

<svelte:head>
	<title>Privacy Policy — Adiyo</title>
	<meta
		name="description"
		content="Adiyo's privacy policy: what sales data we collect, how it is used, cookies, and how to contact us. Your data is never used to train shared models."
	/>
</svelte:head>

<PageHero
	eyebrow="Legal"
	title="Privacy Policy"
	subtitle="Last updated: November 2026. This is a demo policy for the Adiyo product preview."
/>

<article class="mx-auto max-w-3xl px-4 py-14 sm:py-20">
	<div class="grid gap-10">
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">What data we collect</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				When you use Adiyo, we collect the information you provide — such as your name, work email
				and company — and the sales communications you connect through your CRM, email, calendar and
				call tools, including emails, call transcripts and deal records. We also collect basic
				usage data, such as which features you use and when.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">How we use it</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				We use your data to run the service: to analyse your sales communications with our
				proprietary GPT-4 model, surface deal insights and coaching cues, sync updates back to your
				CRM, and to respond to your support requests. We never sell your data, and your sales
				communications are never used to train shared models.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Cookies</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				We use essential cookies to keep you signed in and remember your preferences, and
				lightweight analytics cookies to understand how the product is used. You can disable
				non-essential cookies in your browser settings; the core product will keep working.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Data retention and security</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Your data is stored securely and retained only for as long as your account is active or as
				needed to provide the service. Enterprise plans add custom data residency, SSO / SCIM and
				audit logs. You can request a copy or deletion of your data at any time.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Contact</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Questions about this policy? Email us at
				<a href="mailto:{site.email}" class="font-bold text-brand-700 hover:text-brand-700">{site.email}</a>
				or call {site.phone}.
			</p>
		</section>
	</div>
</article>
