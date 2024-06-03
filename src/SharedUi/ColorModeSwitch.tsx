// ColorModeSwitch.tsx
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      borderRadius={60}
    />
  );
};

export default ColorModeSwitch;
