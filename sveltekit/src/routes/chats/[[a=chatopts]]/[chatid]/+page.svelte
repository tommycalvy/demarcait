<script>
	import { page } from '$app/stores';
	let messages = [
		{
			from: 'user',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			from: 'chatbot',
			content:
				'Faucibus interdum posuere lorem ipsum. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Nunc lobortis mattis aliquam faucibus purus in. Leo a diam sollicitudin tempor id. Lobortis scelerisque fermentum dui faucibus in ornare quam.'
		},
		{
			from: 'user',
			content:
				'Lectus magna fringilla urna porttitor rhoncus dolor. Elementum pulvinar etiam non quam.'
		},
		{
			from: 'chatbot',
			content:
				'Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Placerat duis ultricies lacus sed turpis tincidunt id. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ac orci phasellus egestas tellus rutrum tellus pellentesque.'
		}
	];
</script>

<div class="title">
	<a href="/chats">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	</a>
	<h3>Hello {$page.params.chatid}</h3>
	<div class="placeholder" />
</div>
<div class="spacer" />

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
<div class="prompt">
	<form id="send-prompt" action="?/sendPrompt" method="post">
		<label for="prompt-input">
			<input id="prompt-input" enterkeyhint="send" placeholder="Send a message" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>              
		</label>
	</form>
</div>
<div class="spacer" />
<div class="spacer" />

<style lang="postcss">
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		padding: 0 2rem;
		min-height: 4rem;
		background-color: var(--color-topnav-bg);
		box-shadow: inset 0 0 300rem var(--color-topnav-inset);
		backdrop-filter: blur(0.4rem);
		border-bottom: 0.1rem solid var(--color-gap);
	}
	.spacer {
		width: 100%;
		background-color: var(--color-surface);
		min-height: 4rem;
	}
	a,
	.placeholder {
		width: 2rem;
	}
	.title svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-primary-icon);
	}
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
	.prompt {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 6rem;
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
