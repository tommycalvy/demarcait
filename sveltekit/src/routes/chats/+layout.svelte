<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const chatScrollY = writable(0);
    setContext('chatScrollY', chatScrollY);
</script>

<svelte:window bind:scrollY={$chatScrollY} />

<slot />
