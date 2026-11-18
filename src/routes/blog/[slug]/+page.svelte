<script lang="ts">
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { reveal } from '../../../lib/reveal';
	import { site } from '../../../lib/data';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
	const publishedIso = $derived(new Date(post.date).toISOString());
	const blogJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.excerpt,
		image: site.url + '/images/og-image.png',
		datePublished: publishedIso,
		dateModified: publishedIso,
		author: { '@type': 'Organization', name: 'Adiyo Inc.', url: site.url },
		publisher: { '@type': 'Organization', name: 'Adiyo Inc.', url: site.url },
		mainEntityOfPage: { '@type': 'WebPage', '@id': site.url + '/blog/' + post.slug }
	});
</script>

<svelte:head>
	<title>{post.title} — Adiyo Blog</title>
	<meta name="description" content={post.excerpt} />
	<meta property="article:published_time" content={publishedIso} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(blogJsonLd)}</script>`}
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<div use:reveal>
		<a
			href="/blog"
			class="inline-flex min-h-11 items-center text-base font-bold text-brand-700 hover:text-brand-700"
		>
			← Back to blog
		</a>
		<div class="mt-6 flex flex-wrap items-center gap-3">
			<span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700">
				{post.category}
			</span>
			<span class="text-sm font-semibold text-ink-500">{post.date} · {post.readTime}</span>
		</div>
		<h1 class="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-navy-900 sm:text-5xl">
			{post.title}
		</h1>
	</div>
	<div class="mt-8 grid gap-5">
		{#each post.body as paragraph (paragraph.slice(0, 48))}
			<p class="text-base leading-relaxed text-ink-600 sm:text-lg">{paragraph}</p>
		{/each}
	</div>
</article>

<CtaBanner />
