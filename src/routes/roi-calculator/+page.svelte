<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import CountUp from '#lib/components/CountUp.svelte';
	import { reveal } from '../../lib/reveal';

	let reps = $state(10);
	let dealSize = $state(25000);
	let dealsPerRep = $state(8);
	let winRate = $state(25);

	// Adiyo lifts win rate by 50% relative — e.g. 25% becomes 37.5%.
	// Estimate from customer-reported results, not a guarantee.
	let newWinRate = $derived(winRate * 1.5);
	let extraDeals = $derived((reps * dealsPerRep * winRate * 0.5) / 100);
	let quarterlyRevenue = $derived(extraDeals * dealSize);
	let annualRevenue = $derived(quarterlyRevenue * 4);

	let dealSizeDisplay = $derived('$' + dealSize.toLocaleString('en-US'));
</script>

<svelte:head>
	<title>ROI Calculator — Adiyo</title>
	<meta
		name="description"
		content="What is one saved deal worth to you? Estimate the extra revenue Adiyo could add per quarter and per year from a higher win rate."
	/>
</svelte:head>

<PageHero
	eyebrow="ROI Calculator"
	title="What is one saved deal worth to you?"
	subtitle="Put your numbers in. We assume Adiyo lifts your win rate by 50% relative — based on customer-reported results — and show what that is worth."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-10 lg:grid-cols-2">
		<div
			use:reveal
			class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h2 class="text-2xl font-extrabold text-navy-900">Your pipeline</h2>
			<div class="mt-8 grid gap-8">
				<div>
					<label for="roi-reps" class="mb-2 flex min-h-11 items-center justify-between text-base font-bold text-navy-900">
						<span>Number of reps</span>
						<span class="rounded-full bg-brand-100 px-3 py-1 text-sm font-extrabold text-brand-700">{reps} reps</span>
					</label>
					<input
						id="roi-reps"
						type="range"
						min="1"
						max="100"
						step="1"
						bind:value={reps}
						class="h-11 w-full accent-brand-500"
					/>
					<p class="mt-1 flex justify-between text-sm font-semibold text-ink-500">
						<span>1</span><span>100</span>
					</p>
				</div>

				<div>
					<label for="roi-deal-size" class="mb-2 block text-base font-bold text-navy-900">
						Average deal size
					</label>
					<input
						id="roi-deal-size"
						type="number"
						min="1000"
						max="1000000"
						step="500"
						bind:value={dealSize}
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
					<p class="mt-1.5 text-sm font-semibold text-ink-500">
						Current value: {dealSizeDisplay}
					</p>
				</div>

				<div>
					<label for="roi-deals" class="mb-2 flex min-h-11 items-center justify-between text-base font-bold text-navy-900">
						<span>Deals per rep, per quarter</span>
						<span class="rounded-full bg-brand-100 px-3 py-1 text-sm font-extrabold text-brand-700">{dealsPerRep} deals</span>
					</label>
					<input
						id="roi-deals"
						type="range"
						min="1"
						max="20"
						step="1"
						bind:value={dealsPerRep}
						class="h-11 w-full accent-brand-500"
					/>
					<p class="mt-1 flex justify-between text-sm font-semibold text-ink-500">
						<span>1</span><span>20</span>
					</p>
				</div>

				<div>
					<label for="roi-win-rate" class="mb-2 flex min-h-11 items-center justify-between text-base font-bold text-navy-900">
						<span>Current win rate</span>
						<span class="rounded-full bg-brand-100 px-3 py-1 text-sm font-extrabold text-brand-700">{winRate}% → {newWinRate}%</span>
					</label>
					<input
						id="roi-win-rate"
						type="range"
						min="5"
						max="60"
						step="1"
						bind:value={winRate}
						class="h-11 w-full accent-brand-500"
					/>
					<p class="mt-1 flex justify-between text-sm font-semibold text-ink-500">
						<span>5%</span><span>60%</span>
					</p>
				</div>
			</div>
			<p class="mt-8 rounded-2xl bg-skysoft-100 p-4 text-sm leading-relaxed text-ink-600">
				How we estimate: Adiyo lifts your win rate by 50% relative — {winRate}% becomes {newWinRate}% —
				based on customer-reported results. Extra wins are the deals that lift saves, applied to your
				average deal size.
			</p>
		</div>

		<div class="min-w-0">
			<h2 class="text-2xl font-extrabold text-navy-900">What that is worth</h2>
			<div class="mt-8 grid gap-6">
				<div
					use:reveal
					class="rounded-3xl bg-navy-950 p-7 shadow-xl sm:p-8"
				>
					<p class="text-sm font-extrabold tracking-[0.14em] text-white/60 uppercase">
						Extra deals won per quarter
					</p>
					<p class="mt-2 text-5xl font-extrabold tracking-tight text-white">
						{#key extraDeals}
							<CountUp value={extraDeals} decimals={1} />
						{/key}
					</p>
					<p class="mt-2 text-base text-white/70">
						From {reps * dealsPerRep} deals a quarter, at a {newWinRate}% win rate instead of {winRate}%.
					</p>
				</div>

				<div
					use:reveal={{ delay: 80 }}
					class="rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
				>
					<p class="text-sm font-extrabold tracking-[0.14em] text-ink-500 uppercase">
						Additional revenue per quarter
					</p>
					<p class="mt-2 text-5xl font-extrabold tracking-tight text-navy-900">
						{#key quarterlyRevenue}
							{#if quarterlyRevenue >= 1000}
								<CountUp value={quarterlyRevenue / 1000} prefix="$" suffix="K" decimals={0} />
							{:else}
								<CountUp value={quarterlyRevenue} prefix="$" decimals={0} />
							{/if}
						{/key}
					</p>
				</div>

				<div
					use:reveal={{ delay: 160 }}
					class="rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
				>
					<p class="text-sm font-extrabold tracking-[0.14em] text-ink-500 uppercase">
						Additional revenue per year
					</p>
					<p class="mt-2 text-5xl font-extrabold tracking-tight text-brand-600">
						{#key annualRevenue}
							{#if annualRevenue >= 1000}
								<CountUp value={annualRevenue / 1000} prefix="$" suffix="K" decimals={0} />
							{:else}
								<CountUp value={annualRevenue} prefix="$" decimals={0} />
							{/if}
						{/key}
					</p>
				</div>
			</div>
			<p class="mt-6 text-sm leading-relaxed text-ink-500">
				Estimate for illustration only — demo data, not a guarantee. Your results depend on your
				pipeline, your team and how the product is used.
			</p>
		</div>
	</div>
</section>

<CtaBanner
	title="Like the numbers? See them on your pipeline."
	text="A 30-minute walkthrough on your live deals, then a two-week pilot if you like what you see."
/>
