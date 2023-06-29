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

<div class="wrapper">
	<slot />
	<Navbar />
</div>

<style lang="postcss">

	@property --color-scrollbar-test {
		syntax: '<color>';
		inherits: true;
		initial-value: var(--color-scrollbar-thumb);
	}

	@keyframes fadeIn {
		0% {
			--color-scrollbar-test: oklch(100% 0 0 / 0%);
		}

		100% {
			--color-scrollbar-test: var(--color-scrollbar-thumb);
		}
	}

	.wrapper {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow-y: auto;
		scrollbar-gutter: stable;
		animation: fadeIn 1s ease-in-out 0s reverse;
	}
	.wrapper:hover {
		animation: fadeIn 1s ease-in-out 0s forwards;
	}
	.wrapper::-webkit-scrollbar {
		width: 0.5rem;
	}
	.wrapper::-webkit-scrollbar-track {
		background: oklch(100% 0 0 / 0%);
		margin-block: 4rem;
	}
	.wrapper::-webkit-scrollbar-thumb {
		background: var(--color-scrollbar-test);
		margin-block: 4rem;
		border-radius: 100vw;
	}
</style>
