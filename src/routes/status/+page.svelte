<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { reveal } from '../../lib/reveal';

	const services = [
		{ name: 'Web app', uptime: '99.98%', blurb: 'The Adiyo dashboard, login and settings.' },
		{ name: 'Insights engine', uptime: '99.95%', blurb: 'Signal scoring, trajectory alerts and forecast confidence.' },
		{ name: 'Integrations & sync', uptime: '99.99%', blurb: 'CRM, email, calendar and messaging sync.' }
	];

	const incidents = [
		{
			date: 'Nov 2, 2026',
			title: 'Delayed Slack alerts',
			duration: '42 min',
			resolution:
				'Alert delivery lagged after a queue backlog. The queue was drained, all alerts were delivered, and no data was lost.'
		},
		{
			date: 'Oct 14, 2026',
			title: 'Slow forecast refresh',
			duration: '18 min',
			resolution:
				'Forecast refreshes ran slower than usual during a database maintenance window. Refreshes returned to normal on their own.'
		},
		{
			date: 'Sep 27, 2026',
			title: 'Brief sign-in errors',
			duration: '9 min',
			resolution:
				'Some users saw sign-in errors after a deploy. The deploy was rolled back and sign-in worked again.'
		}
	];

	// Deterministic 90-day history: a bar is amber when (i * 7) % 23 === 0, else green.
	const days = Array.from({ length: 90 }, (_, i) => i);

	let email = $state('');
	let emailError = $state('');
	let subscribed = $state(false);

	function handleSubscribe(event: SubmitEvent) {
		event.preventDefault();
		emailError = '';
		if (!email.trim()) {
			emailError = 'Enter your email address.';
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			emailError = 'Enter a valid email address.';
			return;
		}
		subscribed = true;
	}
</script>

<svelte:head>
	<title>System Status — Adiyo</title>
	<meta
		name="description"
		content="Adiyo system status: live uptime for the web app, insights engine and integrations, plus recent incident history."
	/>
</svelte:head>

<PageHero
	eyebrow="Status"
	title="System status"
	subtitle="Live uptime for the web app, the insights engine and every integration — plus what happened when something went wrong."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div
		use:reveal
		class="flex min-w-0 flex-col gap-3 rounded-3xl bg-brand-50 p-7 ring-1 ring-brand-100 sm:flex-row sm:items-center sm:justify-between sm:p-8"
		role="status"
	>
		<div class="flex min-w-0 items-start gap-3">
			<span
				class="mt-1 inline-flex h-3 w-3 shrink-0 rounded-full bg-brand-500 ring-4 ring-brand-500/20"
				aria-hidden="true"
			></span>
			<div class="min-w-0">
				<p class="text-xl font-extrabold text-navy-900">All systems operational</p>
				<p class="mt-1 text-base text-ink-600">
					No ongoing incidents. Demo status page — figures are illustrative.
				</p>
			</div>
		</div>
		<p class="shrink-0 text-sm font-semibold text-ink-500">Last updated Nov 17, 2026, 9:00 AM PT</p>
	</div>

	<div class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each services as service, i (service.name)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
			>
				<div class="flex items-start justify-between gap-3">
					<h2 class="text-xl font-extrabold text-navy-900">{service.name}</h2>
					<span class="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-sm font-extrabold text-brand-700">
						{service.uptime}
					</span>
				</div>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{service.blurb}</p>
				<div
					class="mt-5 flex items-end gap-[2px]"
					role="img"
					aria-label="90-day uptime history for {service.name}: mostly operational, a few degraded days"
				>
					{#each days as day (day)}
						<span
							class="h-8 flex-1 rounded-[2px] {(day * 7) % 23 === 0
								? 'bg-amber-400'
								: 'bg-brand-500'}"
							aria-hidden="true"
						></span>
					{/each}
				</div>
				<p class="mt-3 text-sm text-ink-500">
					<span class="inline-flex items-center gap-1.5">
						<span class="inline-block h-2.5 w-2.5 rounded-[2px] bg-brand-500" aria-hidden="true"></span>
						Operational
					</span>
					<span class="ml-4 inline-flex items-center gap-1.5">
						<span class="inline-block h-2.5 w-2.5 rounded-[2px] bg-amber-400" aria-hidden="true"></span>
						Degraded day
					</span>
					<span class="ml-4">90 days</span>
				</p>
			</article>
		{/each}
	</div>

	<div use:reveal class="mt-14">
		<h2 class="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">Incident history</h2>
		<div class="mt-6 grid gap-4">
			{#each incidents as incident, i (incident.date)}
				<article
					use:reveal={{ delay: Math.min(i * 70, 350) }}
					class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-7"
				>
					<div class="flex flex-wrap items-baseline justify-between gap-2">
						<h3 class="text-lg font-extrabold text-navy-900">{incident.title}</h3>
						<p class="text-sm font-semibold text-ink-500">{incident.date} · {incident.duration}</p>
					</div>
					<p class="mt-2 text-base leading-relaxed text-ink-600">{incident.resolution}</p>
					<p class="mt-3">
						<span class="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-700">
							Resolved
						</span>
					</p>
				</article>
			{/each}
		</div>
	</div>

	<div
		use:reveal
		class="mx-auto mt-14 max-w-2xl rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
	>
		<h2 class="text-xl font-extrabold text-navy-900">Subscribe to status updates</h2>
		<p class="mt-2 text-base leading-relaxed text-ink-600">
			Get an email when an incident starts or ends. Demo form — nothing is sent anywhere.
		</p>
		{#if subscribed}
			<div class="mt-6 rounded-2xl bg-brand-50 p-6 text-center ring-1 ring-brand-100" role="status">
				<p class="text-xl font-extrabold text-navy-900">You are subscribed.</p>
				<p class="mt-2 text-base text-ink-600">
					Status updates will go to {email.trim()}.
				</p>
				<button
					type="button"
					onclick={() => {
						subscribed = false;
						email = '';
					}}
					class="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-500 px-6 text-sm font-bold text-white transition hover:bg-brand-600"
				>
					Subscribe another email
				</button>
			</div>
		{:else}
			<form onsubmit={handleSubscribe} novalidate class="mt-6 flex flex-col gap-3 sm:flex-row">
				<div class="min-w-0 flex-1">
					<label for="status-email" class="sr-only">Email address</label>
					<input
						id="status-email"
						type="email"
						bind:value={email}
						autocomplete="email"
						placeholder="you@company.com"
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
					{#if emailError}<p class="mt-1.5 text-sm font-semibold text-red-600">{emailError}</p>{/if}
				</div>
				<button
					type="submit"
					class="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
				>
					Subscribe
				</button>
			</form>
		{/if}
	</div>

	<p use:reveal class="mt-10 text-center text-base text-ink-500">
		Seeing something wrong right now?
		<a href="/contact" class="font-bold text-brand-600 hover:text-brand-700">Contact support →</a>
	</p>
</section>
