import type { Handle } from '@sveltejs/kit';
import { isColorMode, isTheme, type ColorScheme, type Theme } from '$lib/types/theme';

export const handle = (async ({ event, resolve }) => {

    // Cookies:
    //     color_mode: select | system
    //     selected_color: light | dark
    //     preferred_color: light | dark

    const colorMode = event.cookies.get('color_mode');
    const selectedColor = event.cookies.get('selected_color');
    const preferredColor = event.cookies.get('preferred_color');

    const colorScheme: ColorScheme = {
        colorMode: "system",
        selectedColor: "light",
        preferredColor: "light",
    };
    if (colorMode !== undefined && isColorMode(colorMode)) {
        colorScheme.colorMode = colorMode;
    }
    if (selectedColor !== undefined && isTheme(selectedColor)) {
        colorScheme.selectedColor = selectedColor;
    }
    if (preferredColor !== undefined && isTheme(preferredColor)) {
        colorScheme.preferredColor = preferredColor;
    }
    event.locals.colorScheme = colorScheme;
    if (colorScheme.colorMode === 'select') {
        const response = await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('class="system"', `class="${colorScheme.selectedColor}"`)
        });
        return response;
    }
    
	const response = await resolve(event);
    return response;
}) satisfies Handle;

process.on('SIGINT', function () { process.exit(); }); // Ctrl+C  
process.on('SIGTERM', function () { process.exit(); }); // docker stop