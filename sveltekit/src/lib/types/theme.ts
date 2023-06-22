const Themes = ['light', 'dark'] as const;
export type Theme = (typeof Themes)[number];

export function isTheme(value: string): value is Theme {
	return Themes.includes(value as Theme);
}

const ColorModes = ['select', 'system'] as const;
export type ColorMode = (typeof ColorModes)[number];

export function isColorMode(value: string): value is ColorMode {
	return ColorModes.includes(value as ColorMode);
}

export interface ColorScheme {
	colorMode: 		ColorMode;
	selectedColor: 	Theme;
	preferredColor:	Theme;
}
