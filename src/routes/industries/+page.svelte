<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { industryPages } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const fitPoints = [
		{
			title: 'Different buyers, different signals',
			text: 'A champion going quiet means something different in a SaaS trial than in a hospital buying committee — Adiyo reads the signal in context.'
		},
		{
			title: 'Different cycles, different risk',
			text: 'A 30-day SaaS trial and a nine-month procurement gate drift in different ways. The alerts are tuned to the cycle you actually sell into.'
		},
		{
			title: 'Same engine, tuned per industry',
			text: 'Adiyo scores every deal on 100+ buyer signals — weighted for how your industry buys, so the forecast call works the same way every quarter.'
		}
	];
</script>

<svelte:head>
	<title>Industries — Adiyo</title>
	<meta
		name="description"
		content="Adiyo for SaaS, FinTech and Healthcare sales teams: the same 100-signal engine, tuned for how each industry actually buys."
	/>
</svelte:head>

<PageHero
	eyebrow="Industries"
	title="Tuned for how your industry buys"
	subtitle="One AI co-pilot, weighted for the cycles, committees and procurement gates of the industry you sell into."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each industryPages as page, i (page.slug)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="group flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
					{page.industry}
				</p>
				<h2 class="mt-3 text-2xl leading-tight font-extrabold tracking-tight text-navy-900">
					{page.title}
				</h2>
				<p class="mt-3 flex-1 text-base leading-relaxed text-ink-600">{page.subtitle}</p>
				<div class="mt-6 border-t border-navy-900/10 pt-5">
					<p class="text-4xl font-extrabold text-navy-900">{page.stat.value}</p>
					<p class="mt-1 text-sm leading-relaxed text-ink-600">{page.stat.label}</p>
				</div>
				<a
					href="/industries/{page.slug}"
					class="mt-6 inline-flex min-h-11 items-center text-base font-bold text-brand-600 hover:text-brand-700"
				>
					Explore {page.industry}
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</a>
			</article>
		{/each}
	</div>
</section>

<section class="bg-skysoft-100 px-4 py-14 sm:py-20">
	<div class="mx-auto max-w-6xl">
		<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
			Why industry fit matters
		</h2>
		<div class="mt-10 grid gap-6 sm:grid-cols-3">
			{#each fitPoints as point, i (point.title)}
				<article
					use:reveal={{ delay: i * 80 }}
					class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
				>
					<p
						class="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-lg font-extrabold text-brand-700"
						aria-hidden="true"
					>
						0{i + 1}
					</p>
					<h3 class="mt-4 text-lg font-extrabold text-navy-900">{point.title}</h3>
					<p class="mt-2 text-base leading-relaxed text-ink-600">{point.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<CtaBanner />
