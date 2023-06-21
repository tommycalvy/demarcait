const allThemes = ['light', 'dark', 'system'] as const;
export type Theme = (typeof allThemes)[number];

export function isTheme(value: string): value is Theme {
	return allThemes.includes(value as Theme);
}
