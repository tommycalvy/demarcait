<script lang="ts">
	import { scrollMaxValue } from '$lib/utils/scroll-max';

	let y = 0;
	let displayScrollToBottom = false;

	function onScroll() {
		if (scrollMaxValue() - 200 > y) {
			displayScrollToBottom = true;
		} else {
			displayScrollToBottom = false;
		}
	}

	function scrollToBottom() {
		window.scrollTo({ top: scrollMaxValue(), behavior: 'smooth' });
	}
	
</script>

<svelte:window bind:scrollY={y} on:scroll={onScroll} />

<div class="prompt">
	<form id="send-prompt" action="?/sendPrompt" method="post">
		<label for="prompt-input">
			<input id="prompt-input" enterkeyhint="send" placeholder="Send a message" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
				/>
			</svg>
		</label>
	</form>
	<div class="button-wrapper">
		<button on:click={scrollToBottom} class:display-button={displayScrollToBottom}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
				/>
			</svg>
		</button>
	</div>
</div>
<div class="spacer" />

<style lang="postcss">
	.display-button {
		display: block;
	}
	.button-wrapper {
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 0;
		height: 0;
	}
	button {
		display: none;
		position: absoulte;
		cursor: pointer;
		width: 3rem;
		height: 3rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transform: translate(-4rem, -4rem);
		border-radius: 100%;
		background-color: var(--color-surface);
		border: 0.1rem solid var(--color-gap);
		box-shadow: 0 0 0.5rem var(--color-box-shadow);
	}
	button:focus {
		outline: var(--color-primary) solid 0.1rem;
	}
	.spacer {
		width: 100%;
		background-color: var(--color-surface);
		min-height: 6rem;
	}
	.prompt {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		min-height: 6rem;
		padding-bottom: 1rem;
		display: flex;
		justify-content: center;
		background-color: var(--color-topnav-bg);
		box-shadow: inset 0 0 300rem var(--color-topnav-inset);
		backdrop-filter: blur(0.4rem);
	}
	form {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0 2rem;
	}
	label {
		display: flex;
		flex-grow: 1;
		gap: 0.5rem;
		background-color: var(--color-surface);
		border-radius: 0.4rem;
		/* box-shadow: 0 0 1rem oklch(0% 0 0 / 40%); */
		max-width: 50rem;
		max-height: 3rem;
		padding: 0.3rem 1rem;
		outline: var(--color-gap) solid 0.1rem;
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
	}
	.prompt svg {
		padding: 0.4rem;
		max-width: 2.2rem;
		color: var(--color-input-icon);
	}
</style>
