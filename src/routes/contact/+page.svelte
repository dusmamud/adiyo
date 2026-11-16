<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { site } from '../../lib/data';

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let message = $state('');
	let errors = $state({ name: '', email: '', company: '', message: '' });
	let submitted = $state(false);

	function validate(): boolean {
		errors = {
			name: name.trim() ? '' : 'Please enter your name.',
			email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
				? ''
				: 'Please enter a valid work email.',
			company: company.trim() ? '' : 'Please enter your company.',
			message: message.trim() ? '' : 'Please write a message.'
		};
		return !errors.name && !errors.email && !errors.company && !errors.message;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;
		submitted = true;
		name = '';
		email = '';
		company = '';
		message = '';
	}
</script>

<svelte:head>
	<title>Contact — Adiyo</title>
	<meta
		name="description"
		content="Contact Adiyo — email hello@adiyo.ai, call +1 (415) 555-0132, or visit our San Francisco office. We reply within one business day."
	/>
</svelte:head>

<PageHero
	eyebrow="Contact"
	title="Talk to us"
	subtitle="Questions about Adiyo, pricing, or a pilot on your live pipeline? We reply within one business day."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-5 sm:grid-cols-3">
		<a
			href="mailto:{site.email}"
			class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition hover:ring-brand-500"
		>
			<h2 class="text-sm font-extrabold tracking-wide text-brand-600 uppercase">Email</h2>
			<p class="mt-2 text-lg font-bold break-words text-navy-900">{site.email}</p>
		</a>
		<a
			href="tel:+14155550132"
			class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition hover:ring-brand-500"
		>
			<h2 class="text-sm font-extrabold tracking-wide text-brand-600 uppercase">Phone</h2>
			<p class="mt-2 text-lg font-bold text-navy-900">{site.phone}</p>
		</a>
		<div
			class="min-w-0 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
		>
			<h2 class="text-sm font-extrabold tracking-wide text-brand-600 uppercase">Office</h2>
			<p class="mt-2 text-lg font-bold text-navy-900">548 Market St, San Francisco, CA 94104</p>
		</div>
	</div>

	<div class="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8">
		{#if submitted}
			<div class="rounded-2xl bg-brand-50 p-6 text-center ring-1 ring-brand-100" role="status">
				<p class="text-xl font-extrabold text-navy-900">Thanks — we'll reply within one business day.</p>
				<p class="mt-2 text-base text-ink-600">Your message is on its way to the Adiyo team.</p>
				<button
					type="button"
					onclick={() => (submitted = false)}
					class="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-500 px-6 text-sm font-bold text-white transition hover:bg-brand-600"
				>
					Send another message
				</button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} novalidate>
				<div class="grid gap-5 sm:grid-cols-2">
					<div class="min-w-0">
						<label for="contact-name" class="mb-1.5 block text-sm font-bold text-navy-900">Name</label>
						<input
							id="contact-name"
							type="text"
							bind:value={name}
							autocomplete="name"
							placeholder="Your name"
							class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
						/>
						{#if errors.name}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.name}</p>{/if}
					</div>
					<div class="min-w-0">
						<label for="contact-email" class="mb-1.5 block text-sm font-bold text-navy-900">Work email</label>
						<input
							id="contact-email"
							type="email"
							bind:value={email}
							autocomplete="email"
							placeholder="you@company.com"
							class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
						/>
						{#if errors.email}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.email}</p>{/if}
					</div>
				</div>
				<div class="mt-5 min-w-0">
					<label for="contact-company" class="mb-1.5 block text-sm font-bold text-navy-900">Company</label>
					<input
						id="contact-company"
						type="text"
						bind:value={company}
						autocomplete="organization"
						placeholder="Company name"
						class="min-h-12 w-full rounded-2xl border border-navy-900/15 px-4 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					/>
					{#if errors.company}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.company}</p>{/if}
				</div>
				<div class="mt-5 min-w-0">
					<label for="contact-message" class="mb-1.5 block text-sm font-bold text-navy-900">Message</label>
					<textarea
						id="contact-message"
						bind:value={message}
						rows="5"
						placeholder="How can we help?"
						class="min-h-12 w-full resize-y rounded-2xl border border-navy-900/15 px-4 py-3 text-base text-navy-900 outline-none placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					></textarea>
					{#if errors.message}<p class="mt-1.5 text-sm font-semibold text-red-600">{errors.message}</p>{/if}
				</div>
				<button
					type="submit"
					class="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-white transition hover:bg-brand-600 sm:w-auto"
				>
					Send message
				</button>
			</form>
		{/if}
	</div>
</section>

<CtaBanner />
