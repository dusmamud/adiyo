<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<a href="/" class={`inline-flex items-center gap-2 ${className}`} aria-label="Adiyo home">
	<svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
		<defs>
			<linearGradient id="adiyo-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
				<stop stop-color="#2dd4bf" />
				<stop offset="1" stop-color="#22c55e" />
			</linearGradient>
		</defs>
		<g stroke="url(#adiyo-mark)" stroke-width="4.4" stroke-linecap="round">
			<line x1="16" y1="3" x2="16" y2="29" />
			<line x1="3" y1="16" x2="29" y2="16" />
			<line x1="6.8" y1="6.8" x2="25.2" y2="25.2" />
			<line x1="25.2" y1="6.8" x2="6.8" y2="25.2" />
		</g>
	</svg>
	<span class="text-[1.35rem] font-extrabold tracking-tight text-navy-900">adiyo</span>
</a>
