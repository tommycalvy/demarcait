import type { LayoutServerLoad } from './$types';

export const load = (({ locals }) => {
    return {
        colorScheme: locals.colorScheme
    };
}) satisfies LayoutServerLoad;