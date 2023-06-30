<script lang="ts">
	import { getContext } from 'svelte';
    import type { Writable } from "svelte/store";
    const chatScrollY: Writable<number> = getContext('chatScrollY');
</script>

<form
	id="search-form"
	action="?/searchChats"
	method="post"
	style="opacity: {1 - Math.min(1, $chatScrollY / 30)}"
>
	<label for="search">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
		<input id="search" enterkeyhint="search" placeholder="Search" />
	</label>
</form>

<style lang="postcss">
	form {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 0.5rem 0 1rem 0;
		padding: 0 2rem;
	}
	label {
		display: flex;
		flex-grow: 1;
		gap: 0.5rem;
		background-color: var(--color-input-background);
		border-radius: 1rem;
		max-width: 25rem;
		max-height: 2.2rem;
		padding: 0 1rem;
	}
	input {
		border: none;
		outline: none;
		background-color: inherit;
		width: 100%;
		font-size: 1rem;
		color: var(--color-text);
	}
	input::placeholder {
		color: var(--color-input-icon);
	}
	label:focus-within {
		outline: var(--color-primary) solid 0.1rem;
		background-color: var(--color-input-focused);
	}
	svg {
		padding: 0.4rem;
		max-width: 2.2rem;
		color: var(--color-input-icon);
	}
</style>
