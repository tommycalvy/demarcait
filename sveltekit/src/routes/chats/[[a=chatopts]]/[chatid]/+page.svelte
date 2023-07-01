<script>
	import ChatInput from '$lib/components/chat-input.svelte';
	import ChatMessages from '$lib/components/chat-messages.svelte';
	import MessageNav from '$lib/components/message-nav.svelte';
	import { messages } from '$lib/components/fake-messages';

	
</script>



<MessageNav />

<ChatMessages {messages} />



<ChatInput />