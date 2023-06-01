<script lang="ts">
	import ChatMessages from "$lib/components/chat/ChatMessages.svelte";
import type { Message } from "$lib/types/Message";
	let id = crypto.randomUUID();
	// Messages
	let messages: Message[] = [
		{
			from: 'user',
			id,
			content: 'lorem ipsum dolor sit amet',
		},
		{
			from:'assistant',
			id,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
		},
		{
			from: 'user',
			id,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
		},
		{
			from:'assistant',
			id,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
		}
	];
	let currentMessage = '';
</script>

<div class=" relative min-h-0 min-w-0">
	<ChatMessages {messages} />
</div>

