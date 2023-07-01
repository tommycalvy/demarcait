<script>
	import { page } from '$app/stores';
</script>
<nav>
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
</nav>
<div class="spacer" />

<style lang="postcss">

    nav {
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
</style>