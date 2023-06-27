<nav>
    <a href="/chats/edit">
        Edit
    </a>
    <h2>Chats</h2>
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
</nav>

<style lang="postcss">
    nav {
        min-height: 4rem;
        width: 100%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: var(--color-surface-opaque);
        backdrop-filter: blur(0.2rem);
    }
    a svg {
        width: 2rem;
        height: 2rem;
    }
</style>
