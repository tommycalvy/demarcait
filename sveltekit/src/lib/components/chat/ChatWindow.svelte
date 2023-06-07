<script lang="ts">
	import ChatMessages from "$lib/components/chat/ChatMessages.svelte";
	import ChatInput from "$lib/components/chat/ChatInput.svelte";
	import type { Message } from "$lib/types/Message";
	import { createEventDispatcher } from "svelte";
    import type { Model } from "$lib/types/Model";

    export let messages: Message[] = [];
	export let loading = false;
	export let currentModel: Model;
	export let models: Model[];
    
	let message: string;
	
    $: isReadOnly = !models.some((model) => model.id === currentModel.id);

	const dispatch = createEventDispatcher<{
		message: string;
		share: void;
		stop: void;
		retry: { id: Message["id"]; content: string };
	}>();

	const handleSubmit = () => {
		if (loading) return;
		dispatch("message", message);
		message = "";
	};

</script>

<div class=" relative min-h-0 min-w-0">
	<ChatMessages {messages} />
	<div
		class="dark:via-gray-80 pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center bg-gradient-to-t from-white via-white/80 to-white/0 px-3.5 py-4 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/0 max-md:border-t max-md:bg-white max-md:dark:bg-gray-900 sm:px-5 md:py-8 xl:max-w-4xl [&>*]:pointer-events-auto"
	>
		<form
			on:submit|preventDefault={handleSubmit}
			class="relative flex w-full max-w-4xl flex-1 items-center rounded-xl border bg-gray-100 focus-within:border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:focus-within:border-gray-500 
			{isReadOnly ? 'opacity-30' : ''}"
		>
			<div class="flex w-full flex-1 border-none bg-transparent">
				<ChatInput
					placeholder="Ask anything"
					bind:value={message}
					on:submit={handleSubmit}
					maxRows={4}
					disabled={isReadOnly}
				/>
		</form>
	</div>
</div>

