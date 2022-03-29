import { extendTheme } from "@chakra-ui/react";
import { ColorMode } from "../type";

interface ThemeConfig {
  initialColorMode: string;
  useSystemColorMode: false;
}
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  styles: {
    global: {
      "*, body": {
        fontSize: "16px",
        borderRadius: "12px",
        boxSizing: "border-box",
        overflowX: "hidden",
      },
      a: {
        outline: "none",
        textDecoration: "none",
      },

      "*, *::before, &::after": {
        borderColor: null,
        wordWrap: "break-word",
        margin: "0",
        padding: "0",
      },
    },
  },
  colors: {
    light: {
      primary: "#3379ce",
      secondary: "#17377b",
      text: "#000",
      background: "#f5f5f5",
      labelText: "#00000080",
      inputBorder: "#00000040",
      backgroundCard: "#fafafa",
    },
    dark: {
      primary: "#3379ce",
      secondary: "#77b0f4",
      text: "#fff",
      background: "#272727",
      labelText: "#ffffff80",
      inputBorder: "#ffffff40",
      backgroundCard: "#212121",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
        borderWidth: 0,
        _focus: {
          outline: "none",
          boxShadow: "none",
        },
      },
      variants: {
        sign: {
          backgroundColor: "light.primary",
          color: "light.backgroundCard",
          _hover: {
            backgroundColor: "#63B3ED",
          },
        },
      },

      defaultProps: null,
    },
    Card: {
      baseStyle: ({ colorMode }: ColorMode) => ({
        width: "100%",
        minHeight: "346px",
        borderRadius: "12px",
        padding: "24px",
        boxShadow:
          colorMode === "dark"
            ? "0 0 20px 5px #ffffff1a"
            : "0 0 20px 5px #0000001a",

        background:
          colorMode === "dark" ? "dark.backgroundCard" : "light.backgroundCard",
      }),
      variants: {
        primary: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0",
          alignItems: "center",
        },
      },
    },
    Input: {
      baseStyle: ({ colorMode }: ColorMode) => ({
        field: {
          _hover: {
            borderColor: "#00000020",
          },
          borderWidth: "1px",
          borderStyle: "solid",
          p: "1",
          borderColor:
            colorMode === "dark" ? "dark.inputBorder" : "light.inputBorder",
          bg: colorMode === "dark" ? "dark.background" : "light.background",
        },
      }),

      defaultProps: null,
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Text: {
      baseStyle: {
        align: "center",
        m: "0",
        fontSize: "0.8rem",
      },
      variants: {
        fontMode: ({ colorMode }: { colorMode: string }) => ({
          color: colorMode === "dark" ? "dark.secondary" : "light.secondary",
        }),
      },
      defaultProps: null,
    },
    Heading: {
      baseStyle: {
        color: "light.text",
        fontSize: "36px",
      },
      variants: {
        fontMode: ({ colorMode }: { colorMode: string }) => ({
          color: colorMode === "dark" ? "light.backgound" : "dark.background",
        }),
      },
      defaultProps: null,
    },
  },
});

export default theme;
