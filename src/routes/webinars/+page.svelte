<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { webinars } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const upcoming = webinars.filter((w) => w.status === 'upcoming');
	const recorded = webinars.filter((w) => w.status === 'recorded');

	const recordedTakeaways: Record<string, string[]> = {
		'Reading the 100 Signals: A Live Deal Review': [
			'Which three signals moved the deal first — and why the CRM stage did not catch them.',
			'How to read a trajectory change the day it happens, not at the quarterly review.',
			'The one question that separates a stalled deal from a lost one.'
		],
		'CRM Hygiene Is a Manager Problem (and How AI Fixes It)': [
			'Why reps stop updating the CRM — and why reminders alone do not fix it.',
			'What Adiyo writes back automatically: stage, next steps and stakeholders.',
			'The weekly routine that keeps pipeline data honest without extra admin work.'
		]
	};

	let name = $state('');
	let email = $state('');
	let selectedWebinar = $state('');
	let errors = $state({ name: '', email: '', webinar: '' });
	let submitted = $state(false);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		errors = {
			name: name.trim() ? '' : 'Enter your full name.',
			email: !email.trim()
				? 'Enter your email address.'
				: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
					? ''
					: 'Enter a valid email address.',
			webinar: selectedWebinar ? '' : 'Choose a webinar.'
		};
		if (errors.name || errors.email || errors.webinar) return;
		submitted = true;
	}
</script>

<svelte:head>
	<title>Webinars — Adiyo</title>
	<meta
		name="description"
		content="Live Adiyo webinars on forecasting, coaching and the signals behind every deal — plus recordings of past sessions with key takeaways."
	/>
</svelte:head>

<PageHero
	eyebrow="Webinars"
	title="Learn live, from real deals"
	subtitle="Forty minutes with a sales leader who runs Adiyo every week — forecast calls, coaching cues and the signals that move a deal."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div
		use:reveal
		class="mx-auto max-w-2xl rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
	>
		<h2 class="text-xl font-extrabold text-navy-900">Register for a live webinar</h2>
		<p class="mt-2 text-base leading-relaxed text-ink-600">
			Pick a session and we will send the join link. Demo form — nothing is sent anywhere.
		</p>
		{#if submitted}
			<div class="mt-6 rounded-2xl bg-brand-50 p-6 text-center ring-1 ring-brand-100" role="status">
				<p class="text-xl font-extrabold text-navy-900">You are registered.</p>
				<p class="mt-2 text-base text-ink-600">
					{selectedWebinar} — the join link will go to {email.trim()}.
				</p>
				<button
					type="button"
					onclick={() => {
						submitted = false;
						name = '';
						email = '';
						selectedWebinar = '';
					}}
					class="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-500 px-6 text-sm font-bold text-white transition hover:bg-brand-600"
				>
					Register for another webinar
				</button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} novalidate class="mt-6 grid gap-5">
				<div class="min-w-0">
					<label for="webinar-name" class="mb-1.5 block text-sm font-bold text-navy-900">Full name</label>
					<input
						id="webinar-name"
						type="text"
						bind:value={name}
						autocomplete="name"
						placeholder="Your full name"
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
					{#if errors.name}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.name}</p>{/if}
				</div>
				<div class="min-w-0">
					<label for="webinar-email" class="mb-1.5 block text-sm font-bold text-navy-900">Work email</label>
					<input
						id="webinar-email"
						type="email"
						bind:value={email}
						autocomplete="email"
						placeholder="you@company.com"
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
					{#if errors.email}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.email}</p>{/if}
				</div>
				<div class="min-w-0">
					<label for="webinar-select" class="mb-1.5 block text-sm font-bold text-navy-900">Webinar</label>
					<select
						id="webinar-select"
						bind:value={selectedWebinar}
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 bg-white px-4 text-base text-navy-900 transition outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					>
						<option value="" disabled>Select a webinar</option>
						{#each upcoming as webinar (webinar.title)}
							<option value={webinar.title}>{webinar.title} — {webinar.date}</option>
						{/each}
					</select>
					{#if errors.webinar}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.webinar}</p>{/if}
				</div>
				<button
					type="submit"
					class="group inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
				>
					Register
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
				</button>
			</form>
		{/if}
	</div>

	<h2 use:reveal class="mt-16 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
		Upcoming webinars
	</h2>
	<div class="mt-8 grid gap-6 lg:grid-cols-2">
		{#each upcoming as webinar, i (webinar.title)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<div class="flex flex-wrap items-center gap-2">
					<span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700">
						{webinar.topic}
					</span>
					<span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-700">
						Live
					</span>
				</div>
				<h3 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">{webinar.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">
					{webinar.date} · {webinar.duration}
				</p>
				<p class="mt-3 text-base font-semibold text-navy-900">
					{webinar.speaker}
					<span class="font-medium text-ink-500"> — {webinar.role}</span>
				</p>
			</article>
		{/each}
	</div>

	<h2 use:reveal class="mt-16 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
		Recorded webinars
	</h2>
	<div class="mt-8 grid gap-6 lg:grid-cols-2">
		{#each recorded as webinar, i (webinar.title)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<div class="flex flex-wrap items-center gap-2">
					<span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700">
						{webinar.topic}
					</span>
					<span class="rounded-full bg-skysoft-100 px-3 py-1 text-xs font-extrabold text-navy-900/70">
						Recording
					</span>
				</div>
				<h3 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">{webinar.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">
					{webinar.date} · {webinar.duration}
				</p>
				<p class="mt-3 text-base font-semibold text-navy-900">
					{webinar.speaker}
					<span class="font-medium text-ink-500"> — {webinar.role}</span>
				</p>
				<details class="group mt-5 rounded-2xl bg-skysoft-100 px-4 py-3">
					<summary
						class="flex min-h-11 cursor-pointer items-center justify-between gap-3 text-base font-bold text-navy-900"
					>
						3 key takeaways
						<span
							class="shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="none">
								<path
									d="M5 7.5l5 5 5-5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</summary>
					<ul class="mt-3 grid gap-2 pb-1">
						{#each recordedTakeaways[webinar.title] ?? [] as takeaway (takeaway)}
							<li class="flex min-w-0 items-start gap-2 text-base leading-relaxed text-ink-600">
								<svg
									class="mt-1 h-4 w-4 shrink-0 text-brand-600"
									viewBox="0 0 20 20"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M4 10.5l4 4 8-9"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>{takeaway}</span>
							</li>
						{/each}
					</ul>
				</details>
			</article>
		{/each}
	</div>
</section>

<CtaBanner />
