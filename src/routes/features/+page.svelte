<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { features, capabilityPages } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const demoDeals = [
		{
			slug: 'nimbus',
			company: 'Nimbus',
			type: 'Expansion',
			value: '$420K',
			health: 'At risk',
			insight:
				'The champion has gone quiet for 12 days — and a new stakeholder from Finance just joined the thread. The deal is drifting, not dead.',
			signals: [
				'Champion silence — 12 days without a reply',
				'New stakeholder — Finance joined the thread this week',
				'Reply latency doubled since the proposal went out'
			],
			cue: 'Call the champion directly — ask what changed on their side, then offer a revised mutual close plan with a date.',
			forecast: 'Confidence 42% — $420K at risk if nothing changes in 7 days.'
		},
		{
			slug: 'fieldset',
			company: 'Fieldset',
			type: 'Renewal',
			value: '$180K',
			health: 'Healthy',
			insight:
				'Usage is up 18% this quarter and the renewal champion replies within a day. Nothing here needs saving — it needs a bigger ask.',
			signals: [
				'Product usage up 18% this quarter',
				'Champion replies within a day, every time',
				'No competitor mentions in calls or email'
			],
			cue: 'Ask for the multi-year option now — the usage growth gives you the leverage.',
			forecast: 'Confidence 91% — safe to commit to the forecast.'
		},
		{
			slug: 'loopwork',
			company: 'Loopwork',
			type: 'New logo',
			value: '$250K',
			health: 'Drifting',
			insight:
				'The close date has slipped twice and the economic buyer is still not in the room. The deal is moving — just not toward a signature.',
			signals: [
				'Close date moved twice in three weeks',
				'Economic buyer absent from every meeting',
				'Procurement mentioned on the last call'
			],
			cue: 'Get the economic buyer into the next call — offer a 30-minute business-case review, not another demo.',
			forecast: 'Confidence 55% — commit only after the buyer meeting happens.'
		}
	];

	let selectedDeal = $state(demoDeals[0]);
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

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		Capability deep dives
	</h2>
	<p use:reveal class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-ink-600">
		Each capability, explained end to end — what it does, how it works, and the customer it helped.
	</p>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each capabilityPages as item, i (item.slug)}
			<a
				href="/features/{item.slug}"
				use:reveal={{ delay: Math.min(i * 70, 280) }}
				class="group block min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
					{item.eyebrow}
				</p>
				<h3 class="mt-3 text-xl font-extrabold text-navy-900">{item.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{item.subtitle}</p>
				<span class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-600">
					Explore {item.title}
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
						>→</span
					>
				</span>
			</a>
		{/each}
	</div>
</section>

<section id="interactive-demo" class="scroll-mt-24 bg-navy-900 px-4 py-14 text-white sm:py-20">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="mx-auto max-w-2xl text-center">
			<p class="text-xs font-extrabold tracking-[0.18em] text-brand-400 uppercase sm:text-sm">
				Interactive demo
			</p>
			<h2 class="mt-3 text-2xl font-extrabold sm:text-3xl">Try it on a real-looking deal</h2>
			<p class="mt-3 text-base leading-relaxed text-white/70">
				Pick a deal. This is the exact view a manager sees — the insight, the signals behind it,
				and the one coaching cue that moves it.
			</p>
		</div>

		<div
			use:reveal
			role="tablist"
			aria-label="Choose a sample deal"
			class="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3"
		>
			{#each demoDeals as deal (deal.slug)}
				<button
					type="button"
					role="tab"
					aria-selected={selectedDeal.slug === deal.slug}
					aria-controls="demo-panel"
					onclick={() => (selectedDeal = deal)}
					class="flex min-h-12 min-w-0 flex-col items-start gap-1 rounded-2xl px-5 py-3 text-left transition-all duration-200 {selectedDeal.slug ===
					deal.slug
						? 'bg-white text-navy-900 shadow-lg'
						: 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20'}"
				>
					<span class="text-base font-extrabold">{deal.company}</span>
					<span
						class="text-sm {selectedDeal.slug === deal.slug ? 'text-ink-600' : 'text-white/70'}"
					>
						{deal.type} · {deal.value}
					</span>
				</button>
			{/each}
		</div>

		<div
			id="demo-panel"
			role="tabpanel"
			use:reveal
			class="mx-auto mt-6 max-w-3xl min-w-0 rounded-3xl bg-white p-7 text-navy-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:p-8"
		>
			{#key selectedDeal.slug}
				<div class="flex min-w-0 flex-wrap items-center justify-between gap-3">
					<h3 class="text-xl font-extrabold">
						{selectedDeal.company} — {selectedDeal.type} · {selectedDeal.value}
					</h3>
					<span
						class="inline-flex min-h-8 items-center rounded-full px-3 text-xs font-extrabold tracking-wide {selectedDeal.health ===
						'Healthy'
							? 'bg-brand-100 text-brand-700'
							: selectedDeal.health === 'At risk'
								? 'bg-rose-100 text-rose-600'
								: 'bg-amber-100 text-amber-700'}"
					>
						{selectedDeal.health}
					</span>
				</div>

				<p class="mt-4 text-base leading-relaxed text-ink-600">{selectedDeal.insight}</p>

				<h4 class="mt-6 text-sm font-extrabold tracking-[0.14em] text-navy-900 uppercase">
					The signals that moved
				</h4>
				<ul class="mt-3 grid gap-3">
					{#each selectedDeal.signals as signal (signal)}
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
							<span class="min-w-0">{signal}</span>
						</li>
					{/each}
				</ul>

				<div class="mt-6 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-500/20">
					<h4 class="text-sm font-extrabold tracking-[0.14em] text-brand-700 uppercase">
						Coaching cue
					</h4>
					<p class="mt-2 text-base leading-relaxed text-navy-900">{selectedDeal.cue}</p>
				</div>

				<p class="mt-5 text-base font-bold text-navy-900">{selectedDeal.forecast}</p>
			{/key}
		</div>

		<p use:reveal class="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/60">
			Sample data for the demo — the deals, signals and numbers are illustrative, not real customer
			data.
		</p>
	</div>
</section>

<CtaBanner />
