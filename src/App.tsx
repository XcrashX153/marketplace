import "./App.css";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "./SharedUi/Header";
import Footer from "./Footer/footer";
import ItemContainer from "./SharedUi/ItemContainer";

const products = [
  {
    id: 1,
    title: "Colombian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Rich and smooth Colombian coffee.",
    price: "$19.99",
  },
  {
    id: 2,
    title: "Ethiopian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Fruity and floral Ethiopian coffee.",
    price: "$24.99",
  },
  {
    id: 3,
    title: "Brazilian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Nutty and chocolatey Brazilian coffee.",
    price: "$22.99",
  },
  {
    id: 4,
    title: "Guatemalan Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Bright and complex Guatemalan coffee.",
    price: "$20.99",
  },
  {
    id: 5,
    title: "Costa Rican Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Balanced and clean Costa Rican coffee.",
    price: "$21.99",
  },
  {
    id: 6,
    title: "Sumatra Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Earthy and full-bodied Sumatra coffee.",
    price: "$23.99",
  },
  {
    id: 7,
    title: "Kenyan Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Bright and winey Kenyan coffee.",
    price: "$25.99",
  },
  {
    id: 8,
    title: "Honduran Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Sweet and mild Honduran coffee.",
    price: "$18.99",
  },
  {
    id: 9,
    title: "Jamaican Blue Mountain",
    imageUrl: "https://via.placeholder.com/150",
    description: "Smooth and rich Jamaican Blue Mountain coffee.",
    price: "$29.99",
  },
  {
    id: 10,
    title: "Panama Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Delicate and floral Panama coffee.",
    price: "$26.99",
  },
  {
    id: 11,
    title: "Peruvian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Nutty and sweet Peruvian coffee.",
    price: "$19.99",
  },
  {
    id: 12,
    title: "Tanzanian Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Bright and citrusy Tanzanian coffee.",
    price: "$24.99",
  },
  {
    id: 13,
    title: "Yemeni Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Spicy and complex Yemeni coffee.",
    price: "$27.99",
  },
  {
    id: 14,
    title: "Nicaraguan Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Smooth and balanced Nicaraguan coffee.",
    price: "$21.99",
  },
  {
    id: 15,
    title: "Mexican Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Sweet and nutty Mexican coffee.",
    price: "$20.99",
  },
  {
    id: 16,
    title: "Hawaiian Kona Coffee",
    imageUrl: "https://via.placeholder.com/150",
    description: "Smooth and delicate Hawaiian Kona coffee.",
    price: "$34.99",
  },
];

export interface ProductFrame {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

function App() {
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
        <Header />
      </GridItem>
      <GridItem area="main">
        <Flex justify="center" align="start" w="100%">
          <Box w="100%" maxW="1200px">
            <ItemContainer products={products} />
          </Box>
        </Flex>
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
