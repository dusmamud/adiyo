<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { blogPosts } from '../../lib/data';
</script>

<svelte:head>
	<title>Blog — Adiyo</title>
	<meta
		name="description"
		content="The Adiyo blog: Generative AI for sales forecasting, real-time coaching, and the 100+ data signals behind every deal."
	/>
</svelte:head>

<PageHero
	eyebrow="Blog"
	title="Notes on selling with GenAI"
	subtitle="Forecasting, coaching and the signals that change a deal — written by the Adiyo team."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each blogPosts as post (post.slug)}
			<article
				class="flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
			>
				<span
					class="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700"
				>
					{post.category}
				</span>
				<h2 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">
					<a href="/blog/{post.slug}" class="transition hover:text-brand-600">{post.title}</a>
				</h2>
				<p class="mt-2 flex-1 text-base leading-relaxed text-ink-600">{post.excerpt}</p>
				<p class="mt-5 text-sm font-semibold text-ink-500">
					{post.date} · {post.readTime}
				</p>
				<a
					href="/blog/{post.slug}"
					class="mt-3 inline-flex min-h-11 items-center text-base font-bold text-brand-600 hover:text-brand-700"
				>
					Read article →
				</a>
			</article>
		{/each}
	</div>
</section>

<CtaBanner />
