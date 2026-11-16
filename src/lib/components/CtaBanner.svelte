<script lang="ts">
	import { reveal } from '../reveal';

	interface Props {
		title?: string;
		text?: string;
	}

	let { title = 'Ready to hit your forecast?', text = 'Get more out of your pipeline by empowering frontline sales managers with GenAI.' }: Props =
		$props();
</script>

<section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
	<div
		use:reveal={{ variant: 'scale' }}
		class="rounded-[2rem] bg-navy-950 px-6 py-12 text-center shadow-xl sm:px-12"
	>
		<h2 class="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
			{title}
		</h2>
		<p class="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/70">{text}</p>
		<a
			href="/request-demo"
			class="group mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-7 text-base font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl active:translate-y-0"
		>
			Request early access
			<span class="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</a>
		<p class="mt-4 text-xs text-white/50 sm:text-sm">No credit card required · 14-day free trial</p>
	</div>
</section>
