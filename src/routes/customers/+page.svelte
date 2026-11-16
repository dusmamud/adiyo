<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { caseStudies, testimonials } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const companies = ['Nimbus', 'Fieldset', 'Loopwork'];
</script>

<svelte:head>
	<title>Customers — Adiyo</title>
	<meta
		name="description"
		content="Adiyo customers: Nimbus, Fieldset and Loopwork — teams that stopped guessing and started coaching from evidence, with forecast accuracy they can commit to."
	/>
</svelte:head>

<PageHero
	eyebrow="Customers"
	title="Teams that stopped guessing"
	subtitle="Real teams, real pipelines — and what changed when the guesswork went away."
/>

<section class="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
	<div
		use:reveal
		class="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-b border-navy-900/10 pb-12"
		aria-label="Customer companies"
	>
		{#each companies as company (company)}
			<span class="text-3xl font-extrabold tracking-tight text-navy-900/25 sm:text-4xl">{company}</span>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each caseStudies as study, i (study.slug)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="group flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<div class="flex min-w-0 items-baseline justify-between gap-3">
					<h2 class="min-w-0 text-2xl font-extrabold tracking-tight text-navy-900">{study.company}</h2>
					<span class="shrink-0 text-xs font-extrabold text-brand-600 uppercase">{study.industry.split(' · ')[0]}</span>
				</div>
				<p class="mt-1 text-sm font-semibold text-ink-500">{study.industry}</p>
				<blockquote class="mt-4 flex-1 text-base leading-relaxed text-ink-600">
					“{study.quote}”
				</blockquote>
				<div class="mt-6 border-t border-navy-900/10 pt-5">
					<p class="text-4xl font-extrabold text-navy-900">{study.metrics[0].value}</p>
					<p class="mt-1 text-sm leading-relaxed text-ink-600">{study.metrics[0].label}</p>
				</div>
				<a
					href="/customers/{study.slug}"
					class="mt-6 inline-flex min-h-11 items-center text-base font-bold text-brand-600 hover:text-brand-700"
				>
					Read the story
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</a>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		What their leaders say
	</h2>
	<div class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each testimonials as testimonial, i (testimonial.name)}
			<figure
				use:reveal={{ delay: i * 80 }}
				class="flex min-w-0 flex-col rounded-3xl bg-skysoft-100 p-7 ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<blockquote class="flex-1 text-base leading-relaxed text-navy-900">
					“{testimonial.quote}”
				</blockquote>
				<figcaption class="mt-6 flex min-w-0 items-center gap-3">
					<span
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-extrabold text-brand-700"
						aria-hidden="true"
					>
						{testimonial.initials}
					</span>
					<span class="min-w-0">
						<span class="block truncate text-base font-extrabold text-navy-900">{testimonial.name}</span>
						<span class="block truncate text-sm text-ink-600">{testimonial.role}</span>
					</span>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>

<CtaBanner />
