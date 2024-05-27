import { Box, Button, HStack, VStack, Image, Text } from "@chakra-ui/react";
import { ProductFrame } from "../App";
import { MdDeleteForever } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";

interface CartProps {
  items: ProductFrame[];
  onRemove: (id: number) => void;
}

const stripePromise = loadStripe(
  "pk_test_51P9N6dRso8A332s3ILj8T0wPjp9ykjk6v5Tp9qJEOPJpDmUrTAPa5RUL0EJVWShdX5gyl6WCQtdiaYf68aY92gYR00TnJZoJ3P"
);

const Cart = ({ items, onRemove }: CartProps) => {
  const totalPrice = items.reduce(
    (total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, "")),
    0
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) {
      console.error("Stripe failed to load.");
      return;
    }

    const lineItems = items.map((item) => ({
      price: item.priceId,
      quantity: 1,
    }));

    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel",
    });

    if (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  return (
    <Box>
      {items.map((item) => (
        <Box
          key={item.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mb={4}
        >
          <HStack spacing={4} align="start">
            <Image src={item.imageUrl} alt={item.title} boxSize="150px" />
            <VStack align="start" spacing={2} flex="1">
              <Text fontWeight="bold">{item.title}</Text>
              <Text>{item.description}</Text>
              <Text fontWeight="bold">{item.price}</Text>
            </VStack>
            <Button colorScheme="red" onClick={() => onRemove(item.id)}>
              <MdDeleteForever />
            </Button>
          </HStack>
        </Box>
      ))}
      <Box mt={4} textAlign="right">
        <Text fontWeight="bold" fontSize="lg">
          Total: R{totalPrice.toFixed(2)}
        </Text>
        <Button mt={2} colorScheme="teal" onClick={handleCheckout}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
