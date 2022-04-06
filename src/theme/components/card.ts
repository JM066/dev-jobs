import { ColorMode } from "../../type";
export const Card = {
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
};
