<script lang="ts">
	import Logo from '#lib/components/Logo.svelte';
	import { navGroups } from '../data';
	import { page } from '$app/state';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 8;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function closeMenu() {
		menuOpen = false;
	}

	function groupActive(links: { href: string }[] | undefined, href: string | undefined) {
		if (href) return page.url.pathname === href;
		return links?.some((l) => page.url.pathname === l.href || page.url.pathname.startsWith(l.href + '/')) ?? false;
	}
</script>

<header class="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
	<div class="mx-auto max-w-6xl">
		<div
			class="flex min-h-14 items-center justify-between gap-2 rounded-full bg-white/95 py-2 pr-2 pl-4 ring-1 ring-navy-900/5 backdrop-blur transition-shadow duration-300 {scrolled
				? 'shadow-[0_14px_40px_rgba(10,37,64,0.18)]'
				: 'shadow-[0_8px_30px_rgba(10,37,64,0.12)]'}"
		>
			<Logo />

			<nav class="hidden items-center gap-1 xl:flex" aria-label="Primary">
				{#each navGroups as group (group.label)}
					{#if group.links}
						<div class="group relative">
							<button
								type="button"
								aria-haspopup="true"
								class="flex min-h-11 items-center gap-1 rounded-full px-3 text-[0.95rem] font-semibold transition-colors {groupActive(
									group.links,
									undefined
								)
									? 'text-brand-600'
									: 'text-navy-900/80 hover:text-brand-600'}"
							>
								{group.label}
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
									class="transition-transform duration-200 group-hover:rotate-180"
									><path d="m6 9 6 6 6-6" /></svg
								>
							</button>
							<div
								class="invisible absolute top-full left-1/2 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:opacity-100"
							>
								<div
									class="w-60 rounded-3xl bg-white p-2 shadow-[0_16px_50px_rgba(10,37,64,0.18)] ring-1 ring-navy-900/5"
								>
									{#each group.links as link (link.href)}
										<a
											href={link.href}
											aria-current={page.url.pathname === link.href ? 'page' : undefined}
											class="flex min-h-11 items-center rounded-2xl px-4 text-[0.95rem] font-semibold {page.url.pathname ===
											link.href
												? 'bg-brand-50 text-brand-600'
												: 'text-navy-900 hover:bg-skysoft-100'}"
										>
											{link.label}
										</a>
									{/each}
								</div>
							</div>
						</div>
					{:else if group.href}
						<a
							href={group.href}
							aria-current={page.url.pathname === group.href ? 'page' : undefined}
							class="flex min-h-11 items-center rounded-full px-3 text-[0.95rem] font-semibold transition-colors {page.url
								.pathname === group.href
								? 'text-brand-600'
								: 'text-navy-900/80 hover:text-brand-600'}"
						>
							{group.label}
						</a>
					{/if}
				{/each}
			</nav>

			<div class="flex items-center gap-2">
				<a
					href="/login"
					class="hidden min-h-11 items-center rounded-full px-3 text-sm font-bold text-navy-900 transition hover:text-brand-600 md:inline-flex"
				>
					Sign in
				</a>
				<a
					href="/request-demo"
					class="hidden min-h-11 items-center rounded-full bg-brand-500 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 sm:inline-flex"
				>
					Request a Demo
				</a>
				<button
					type="button"
					class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-navy-900 hover:bg-skysoft-100 xl:hidden"
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
				class="mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl bg-white p-3 shadow-[0_8px_30px_rgba(10,37,64,0.14)] ring-1 ring-navy-900/5 xl:hidden"
				aria-label="Mobile"
			>
				{#each navGroups as group (group.label)}
					{#if group.links}
						<p class="px-4 pt-4 pb-1 text-xs font-extrabold tracking-[0.16em] text-ink-500 uppercase">
							{group.label}
						</p>
						{#each group.links as link (link.href)}
							<a
								href={link.href}
								onclick={closeMenu}
								aria-current={page.url.pathname === link.href ? 'page' : undefined}
								class="flex min-h-12 items-center rounded-2xl px-4 text-[1rem] font-semibold {page.url
									.pathname === link.href
									? 'bg-brand-50 text-brand-600'
									: 'text-navy-900 hover:bg-skysoft-100'}"
							>
								{link.label}
							</a>
						{/each}
					{:else if group.href}
						<a
							href={group.href}
							onclick={closeMenu}
							aria-current={page.url.pathname === group.href ? 'page' : undefined}
							class="mt-2 flex min-h-12 items-center rounded-2xl px-4 text-[1rem] font-semibold {page.url
								.pathname === group.href
								? 'bg-brand-50 text-brand-600'
								: 'text-navy-900 hover:bg-skysoft-100'}"
						>
							{group.label}
						</a>
					{/if}
				{/each}
				<div class="mt-3 flex gap-2 border-t border-navy-900/5 pt-3">
					<a
						href="/login"
						onclick={closeMenu}
						class="flex min-h-12 flex-1 items-center justify-center rounded-full px-5 text-[1rem] font-bold text-navy-900 ring-1 ring-navy-900/15"
					>
						Sign in
					</a>
					<a
						href="/request-demo"
						onclick={closeMenu}
						class="flex min-h-12 flex-1 items-center justify-center rounded-full bg-brand-500 px-5 text-[1rem] font-bold text-white"
					>
						Request a Demo
					</a>
				</div>
			</nav>
		{/if}
	</div>
</header>
