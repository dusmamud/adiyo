<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { solutions } from '../../lib/data';
	import { reveal } from '../../lib/reveal';
</script>

<svelte:head>
	<title>Solutions — Adiyo</title>
	<meta
		name="description"
		content="Adiyo solutions for every seat in the revenue org: frontline sales teams, sales managers and revenue leaders — one AI co-pilot, tuned for how each role works the pipeline."
	/>
</svelte:head>

<PageHero
	eyebrow="Solutions"
	title="Built for every seat in the revenue org"
	subtitle="One AI co-pilot, tuned for the way each role actually works the pipeline."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each solutions as solution, i (solution.slug)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="group flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
					{solution.role}
				</p>
				<h2 class="mt-3 text-2xl leading-tight font-extrabold tracking-tight text-navy-900">
					{solution.title}
				</h2>
				<p class="mt-3 flex-1 text-base leading-relaxed text-ink-600">{solution.subtitle}</p>
				<div class="mt-6 border-t border-navy-900/10 pt-5">
					<p class="text-4xl font-extrabold text-navy-900">{solution.stat.value}</p>
					<p class="mt-1 text-sm leading-relaxed text-ink-600">{solution.stat.label}</p>
				</div>
				<a
					href="/solutions/{solution.slug}"
					class="mt-6 inline-flex min-h-11 items-center text-base font-bold text-brand-600 hover:text-brand-700"
				>
					Explore {solution.role}
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</a>
			</article>
		{/each}
	</div>

	<p use:reveal class="mx-auto mt-12 max-w-xl text-center text-base leading-relaxed text-ink-600">
		Not sure where you fit?
		<a href="/how-it-works" class="font-bold text-brand-600 hover:text-brand-700"
			>Start with How It Works →</a
		>
	</p>
</section>

<CtaBanner />
