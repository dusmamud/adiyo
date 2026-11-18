<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { reveal } from '../../lib/reveal';
	import { site } from '../../lib/data';
</script>

<svelte:head>
	<title>Terms of Service — Adiyo</title>
	<meta
		name="description"
		content="Adiyo's terms of service: acceptable use, availability, liability and changes. Demo terms for the Adiyo product preview."
	/>
</svelte:head>

<PageHero
	eyebrow="Legal"
	title="Terms of Service"
	subtitle="Last updated: November 2026. These are demo terms for the Adiyo product preview."
/>

<article class="mx-auto max-w-3xl px-4 py-14 sm:py-20">
	<div class="grid gap-10">
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Acceptable use</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				You agree to use Adiyo lawfully and only for your own sales operations. You must not misuse
				the service, attempt to access other customers' data, reverse-engineer the proprietary
				GPT-4 model, or use Adiyo to send spam or misleading communications. Access is provided on
				a per-user basis for the seats on your plan.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Availability</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				We aim to keep Adiyo available at all times, and Enterprise plans include a 99.9% uptime
				SLA. We may occasionally take the service down for maintenance or updates, and will give
				reasonable notice where possible. Insights are generated from your connected data and are
				intended as guidance for managers — final sales decisions remain yours.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Liability</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Adiyo is provided "as is" without warranties beyond those required by law. To the fullest
				extent permitted by law, our liability for any claim related to the service is limited to
				the fees you paid for the twelve months before the claim arose. Nothing in these terms
				limits liability that cannot be limited by law.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Changes</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				We may update these terms from time to time, for example when we add features or change how
				the service works. We will post the updated terms here with a new "last updated" date, and
				for material changes we will notify account owners by email. Continued use after a change
				means you accept the updated terms.
			</p>
		</section>
		<section use:reveal>
			<h2 class="text-2xl font-extrabold text-navy-900">Contact</h2>
			<p class="mt-3 text-base leading-relaxed text-ink-600">
				Questions about these terms? Email us at
				<a href="mailto:{site.email}" class="font-bold text-brand-700 hover:text-brand-700">{site.email}</a>
				or call {site.phone}.
			</p>
		</section>
	</div>
</article>
