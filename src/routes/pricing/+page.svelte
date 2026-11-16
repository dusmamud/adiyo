<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { pricingTiers, faqs } from '../../lib/data';
</script>

<svelte:head>
	<title>Pricing — Adiyo</title>
	<meta
		name="description"
		content="Adiyo pricing: Starter $49, Growth $99 per user per month, and custom Enterprise pricing. 14-day free trial on Starter. Cancel anytime."
	/>
</svelte:head>

<PageHero
	eyebrow="Pricing"
	title="Simple pricing for teams that sell"
	subtitle="Start with a 14-day free trial, upgrade when your managers are coaching with Adiyo every week."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each pricingTiers as tier (tier.name)}
			<article
				class="relative flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 {tier.highlight
					? 'ring-2 ring-brand-500'
					: 'ring-navy-900/5'} sm:p-8"
			>
				{#if tier.highlight}
					<span
						class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-extrabold whitespace-nowrap text-white"
					>
						Most popular
					</span>
				{/if}
				<h2 class="text-xl font-extrabold text-navy-900">{tier.name}</h2>
				<p class="mt-4 flex items-baseline gap-2">
					{#if tier.price === null}
						<span class="text-4xl font-extrabold text-navy-900 sm:text-5xl">Custom</span>
					{:else}
						<span class="text-4xl font-extrabold text-navy-900 sm:text-5xl">${tier.price}</span>
					{/if}
					<span class="text-sm text-ink-500">{tier.unit}</span>
				</p>
				<p class="mt-3 text-base leading-relaxed text-ink-600">{tier.blurb}</p>
				<ul class="mt-6 flex flex-1 flex-col gap-3">
					{#each tier.features as feature (feature)}
						<li class="flex items-start gap-2.5 text-sm text-navy-900 sm:text-base">
							<svg
								class="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
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
							<span>{feature}</span>
						</li>
					{/each}
				</ul>
				<a
					href="/request-demo"
					class="mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-bold transition {tier.highlight
						? 'bg-brand-500 text-white hover:bg-brand-600'
						: 'bg-skysoft-100 text-navy-900 hover:bg-skysoft-200'}"
				>
					{tier.cta}
				</a>
			</article>
		{/each}
	</div>
	<p class="mt-8 text-center text-sm text-ink-500 sm:text-base">
		Prices in USD. 14-day free trial on Starter. Cancel anytime.
	</p>
</section>

<section class="mx-auto max-w-3xl px-4 pb-14 sm:pb-20">
	<h2 class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		Frequently asked questions
	</h2>
	<div class="mt-8 grid gap-5">
		{#each faqs.slice(0, 3) as faq (faq.q)}
			<article
				class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-7"
			>
				<h3 class="text-lg font-extrabold text-navy-900">{faq.q}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{faq.a}</p>
			</article>
		{/each}
	</div>
</section>

<CtaBanner />
