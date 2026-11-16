<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { features } from '../../lib/data';
	import { reveal } from '../../lib/reveal';
</script>

<svelte:head>
	<title>Features — Adiyo</title>
	<meta
		name="description"
		content="Adiyo features: a proprietary GPT-4 engine, 100+ data signals, trajectory-change alerts, two-way CRM sync, real-time coaching cues and a forecast you can trust."
	/>
</svelte:head>

<PageHero
	eyebrow="Features"
	title="Better insights, better outcomes"
	subtitle="Deep, contextual understanding of every deal — surfaced to managers at the exact moment it matters."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each features as feature, i (feature.title)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="group min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<span
					class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 transition-transform duration-300 group-hover:scale-110"
				>
					{#if feature.icon === 'gpt'}
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							aria-hidden="true"
						>
							<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
						</svg>
					{:else if feature.icon === 'signals'}
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							aria-hidden="true"
						>
							<path d="M4 20v-6M9 20V9M14 20v-9M19 20V5" />
						</svg>
					{:else if feature.icon === 'alert'}
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
							<path d="M13.7 21a2 2 0 0 1-3.4 0" />
						</svg>
					{:else if feature.icon === 'crm'}
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<ellipse cx="12" cy="5" rx="8" ry="3" />
							<path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
							<path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
						</svg>
					{:else if feature.icon === 'coach'}
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
						</svg>
					{:else if feature.icon === 'forecast'}
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M3 17l6-6 4 4 8-8" />
							<path d="M14 7h7v7" />
						</svg>
					{/if}
				</span>
				<h2 class="mt-5 text-xl font-extrabold text-navy-900">{feature.title}</h2>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{feature.text}</p>
			</article>
		{/each}
	</div>
</section>

<CtaBanner />
