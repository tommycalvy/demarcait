import type { Handle } from '@sveltejs/kit';
import { ValidateColorScheme } from '$lib/types/theme';


export const handle = (async ({ event, resolve }) => {

    // color_scheme cookie:
    //     color_mode: select | system
    //     selected_color: light | dark
    //     preferred_color: light | dark

    const colorScheme = ValidateColorScheme(event.cookies.get("color_scheme"));
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