import type { Handle } from '@sveltejs/kit';
import { isColorMode, isTheme } from '$lib/types/theme';

export const handle = (async ({ event, resolve }) => {

    // Cookies:
    //     color_mode: select | system
    //     selected_color: light | dark
    //     preferred_color: light | dark

    const colorMode = event.cookies.get('color_mode');
    const selectedColor = event.cookies.get('selected_color');
    const preferredColor = event.cookies.get('preferred_color');

    if (colorMode !== undefined && isColorMode(colorMode)) {
        if (colorMode === 'select') {
            
        }
    }

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