export const Heading = {
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
};
