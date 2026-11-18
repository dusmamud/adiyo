<script lang="ts">
	import CountUp from '#lib/components/CountUp.svelte';
	import { reveal } from '../../lib/reveal';

	const DEMO_EMAIL = 'demo@adiyo.ai';
	const DEMO_PASSWORD = 'demo1234';

	let email = $state('');
	let password = $state('');
	let error = $state('');
	let signedIn = $state(false);

	const kpis = [
		{ label: 'Pipeline', value: 2.4, decimals: 1, prefix: '$', suffix: 'M' },
		{ label: 'Forecast accuracy', value: 94, decimals: 0, prefix: '', suffix: '%' },
		{ label: 'At-risk deals', value: 3, decimals: 0, prefix: '', suffix: '' },
		{ label: 'Win rate', value: 38, decimals: 0, prefix: '', suffix: '%' }
	];

	const weeklyForecast = [
		{ day: 'Mon', value: 380 },
		{ day: 'Tue', value: 420 },
		{ day: 'Wed', value: 390 },
		{ day: 'Thu', value: 460 },
		{ day: 'Fri', value: 510 }
	];
	const maxForecast = 510;

	const deals = [
		{ name: 'Nimbus — Expansion', stage: 'Negotiation', health: 'Healthy' },
		{ name: 'Fieldset — Renewal', stage: 'Proposal', health: 'At risk' },
		{ name: 'Loopwork — New logo', stage: 'Discovery', health: 'Drifting' }
	];

	function healthClasses(health: string): string {
		if (health === 'Healthy') return 'bg-brand-100 text-brand-700';
		if (health === 'At risk') return 'bg-amber-100 text-amber-800';
		return 'bg-red-100 text-red-700';
	}

	function fillDemo() {
		email = DEMO_EMAIL;
		password = DEMO_PASSWORD;
		error = '';
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			error = 'Please enter a valid email address.';
			return;
		}
		if (!password) {
			error = 'Please enter your password.';
			return;
		}
		if (email.trim() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
			error = 'Incorrect email or password for this demo — try demo@adiyo.ai / demo1234.';
			return;
		}
		error = '';
		signedIn = true;
	}

	function signOut() {
		signedIn = false;
		email = '';
		password = '';
		error = '';
	}
</script>

<svelte:head>
	<title>Sign in — Adiyo</title>
	<meta
		name="description"
		content="Sign in to your Adiyo demo workspace — pipeline, forecast accuracy and deal health at a glance."
	/>
</svelte:head>

