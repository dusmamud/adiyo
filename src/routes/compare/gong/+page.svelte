<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { competitorComparisons } from '../../../lib/data';
	import { reveal } from '../../../lib/reveal';

	const comparison = competitorComparisons.gong;
	const competitorWins = comparison.rows.filter((row) => !row.adiyoWins);
</script>

<svelte:head>
	<title>Adiyo vs Gong — Adiyo</title>
	<meta
		name="description"
		content="Adiyo vs Gong: conversation intelligence records the call — Adiyo coaches the deal. Trajectory alerts, forecast confidence, coaching cues and CRM write-back compared."
	/>
</svelte:head>

<PageHero
	eyebrow="Compare"
	title="Adiyo vs {comparison.name}"
	subtitle={comparison.tagline}
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div
		use:reveal={{ variant: 'fade' }}
		class="overflow-x-auto rounded-3xl bg-white shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
	>
		<table class="w-full min-w-[640px] border-collapse text-left">
			<thead>
				<tr class="border-b border-navy-900/10">
					<th scope="col" class="min-w-0 px-5 py-5 text-sm font-extrabold tracking-wide text-navy-900 uppercase sm:px-7">
						Feature
					</th>
					<th scope="col" class="min-w-0 bg-brand-50 px-5 py-5 text-sm font-extrabold tracking-wide text-brand-700 uppercase sm:px-7">
						Adiyo
					</th>
					<th scope="col" class="min-w-0 px-5 py-5 text-sm font-extrabold tracking-wide text-navy-900 uppercase sm:px-7">
						{comparison.name}
					</th>
				</tr>
			</thead>
			<tbody>
				{#each comparison.rows as row (row.feature)}
					<tr class="border-b border-navy-900/5 transition-colors last:border-b-0 hover:bg-skysoft-100/50">
						<td class="min-w-0 px-5 py-4 text-sm font-semibold text-navy-900 sm:px-7 sm:text-base">
							{row.feature}
						</td>
						<td class="min-w-0 bg-brand-50/70 px-5 py-4 text-sm sm:px-7 sm:text-base">
							<span class="flex items-start gap-2 font-semibold text-navy-900">
								{#if row.adiyoWins}
									<svg
										class="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
										viewBox="0 0 20 20"
										fill="none"
										aria-label="Adiyo wins this row"
										role="img"
									>
										<path
											d="M4 10.5l4 4 8-9"
											stroke="currentColor"
											stroke-width="2.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								{:else}
									<svg
										class="mt-0.5 h-5 w-5 shrink-0 text-ink-500"
										viewBox="0 0 20 20"
										fill="none"
										aria-label="Adiyo does not win this row"
										role="img"
									>
										<path
											d="M5 5l10 10M15 5L5 15"
											stroke="currentColor"
											stroke-width="2.5"
											stroke-linecap="round"
										/>
									</svg>
								{/if}
								<span>{row.adiyo}</span>
							</span>
						</td>
						<td class="min-w-0 px-5 py-4 text-sm text-ink-600 sm:px-7 sm:text-base">
							{row.competitor}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	{#if competitorWins.length > 0}
		<div
			use:reveal
			class="mt-10 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-navy-900">Where {comparison.name} wins</h2>
			<p class="mt-2 text-base leading-relaxed text-ink-600">
				If native call recording is the centre of your stack, {comparison.name} is built for that.
				Adiyo reads calls through Zoom and other integrations, and spends its energy on what happens
				after the call — whether the deal is drifting, and what to do about it.
			</p>
			<ul class="mt-5 grid gap-3">
				{#each competitorWins as row (row.feature)}
					<li class="flex min-w-0 items-start gap-3 rounded-2xl bg-skysoft-100 px-4 py-3">
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
							viewBox="0 0 20 20"
							fill="none"
							aria-hidden="true"
						>
							<path
								d="M4 10.5l4 4 8-9"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p class="min-w-0 text-base text-navy-900">
							<span class="font-bold">{row.feature}:</span>
							<span class="text-ink-600"> {row.competitor}</span>
						</p>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<p use:reveal class="mt-8 text-center text-sm leading-relaxed text-ink-500">
		Illustrative comparison based on publicly listed features as of November 2026. Demo content for
		illustration.
	</p>
	<p use:reveal class="mt-4 text-center">
		<a
			href="/compare"
			class="inline-flex min-h-11 items-center text-base font-bold text-brand-700 hover:text-brand-700"
		>
			See all comparisons →
		</a>
	</p>
</section>

<CtaBanner />
