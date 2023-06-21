// See https://kit.svelte.dev/docs/types#app

import type { Theme } from "$lib/types/theme";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
