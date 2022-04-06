import { ColorMode } from "../../type";
export const Input = {
  baseStyle: ({ colorMode }: ColorMode) => ({
    field: {
      borderWidth: "1px",
      borderStyle: "solid",
      p: "1",
      borderColor:
        colorMode === "dark" ? "dark.inputBorder" : "light.inputBorder",
      bg: colorMode === "dark" ? "dark.background" : "light.background",
    },
  }),

  defaultProps: null,
};
