<script lang="ts">
    import { page } from '$app/stores';
	import ChatNav from "$lib/components/chat-nav.svelte";
    import ChatList from "$lib/components/chat-list.svelte";

    let path = $page.url.pathname.split('/chats/edit').at(1);
</script>

<ChatNav>
    <a href="/chats/{path}">
        <p>Done</p>
    </a>
    <h3>Chats</h3>
    <div></div>
</ChatNav>
<ChatList />

<style lang="postcss">
    a, div {
        width: 2rem;
    }
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 2rem;
        color: var(--color-primary-icon);
        text-decoration: none;
        font-size: 1.2rem;
    }
    a:visited, a:active {
        color: var(--color-primary-icon);
    }
</style>