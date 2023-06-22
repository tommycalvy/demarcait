import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    return {
        colorScheme: locals.colorScheme
    };
}) satisfies PageServerLoad;