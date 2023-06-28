<script lang="ts">
    let y: number;
</script>

<svelte:window bind:scrollY={y} />

<nav class:border={y > 61}>
    <slot />
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
        background-color: var(--color-topnav-bg);
		box-shadow: inset 0 0 300rem var(--color-topnav-inset);
		backdrop-filter: blur(0.4rem);
        border-bottom: 0.1rem solid oklch(100% 0 0 / 0%);
    }
    .border {
        border-bottom: 0.1rem solid var(--color-gap);
    }
</style>