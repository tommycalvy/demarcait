<script>
    import { page } from '$app/stores';
    let path = $page.url.pathname.split('/chats/edit').at(1);
</script>

<nav>
    <a href="/chats/{path}">
        <p>Done</p>
    </a>
    <h3>Chats</h3>
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
        padding: 0 2rem;
        min-height: 4rem;
        width: 100%;
        background-color: oklch(0% 0 0 / 40%);
		box-shadow: 0 0 1rem oklch(0% 0 0 / 20%), inset 0 0 300rem oklch(0% 0 0 / 70%);
		backdrop-filter: blur(0.4rem);
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