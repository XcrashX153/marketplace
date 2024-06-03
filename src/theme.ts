// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: props.colorMode === "dark" ? "brand.900" : "cream.50",
      color: props.colorMode === "dark" ? "cream.50" : "brand.900",
    },
    a: {
      color: props.colorMode === "dark" ? "gold.500" : "gold.700",
      _hover: {
        textDecoration: "underline",
      },
    },
  }),
};

const colors = {
  brand: {
    50: "#f5f2e8",
    100: "#e6dbc2",
    200: "#d4c497",
    300: "#bfa264",
    400: "#b08a48",
    500: "#8d6c3a", // Rich Brown
    600: "#6d512d",
    700: "#4c391f",
    800: "#2e2213",
    900: "#120c07",
  },
  gold: {
    50: "#fffbe5",
    100: "#fef3b2",
    200: "#fde97e",
    300: "#fce04a",
    400: "#fbd624",
    500: "#d4af37", // Warm Gold
    600: "#aa891e",
    700: "#806312",
    800: "#553e09",
    900: "#2c1f04",
  },
  cream: {
    50: "#fffdf2",
    100: "#fff7e0",
    200: "#ffefcc",
    300: "#ffe7b8",
    400: "#ffdf9c",
    500: "#FFDDA0", // Creamy White
    600: "#d4b785",
    700: "#aa9269",
    800: "#806c4c",
    900: "#55472f",
  },
};

const fonts = {
  heading: "Georgia, serif",
  body: "Arial, sans-serif",
};

const components = {
  Button: {
    baseStyle: (props: { colorMode: string }) => ({
      bg: props.colorMode === "dark" ? "brand.700" : "brand.300",
      color: props.colorMode === "dark" ? "cream.50" : "brand.900",
      _hover: {
        bg: props.colorMode === "dark" ? "brand.600" : "brand.400",
      },
    }),
  },
  Input: {
    baseStyle: (props: { colorMode: string }) => ({
      field: {
        bg: props.colorMode === "dark" ? "brand.800" : "cream.100",
        color: props.colorMode === "dark" ? "cream.50" : "brand.900",
      },
    }),
  },
  Modal: {
    baseStyle: (props: { colorMode: string }) => ({
      dialog: {
        bg: props.colorMode === "dark" ? "brand.900" : "cream.50",
        color: props.colorMode === "dark" ? "cream.50" : "brand.900",
      },
    }),
  },
  Card: {
    baseStyle: (props: { colorMode: string }) => ({
      container: {
        bg: props.colorMode === "dark" ? "brand.800" : "cream.50",
        color: props.colorMode === "dark" ? "cream.50" : "brand.900",
        borderColor: props.colorMode === "dark" ? "brand.600" : "cream.200",
        borderWidth: "1px",
        borderRadius: "lg",
        overflow: "hidden",
        p: 4,
      },
    }),
  },
};

const theme = extendTheme({ config, styles, colors, fonts, components });

export default theme;
