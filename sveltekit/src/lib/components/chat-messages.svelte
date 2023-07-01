<script lang="ts">
	import type { Message } from "$lib/types/message";

    export let messages: Message[] = [];
</script>

<main>
	{#each messages as message}
		<div
			class="message"
			class:chatbot-message={message.from === 'chatbot'}
			class:user-message={message.from === 'user'}
		>
			<div class="content-wrapper">
				<div class="circle-wrapper">
					<div
						class="circle"
						class:chatbot-avatar={message.from === 'chatbot'}
						class:user-avatar={message.from === 'user'}
					/>
				</div>
				<p>
					{message.content}
				</p>
			</div>
		</div>
	{/each}
</main>

<style lang="postcss">
	.circle-wrapper {
		width: 5rem;
	}
	.circle {
		width: 3rem;
		height: 3rem;
		border-radius: 100%;
		margin: 0 1rem;
	}
	.user-avatar {
		background-color: darkcyan;
	}
	.user-message {
		background-color: var(--color-surface);
	}
	.chatbot-avatar {
		background-color: darkmagenta;
	}
	.chatbot-message {
		background-color: var(--color-chatbot-bg);
	}
	.message {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 2rem 2rem 3rem 1rem;
	}
	.content-wrapper {
		display: flex;
		width: 50rem;
	}
	.message p {
		margin-top: 0.5rem;
	}
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>