<script lang="ts">
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { caseStudies } from '../../../lib/data';
	import { reveal } from '../../../lib/reveal';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const study = $derived(data.study);
	const related = $derived(caseStudies.filter((c) => c.slug !== study.slug));
</script>

<svelte:head>
	<title>{study.company} — Adiyo Customers</title>
	<meta
		name="description"
		content="How {study.company} ({study.industry}) uses Adiyo — {study.person}, {study.role}."
	/>
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<div use:reveal>
		<a
			href="/customers"
			class="inline-flex min-h-11 items-center text-base font-bold text-brand-700 hover:text-brand-700"
		>
			← All customers
		</a>
		<div class="mt-6 flex flex-wrap items-center gap-3">
			<span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700">
				{study.industry}
			</span>
		</div>
		<h1 class="mt-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-navy-900 sm:text-5xl">
			{study.company}
		</h1>
	</div>

	<blockquote
		use:reveal
		class="mt-10 rounded-3xl bg-skysoft-100 p-7 ring-1 ring-navy-900/5 sm:p-9"
	>
		<p class="text-xl leading-relaxed font-bold text-navy-900 sm:text-2xl">“{study.quote}”</p>
		<footer class="mt-5 flex min-w-0 items-center gap-3">
			<span
				class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-extrabold text-brand-700"
				aria-hidden="true"
			>
				{study.person
					.split(' ')
					.map((w) => w[0])
					.join('')}
			</span>
			<span class="min-w-0">
				<span class="block truncate text-base font-extrabold text-navy-900">{study.person}</span>
				<span class="block truncate text-sm text-ink-600">{study.role}</span>
			</span>
		</footer>
	</blockquote>

	<div use:reveal class="mt-10 grid gap-5 sm:grid-cols-3">
		{#each study.metrics as metric (metric.label)}
			<div
				class="min-w-0 rounded-3xl bg-white p-6 text-center shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
			>
				<p class="text-4xl font-extrabold text-navy-900">{metric.value}</p>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">{metric.label}</p>
			</div>
		{/each}
	</div>

	<div class="mt-10 grid gap-5">
		{#each study.story as paragraph (paragraph.slice(0, 48))}
			<p class="text-base leading-relaxed text-ink-600 sm:text-lg">{paragraph}</p>
		{/each}
	</div>
</article>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		Related stories
	</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		{#each related as item, i (item.slug)}
			<a
				href="/customers/{item.slug}"
				use:reveal={{ delay: i * 80 }}
				class="group block min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-700 uppercase sm:text-sm">
					{item.industry}
				</p>
				<h3 class="mt-3 text-xl font-extrabold text-navy-900">{item.company}</h3>
				<p class="mt-2 line-clamp-2 text-base leading-relaxed text-ink-600">“{item.quote}”</p>
				<span class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-700">
					Read the story
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</span>
			</a>
		{/each}
	</div>
</section>

<CtaBanner />
