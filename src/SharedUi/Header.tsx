import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <HStack
        marginBottom={2}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Heading> BuyCars</Heading>
        <SearchBar></SearchBar>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Header;
