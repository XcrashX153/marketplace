import { Box, SimpleGrid } from "@chakra-ui/react";
import ItemCard from "../ItemsPage/ItemCard";
import { ProductFrame } from "../App";

interface Product {
  products: ProductFrame[];
  addToCart: (product: ProductFrame) => void;
}

const ItemContainer = ({ products, addToCart }: Product) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {products.map((product) => (
        <Box key={product.id}>
          <ItemCard
            title={product.title}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ItemContainer;
