<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';

	let fullName = $state('');
	let email = $state('');
	let company = $state('');
	let teamSize = $state('');
	let message = $state('');
	let errors = $state({ fullName: '', email: '', company: '', teamSize: '' });
	let submitted = $state(false);

	const nextSteps = [
		{
			step: '01',
			title: 'We meet for 30 minutes',
			text: 'A walkthrough on your live pipeline — not a slide deck.'
		},
		{
			step: '02',
			title: 'Pilot on your real deals',
			text: 'Two weeks on your live pipeline, with your real managers and reps.'
		},
		{
			step: '03',
			title: 'Roll out to your managers',
			text: 'Coaching cues land in your managers’ 1:1s from day one.'
		}
	];

	function validate(): boolean {
		errors = {
			fullName: fullName.trim() ? '' : 'Please enter your full name.',
			email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
				? ''
				: 'Please enter a valid work email.',
			company: company.trim() ? '' : 'Please enter your company.',
			teamSize: teamSize ? '' : 'Please choose your team size.'
		};
		return !errors.fullName && !errors.email && !errors.company && !errors.teamSize;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;
		submitted = true;
		fullName = '';
		email = '';
		company = '';
		teamSize = '';
		message = '';
	}
</script>

<svelte:head>
	<title>Request a Demo — Adiyo</title>
	<meta
		name="description"
		content="Request an Adiyo demo: a 30-minute walkthrough on your live pipeline, then a two-week pilot on your real deals."
	/>
</svelte:head>

<PageHero
	eyebrow="Request a demo"
	title="See Adiyo on your live pipeline"
	subtitle="Thirty minutes, your real deals, and a two-week pilot if you like what you see."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-10 lg:grid-cols-2">
		<div class="min-w-0">
			<h2 class="text-2xl font-extrabold text-navy-900 sm:text-3xl">What happens next</h2>
			<ol class="mt-8 grid gap-5">
				{#each nextSteps as item (item.step)}
					<li
						class="flex min-w-0 gap-4 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
					>
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-base font-extrabold text-brand-700"
						>
							{item.step}
						</span>
						<div class="min-w-0">
							<h3 class="text-lg font-extrabold text-navy-900">{item.title}</h3>
							<p class="mt-1 text-base leading-relaxed text-ink-600">{item.text}</p>
						</div>
					</li>
				{/each}
			</ol>
			<p class="mt-6 text-sm text-ink-500 sm:text-base">
				No credit card required · 14-day free trial
			</p>
		</div>

		<div
			class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			{#if submitted}
				<div class="rounded-2xl bg-brand-50 p-6 text-center ring-1 ring-brand-100" role="status">
					<p class="text-xl font-extrabold text-navy-900">
						Demo requested — check your inbox for a calendar invite.
					</p>
					<p class="mt-2 text-base text-ink-600">
						We will confirm your 30-minute session shortly.
					</p>
					<button
						type="button"
						onclick={() => (submitted = false)}
						class="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-500 px-6 text-sm font-bold text-white transition hover:bg-brand-600"
					>
						Request another demo
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="min-w-0">
							<label for="demo-name" class="mb-1.5 block text-sm font-bold text-navy-900">Full name</label>
							<input
								id="demo-name"
								type="text"
								bind:value={fullName}
								autocomplete="name"
								placeholder="Your full name"
								class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
							/>
							{#if errors.fullName}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.fullName}</p>{/if}
						</div>
						<div class="min-w-0">
							<label for="demo-email" class="mb-1.5 block text-sm font-bold text-navy-900">Work email</label>
							<input
								id="demo-email"
								type="email"
								bind:value={email}
								autocomplete="email"
								placeholder="you@company.com"
								class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
							/>
							{#if errors.email}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.email}</p>{/if}
						</div>
					</div>
					<div class="mt-5 grid gap-5 sm:grid-cols-2">
						<div class="min-w-0">
							<label for="demo-company" class="mb-1.5 block text-sm font-bold text-navy-900">Company</label>
							<input
								id="demo-company"
								type="text"
								bind:value={company}
								autocomplete="organization"
								placeholder="Company name"
								class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
							/>
							{#if errors.company}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.company}</p>{/if}
						</div>
						<div class="min-w-0">
							<label for="demo-team-size" class="mb-1.5 block text-sm font-bold text-navy-900">Team size</label>
							<select
								id="demo-team-size"
								bind:value={teamSize}
								class="min-h-12 w-full rounded-2xl border border-navy-900/15 bg-white px-4 text-base text-navy-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
							>
								<option value="" disabled>Select team size</option>
								<option value="1-10">1–10</option>
								<option value="11-50">11–50</option>
								<option value="51-200">51–200</option>
								<option value="200+">200+</option>
							</select>
							{#if errors.teamSize}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.teamSize}</p>{/if}
						</div>
					</div>
					<div class="mt-5 min-w-0">
						<label for="demo-message" class="mb-1.5 block text-sm font-bold text-navy-900">
							Message <span class="font-medium text-ink-500">(optional)</span>
						</label>
						<textarea
							id="demo-message"
							bind:value={message}
							rows="4"
							placeholder="Anything we should know about your pipeline?"
							class="min-h-12 w-full resize-y rounded-2xl border border-navy-900/15 px-4 py-3 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
						></textarea>
					</div>
					<button
						type="submit"
						class="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-white transition hover:bg-brand-600"
					>
						Request demo
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
