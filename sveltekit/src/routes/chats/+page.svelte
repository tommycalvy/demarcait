<script lang="ts">
    import ChatNav from "$lib/components/chat-nav.svelte";
</script>

<ChatNav>
    <a href="/chats/edit">
        <p>Edit</p>
    </a>
    <h3>Chats</h3>
    <a href="/chats/new">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    </a>
</ChatNav>

<style lang="postcss">
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        color: var(--color-primary-icon);
        text-decoration: none;
        font-size: 1.2rem;
    }
    a:visited, a:active {
        color: var(--color-primary-icon);
    }
</style>
