<script lang="ts">
    import type { Message } from "$lib/types/Message";
    import { snapScrollToBottom } from "$lib/actions/snapScrollToBottom";
    import ChatMessage from "$lib/components/chat/ChatMessage.svelte";
    import ScrollToBottomBtn from "$lib/components/ScrollToBottomBtn.svelte";
    import { tick } from "svelte";

    export let messages: Message[];

    async function scrollToBottom() {
		await tick();
		chatContainer.scrollTop = chatContainer.scrollHeight;
	}

    let chatContainer: HTMLElement;

    // If last message is from user, scroll to bottom
	$: if (messages[messages.length - 1]?.from === "user") {
		scrollToBottom();
	}
</script>

<div 
    class=" h-full overflow-y-auto" 
    use:snapScrollToBottom={messages.length ? messages : false}
    bind:this={chatContainer}
>
    <div class=" mx-auto flex flex-col h-full max-w-3xl gap-6 px-5 pt-6 sm:gap-8 xl:max-w-4xl">
        {#each messages as message, i}
            <ChatMessage {message} />
        {/each}
    </div>
    <ScrollToBottomBtn
		class="bottom-36 right-4 max-md:hidden lg:right-10"
		scrollNode={chatContainer}
	/>
</div>