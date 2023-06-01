<script lang="ts">
	import type { Message } from "$lib/types/Message";
    

    export let message: Message;
</script>

{#if message.from == 'assistant'}
    <div class=" w-full bg-surface-100-800-token">
        <div class=" flex justify-start p-4 gap-4">
            {message.content}
        </div>
    </div>
{/if}
{#if message.from == 'user'}
    <div class=" w-full bg-surface-50-900-token">
        <div class=" flex justify-end p-4 gap-4">
            {message.content}
        </div>
    </div>
{/if}
