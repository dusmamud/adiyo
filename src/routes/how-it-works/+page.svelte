<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { howItWorksSteps } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const integrations = [
		'Salesforce',
		'Gmail',
		'Slack',
		'WhatsApp',
		'Instagram',
		'HubSpot',
		'Zoom',
		'Outlook'
	];
</script>

<svelte:head>
	<title>How It Works — Adiyo</title>
	<meta
		name="description"
		content="Adiyo plugs into your CRM, email and call tools, reads every sales signal with a proprietary GPT-4 model, and surfaces insights in real time so managers can coach reps before a deal is lost."
	/>
</svelte:head>

<PageHero
	eyebrow="How it works"
	title="From pipeline noise to coaching in four steps"
	subtitle="Connect your stack, let Adiyo read every signal, and coach reps with evidence — not gut feel."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-2">
		{#each howItWorksSteps as item, i (item.step)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 {i %
					2 ===
				1
					? 'lg:translate-y-8'
					: ''}"
			>
				<span
					class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-lg font-extrabold text-brand-700"
				>
					{item.step}
				</span>
				<h2 class="mt-5 text-xl font-extrabold text-navy-900 sm:text-2xl">{item.title}</h2>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{item.text}</p>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<div class="rounded-3xl bg-skysoft-100 px-6 py-10 text-center sm:px-10">
		<h2 class="text-2xl font-extrabold text-navy-900 sm:text-3xl">Plugs into the tools you already use</h2>
		<p class="mx-auto mt-2 max-w-xl text-base text-ink-600">
			Setup takes minutes — no rip-and-replace of your existing stack.
		</p>
		<ul class="mt-7 flex flex-wrap justify-center gap-3">
			{#each integrations as name (name)}
				<li
					class="min-h-11 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy-900 ring-1 ring-navy-900/10 transition hover:-translate-y-0.5 sm:text-base"
				>
					{name}
				</li>
			{/each}
		</ul>
	</div>
</section>

<CtaBanner />
