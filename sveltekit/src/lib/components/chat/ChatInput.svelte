<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";

	export let value = "";
	export let minRows = 1;
	export let maxRows: null | number = null;
	export let placeholder = "";
	export let disabled = false;

	// Approximate width from which we disable autofocus
	const TABLET_VIEWPORT_WIDTH = 768;

	let innerWidth = 0;
	let textareaElement: HTMLTextAreaElement;

	const dispatch = createEventDispatcher<{ submit: void }>();

	$: minHeight = `${1 + minRows * 1.5}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.5}em` : `auto`;

	function handleKeydown(event: KeyboardEvent) {
		// submit on enter
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			dispatch("submit"); // use a custom event instead of `event.target.form.requestSubmit()` as it does not work on Safari 14
		}
	}

	onMount(() => {
		if (innerWidth > TABLET_VIEWPORT_WIDTH) {
			textareaElement.focus();
		}
	});
</script>

<svelte:window bind:innerWidth />

<form method="post" action="?/prompt"
>


	<textarea
		name="content"
		enterkeyhint="send"
		tabindex="0"
		rows="1"
		class=" textarea h-full w-full "
	/>
	<button type="submit">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
			<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
		</svg>		  
	</button>
</form>