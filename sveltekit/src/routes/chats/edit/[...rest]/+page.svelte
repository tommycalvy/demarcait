<script>
    import { page } from '$app/stores';
    let path = $page.url.pathname.split('/chats/edit').at(1);
</script>

<nav>
    <a href="/chats/{path}">
        Done
    </a>
    <h2>Chats</h2>
    <div></div>
</nav>

<style lang="postcss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 1rem;
        background-color: var(--color-surface-opaque);
        backdrop-filter: blur(0.2rem);
    }
    nav a, div {
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