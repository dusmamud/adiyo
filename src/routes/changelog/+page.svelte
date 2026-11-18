<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { changelog } from '../../lib/data';
	import { reveal } from '../../lib/reveal';
</script>

<svelte:head>
	<title>Changelog — Adiyo</title>
	<meta
		name="description"
		content="What's new in Adiyo: trajectory alerts rebuilt, coaching cues for 1:1s, WhatsApp and Instagram signals, explained forecast confidence and the 100-signal engine."
	/>
</svelte:head>

<PageHero
	eyebrow="Changelog"
	title="What's new in Adiyo"
	subtitle="Every release, in plain language — what changed, and why it matters for your forecast."
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:py-20">
	<div class="relative flex flex-col gap-6">
		<span
			class="absolute top-2 bottom-2 left-[1.4rem] hidden w-px bg-navy-900/10 sm:block"
			aria-hidden="true"
		></span>
		{#each changelog as release, i (release.version)}
			<article
				use:reveal={{ delay: Math.min(i * 80, 400) }}
				class="relative min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<span
					class="absolute top-8 left-[1.4rem] hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-brand-500 ring-4 ring-white sm:block"
					aria-hidden="true"
				></span>
				<div class="flex flex-wrap items-center gap-3">
					<span
						class="inline-flex min-h-8 items-center rounded-full bg-navy-900 px-4 text-sm font-extrabold text-white"
					>
						{release.version}
					</span>
					{#if i === 0}
						<span
							class="inline-flex min-h-8 items-center rounded-full bg-brand-100 px-4 text-sm font-extrabold text-brand-700"
						>
							Latest
						</span>
					{/if}
					<time class="text-sm font-semibold text-ink-500">{release.date}</time>
				</div>
				<h2 class="mt-4 text-xl font-extrabold text-navy-900 sm:text-2xl">{release.title}</h2>
				<ul class="mt-4 flex flex-col gap-3">
					{#each release.changes as change (change)}
						<li class="flex items-start gap-2.5 text-sm text-navy-900 sm:text-base">
							<svg
								class="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
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
							<span>{change}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>

<CtaBanner />
