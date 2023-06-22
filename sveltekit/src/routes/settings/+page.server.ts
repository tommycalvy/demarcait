import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    return {
        theme: locals.theme
    };
}) satisfies PageServerLoad;