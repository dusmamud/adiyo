<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { managers, crmContact } from '../../lib/data';
	import CountUp from '#lib/components/CountUp.svelte';
	import { reveal } from '../../lib/reveal';

	const values = [
		{
			title: 'Evidence over gut feel',
			text: 'Every coaching cue is backed by what actually happened in the deal.'
		},
		{
			title: 'Managers first',
			text: 'Built for the frontline manager — the person closest to the pipeline.'
		},
		{
			title: 'Privacy by design',
			text: 'Your sales data stays yours and is never used to train shared models.'
		},
		{
			title: 'Candour',
			text: 'We show our working, so a manager can disagree with the AI — and stay in charge.'
		}
	];

	const stats = [
		{ value: 45, prefix: '$', suffix: 'B', decimals: 0, label: 'Closed-won deals influenced by deal insights' },
		{ value: 50, prefix: '', suffix: '%', decimals: 0, label: 'Improved win-rates across customers' },
		{ value: 100, prefix: '', suffix: '+', decimals: 0, label: 'Data signals analysed on every deal' },
		{ value: 4.9, prefix: '', suffix: '/5', decimals: 1, label: 'Manager rating' }
	];

	const extraTeam = [
		{ name: 'David Okafor', role: 'Head of Engineering', photo: null, initials: 'DO' },
		{ name: 'Sofia Ramirez', role: 'Head of Design', photo: null, initials: 'SR' }
	];

	const team = [
		...managers,
		{ name: crmContact.name, role: 'Sales Director', photo: crmContact.photo, initials: 'MC' },
		...extraTeam
	];
</script>

<svelte:head>
	<title>About Us — Adiyo</title>
	<meta
		name="description"
		content="Adiyo is Generative AI for frontline sales managers — built on a proprietary GPT-4 model that surfaces high-value insights the moment a deal trajectory changes."
	/>
</svelte:head>

<PageHero
	eyebrow="About us"
	title="We build AI that makes great sales managers even better"
	subtitle="Adiyo surfaces insights when it matters most, allowing your managers to coach reps in real-time — before a deal is lost."
/>

<section class="mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
	<h2 class="text-2xl font-extrabold text-navy-900 sm:text-3xl">Our mission</h2>
	<p class="mt-4 text-lg leading-relaxed text-ink-600">
		Your sales managers are great — Adiyo makes them even better. We believe managers should spend
		their time coaching, not digging through CRMs and call transcripts. So we built a proprietary
		GPT-4 model that ingests all of your sales communications and turns them into the one insight
		that matters right now.
	</p>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each values as value, i (value.title)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
			>
				<h3 class="text-lg font-extrabold text-navy-900">{value.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">{value.text}</p>
			</article>
		{/each}
	</div>
</section>

<section class="bg-skysoft-100 px-4 py-12 sm:py-16">
	<div class="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat (stat.label)}
			<div class="min-w-0">
				<CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} class="text-4xl font-extrabold text-navy-900 sm:text-5xl" />
				<p class="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<h2 class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">Meet the team</h2>
	<p class="mx-auto mt-2 max-w-xl text-center text-base text-ink-600">
		The people building Generative AI for frontline sales managers.
	</p>
	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each team as member, i (member.name)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="group min-w-0 rounded-3xl bg-white p-6 text-center shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
			>
				{#if member.photo}
					<span class="mx-auto block h-24 w-24 overflow-hidden rounded-full ring-4 ring-skysoft-100">
						<img
							src={member.photo}
							alt={member.name}
							width="96"
								height="96"
								loading="lazy"
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						/>
					</span>
				{:else}
					<span
						class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-2xl font-extrabold text-brand-700 ring-4 ring-skysoft-100"
						aria-hidden="true"
					>
						{member.initials}
					</span>
				{/if}
				<h3 class="mt-4 text-lg font-extrabold text-navy-900">{member.name}</h3>
				<p class="mt-1 text-sm text-ink-600 sm:text-base">{member.role}</p>
			</article>
		{/each}
	</div>
</section>

<CtaBanner />
