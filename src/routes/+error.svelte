<script lang="ts">
	import { page } from '$app/state';
	import { reveal } from '../lib/reveal';

	const status = $derived(page.status);
	const message = $derived(
		page.error?.message && page.error.message !== 'Not Found'
			? page.error.message
			: 'The page you are looking for does not exist or has moved.'
	);
	const heading = $derived(status === 404 ? '404' : String(status));
	const title = $derived(status === 404 ? 'Page not found' : 'Something went wrong');
</script>

<svelte:head>
	<title>{title} — Adiyo</title>
	<meta name="description" content="Adiyo — {title}. Head back home to find what you need." />
</svelte:head>

<section class="bg-skysoft-100 px-4 py-20 sm:py-28">
	<div use:reveal class="mx-auto max-w-2xl text-center">
		<p class="text-7xl font-extrabold tracking-tight text-brand-600 sm:text-8xl">{heading}</p>
		<h1 class="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{title}</h1>
		<p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
			{message}
		</p>
		<a
			href="/"
			class="group mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
		>
			Back to home
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</a>
	</div>
</section>
