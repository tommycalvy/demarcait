import type { Handle } from '@sveltejs/kit';
import { isTheme } from '$lib/types/theme';

export const handle = (async ({ event, resolve }) => {
    const theme = event.cookies.get('theme');
    if (theme !== undefined && isTheme(theme)) {
        if (theme !== 'system') {
            const response = await resolve(event, {
                transformPageChunk: ({ html }) => html.replace('class="system"', `class="${theme}"`)
            });
            return response;
        }
    }
	const response = await resolve(event);
    return response;
}) satisfies Handle;

process.on('SIGINT', function () { process.exit(); }); // Ctrl+C  
process.on('SIGTERM', function () { process.exit(); }); // docker stop