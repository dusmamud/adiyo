<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { pressReleases, site } from '../../lib/data';
	import { reveal } from '../../lib/reveal';
</script>

<svelte:head>
	<title>Press — Adiyo</title>
	<meta
		name="description"
		content="Adiyo press releases and media resources: milestones, product launches and security certifications, plus the press kit and media contact."
	/>
</svelte:head>

<PageHero
	eyebrow="Press"
	title="News from Adiyo"
	subtitle="Milestones, launches and certifications — the official record, in the order it happened."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each pressReleases as release, i (release.title)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<div class="flex flex-wrap items-center justify-between gap-2">
					<span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700">
						{release.tag}
					</span>
					<span class="text-sm font-semibold text-ink-500">{release.date}</span>
				</div>
				<h2 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">{release.title}</h2>
				<p class="mt-2 flex-1 text-base leading-relaxed text-ink-600">{release.excerpt}</p>
			</article>
		{/each}
	</div>

	<div class="mt-14 grid gap-6 lg:grid-cols-2">
		<div
			use:reveal
			class="min-w-0 rounded-3xl bg-navy-950 p-7 shadow-xl sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-white">Press kit</h2>
			<p class="mt-2 text-base leading-relaxed text-white/70">
				The Adiyo logo, brand colours and product screenshots — everything you need to write about us
				accurately.
			</p>
			<ul class="mt-5 grid gap-2 text-base text-white/80">
				<li class="flex items-start gap-2">
					<span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
					<span>Logo files (light and dark, SVG and PNG)</span>
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
					<span>Brand colours and typography</span>
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
					<span>Product screenshots and founder photos</span>
				</li>
			</ul>
			<a
				href="/about"
				class="mt-6 inline-flex min-h-11 items-center text-base font-bold text-white underline decoration-brand-500 decoration-2 underline-offset-4 hover:text-brand-500"
			>
				Read our story on the About page →
			</a>
		</div>

		<div
			use:reveal={{ delay: 80 }}
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-navy-900">Media contact</h2>
			<p class="mt-2 text-base leading-relaxed text-ink-600">
				Writing a story, booking an interview or fact-checking a claim? Talk to the team directly.
			</p>
			<p class="mt-5 text-base text-ink-600">
				Email
				<a href="mailto:{site.email}" class="font-bold text-brand-600 hover:text-brand-700">
					{site.email}
				</a>
			</p>
			<p class="mt-2 text-base text-ink-600">
				Phone
				<a href="tel:+14155550132" class="font-bold text-brand-600 hover:text-brand-700">
					+1 (415) 555-0132
				</a>
			</p>
			<p class="mt-5 text-sm leading-relaxed text-ink-500">
				We reply to press enquiries within one working day. For product questions, the Help Center
				answers most of them faster.
				<a href="/help" class="font-bold text-brand-600 hover:text-brand-700">Visit Help Center →</a>
			</p>
		</div>
	</div>
</section>

<CtaBanner />
