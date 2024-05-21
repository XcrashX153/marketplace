import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack alignItems={"end"}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "dark mode" : "light mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
