<script lang="ts">
	import ChatMessages from "$lib/components/chat/ChatMessages.svelte";
	import ChatInput from "$lib/components/chat/ChatInput.svelte";
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import ChatWindow from "$lib/components/chat/ChatWindow.svelte";
	import { ERROR_MESSAGES, error } from "$lib/stores/errors";
	import { pendingMessage } from "$lib/stores/pendingMessage";
	import { findCurrentModel } from "$lib/utils/models";
	import type { Message } from "$lib/types/Message";
	import { AppShell } from '@skeletonlabs/skeleton';

	export let messages: Message[] = [];
	export let loading = false;
	export let isReadOnly = false;

	export let data;

	
</script>

<AppShell>
	<ChatMessages {messages} />
	<svelte:fragment slot="footer">
		<ChatInput/>
	</svelte:fragment>
</AppShell>
