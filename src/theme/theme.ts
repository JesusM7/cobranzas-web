import { extendTheme } from "@chakra-ui/react"
import { buttonTheme } from "./button.theme"

export const theme = extendTheme({
    components: {
        Button: buttonTheme,
    },
    colors: {
        primary: {
            "50": "#f7f7f8",
            "100": "#dfe0e2",
            "200": "#c4c6c9",
            "300": "#a3a6aa",
            "400": "#91949a",
            "500": "#797d84",
            "600": "#656a71",
            "700": "#50555d",
            "800": "#424851",
            "900": "#2e343d"
        },
        secondary: {
            "50": "#fef8f8",
            "100": "#fceeee",
            "200": "#fbe2e2",
            "300": "#f7c9c9",
            "400": "#ef9494",
            "500": "#e34646",
            "600": "#a12323",
            "700": "#6a1717",
            "800": "#400e0e",
            "900": "#340b0b"
        },
    },
})