<script lang="ts">
	/**
	 * Animated count-up number. SSR renders the final value (no-JS safe);
	 * in the browser it counts from 0 when scrolled into view, once.
	 * If `value` changes afterwards (e.g. a calculator slider), it tweens
	 * from the currently displayed number instead of restarting at 0.
	 * Reduced-motion visitors always see the final value.
	 */
	import { untrack } from 'svelte';

	let {
		value,
		prefix = '',
		suffix = '',
		decimals = 0,
		duration = 1200,
		class: className = ''
	}: {
		value: number;
		prefix?: string;
		suffix?: string;
		decimals?: number;
		duration?: number;
		class?: string;
	} = $props();

	let displayed = $state(value);
	let node: HTMLSpanElement | undefined = $state();
	let started = false;
	let raf = 0;

	function tween(from: number, to: number, ms: number) {
		cancelAnimationFrame(raf);
		const start = performance.now();
		const tick = (now: number) => {
			const p = Math.min(1, (now - start) / ms);
			displayed = from + (to - from) * (1 - Math.pow(1 - p, 3));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
	}

	$effect(() => {
		const el = node;
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		displayed = 0;
		const io = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				io.disconnect();
				started = true;
				tween(0, value, duration);
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	});

	// Later value changes tween from the current number — no jump to 0.
	$effect(() => {
		const next = value;
		if (!started) return;
		const from = untrack(() => displayed);
		if (from === next) return;
		tween(from, next, 400);
	});
</script>

<span bind:this={node} class={className}>{prefix}{displayed.toFixed(decimals)}{suffix}</span>
