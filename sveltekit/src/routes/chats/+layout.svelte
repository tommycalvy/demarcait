<script lang="ts">
    import { chatScrollY } from "$lib/stores/scroll";
</script>

<svelte:window bind:scrollY={$chatScrollY} />

<slot />
