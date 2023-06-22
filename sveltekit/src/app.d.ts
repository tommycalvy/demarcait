// See https://kit.svelte.dev/docs/types#app

import type { ColorScheme } from "$lib/types/theme";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			colorScheme: ColorScheme
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
