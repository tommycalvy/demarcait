<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import ChatWindow from "$lib/components/chat/ChatWindow.svelte";
	import { ERROR_MESSAGES, error } from "$lib/stores/errors";
	import { pendingMessage } from "$lib/stores/pendingMessage";
	import { findCurrentModel } from "$lib/utils/models";

	export let data;
	let loading = false;

	
</script>

<ChatWindow
	{loading}
/>