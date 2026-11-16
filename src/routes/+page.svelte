<script lang="ts">
	import { heroStats, managers, crmContact, insightFeatures, testimonials, faqs } from '../lib/data';

	let openIndex = $state(0);

	const integrations = ['Salesforce', 'Gmail', 'Slack', 'WhatsApp', 'HubSpot', 'Zoom', 'Outlook'];

	function toggleFaq(i: number) {
		openIndex = openIndex === i ? -1 : i;
	}
</script>

<svelte:head>
	<title>Adiyo — Drive More Revenue and Hit Forecasts with Generative AI</title>
	<meta
		name="description"
		content="Get more out of your pipeline by empowering frontline sales managers with GenAI. Adiyo surfaces high-value insights the moment a deal trajectory changes."
	/>
	<meta property="og:title" content="Adiyo — Drive More Revenue and Hit Forecasts with Generative AI" />
	<meta
		property="og:description"
		content="Get more out of your pipeline by empowering frontline sales managers with GenAI."
	/>
</svelte:head>

<!-- 1. HERO -->
<section class="bg-gradient-to-b from-skysoft-100 via-skysoft-100/70 to-white px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:pt-36">
	<div class="mx-auto max-w-6xl text-center">
		<h1 class="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
			Drive More Revenue and Hit Forecasts with Generative AI
		</h1>
		<p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-900/70 sm:text-lg">
			Get more out of your pipeline by empowering frontline sales managers with GenAI
		</p>
		<a
			href="/request-demo"
			class="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
		>
			Request early access
		</a>

		<!-- Desktop composition: absolutely positioned cards -->
		<div class="relative mx-auto mt-14 hidden h-[430px] max-w-5xl lg:block">
			<!-- Left: app-icons cluster on a mint/teal blob -->
			<div class="absolute left-0 top-0 w-72 rounded-[2rem] bg-gradient-to-br from-mint-300/70 to-tealsoft-300/70 p-5 shadow-sm">
				<div class="flex flex-wrap items-center justify-center gap-3">
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow" title="Salesforce" aria-label="Salesforce">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="#00a1e0" aria-hidden="true"><path d="M7.5 18.5a4.5 4.5 0 0 1-.4-8.98 6 6 0 0 1 11.6-1.2A4 4 0 0 1 18.5 18.5h-11Z" /></svg>
					</span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#ea4335] shadow" title="Gmail" aria-label="Gmail">M</span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow" title="WhatsApp" aria-label="WhatsApp">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25d366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" /></svg>
					</span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow" title="Instagram" aria-label="Instagram">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e1306c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="#e1306c" /></svg>
					</span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-extrabold text-[#4a154b] shadow" title="Slack" aria-label="Slack">#</span>
				</div>
			</div>

			<!-- Centre: light-blue blob with the Adiyo orb -->
			<div class="absolute left-1/2 top-24 flex h-[190px] w-[380px] -translate-x-1/2 items-center justify-center rounded-[2rem] bg-skysoft-200/90 shadow-sm">
				<span class="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
					<svg width="46" height="46" viewBox="0 0 32 32" fill="none" aria-hidden="true">
						<defs>
							<linearGradient id="adiyo-mark-hero" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
								<stop stop-color="#2dd4bf" />
								<stop offset="1" stop-color="#22c55e" />
							</linearGradient>
						</defs>
						<g stroke="url(#adiyo-mark-hero)" stroke-width="4.4" stroke-linecap="round">
							<line x1="16" y1="3" x2="16" y2="29" />
							<line x1="3" y1="16" x2="29" y2="16" />
							<line x1="6.8" y1="6.8" x2="25.2" y2="25.2" />
							<line x1="25.2" y1="6.8" x2="6.8" y2="25.2" />
						</g>
					</svg>
				</span>
			</div>

			<!-- Right: $45B -->
			<div class="absolute right-0 top-0 w-56 rounded-3xl bg-white p-5 text-left shadow-lg shadow-navy-900/5">
				<p class="text-3xl font-extrabold text-navy-900">{heroStats.closedWon}</p>
				<p class="mt-1 text-xs leading-snug text-navy-900/60">{heroStats.closedWonLabel}</p>
			</div>

			<!-- Bottom-left: 50% -->
			<div class="absolute bottom-0 left-[9%] w-52 rounded-3xl bg-white p-5 text-left shadow-lg shadow-navy-900/5">
				<p class="flex items-center gap-2 text-3xl font-extrabold text-navy-900">
					<span class="flex h-6 w-6 items-center justify-center rounded-full bg-skysoft-100 text-xs text-sky-600">↗</span>
					{heroStats.winRate}
				</p>
				<p class="mt-1 text-xs leading-snug text-navy-900/60">{heroStats.winRateLabel}</p>
			</div>

			<!-- Bottom-right: Sales Managers -->
			<div class="absolute bottom-2 right-[4%] w-56 rounded-3xl bg-white p-5 text-left shadow-lg shadow-navy-900/5">
				<p class="text-sm font-semibold text-navy-900">Sales Managers</p>
				<div class="mt-3 flex -space-x-2">
					{#each managers as m}
						{#if m.photo}
							<img src={m.photo} alt={m.name} class="h-9 w-9 rounded-full border-2 border-white object-cover" loading="lazy" />
						{:else}
							<span class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-navy-900 text-xs font-bold text-white">{m.initials}</span>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<!-- Mobile: same cards as a stacked 2-column grid -->
		<div class="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3 lg:hidden">
			<div class="col-span-2 flex h-32 items-center justify-center rounded-[2rem] bg-skysoft-200/90">
				<span class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
					<svg width="38" height="38" viewBox="0 0 32 32" fill="none" aria-hidden="true">
						<g stroke="#22c55e" stroke-width="4.4" stroke-linecap="round">
							<line x1="16" y1="3" x2="16" y2="29" />
							<line x1="3" y1="16" x2="29" y2="16" />
							<line x1="6.8" y1="6.8" x2="25.2" y2="25.2" />
							<line x1="25.2" y1="6.8" x2="6.8" y2="25.2" />
						</g>
					</svg>
				</span>
			</div>
			<div class="col-span-2 flex flex-wrap items-center justify-center gap-3 rounded-[2rem] bg-gradient-to-br from-mint-300/70 to-tealsoft-300/70 p-4">
				<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow" aria-label="Salesforce">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="#00a1e0" aria-hidden="true"><path d="M7.5 18.5a4.5 4.5 0 0 1-.4-8.98 6 6 0 0 1 11.6-1.2A4 4 0 0 1 18.5 18.5h-11Z" /></svg>
				</span>
				<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#ea4335] shadow" aria-label="Gmail">M</span>
				<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow" aria-label="WhatsApp">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25d366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" /></svg>
				</span>
				<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow" aria-label="Instagram">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e1306c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="#e1306c" /></svg>
				</span>
				<span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-extrabold text-[#4a154b] shadow" aria-label="Slack">#</span>
			</div>
			<div class="min-w-0 rounded-3xl bg-white p-4 text-left shadow-lg shadow-navy-900/5">
				<p class="text-2xl font-extrabold text-navy-900">{heroStats.closedWon}</p>
				<p class="mt-1 text-xs leading-snug text-navy-900/60">{heroStats.closedWonLabel}</p>
			</div>
			<div class="min-w-0 rounded-3xl bg-white p-4 text-left shadow-lg shadow-navy-900/5">
				<p class="text-2xl font-extrabold text-navy-900">{heroStats.winRate}</p>
				<p class="mt-1 text-xs leading-snug text-navy-900/60">{heroStats.winRateLabel}</p>
			</div>
			<div class="col-span-2 flex items-center justify-between rounded-3xl bg-white p-4 text-left shadow-lg shadow-navy-900/5">
				<p class="text-sm font-semibold text-navy-900">Sales Managers</p>
				<div class="flex -space-x-2">
					{#each managers as m}
						{#if m.photo}
							<img src={m.photo} alt={m.name} class="h-9 w-9 rounded-full border-2 border-white object-cover" loading="lazy" />
						{:else}
							<span class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-navy-900 text-xs font-bold text-white">{m.initials}</span>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 2. BETTER INSIGHTS, OUTCOMES -->
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-center text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
			<span class="font-extrabold">Better</span>
			<span class="block font-light sm:inline"> Insights, Outcomes.</span>
		</h2>
		<div class="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
			{#each insightFeatures as f}
				<div class="min-w-0 text-center">
					<div class="flex items-center justify-center gap-3">
						<svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
							<g stroke="#22c55e" stroke-width="4" stroke-linecap="round">
								<line x1="16" y1="4" x2="16" y2="28" />
								<line x1="4" y1="16" x2="28" y2="16" />
								<line x1="7.5" y1="7.5" x2="24.5" y2="24.5" />
								<line x1="24.5" y1="7.5" x2="7.5" y2="24.5" />
							</g>
						</svg>
						<span class="text-lg font-light text-navy-900/40">+</span>
						{#if f.icon === 'gpt'}
							<span class="inline-flex h-9 min-w-11 items-center justify-center rounded-full bg-brand-100 px-3 text-xs font-bold tracking-wide text-brand-700">GPT-4</span>
						{:else if f.icon === 'signals'}
							<span class="flex h-9 w-9 items-center justify-center rounded-full bg-skysoft-200" aria-label="Data signals">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12h4l3-8 4 16 3-8h6" /></svg>
							</span>
						{:else}
							<span class="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900" aria-label="Alert">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
							</span>
						{/if}
					</div>
					<h3 class="mt-5 text-base font-bold text-navy-900">{f.title}</h3>
					<p class="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-navy-900/65">{f.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 3. SALES MANAGERS -->
<section class="bg-white px-4 pb-16 sm:px-6 sm:pb-24">
	<div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<div class="min-w-0">
			<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
				Your Sales Managers are Great, Adiyo Makes Them Even Better
			</h2>
			<p class="mt-5 max-w-md text-base leading-relaxed text-navy-900/65">
				Enable managers to have more impact on the pipeline by giving them the right insights at the right time.
			</p>
			<p class="mt-4 max-w-md text-base leading-relaxed text-navy-900/65">
				Adiyo surfaces insights when it matters most, allowing your managers to coach reps in real-time before a deal is lost.
			</p>
			<a
				href="/request-demo"
				class="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
			>
				Request early access
			</a>
		</div>

		<div class="relative min-w-0 pb-8 pl-2 sm:pl-8">
			<div class="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-tealsoft-300 via-mint-300 to-tealsoft-300">
				<img
					src="/images/hero-woman.webp"
					alt="Sales manager reviewing deal insights on a tablet"
					class="h-[380px] w-full object-cover object-top sm:h-[440px]"
				/>
			</div>

			<!-- Manager rows overlapping the left edge -->
			<div class="absolute left-0 top-6 flex w-56 flex-col gap-3 sm:w-64">
				{#each managers as m, i}
					<div
						class="flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-lg shadow-navy-900/10 {i === 1
							? 'ring-2 ring-brand-500'
							: ''}"
					>
						{#if m.photo}
							<img src={m.photo} alt={m.name} class="h-10 w-10 shrink-0 rounded-full object-cover" loading="lazy" />
						{:else}
							<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">{m.initials}</span>
						{/if}
						<span class="min-w-0 text-left">
							<span class="block truncate text-sm font-bold text-navy-900">{m.name}</span>
							<span class="block truncate text-xs text-navy-900/55">{m.role}</span>
						</span>
					</div>
				{/each}
			</div>

			<!-- Floating chart card -->
			<div class="absolute -bottom-1 right-2 w-56 rounded-3xl bg-white p-4 shadow-xl shadow-navy-900/10 sm:right-4">
				<div class="flex items-start justify-between gap-2">
					<p class="text-xl font-extrabold text-navy-900">4,345</p>
					<span class="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-bold text-brand-700">1.4% ↗</span>
				</div>
				<svg viewBox="0 0 200 64" class="mt-2 h-16 w-full" aria-hidden="true">
					<defs>
						<linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0" stop-color="#22c55e" stop-opacity="0.25" />
							<stop offset="1" stop-color="#22c55e" stop-opacity="0" />
						</linearGradient>
					</defs>
					<path d="M0 52 L20 44 L40 48 L60 30 L80 38 L100 22 L120 34 L140 18 L160 26 L180 12 L200 20 L200 64 L0 64 Z" fill="url(#chart-fill)" />
					<path
						d="M0 52 L20 44 L40 48 L60 30 L80 38 L100 22 L120 34 L140 18 L160 26 L180 12 L200 20"
						fill="none"
						stroke="#22c55e"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle cx="100" cy="22" r="4" fill="#0a2540" />
				</svg>
			</div>
		</div>
	</div>
</section>

<!-- 4. DEEPER INSIGHTS / CRM -->
<section class="bg-gradient-to-b from-white via-skysoft-100/60 to-white px-4 py-16 sm:px-6 sm:py-24">
	<div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<!-- CRM diagram -->
		<div class="order-2 flex min-w-0 flex-col items-center lg:order-1">
			<p class="text-xs font-bold uppercase tracking-[0.2em] text-navy-900/50">Your CRM</p>
			<div class="mt-4 w-full max-w-xs rounded-3xl bg-white p-4 shadow-lg shadow-navy-900/5">
				<div class="flex items-center gap-3">
					<img src={crmContact.photo} alt={crmContact.name} class="h-14 w-14 shrink-0 rounded-full object-cover" loading="lazy" />
					<div class="min-w-0">
						<p class="truncate text-sm font-bold text-navy-900">{crmContact.name}</p>
						<p class="truncate text-xs text-navy-900/55">{crmContact.role}</p>
					</div>
				</div>
				<div class="mt-4">
					<div class="flex items-center justify-between text-xs text-navy-900/60">
						<span>Engagement level</span>
						<span class="font-bold text-navy-900">{crmContact.engagement}%</span>
					</div>
					<div class="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-skysoft-200">
						<div class="h-full rounded-full bg-brand-500" style="width: {crmContact.engagement}%"></div>
					</div>
				</div>
			</div>

			<div class="mt-4 flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-brand-500/25">
				<svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
					<g stroke="#fff" stroke-width="4" stroke-linecap="round">
						<line x1="16" y1="4" x2="16" y2="28" />
						<line x1="4" y1="16" x2="28" y2="16" />
						<line x1="7.5" y1="7.5" x2="24.5" y2="24.5" />
						<line x1="24.5" y1="7.5" x2="7.5" y2="24.5" />
					</g>
				</svg>
				New contact
			</div>

			<div class="h-8 border-l-2 border-dashed border-sky-300" aria-hidden="true"></div>
			<div class="grid w-full max-w-xs grid-cols-3 gap-4">
				<div class="flex flex-col items-center gap-1">
					<span class="h-6 border-l-2 border-dashed border-sky-300" aria-hidden="true"></span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft-100 shadow-sm" aria-label="Email">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
					</span>
				</div>
				<div class="flex flex-col items-center gap-1">
					<span class="h-6 border-l-2 border-dashed border-sky-300" aria-hidden="true"></span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft-100 shadow-sm" aria-label="Calendar">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
					</span>
				</div>
				<div class="flex flex-col items-center gap-1">
					<span class="h-6 border-l-2 border-dashed border-sky-300" aria-hidden="true"></span>
					<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft-100 shadow-sm" aria-label="Document">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
					</span>
				</div>
			</div>
		</div>

		<div class="order-1 min-w-0 lg:order-2">
			<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
				Deeper Insights Without Endless Digging
			</h2>
			<p class="mt-5 max-w-md text-base leading-relaxed text-navy-900/65">
				Your sales managers may need sleep, but Adiyo doesn't. Unlike your (amazing) managers, Adiyo can read every single sales communication in your pipeline — from emails to call transcripts.
			</p>
			<p class="mt-4 max-w-md text-base leading-relaxed text-navy-900/65">
				Adiyo ingests large volumes of data and uses a proprietary GenAI model to analyse data in ways that human brains simply can't.
			</p>
			<a
				href="/request-demo"
				class="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
			>
				Request early access
			</a>
		</div>
	</div>
</section>

<!-- 5. INTEGRATIONS STRIP -->
<section class="bg-white px-4 py-14 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-xl font-bold text-navy-900 sm:text-2xl">Works with the tools your team already uses</h2>
		<div class="mt-6 flex flex-wrap items-center justify-center gap-3">
			{#each integrations as name}
				<span class="inline-flex min-h-11 items-center rounded-full border border-skysoft-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-sm">{name}</span>
			{/each}
		</div>
	</div>
</section>

<!-- 6. TESTIMONIALS -->
<section class="bg-skysoft-100/60 px-4 py-16 sm:px-6 sm:py-20">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Loved by sales leaders</h2>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each testimonials as t}
				<figure class="flex min-w-0 flex-col rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5">
					<span class="text-4xl font-extrabold leading-none text-brand-500" aria-hidden="true">“</span>
					<blockquote class="mt-2 flex-1 text-sm leading-relaxed text-navy-900/75">{t.quote}</blockquote>
					<figcaption class="mt-6 flex items-center gap-3">
						<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">{t.initials}</span>
						<span class="min-w-0">
							<span class="block truncate text-sm font-bold text-navy-900">{t.name}</span>
							<span class="block truncate text-xs text-navy-900/55">{t.role}</span>
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- 7. FAQ -->
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Frequently asked questions</h2>
		<div class="mt-10 divide-y divide-skysoft-200 rounded-3xl border border-skysoft-200 bg-white px-5 shadow-sm sm:px-7">
			{#each faqs as f, i}
				<div class="min-w-0">
					<button
						type="button"
						onclick={() => toggleFaq(i)}
						aria-expanded={openIndex === i}
						class="flex min-h-12 w-full items-center justify-between gap-4 py-4 text-left"
					>
						<span class="text-base font-bold text-navy-900">{f.q}</span>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#0a2540"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="shrink-0 transition-transform duration-500 {openIndex === i ? 'rotate-180' : ''}"
							aria-hidden="true"
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</button>
					<div
						class="grid transition-[grid-template-rows] duration-500 ease-in-out"
						style="grid-template-rows: {openIndex === i ? '1fr' : '0fr'}"
					>
						<div class="overflow-hidden">
							<p
								class="pb-5 text-sm leading-relaxed text-navy-900/65 transition-opacity duration-500 {openIndex === i
									? 'opacity-100'
									: 'opacity-0'}"
							>
								{f.a}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 8. FINAL CTA -->
<section class="bg-white px-4 pb-20 sm:px-6">
	<div class="mx-auto max-w-6xl rounded-[2rem] bg-navy-950 px-6 py-14 text-center sm:py-16">
		<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready to hit your forecast?</h2>
		<p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
			Join the sales teams using Adiyo to surface the insights that matter — before a deal is lost.
		</p>
		<a
			href="/request-demo"
			class="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
		>
			Request early access
		</a>
		<p class="mt-4 text-xs text-white/50">No credit card required · 14-day free trial</p>
	</div>
</section>
