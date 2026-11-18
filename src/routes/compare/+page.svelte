<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { comparisonRows } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	function cellMeta(value: string) {
		if (value === 'Yes') return { icon: '✓', cls: 'font-bold text-brand-700' };
		if (value === 'No') return { icon: '✗', cls: 'text-ink-500' };
		if (value === 'Partial') return { icon: '~', cls: 'font-bold text-amber-700' };
		return { icon: '', cls: 'font-semibold text-navy-900' };
	}

	const verdicts = [
		{
			title: 'Spreadsheets show the past',
			text: 'A snapshot, frozen the moment someone exported it. By the forecast call it is already out of date — and nobody knows which cell to trust.'
		},
		{
			title: 'CRM dashboards show the pipeline',
			text: 'What reps typed, in the shape they chose. Useful as a record, but it cannot tell you which deal is drifting — or why.'
		},
		{
			title: "Adiyo shows what's changing",
			text: 'Trajectory, signals and the evidence behind every score — the moment a deal moves, with a coaching cue for what to do next.'
		}
	];
</script>

<svelte:head>
	<title>Compare — Adiyo</title>
	<meta
		name="description"
		content="Adiyo vs spreadsheets vs CRM dashboards: which deals are drifting, 100+ contextual signals, coaching cues per deal and forecast confidence with evidence."
	/>
</svelte:head>

<PageHero
	eyebrow="Compare"
	title="Adiyo vs the old ways of forecasting"
	subtitle="Spreadsheets and CRM dashboards describe the past. Adiyo tells you what's changing — and what to do about it."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div use:reveal={{ variant: 'fade' }} class="overflow-x-auto rounded-3xl bg-white shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5">
		<table class="w-full min-w-[720px] border-collapse text-left">
			<thead>
				<tr class="border-b border-navy-900/10">
					<th scope="col" class="min-w-0 px-5 py-5 text-sm font-extrabold tracking-wide text-navy-900 uppercase sm:px-7">
						Feature
					</th>
					<th scope="col" class="min-w-0 bg-brand-50 px-5 py-5 text-sm font-extrabold tracking-wide text-brand-700 uppercase sm:px-7">
						Adiyo
					</th>
					<th scope="col" class="min-w-0 px-5 py-5 text-sm font-extrabold tracking-wide text-navy-900 uppercase sm:px-7">
						Spreadsheets
					</th>
					<th scope="col" class="min-w-0 px-5 py-5 text-sm font-extrabold tracking-wide text-navy-900 uppercase sm:px-7">
						CRM dashboards
					</th>
				</tr>
			</thead>
			<tbody>
				{#each comparisonRows as row (row.feature)}
					{@const adiyo = cellMeta(row.adiyo)}
					{@const sheets = cellMeta(row.sheets)}
					{@const crm = cellMeta(row.crm)}
					<tr class="border-b border-navy-900/5 transition-colors last:border-b-0 hover:bg-skysoft-100/50">
						<td class="min-w-0 px-5 py-4 text-sm font-semibold text-navy-900 sm:px-7 sm:text-base">
							{row.feature}
						</td>
						<td class="min-w-0 bg-brand-50/70 px-5 py-4 text-sm sm:px-7 sm:text-base">
							<span class={adiyo.cls}>{adiyo.icon ? `${adiyo.icon} ` : ''}{row.adiyo}</span>
						</td>
						<td class="min-w-0 px-5 py-4 text-sm sm:px-7 sm:text-base">
							<span class={sheets.cls}>{sheets.icon ? `${sheets.icon} ` : ''}{row.sheets}</span>
						</td>
						<td class="min-w-0 px-5 py-4 text-sm sm:px-7 sm:text-base">
							<span class={crm.cls}>{crm.icon ? `${crm.icon} ` : ''}{row.crm}</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="mt-14">
		<h2 use:reveal class="text-center text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
			Compare Adiyo with a named tool
		</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-2">
			{#each [{ name: 'Gong', slug: 'gong', tagline: 'Conversation intelligence records the call. Adiyo coaches the deal.' }, { name: 'Clari', slug: 'clari', tagline: 'Revenue platforms forecast the number. Adiyo explains why it moves.' }] as tool, i (tool.slug)}
				<article
					use:reveal={{ delay: i * 80 }}
					class="group min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
				>
					<h3 class="text-xl font-extrabold text-navy-900">Adiyo vs {tool.name}</h3>
					<p class="mt-2 text-base leading-relaxed text-ink-600">{tool.tagline}</p>
					<a
						href="/compare/{tool.slug}"
						class="mt-5 inline-flex min-h-11 items-center text-base font-bold text-brand-700 hover:text-brand-700"
					>
						Compare Adiyo vs {tool.name} →
					</a>
				</article>
			{/each}
		</div>
	</div>

	<div class="mt-14 grid gap-6 lg:grid-cols-3">
		{#each verdicts as verdict, i (verdict.title)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<h2 class="text-xl font-extrabold text-navy-900">{verdict.title}</h2>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{verdict.text}</p>
			</article>
		{/each}
	</div>

	<p use:reveal class="mt-10 text-center">
		<a
			href="/pricing"
			class="group inline-flex min-h-12 items-center justify-center rounded-full bg-navy-900 px-7 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
		>
			See what each plan includes
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</a>
	</p>
</section>

<CtaBanner />
