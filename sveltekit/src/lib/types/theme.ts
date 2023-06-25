import { z } from "zod";

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

const ColorSchemeData = z.object({
	colorMode: z.enum(ColorModes),
	selectedColor: z.enum(Themes),
	preferredColor: z.enum(Themes),
})

export function ValidateColorScheme(inputs: object | string | undefined): ColorScheme {
	try {
		if (typeof inputs === 'object') {
			return ColorSchemeData.parse(inputs);
		} else if (typeof inputs === 'string') {
			return ColorSchemeData.parse(JSON.parse(inputs));
		} else {
			throw "Need string or object type";
		}
	} catch(error) {
		console.log(error);
		const colorScheme: ColorScheme = {
			colorMode: "system",
			selectedColor: "light",
			preferredColor: "light",
		}
		return colorScheme;
	}
}
