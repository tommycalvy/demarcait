import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    switch (param) {
        case 'edit': {
            return true;
        }
        default: {
            return false;
        }
    }
}) satisfies ParamMatcher;