import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
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
  },
  fonts: {
    heading: "Georgia, serif",
    body: "Arial, sans-serif",
  },
});

export default theme;
