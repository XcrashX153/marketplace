import { Button, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { TiShoppingCart } from "react-icons/ti";
import logo from "../assets/737bcc82-991d-4bd8-8643-60f7f87f4fb6.webp";

interface Props {
  onOpenCart: () => void;
}

const Header = ({ onOpenCart: onOpenCrart }: Props) => {
  return (
    <>
      <HStack
        marginBottom={2}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Image src={logo} boxSize={"60px"} borderRadius={60}></Image>
        <SearchBar></SearchBar>
        <ColorModeSwitch />
        <Button borderRadius={60} onClick={onOpenCrart}>
          <TiShoppingCart />
        </Button>
      </HStack>
    </>
  );
};

export default Header;
