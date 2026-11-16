<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { integrations, integrationCategories } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	let selected = $state('All');

	let shown = $derived(
		selected === 'All' ? integrations : integrations.filter((tool) => tool.category === selected)
	);

	function initials(name: string) {
		return name
			.split(' ')
			.map((w) => w[0])
			.join('')
			.slice(0, 2)
			.toUpperCase();
	}
</script>

<svelte:head>
	<title>Integrations — Adiyo</title>
	<meta
		name="description"
		content="Adiyo connects to your CRM, email, calendar, calls and messaging in minutes — Salesforce, HubSpot, Gmail, Slack, Zoom and more, with two-way sync."
	/>
</svelte:head>

<PageHero
	eyebrow="Integrations"
	title="Works with the stack you already have"
	subtitle="Connect your CRM, inbox, calendar and calls in minutes — Adiyo reads the signals where your team already works."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div
		use:reveal
		class="flex flex-wrap items-center justify-center gap-2"
		role="group"
		aria-label="Filter integrations by category"
	>
		{#each integrationCategories as category (category)}
			<button
				type="button"
				aria-pressed={selected === category}
				onclick={() => (selected = category)}
				class="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-bold transition-all duration-200 {selected ===
				category
					? 'bg-navy-900 text-white shadow-md'
					: 'bg-white text-navy-900 ring-1 ring-navy-900/10 hover:-translate-y-0.5 hover:ring-navy-900/25'}"
			>
				{category}
			</button>
		{/each}
	</div>

	{#if shown.length === 0}
		<p use:reveal class="mt-12 text-center text-base text-ink-600">
			No integrations in this category yet — check back soon.
		</p>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each shown as tool, i (tool.name)}
				<article
					use:reveal={{ delay: Math.min(i * 70, 350) }}
					class="group min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
				>
					<div class="flex items-start justify-between gap-3">
						<span
							class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-base font-extrabold text-white transition-transform duration-300 group-hover:scale-110"
							aria-hidden="true"
						>
							{initials(tool.name)}
						</span>
						<span
							class="rounded-full bg-skysoft-100 px-3 py-1 text-xs font-bold whitespace-nowrap text-navy-900/70"
						>
							{tool.category}
						</span>
					</div>
					<h2 class="mt-5 text-xl font-extrabold text-navy-900">{tool.name}</h2>
					<p class="mt-2 text-base leading-relaxed text-ink-600">{tool.blurb}</p>
					<p class="mt-4 flex items-center gap-2 text-sm font-bold text-brand-700">
						<svg
							class="h-4 w-4 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M20 6 9 17l-5-5" />
						</svg>
						{tool.setup}
					</p>
				</article>
			{/each}
		</div>
	{/if}

	<div
		use:reveal
		class="mt-12 flex min-w-0 flex-col items-center justify-between gap-5 rounded-3xl bg-brand-50 p-7 ring-1 ring-brand-500/20 sm:flex-row sm:p-8"
	>
		<div class="min-w-0 text-center sm:text-left">
			<h2 class="text-xl font-extrabold text-navy-900">Don't see your tool?</h2>
			<p class="mt-1 text-base leading-relaxed text-ink-600">
				We add new integrations every month — tell us what your team runs on.
			</p>
		</div>
		<a
			href="/contact"
			class="group inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-navy-900 px-6 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
		>
			Talk to sales
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</a>
	</div>
</section>

<CtaBanner />
