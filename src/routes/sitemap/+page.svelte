<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { navGroups } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const morePages = [
		{ label: 'Home', href: '/' },
		{ label: 'Request a Demo', href: '/request-demo' },
		{ label: 'Sign in', href: '/login' },
		{ label: 'ROI Calculator', href: '/roi-calculator' },
		{ label: 'Help Center', href: '/help' },
		{ label: 'Privacy Policy', href: '/privacy-policy' },
		{ label: 'Terms of Service', href: '/terms' },
		{ label: 'Cookie Policy', href: '/cookie-policy' },
		{ label: 'Sitemap', href: '/sitemap' }
	];
</script>

<svelte:head>
	<title>Sitemap — Adiyo</title>
	<meta
		name="description"
		content="Every page on adiyo.pages.dev — product, solutions, pricing, customers, resources and company, in one place."
	/>
</svelte:head>

<PageHero
	eyebrow="Sitemap"
	title="Every page on adiyo.pages.dev"
	subtitle="Product, solutions, pricing, customers, resources and company — everything on the site, in one place."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
		{#each navGroups as group, gi (group.label)}
			{#if 'links' in group}
				<div
					use:reveal={{ delay: Math.min(gi * 70, 350) }}
					class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
				>
					<h2 class="text-xl font-extrabold text-navy-900">{group.label}</h2>
					<ul class="mt-4 grid gap-1">
						{#each group.links as link (link.href)}
							<li class="min-w-0">
								<a
									href={link.href}
									class="inline-flex min-h-11 items-center text-base font-semibold text-ink-600 transition hover:text-brand-600"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{:else}
				<div
					use:reveal={{ delay: Math.min(gi * 70, 350) }}
					class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
				>
					<h2 class="text-xl font-extrabold text-navy-900">{group.label}</h2>
					<a
						href={group.href}
						class="mt-4 inline-flex min-h-11 items-center text-base font-bold text-brand-600 transition hover:text-brand-700"
					>
						See {group.label.toLowerCase()} →
					</a>
				</div>
			{/if}
		{/each}

		<div
			use:reveal={{ delay: Math.min(navGroups.length * 70, 350) }}
			class="min-w-0 rounded-3xl bg-navy-950 p-7 shadow-xl sm:p-8"
		>
			<h2 class="text-xl font-extrabold text-white">More pages</h2>
			<ul class="mt-4 grid gap-1">
				{#each morePages as page (page.href)}
					<li class="min-w-0">
						<a
							href={page.href}
							class="inline-flex min-h-11 items-center text-base font-semibold text-white/80 transition hover:text-white"
						>
							{page.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<CtaBanner />
