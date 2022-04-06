import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Input } from "./components/input";
import { Link } from "./components/link";
import { Text } from "./components/text";
import { Heading } from "./components/heading";

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
  styles,
  colors: {
    light: {
      primary: "#319795",
      secondary: "#3182CE",
      tertiary: "#A0AEC0",
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
    Button,
    Card,
    Input,
    Link,
    Text,
    Heading,
  },
});

export default theme;
