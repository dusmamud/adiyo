<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { industryPages } from '../../../lib/data';
	import { reveal } from '../../../lib/reveal';

	const page = industryPages.find((p) => p.slug === 'saas')!;
	const others = industryPages.filter((p) => p.slug !== page.slug);

	const storySlug: Record<string, string> = {
		Nimbus: 'nimbus',
		Fieldset: 'fieldset',
		Loopwork: 'loopwork'
	};
</script>

<svelte:head>
	<title>Adiyo for SaaS sales teams — Adiyo</title>
	<meta
		name="description"
		content="Adiyo for SaaS sales teams: expansion risk flagged in time, thread health per stakeholder, and slippage visible weeks ahead — with the reason attached."
	/>
</svelte:head>

<PageHero eyebrow={page.industry} title={page.title} subtitle={page.subtitle} />

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-2">
		<article
			use:reveal
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-navy-900">The problem</h2>
			<ul class="mt-5 grid gap-4">
				{#each page.pains as pain (pain)}
					<li class="flex min-w-0 items-start gap-3 text-base leading-relaxed text-ink-600">
						<span
							class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500"
							aria-hidden="true"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="h-3.5 w-3.5" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
						</span>
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
				{#each page.outcomes as outcome (outcome)}
					<li class="flex min-w-0 items-start gap-3 text-base leading-relaxed text-ink-600">
						<span
							class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"
							aria-hidden="true"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
						</span>
						<span class="min-w-0">{outcome}</span>
					</li>
				{/each}
			</ul>
		</article>
	</div>
</section>

<section class="bg-skysoft-100 px-4 py-12 text-center sm:py-16">
	<div use:reveal class="mx-auto max-w-3xl">
		<p class="text-5xl font-extrabold text-navy-900 sm:text-6xl">{page.stat.value}</p>
		<p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
			{page.stat.label}
		</p>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<article
		use:reveal
		class="group mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
	>
		<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
			In practice · {page.example.company}
		</p>
		<blockquote class="mt-4 text-xl leading-relaxed font-bold text-navy-900 sm:text-2xl">
			“{page.example.result}”
		</blockquote>
		<a
			href="/customers/{storySlug[page.example.company]}"
			class="mt-6 inline-flex min-h-11 items-center text-base font-bold text-brand-600 hover:text-brand-700"
		>
			Read the {page.example.company} story
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
		</a>
	</article>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		More industries
	</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		{#each others as item, i (item.slug)}
			<a
				href="/industries/{item.slug}"
				use:reveal={{ delay: i * 80 }}
				class="group block min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
					{item.industry}
				</p>
				<h3 class="mt-3 text-xl font-extrabold text-navy-900">{item.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{item.subtitle}</p>
				<span class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-600">
					Explore {item.industry}
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</span>
			</a>
		{/each}
	</div>
</section>

<CtaBanner />
