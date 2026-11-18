<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { capabilityPages, caseStudies } from '../../../lib/data';
	import { reveal } from '../../../lib/reveal';

	const page = capabilityPages.find((p) => p.slug === 'coaching-cues')!;
	const relatedStudy = caseStudies.find((c) => c.slug === page.relatedCaseStudy)!;
	const others = capabilityPages.filter((p) => p.slug !== page.slug);
</script>

<svelte:head>
	<title>{page.title} — Adiyo</title>
	<meta
		name="description"
		content="Adiyo Coaching Cues: one sharp question per deal, per week — the fact that moved, the question to ask in the 1:1, and one next step with a date."
	/>
</svelte:head>

<PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} />

<section class="mx-auto max-w-3xl px-4 py-14 sm:py-20">
	<p use:reveal class="text-lg leading-relaxed text-ink-600 sm:text-xl">{page.description}</p>

	<div use:reveal class="mt-10 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8">
		<h2 class="text-xl font-extrabold text-navy-900">What you get</h2>
		<ul class="mt-5 grid gap-4">
			{#each page.benefits as benefit (benefit)}
				<li class="flex min-w-0 items-start gap-3 text-base leading-relaxed text-ink-600">
					<span
						class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"
						aria-hidden="true"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M20 6 9 17l-5-5" />
						</svg>
					</span>
					<span class="min-w-0">{benefit}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		How it works
	</h2>
	<div class="mt-10 grid gap-6 sm:grid-cols-3">
		{#each page.steps as step, i (step)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<p class="text-4xl font-extrabold text-brand-700">0{i + 1}</p>
				<p class="mt-4 text-base leading-relaxed text-ink-600">{step}</p>
			</article>
		{/each}
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
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		It works in the real pipeline
	</h2>
	<a
		href="/customers/{relatedStudy.slug}"
		use:reveal
		class="group mx-auto mt-8 block max-w-3xl min-w-0 rounded-3xl bg-navy-900 p-7 text-white shadow-[0_8px_30px_rgba(10,37,64,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
	>
		<p class="text-xs font-extrabold tracking-[0.18em] text-brand-400 uppercase sm:text-sm">
			Case study — {relatedStudy.company}
		</p>
		<blockquote class="mt-4 text-xl leading-relaxed font-bold sm:text-2xl">
			“{relatedStudy.quote}”
		</blockquote>
		<p class="mt-4 text-base text-white/70">{relatedStudy.person}, {relatedStudy.role}</p>
		<span class="mt-5 inline-flex min-h-11 items-center text-base font-bold text-brand-400">
			Read the full {relatedStudy.company} story
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</span>
	</a>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		More capabilities
	</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-3">
		{#each others as item, i (item.slug)}
			<a
				href="/features/{item.slug}"
				use:reveal={{ delay: i * 80 }}
				class="group block min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-700 uppercase sm:text-sm">
					{item.eyebrow}
				</p>
				<h3 class="mt-3 text-xl font-extrabold text-navy-900">{item.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{item.subtitle}</p>
				<span class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-700">
					Explore {item.title}
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</span>
			</a>
		{/each}
	</div>
</section>

<CtaBanner />
