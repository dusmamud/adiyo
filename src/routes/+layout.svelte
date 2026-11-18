<script lang="ts">
	import './layout.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import favicon from '#lib/assets/favicon.svg';
	import { site } from '../lib/data';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	let showBackToTop = $state(false);

	$effect(() => {
		const onScroll = () => {
			showBackToTop = window.scrollY > 600;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop() {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
	}

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
	<button
		type="button"
		aria-label="Back to top"
		onclick={scrollToTop}
		class="fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 {showBackToTop
			? 'visible opacity-100'
			: 'invisible pointer-events-none opacity-0'}"
	>
		<svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
			<path
				d="M10 16V4M4.5 9.5L10 4l5.5 5.5"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>
