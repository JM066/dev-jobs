export const Button = {
  baseStyle: {
    fontWeight: "normal",
    borderWidth: 0,
    color: "#FFFFFF",
    padding: "10px",
    _focus: {
      outline: "none",
      boxShadow: "none",
    },
  },
  variants: {
    primary: {
      backgroundColor: "light.primary",
      _hover: {
        backgroundColor: "#4FD1C5",
      },
    },
    secondary: {
      backgroundColor: "light.secondary",
      _hover: {
        backgroundColor: "#63B3ED",
      },
    },
    tertiary: {
      backgroundColor: "light.tertiary",
      _hover: {
        backgroundColor: "#718096",
      },
    },
    default: {
      backgroundColor: "light.default",
      _hover: {
        backgroundColor: "#718096",
      },
    },
  },

  defaultProps: null,
};
