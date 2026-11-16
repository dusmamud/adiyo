<script lang="ts">
	import './layout.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import favicon from '#lib/assets/favicon.svg';
	import { site } from '../lib/data';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const orgJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Adiyo',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		url: site.url,
		description:
			'Generative AI for frontline sales managers — proprietary GPT-4 insights across every sales conversation.',
		offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD' },
		provider: { '@type': 'Organization', name: 'Adiyo Inc.', url: site.url }
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content="Adiyo" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}</script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
