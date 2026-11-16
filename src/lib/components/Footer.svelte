<script lang="ts">
	import Logo from '#lib/components/Logo.svelte';
	import { navGroups, site } from '../data';

	let email = $state('');
	let subscribed = $state(false);
	let error = $state('');

	function subscribe(event: SubmitEvent) {
		event.preventDefault();
		error = '';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			error = 'Please enter a valid work email.';
			return;
		}
		subscribed = true;
	}

	const footerColumns = navGroups.filter((g) => g.links) as {
		label: string;
		links: { label: string; href: string }[];
	}[];
</script>

<footer class="bg-navy-950 text-white">
	<div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.85fr_0.85fr_0.85fr_1.3fr]">
			<div class="min-w-0">
				<div class="inline-flex rounded-2xl bg-white px-3 py-2">
					<Logo />
				</div>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
					Generative AI for frontline sales managers. Drive more revenue and hit forecasts with
					insights that surface at the exact moment they matter.
				</p>
				<p class="mt-4 text-sm text-white/70">
					<a href="mailto:{site.email}" class="hover:text-white">{site.email}</a><br />
					<a href="tel:+14155550132" class="hover:text-white">{site.phone}</a>
				</p>
			</div>

			{#each footerColumns as col (col.label)}
				<nav aria-label={col.label}>
					<h3 class="text-sm font-bold tracking-wide text-white/90">{col.label}</h3>
					<ul class="mt-4 space-y-3 text-sm text-white/70">
						{#each col.links as link (link.href)}
							<li><a href={link.href} class="hover:text-white">{link.label}</a></li>
						{/each}
					</ul>
				</nav>
			{/each}

			<div class="min-w-0">
				<h3 class="text-sm font-bold tracking-wide text-white/90">Sales insights, monthly</h3>
				<p class="mt-4 text-sm leading-relaxed text-white/70">
					One email a month. Forecasting, coaching and GenAI for sales — no spam.
				</p>
				{#if subscribed}
					<p class="mt-4 rounded-2xl bg-brand-500/20 px-4 py-3 text-sm font-semibold text-brand-100 ring-1 ring-brand-500/40">
						You’re in — check your inbox to confirm.
					</p>
				{:else}
					<form class="mt-4" onsubmit={subscribe} novalidate>
						<label class="sr-only" for="footer-email">Work email</label>
						<div class="flex gap-2">
							<input
								id="footer-email"
								type="email"
								bind:value={email}
								placeholder="Work email"
								class="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand-500 focus:outline-none"
							/>
							<button
								type="submit"
								class="min-h-12 shrink-0 rounded-full bg-brand-500 px-5 text-sm font-bold text-white transition hover:bg-brand-600"
							>
								Join
							</button>
						</div>
						{#if error}
							<p class="mt-2 text-sm text-red-300">{error}</p>
						{/if}
					</form>
				{/if}
			</div>
		</div>

		<div
			class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row"
		>
			<p>© 2026 Adiyo Inc. All rights reserved.</p>
			<nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Legal">
				<a href="/privacy-policy" class="hover:text-white">Privacy Policy</a>
				<a href="/terms" class="hover:text-white">Terms of Service</a>
				<a href="/cookie-policy" class="hover:text-white">Cookie Policy</a>
				<a href="/sitemap" class="hover:text-white">Sitemap</a>
			</nav>
		</div>
	</div>
</footer>
