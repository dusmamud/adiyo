<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { helpArticles } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	let query = $state('');

	let filtered = $derived(
		helpArticles.filter((article) => {
			const q = query.trim().toLowerCase();
			if (!q) return true;
			return (article.title + ' ' + article.excerpt + ' ' + article.category)
				.toLowerCase()
				.includes(q);
		})
	);

	let categories = $derived([...new Set(filtered.map((article) => article.category))]);
</script>

<svelte:head>
	<title>Help Center — Adiyo</title>
	<meta
		name="description"
		content="Adiyo help center: setup, insights, integrations, billing and security — answers before you need to ask."
	/>
</svelte:head>

<PageHero
	eyebrow="Help Center"
	title="Answers before you need to ask"
	subtitle="Setup, insights, integrations, billing and security — search below, or browse by topic."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div use:reveal class="mx-auto max-w-2xl">
		<label for="help-search" class="sr-only">Search help articles</label>
		<input
			id="help-search"
			type="search"
			bind:value={query}
			placeholder="Search articles — try “CRM”, “pricing” or “signals”…"
			class="min-h-12 w-full rounded-full border border-navy-900/15 bg-white px-5 text-base text-navy-900 shadow-[0_8px_30px_rgba(10,37,64,0.08)] transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
		/>
	</div>

	{#if filtered.length === 0}
		<div
			use:reveal
			class="mx-auto mt-12 max-w-2xl rounded-3xl bg-white p-8 text-center shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
			role="status"
		>
			<p class="text-xl font-extrabold text-navy-900">No articles match — try another term or contact support</p>
			<p class="mt-2 text-base text-ink-600">
				Nothing for “{query.trim()}” yet. Try a shorter word, or ask us directly.
			</p>
			<a
				href="/contact"
				class="mt-5 inline-flex min-h-12 items-center rounded-full bg-brand-500 px-6 text-base font-bold text-navy-900 transition hover:bg-brand-600"
			>
				Contact support
			</a>
		</div>
	{:else}
		<div class="mt-12 grid gap-12">
			{#each categories as category, ci (category)}
				<div>
					<h2 use:reveal class="text-2xl font-extrabold text-navy-900">{category}</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						{#each filtered.filter((a) => a.category === category) as article, i (article.title)}
							<article
								use:reveal={{ delay: Math.min((ci * 2 + i) * 70, 350) }}
								class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
							>
								<span
									class="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700"
								>
									{article.category}
								</span>
								<h3 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">
									{article.title}
								</h3>
								<p class="mt-2 text-base leading-relaxed text-ink-600">{article.excerpt}</p>
							</article>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<div
		use:reveal
		class="mx-auto mt-16 max-w-2xl rounded-3xl bg-navy-950 p-8 text-center shadow-xl sm:p-10"
	>
		<h2 class="text-2xl font-extrabold text-white">Still stuck?</h2>
		<p class="mx-auto mt-2 max-w-md text-base leading-relaxed text-white/70">
			Talk to a human — we answer support questions within one working day.
		</p>
		<a
			href="/contact"
			class="group mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
		>
			Contact support
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
		</a>
	</div>
</section>

<CtaBanner />