{#if signedIn}
	<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
		<div class="flex flex-wrap items-start justify-between gap-4">
			<div use:reveal class="min-w-0">
				<p class="text-xs font-extrabold tracking-[0.18em] text-brand-700 uppercase sm:text-sm">
					Demo workspace — sample data
				</p>
				<h1 class="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-navy-900 sm:text-4xl">
					Welcome back, Demo Manager
				</h1>
				<p class="mt-2 text-base leading-relaxed text-ink-600">
					Your pipeline at a glance — every number below is sample data for the demo.
				</p>
			</div>
			<button
				type="button"
				onclick={signOut}
				class="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-bold text-navy-900 ring-1 ring-navy-900/15 transition hover:bg-skysoft-100"
			>
				Sign out
			</button>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each kpis as kpi, i (kpi.label)}
				<div
					use:reveal={{ delay: i * 80 }}
					class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
				>
					<p class="text-sm font-extrabold tracking-[0.14em] text-ink-500 uppercase">{kpi.label}</p>
					<p class="mt-2 text-4xl font-extrabold tracking-tight text-navy-900">
						<CountUp
							value={kpi.value}
							decimals={kpi.decimals}
							prefix={kpi.prefix}
							suffix={kpi.suffix}
						/>
					</p>
				</div>
			{/each}
		</div>

		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			<div
				use:reveal
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
			>
				<h2 class="text-xl font-extrabold text-navy-900">Weekly forecast</h2>
				<p class="mt-1 text-sm font-semibold text-ink-500">Expected closed revenue, $K — sample data</p>
				<svg viewBox="0 0 500 210" class="mt-6 w-full" role="img" aria-label="Bar chart of weekly forecast: Monday 380K, Tuesday 420K, Wednesday 390K, Thursday 460K, Friday 510K">
					{#each weeklyForecast as bar, i (bar.day)}
						<rect
							x={20 + i * 90}
							y={170 - (bar.value / maxForecast) * 150}
							width="56"
							height={(bar.value / maxForecast) * 150}
							rx="8"
							class="fill-brand-500"
						/>
						<text
							x={48 + i * 90}
							y={160 - (bar.value / maxForecast) * 150}
							text-anchor="middle"
							class="fill-navy-900 text-sm font-bold">${bar.value}K</text
						>
						<text x={48 + i * 90} y="192" text-anchor="middle" class="fill-ink-500 text-sm font-semibold"
							>{bar.day}</text
						>
					{/each}
					<line x1="8" y1="170" x2="492" y2="170" class="stroke-navy-900/15" stroke-width="1" />
				</svg>
			</div>

			<div
				use:reveal={{ delay: 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
			>
				<h2 class="text-xl font-extrabold text-navy-900">Deals to watch</h2>
				<p class="mt-1 text-sm font-semibold text-ink-500">Sample deals — health is Adiyo’s call, not the rep’s</p>
				<ul class="mt-6 grid gap-4">
					{#each deals as deal (deal.name)}
						<li class="flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-2xl bg-skysoft-100 px-5 py-4">
							<div class="min-w-0">
								<p class="truncate text-base font-extrabold text-navy-900">{deal.name}</p>
								<p class="text-sm font-semibold text-ink-500">{deal.stage}</p>
							</div>
							<span
								class="inline-flex min-h-8 shrink-0 items-center rounded-full px-3 py-1 text-xs font-extrabold {healthClasses(
									deal.health
								)}"
							>
								{deal.health}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>
{:else}
	<section class="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-14">
		<div
			use:reveal
			class="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<a href="/" class="text-2xl font-extrabold tracking-tight text-navy-900">
				Adiyo<span class="text-brand-700">.</span>
			</a>
			<h1 class="mt-5 text-3xl font-extrabold tracking-tight text-navy-900">Sign in to Adiyo</h1>
			<p class="mt-2 text-base leading-relaxed text-ink-600">
				Your forecast, your deals, your coaching cues — in one place.
			</p>

			<div class="mt-6 rounded-2xl bg-skysoft-100 p-4 text-sm leading-relaxed text-navy-900">
				<p class="font-extrabold">Demo workspace — use demo@adiyo.ai / demo1234</p>
				<p class="mt-1 text-ink-600">
					This is a demo sign-in. No real account is created and no data leaves your browser.
				</p>
				<button
					type="button"
					onclick={fillDemo}
					class="mt-3 inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-bold text-brand-700 ring-1 ring-brand-500/30 transition hover:bg-brand-50"
				>
					Fill demo credentials
				</button>
			</div>

			<form onsubmit={handleSubmit} novalidate class="mt-6">
				<div class="min-w-0">
					<label for="login-email" class="mb-1.5 block text-sm font-bold text-navy-900">Email</label>
					<input
						id="login-email"
						type="email"
						bind:value={email}
						autocomplete="email"
						placeholder="you@company.com"
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
				</div>
				<div class="mt-5 min-w-0">
					<label for="login-password" class="mb-1.5 block text-sm font-bold text-navy-900">Password</label>
					<input
						id="login-password"
						type="password"
						bind:value={password}
						autocomplete="current-password"
						placeholder="Your password"
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
				</div>
				{#if error}
					<p class="mt-3 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 ring-1 ring-red-100" role="alert">
						{error}
					</p>
				{/if}
				<button
					type="submit"
					class="group mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
				>
					Sign in
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
				</button>
			</form>
			<p class="mt-5 text-center text-sm text-ink-500">
				No account yet?
				<a href="/request-demo" class="font-bold text-brand-700 hover:text-brand-700">Request a demo</a>
			</p>
		</div>
	</section>
{/if}
