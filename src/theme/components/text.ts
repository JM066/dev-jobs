export const Text = {
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
};
