<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { blogPosts } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const tools = [
		{
			title: 'ROI Calculator',
			text: 'What is a saved deal worth? Put your numbers in and see what a higher win rate is worth per quarter.',
			href: '/roi-calculator',
			link: 'Run the numbers →'
		},
		{
			title: 'Help Center',
			text: 'Answers before you need to ask — setup, insights, integrations, billing and security.',
			href: '/help',
			link: 'Browse help →'
		},
		{
			title: 'Changelog',
			text: 'What shipped, and when — trajectory alerts, coaching cues, new signals and faster sync.',
			href: '/changelog',
			link: 'See what’s new →'
		},
		{
			title: 'Compare',
			text: 'Adiyo vs the old ways — spreadsheets, CRM reports and gut feel, side by side.',
			href: '/compare',
			link: 'Compare Adiyo →'
		}
	];
</script>

<svelte:head>
	<title>Resources — Adiyo</title>
	<meta
		name="description"
		content="Adiyo resources: the blog, the ROI calculator, the help center and the changelog — everything for selling with evidence, not guesses."
	/>
</svelte:head>

<PageHero
	eyebrow="Resources"
	title="Learn the craft of modern selling"
	subtitle="Guides, tools and notes from the Adiyo team — everything you need to sell with evidence, not guesses."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<h2 use:reveal class="text-2xl font-extrabold text-navy-900 sm:text-3xl">Latest from the blog</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each blogPosts as post, i (post.slug)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<span
					class="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700"
				>
					{post.category}
				</span>
				<h3 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">
					<a href="/blog/{post.slug}" class="transition hover:text-brand-700">{post.title}</a>
				</h3>
				<p class="mt-2 flex-1 text-base leading-relaxed text-ink-600">{post.excerpt}</p>
				<p class="mt-5 text-sm font-semibold text-ink-500">
					{post.date} · {post.readTime}
				</p>
				<a
					href="/blog/{post.slug}"
					class="mt-3 inline-flex min-h-11 items-center text-base font-bold text-brand-700 hover:text-brand-700"
				>
					Read article →
				</a>
			</article>
		{/each}
	</div>

	<h2 use:reveal class="mt-16 text-2xl font-extrabold text-navy-900 sm:text-3xl">Tools &amp; guides</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		{#each tools as tool, i (tool.href)}
			<a
				href={tool.href}
				use:reveal={{ delay: i * 80 }}
				class="group block min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<h3 class="text-xl font-extrabold text-navy-900 transition group-hover:text-brand-700">
					{tool.title}
				</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{tool.text}</p>
				<span
					class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-700 group-hover:text-brand-700"
				>
					{tool.link}
				</span>
			</a>
		{/each}
	</div>
</section>

<CtaBanner />
