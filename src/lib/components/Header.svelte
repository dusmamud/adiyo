<script lang="ts">
	import Logo from '#lib/components/Logo.svelte';
	import { navLinks } from '../data';
	import { page } from '$app/state';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
	<div class="mx-auto max-w-5xl">
		<div
			class="flex min-h-14 items-center justify-between gap-2 rounded-full bg-white/95 py-2 pr-2 pl-4 shadow-[0_8px_30px_rgba(10,37,64,0.12)] ring-1 ring-navy-900/5 backdrop-blur"
		>
			<Logo />

			<nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
				{#each navLinks.slice(0, 3) as link (link.href)}
					<a
						href={link.href}
						aria-current={page.url.pathname === link.href ? 'page' : undefined}
						class="text-[0.95rem] font-semibold transition-colors {page.url.pathname === link.href
							? 'text-brand-600'
							: 'text-navy-900/80 hover:text-brand-600'}"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-2">
				<a
					href="/request-demo"
					class="hidden min-h-11 items-center rounded-full bg-brand-500 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 sm:inline-flex"
				>
					Request a Demo
				</a>
				<button
					type="button"
					class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-navy-900 hover:bg-skysoft-100 lg:hidden"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
					onclick={() => (menuOpen = !menuOpen)}
				>
					{#if menuOpen}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg>
					{:else}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
					{/if}
				</button>
			</div>
		</div>

		{#if menuOpen}
			<nav
				class="mt-2 rounded-3xl bg-white p-3 shadow-[0_8px_30px_rgba(10,37,64,0.14)] ring-1 ring-navy-900/5 lg:hidden"
				aria-label="Mobile"
			>
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						onclick={closeMenu}
						aria-current={page.url.pathname === link.href ? 'page' : undefined}
						class="flex min-h-12 items-center rounded-2xl px-4 text-[1rem] font-semibold {page.url.pathname ===
						link.href
							? 'bg-brand-50 text-brand-600'
							: 'text-navy-900 hover:bg-skysoft-100'}"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/request-demo"
					onclick={closeMenu}
					class="mt-2 flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-5 text-[1rem] font-bold text-white"
				>
					Request a Demo
				</a>
			</nav>
		{/if}
	</div>
</header>
