<script lang="ts">
	import ChatMessages from "$lib/components/chat/ChatMessages.svelte";
	import ChatInput from "$lib/components/chat/ChatInput.svelte";
	import type { Message } from "$lib/types/Message";
	import { createEventDispatcher } from "svelte";
    import type { Model } from "$lib/types/Model";

    export let messages: Message[] = [];
	export let loading = false;
	export let isReadOnly = false;
    
	let message: string;

</script>

<div class=" relative min-h-0 min-w-0">
	<ChatMessages {messages} />
	<ChatInput
		placeholder="Ask anything"
		bind:value={message}
		maxRows={4}
		disabled={isReadOnly}
	/>

</div>

