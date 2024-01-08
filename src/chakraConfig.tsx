import { extendTheme } from "@chakra-ui/react";

const globalColors = {
	flashWhite:  "#F9F7F7",
	flashLightBlue:  "#DBE2EF",
	flashStrongBlue:  "#3F72AF",
    flashHardBlue:  "#112D4E",
}

export const flashCardsTheme = extendTheme({
	colors: {
		flashWhite: globalColors.flashWhite,
		flashLightBlue: globalColors.flashLightBlue,
		flashStrongBlue: globalColors.flashStrongBlue,
		flashHardBlue: globalColors.flashHardBlue,
	},
})
