<script lang="ts">
	import '../app.postcss';
	import Navbar from '../lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	let colorScheme = data.colorScheme;

	onMount(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			colorScheme.preferredColor = 'dark';
		} else {
			colorScheme.preferredColor = 'light';
		}
		document.cookie = `color_scheme=${JSON.stringify(colorScheme)};path="/";samesite=lax;secure`;
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			colorScheme.preferredColor = event.matches ? 'dark' : 'light';
			document.cookie = `color_scheme=${JSON.stringify(colorScheme)};path="/";samesite=lax;secure`;
		});
	});
</script>

<div>
	<slot />
	<Navbar />
</div>

<style lang="postcss">
	

	@keyframes fadeIn {
		0% {
			--color-scrollbar-test: oklch(100% 0 0 / 0%);
		}

		100% {
			--color-scrollbar-test: var(--color-scrollbar-thumb);
		}
	}

	@keyframes fadeOut {
		0% {
			--color-scrollbar-test: var(--color-scrollbar-thumb);
		}

		100% {
			--color-scrollbar-test: oklch(100% 0 0 / 0%);
		}
	}

	div {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow-y: auto;
		scrollbar-gutter: stable;
		animation: fadeOut .5s ease-in-out forwards;
	}
	div:hover {
		animation: fadeIn .5s ease-in-out forwards;
	}
	div::-webkit-scrollbar {
		width: 0.5rem;
	}
	div::-webkit-scrollbar-track {
		background: oklch(100% 0 0 / 0%);
		margin-block: 4rem;
	}
	div::-webkit-scrollbar-thumb {
		background: var(--color-scrollbar-test);
		margin-block: 4rem;
		border-radius: 100vw;
	}
</style>
