import "./App.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "./SharedUi/Header";
import Footer from "./Footer/footer";
import ItemContainer from "./SharedUi/ItemContainer";
import { useState } from "react";
import Cart from "./Cart/Cart";

const products: ProductFrame[] = [
  {
    id: 1,
    title: "Colombian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Rich and smooth Colombian coffee.",
    price: "R219.00",
    priceId: "price_1PJYSURso8A332s3C4LYE9wh",
  },
  {
    id: 2,
    title: "Ethiopian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Fruity and floral Ethiopian coffee.",
    price: "R350.00",
    priceId: "price_1PJYOrRso8A332s3zVUCGZhV",
  },
  {
    id: 3,
    title: "Brazilian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Nutty and chocolatey Brazilian coffee.",
    price: "R320.00",
    priceId: "price_1PJYSxRso8A332s3KSNk49YR",
  },
  {
    id: 4,
    title: "Guatemalan Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Bright and complex Guatemalan coffee.",
    price: "R200.00",
    priceId: "price_1PJYTSRso8A332s3PvUzmORk",
  },
  {
    id: 5,
    title: "Costa Rican Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Balanced and clean Costa Rican coffee.",
    price: "R210.00",
    priceId: "price_1PJYTyRso8A332s3M1a13PaW",
  },
  {
    id: 6,
    title: "Sumatra Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Earthy and full-bodied Sumatra coffee.",
    price: "R350.00",
    priceId: "price_1PJYUQRso8A332s3kOLW4QmU",
  },
  {
    id: 7,
    title: "Kenyan Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Bright and winey Kenyan coffee.",
    price: "R360.00",
    priceId: "price_1PJYV1Rso8A332s3dIGxamZX",
  },
  {
    id: 8,
    title: "Honduran Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Sweet and mild Honduran coffee.",
    price: "R180.00",
    priceId: "price_1PJYVfRso8A332s3EBZo8Yk7",
  },
  {
    id: 9,
    title: "Jamaican Blue Mountain",
    imageUrl: "https://via.placeholder.com/150",
    description: "Smooth and rich Jamaican Blue Mountain coffee.",
    price: "R400.00",
    priceId: "price_1PJYWxRso8A332s3L5j2GTy1",
  },
  {
    id: 10,
    title: "Panama Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Delicate and floral Panama coffee.",
    price: "R370.00",
    priceId: "price_1PJYXZRso8A332s3N8hyYnvl",
  },
  {
    id: 11,
    title: "Peruvian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Nutty and sweet Peruvian coffee.",
    price: "R190.00",
    priceId: "price_1PJYY6Rso8A332s3MqCvEYWi",
  },
  {
    id: 12,
    title: "Tanzanian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Bright and citrusy Tanzanian coffee.",
    price: "R390.00",
    priceId: "price_1PJYYeRso8A332s33ECYZTlI",
  },
  {
    id: 13,
    title: "Yemeni Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Spicy and complex Yemeni coffee.",
    price: "R430.00",
    priceId: "price_1PJYZ5Rso8A332s3TOyRSvYe",
  },
  {
    id: 14,
    title: "Nicaraguan Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Smooth and balanced Nicaraguan coffee.",
    price: "R225.00",
    priceId: "price_1PJYZbRso8A332s3EavbzvpT",
  },
  {
    id: 15,
    title: "Mexican Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Sweet and nutty Mexican coffee.",
    price: "R200.00",
    priceId: "price_1PJYa0Rso8A332s3m2Cxg2Xs",
  },
];

export interface ProductFrame {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  priceId: string;
}

function App() {
  const [cartItems, setCartItems] = useState<ProductFrame[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (product: ProductFrame) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Grid
      templateAreas={{
        base: `'header' 'main'`,
        md: `"header header" "main main" "footer footer"`,
        lg: `"header header" "main main" "footer footer"`,
      }}
      templateColumns={{
        base: "100%",
        lg: "200px 1fr",
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr auto",
      }}
      gap={4}
      w="100%"
      minH="100vh"
    >
      <GridItem area="header">
        <Header onOpenCart={onOpen} />
      </GridItem>
      <GridItem area="main">
        <Flex justify="center" align="start" w="100%">
          <Box w="100%" maxW="1200px">
            <ItemContainer products={products} addToCart={addToCart} />
          </Box>
        </Flex>
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>
              <Cart items={cartItems} onRemove={handleRemove} />
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
}

export default App;
