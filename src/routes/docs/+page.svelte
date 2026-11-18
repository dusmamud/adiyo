<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { reveal } from '../../lib/reveal';

	const steps = [
		{
			title: 'Connect your CRM',
			text: 'Sign in with Salesforce or HubSpot and grant read access. Adiyo starts reading emails, calls and transcripts the same day — no data migration, no field mapping.'
		},
		{
			title: 'Invite your managers',
			text: 'Add your frontline managers from Settings. Each one gets their own morning deal list, weekly coaching brief and forecast view — scoped to their team only.'
		},
		{
			title: 'Act on your first insight',
			text: 'Within 24 hours Adiyo surfaces the first trajectory change: a deal drifting, a champion going quiet, a deadline slipping — with the evidence attached.'
		}
	];

	const endpoints = [
		{
			method: 'GET',
			path: '/v1/deals',
			description: 'List open deals with health scores, confidence and the three signals that moved each one.',
			code: `curl https://api.adiyo.ai/v1/deals \\
  -H "Authorization: Bearer $ADIYO_API_KEY"

{
  "deals": [
    {
      "id": "deal_9f2c1",
      "company": "Nimbus",
      "type": "Expansion",
      "value": 420000,
      "health": "at_risk",
      "confidence": 0.42,
      "signals": ["champion_quiet_12d", "new_stakeholder", "reply_latency_2x"]
    }
  ]
}`
		},
		{
			method: 'GET',
			path: '/v1/insights',
			description: 'The latest trajectory-change insights across your pipeline, newest first.',
			code: `curl "https://api.adiyo.ai/v1/insights?since=2026-11-10" \\
  -H "Authorization: Bearer $ADIYO_API_KEY"

{
  "insights": [
    {
      "id": "ins_7a41b",
      "deal_id": "deal_9f2c1",
      "title": "Champion gone quiet",
      "summary": "No reply from the champion in 12 days; a Finance stakeholder joined the thread.",
      "created_at": "2026-11-16T09:14:00Z"
    }
  ]
}`
		},
		{
			method: 'POST',
			path: '/v1/deals/{id}/notes',
			description: 'Attach a coaching note or next step to a deal — Adiyo re-checks it in 48 hours.',
			code: `curl -X POST https://api.adiyo.ai/v1/deals/deal_9f2c1/notes \\
  -H "Authorization: Bearer $ADIYO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "note": "Call the champion directly — ask what changed on their side.",
    "due": "2026-11-18"
  }'

{
  "id": "note_3d8e2",
  "deal_id": "deal_9f2c1",
  "status": "open",
  "recheck_at": "2026-11-18T09:00:00Z"
}`
		}
	];
</script>

<svelte:head>
	<title>Documentation — Adiyo</title>
	<meta
		name="description"
		content="Adiyo docs: connect your CRM in minutes, invite managers, and use the API to read deals, insights and coaching notes — with keys, rate limits and SDKs."
	/>
</svelte:head>

<PageHero
	eyebrow="Documentation"
	title="Get Adiyo running in a day"
	subtitle="Connect your CRM, invite your managers, and read your first insight within 24 hours. The API is there when you need it."
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		Getting started
	</h2>
	<div class="mt-10 grid gap-6 sm:grid-cols-3">
		{#each steps as step, i (step)}
			<article
				use:reveal={{ delay: i * 80 }}
				class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<p class="text-4xl font-extrabold text-brand-700">0{i + 1}</p>
				<h3 class="mt-4 text-lg font-extrabold text-navy-900">{step.title}</h3>
				<p class="mt-2 text-base leading-relaxed text-ink-600">{step.text}</p>
			</article>
		{/each}
	</div>
	<p use:reveal class="mt-8 text-center text-base leading-relaxed text-ink-600">
		Stuck on setup? The <a href="/help" class="font-bold text-brand-700 underline underline-offset-2"
			>Help Center</a
		> covers every step, or
		<a href="/contact" class="font-bold text-brand-700 underline underline-offset-2">talk to us</a>.
	</p>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<h2 use:reveal class="text-center text-2xl font-extrabold text-navy-900 sm:text-3xl">
		API reference
	</h2>
	<p use:reveal class="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-ink-600">
		Read deals, insights and coaching notes from your own tools. Every response is JSON; every
		endpoint returns the evidence behind the number.
	</p>
	<div class="mt-10 grid gap-6">
		{#each endpoints as endpoint, i (endpoint.path)}
			<article
				use:reveal={{ delay: Math.min(i * 70, 200) }}
				class="min-w-0 overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5"
			>
				<div class="flex min-w-0 flex-wrap items-center gap-3 p-6 sm:p-7">
					<span
						class="inline-flex min-h-8 items-center rounded-full px-3 text-xs font-extrabold tracking-wide {endpoint.method ===
						'GET'
							? 'bg-brand-100 text-brand-700'
							: 'bg-navy-900 text-white'}"
					>
						{endpoint.method}
					</span>
					<code class="min-w-0 text-base font-bold break-all text-navy-900">{endpoint.path}</code>
				</div>
				<p class="px-6 pb-5 text-base leading-relaxed text-ink-600 sm:px-7">
					{endpoint.description}
				</p>
				<pre
					class="overflow-x-auto bg-navy-900 p-6 text-sm leading-relaxed whitespace-pre text-white/90 sm:px-7">{endpoint.code}</pre>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
	<div class="grid gap-6 sm:grid-cols-3">
		<article
			use:reveal
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h3 class="text-lg font-extrabold text-navy-900">Authentication</h3>
			<p class="mt-2 text-base leading-relaxed text-ink-600">
				Create an API key in <strong class="text-navy-900">Settings → API keys</strong>. Send it as a
				Bearer token on every request. Keys can be scoped per workspace and revoked at any time.
			</p>
		</article>
		<article
			use:reveal={{ delay: 80 }}
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h3 class="text-lg font-extrabold text-navy-900">Rate limits</h3>
			<p class="mt-2 text-base leading-relaxed text-ink-600">
				<strong class="text-navy-900">100 requests per minute</strong> per key. Responses include
				<code class="text-sm font-bold text-navy-900">X-RateLimit-Remaining</code> headers, and
				exceeding the limit returns <code class="text-sm font-bold text-navy-900">429</code> — back off
				and retry.
			</p>
		</article>
		<article
			use:reveal={{ delay: 160 }}
			class="min-w-0 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(10,37,64,0.08)] ring-1 ring-navy-900/5 sm:p-8"
		>
			<h3 class="text-lg font-extrabold text-navy-900">SDKs</h3>
			<p class="mt-2 text-base leading-relaxed text-ink-600">
				Official clients for <strong class="text-navy-900">JavaScript / TypeScript</strong> and
				<strong class="text-navy-900"> Python</strong> wrap the same endpoints — install, paste your
				key, and call <code class="text-sm font-bold text-navy-900">adiyo.deals.list()</code>.
			</p>
		</article>
	</div>

	<div
		use:reveal
		class="mt-12 flex min-w-0 flex-col items-center justify-between gap-5 rounded-3xl bg-brand-50 p-7 ring-1 ring-brand-500/20 sm:flex-row sm:p-8"
	>
		<div class="min-w-0 text-center sm:text-left">
			<h2 class="text-xl font-extrabold text-navy-900">Check the platform status</h2>
			<p class="mt-1 text-base leading-relaxed text-ink-600">
				Uptime, incident history and planned maintenance — all on the status page.
			</p>
		</div>
		<a
			href="/status"
			class="group inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-navy-900 px-6 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
		>
			Adiyo status
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</a>
	</div>
</section>

<CtaBanner />
