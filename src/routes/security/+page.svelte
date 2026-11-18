<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import CountUp from '#lib/components/CountUp.svelte';
	import { reveal } from '../../lib/reveal';

	const badges = [
		{ label: 'SOC 2 Type II', note: 'Audited controls' },
		{ label: 'GDPR', note: 'EU data protection' },
		{ label: 'ISO 27001', note: 'Certified ISMS' },
		{ label: '99.9% uptime SLA', note: 'Uptime commitment' }
	];

	const topics = [
		{
			icon: 'lock',
			title: 'Encryption in transit & at rest',
			text: 'Every connection is protected with TLS 1.2 or higher, and stored data is encrypted with AES-256. Keys are managed separately from the data they protect, and rotated on a schedule.'
		},
		{
			icon: 'shield',
			title: 'Your data never trains shared models',
			text: 'Your pipeline data belongs to your workspace. It is never used to train shared models, never sold, and never shared across customers. Insights are built from your deals — and only your deals.'
		},
		{
			icon: 'key',
			title: 'Access control',
			text: 'Role-based access keeps every rep and manager inside their own scope. SSO/SAML, SCIM provisioning and full audit logs are included on Enterprise, so IT stays in control.'
		},
		{
			icon: 'globe',
			title: 'Data residency & retention',
			text: 'Choose US or EU hosting for your workspace data. Retention is configurable per workspace, and data is deleted on request — including a full export first, if you want it.'
		},
		{
			icon: 'list',
			title: 'Subprocessors',
			text: 'We keep the list short, and every subprocessor is bound by the same data-protection terms we hold ourselves to.',
			items: [
				{ name: 'Cloud hosting (US/EU)', note: 'Where your workspace data lives' },
				{ name: 'Email delivery', note: 'Transactional mail and digests' },
				{ name: 'Analytics', note: 'Product usage, anonymised where possible' }
			]
		},
		{
			icon: 'pulse',
			title: 'Uptime & status',
			text: 'Adiyo is built to be there on Monday morning, every Monday. Our uptime commitment is backed by monitoring, on-call cover and a public status page.',
			uptime: true
		}
	];
</script>

<svelte:head>
	<title>Security & Trust — Adiyo</title>
	<meta
		name="description"
		content="How Adiyo protects your pipeline data: encryption in transit and at rest, no shared-model training, SSO/SCIM access control, data residency and a 99.9% uptime SLA."
	/>
</svelte:head>

<PageHero
	eyebrow="Security & Trust"
	title="Your pipeline data stays yours"
	subtitle="Encryption, access control and data residency — built in from day one, not bolted on."
/>

<section class="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
	<div use:reveal class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each badges as badge (badge.label)}
			<div
				class="flex min-w-0 items-center gap-3 rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
			>
				<span
					class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700"
					aria-hidden="true"
				>
					<svg
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z" />
						<path d="m9 11.5 2 2 4-4" />
					</svg>
				</span>
				<div class="min-w-0">
					<p class="text-base font-extrabold text-navy-900">{badge.label}</p>
					<p class="text-sm text-ink-500">{badge.note}</p>
				</div>
			</div>
		{/each}
	</div>
	<p use:reveal class="mt-4 text-center text-xs text-ink-500 sm:text-sm">
		Compliance badges shown for demonstration — confirm current status with our team during a security
		review.
	</p>
</section>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each topics as topic, i (topic.title)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 350) }}
				class="group min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
			>
				<span
					class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 transition-transform duration-300 group-hover:scale-110"
					aria-hidden="true"
				>
					{#if topic.icon === 'lock'}
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="11" width="16" height="10" rx="2" />
							<path d="M8 11V7a4 4 0 0 1 8 0v4" />
						</svg>
					{:else if topic.icon === 'shield'}
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z" />
							<path d="m9 11.5 2 2 4-4" />
						</svg>
					{:else if topic.icon === 'key'}
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="7.5" cy="15.5" r="4.5" />
							<path d="m11 12 9-9" />
							<path d="m15 5 3 3" />
						</svg>
					{:else if topic.icon === 'globe'}
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="9" />
							<path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
						</svg>
					{:else if topic.icon === 'list'}
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
							<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
						</svg>
					{:else}
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 17l6-6 4 4 8-8" />
							<path d="M14 7h7v7" />
						</svg>
					{/if}
				</span>
				<h2 class="mt-5 text-xl font-extrabold text-navy-900">{topic.title}</h2>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{topic.text}</p>
				{#if topic.uptime}
					<p class="mt-5 flex items-baseline gap-2">
						<CountUp
							value={99.9}
							decimals={1}
							suffix="%"
							class="text-4xl font-extrabold text-navy-900"
						/>
						<span class="text-sm font-bold text-ink-500">uptime SLA</span>
					</p>
				{/if}
				{#if topic.items}
					<ul class="mt-5 flex flex-col gap-3 border-t border-navy-900/5 pt-5">
						{#each topic.items as item (item.name)}
							<li class="min-w-0">
								<p class="text-sm font-bold text-navy-900 sm:text-base">{item.name}</p>
								<p class="text-sm text-ink-500">{item.note}</p>
							</li>
						{/each}
					</ul>
				{/if}
			</article>
		{/each}
	</div>

	<div
		use:reveal
		class="mt-12 flex min-w-0 flex-col items-center justify-between gap-5 rounded-3xl bg-navy-950 p-7 text-center shadow-xl sm:flex-row sm:p-8 sm:text-left"
	>
		<div class="min-w-0">
			<h2 class="text-xl font-extrabold text-white">Questions for procurement?</h2>
			<p class="mt-1 text-base leading-relaxed text-white/70">
				We answer security reviews within two business days — and we will happily sign your NDA first.
			</p>
		</div>
		<a
			href="mailto:hello@adiyo.ai"
			class="group inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-500 px-6 text-base font-bold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
		>
			hello@adiyo.ai
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</a>
	</div>
</section>

<CtaBanner />
