<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
	}

	let { eyebrow, title, subtitle }: Props = $props();
</script>

<section class="bg-skysoft-100 px-4 pt-12 pb-14 sm:pt-16 sm:pb-20 rounded-b-[2.5rem]">
	<div class="mx-auto max-w-3xl text-center">
		{#if eyebrow}
			<p class="text-xs font-extrabold tracking-[0.18em] text-brand-600 uppercase sm:text-sm">
				{eyebrow}
			</p>
		{/if}
		<h1 class="mt-3 text-4xl leading-[1.08] font-extrabold tracking-tight text-navy-900 sm:text-5xl">
			{title}
		</h1>
		{#if subtitle}
			<p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
				{subtitle}
			</p>
		{/if}
	</div>
</section>
