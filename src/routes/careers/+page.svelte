<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { careers, site } from '../../lib/data';
	import { reveal } from '../../lib/reveal';

	const values = [
		{
			title: 'Evidence over ego',
			text: 'The data wins the argument. We show our working — in the product and in the room.'
		},
		{
			title: 'Ship weekly',
			text: 'Small releases, every week, on real pipelines. Momentum beats the big reveal.'
		},
		{
			title: 'Remote-first',
			text: 'Work from wherever you do your best thinking. We meet in person when it matters.'
		},
		{
			title: 'Customers in the room',
			text: 'Sales managers sit in on design reviews. If it does not help them, it does not ship.'
		}
	];

	let fullName = $state('');
	let email = $state('');
	let role = $state('');
	let message = $state('');
	let errors = $state({ fullName: '', email: '', role: '' });
	let submitted = $state(false);

	function validate(): boolean {
		errors = {
			fullName: fullName.trim() ? '' : 'Please enter your full name.',
			email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
				? ''
				: 'Please enter a valid work email.',
			role: role ? '' : 'Please choose a role.'
		};
		return !errors.fullName && !errors.email && !errors.role;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;
		submitted = true;
		fullName = '';
		email = '';
		role = '';
		message = '';
	}
</script>

<svelte:head>
	<title>Careers — Adiyo</title>
	<meta
		name="description"
		content="Careers at Adiyo: help sales teams stop guessing. Open roles in product, go-to-market and customer success — remote-first."
	/>
</svelte:head>

<PageHero
	eyebrow="Careers"
	title="Help sales teams stop guessing"
	subtitle="We are a small, remote-first team building the forecast managers can actually trust."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<h2 use:reveal class="text-2xl font-extrabold text-navy-900 sm:text-3xl">How we work</h2>
	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each values as value, i (value.title)}
			<div
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<h3 class="text-lg font-extrabold text-navy-900">{value.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{value.text}</p>
			</div>
		{/each}
	</div>

	<h2 use:reveal class="mt-16 text-2xl font-extrabold text-navy-900 sm:text-3xl">Open roles</h2>
	<div class="mt-8 grid gap-6 lg:grid-cols-3">
		{#each careers as job, i (job.title)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="flex min-w-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<div class="flex flex-wrap gap-2">
					<span
						class="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-700"
					>
						{job.team}
					</span>
					<span
						class="inline-flex w-fit rounded-full bg-skysoft-100 px-3 py-1 text-xs font-extrabold text-navy-900"
					>
						{job.type}
					</span>
				</div>
				<h3 class="mt-4 text-xl leading-snug font-extrabold text-navy-900">{job.title}</h3>
				<p class="mt-1 text-sm font-semibold text-ink-500">{job.location}</p>
				<p class="mt-3 flex-1 text-base leading-relaxed text-ink-600">{job.blurb}</p>
				<a
					href="#apply"
					class="mt-5 inline-flex min-h-11 items-center text-base font-bold text-brand-700 hover:text-brand-700"
				>
					Apply for this role →
				</a>
			</article>
		{/each}
	</div>

	<div
		id="apply"
		use:reveal
		class="mx-auto mt-16 max-w-2xl scroll-mt-28 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
	>
		<h2 class="text-2xl font-extrabold text-navy-900">Apply</h2>
		<p class="mt-2 text-base leading-relaxed text-ink-600">
			Tell us about yourself — we read every application and reply within five working days.
		</p>
		{#if submitted}
			<div class="animate-fade-up mt-6 rounded-2xl bg-brand-50 p-6 text-center ring-1 ring-brand-100" role="status">
				<p class="text-xl font-extrabold text-navy-900">
					Application received — thank you.
				</p>
				<p class="mt-2 text-base text-ink-600">
					We will be in touch within five working days.
				</p>
				<button
					type="button"
					onclick={() => (submitted = false)}
					class="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-500 px-6 text-sm font-bold text-navy-900 transition hover:bg-brand-600"
				>
					Apply for another role
				</button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} novalidate class="mt-6">
				<div class="grid gap-5 sm:grid-cols-2">
					<div class="min-w-0">
						<label for="careers-name" class="mb-1.5 block text-sm font-bold text-navy-900">Full name</label>
						<input
							id="careers-name"
							type="text"
							bind:value={fullName}
							autocomplete="name"
							placeholder="Your full name"
							class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
						/>
						{#if errors.fullName}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.fullName}</p>{/if}
					</div>
					<div class="min-w-0">
						<label for="careers-email" class="mb-1.5 block text-sm font-bold text-navy-900">Work email</label>
						<input
							id="careers-email"
							type="email"
							bind:value={email}
							autocomplete="email"
							placeholder="you@company.com"
							class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
						/>
						{#if errors.email}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.email}</p>{/if}
					</div>
				</div>
				<div class="mt-5 min-w-0">
					<label for="careers-role" class="mb-1.5 block text-sm font-bold text-navy-900">Role</label>
					<select
						id="careers-role"
						bind:value={role}
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 bg-white px-4 text-base text-navy-900 transition outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					>
						<option value="" disabled>Select a role</option>
						{#each careers as job (job.title)}
							<option value={job.title}>{job.title} — {job.location}</option>
						{/each}
					</select>
					{#if errors.role}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.role}</p>{/if}
				</div>
				<div class="mt-5 min-w-0">
					<label for="careers-message" class="mb-1.5 block text-sm font-bold text-navy-900">
						Why Adiyo? <span class="font-medium text-ink-500">(optional)</span>
					</label>
					<textarea
						id="careers-message"
						bind:value={message}
						rows="4"
						placeholder="A few lines about what you would bring to the team."
						class="min-h-12 w-full resize-y rounded-2xl border border-navy-900/15 px-4 py-3 text-base text-navy-900 transition outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					></textarea>
				</div>
				<button
					type="submit"
					class="group mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
				>
					Submit application
					<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
				</button>
			</form>
		{/if}
		<p class="mt-5 text-center text-sm text-ink-500">
			Prefer email? Write to
			<a href="mailto:{site.email}" class="font-bold text-brand-700 hover:text-brand-700">{site.email}</a>
		</p>
	</div>
</section>
