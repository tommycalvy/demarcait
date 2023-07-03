import type { RequestHandler } from './$types';
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";
import { OPENAI_API_KEY } from '$env/static/private';

const chat = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
    maxTokens: 25,
    streaming: true,
});

export const POST = (async ({ request }) => {
    const json = await request.json();

    const ac = new AbortController();

    const stream = new ReadableStream({
        start(controller) {
            (async () => {
                const response = await chat.call(
                    [new HumanChatMessage("Tell me a joke.")],
                    undefined,
                    [
                        {
                            handleLLMNewToken(token: string) {
                                controller.enqueue(String(token));
                            },
                        },
                    ]
                );
            })().catch(err => console.error(err));
        },
        cancel() {
            ac.abort();
        },
    });
    return new Response();
}) satisfies RequestHandler;
