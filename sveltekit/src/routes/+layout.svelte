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

<slot />
