<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { solutions } from '../../../lib/data';
	import { reveal } from '../../../lib/reveal';

	const solution = solutions.find((s) => s.slug === 'sales-managers')!;
	const related = solutions.filter((s) => s.slug !== solution.slug);

	const steps = [
		{
			title: 'See what changed',
			text: 'Trajectory alerts land the moment a deal moves — good or bad — so you coach on what is happening now, not last week.'
		},
		{
			title: 'Coach the specific deal',
			text: 'Open the deal, get the cue, agree one next step with a date. Every 1:1 starts with evidence, not rep optimism.'
		},
		{
			title: 'Re-check in 48 hours',
			text: 'Adiyo watches the signal and tells you whether the coaching landed — so nothing agreed in a 1:1 quietly dies.'
		}
	];
</script>

<svelte:head>
	<title>Adiyo for Sales Managers — Adiyo</title>
	<meta
		name="description"
		content="Adiyo for frontline sales managers: real-time trajectory-change alerts, specific coaching cues per deal, and forecast calls backed by 100+ signals."
	/>
</svelte:head>

<PageHero eyebrow={solution.role} title={solution.title} subtitle={solution.subtitle} />

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-2">
		<article
			use:reveal
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-navy-900">The problem</h2>
			<ul class="mt-5 grid gap-4">
				{#each solution.pains as pain (pain)}
					<li class="flex min-w-0 items-start gap-3 text-base leading-relaxed text-ink-600">
						<span
							class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-extrabold text-rose-500"
							aria-hidden="true">✗</span
						>
						<span class="min-w-0">{pain}</span>
					</li>
				{/each}
			</ul>
		</article>
		<article
			use:reveal={{ delay: 80 }}
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-navy-900">What changes with Adiyo</h2>
			<ul class="mt-5 grid gap-4">
				{#each solution.outcomes as outcome (outcome)}
					<li class="flex min-w-0 items-start gap-3 text-base leading-relaxed text-ink-600">
						<span
							class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-extrabold text-brand-700"
							aria-hidden="true">✓</span
						>
						<span class="min-w-0">{outcome}</span>
					</li>
				{/each}
			</ul>
		</article>
	</div>
</section>

<section class="bg-skysoft-100 px-4 py-12 text-center sm:py-16">
	<div use:reveal class="mx-auto max-w-3xl">
		<p class="text-5xl font-extrabold text-navy-900 sm:text-6xl">{solution.stat.value}</p>
		<p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
			{solution.stat.label}
		</p>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		How it works for your team
	</h2>
	<div class="mt-10 grid gap-6 sm:grid-cols-3">
		{#each steps as step, i (step.title)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<p class="text-4xl font-extrabold text-brand-600">0{i + 1}</p>
				<h3 class="mt-4 text-lg font-extrabold text-navy-900">{step.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{step.text}</p>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		Also for your org
	</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		{#each related as item, i (item.slug)}
			<a
				href="/solutions/{item.slug}"
				use:reveal={{ delay: i * 80 }}
				class="group block min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
					{item.role}
				</p>
				<h3 class="mt-3 text-xl font-extrabold text-navy-900">{item.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{item.subtitle}</p>
				<span class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-600">
					Explore {item.role}
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</span>
			</a>
		{/each}
	</div>
</section>

<CtaBanner />
