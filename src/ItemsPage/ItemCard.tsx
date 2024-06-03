import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";

interface ProductCardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  addToCart: () => void;
}

const ItemCard = ({
  title,
  description,
  price,
  imageUrl,
  addToCart,
}: ProductCardProps) => {
  return (
    <Card borderWidth="5px" borderRadius="lg" overflow="hidden" p={4}>
      <VStack spacing={4}>
        <Box width="100%" height="200px">
          <Image
            src={imageUrl}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
            borderRadius={5}
          />
        </Box>
        <CardBody>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Text>{description}</Text>
            <HStack justify="space-between" w="100%">
              <Text fontWeight="bold">{price}</Text>
              <HStack spacing={2}>
                <Button onClick={addToCart}>Add to Cart</Button>
              </HStack>
            </HStack>
          </VStack>
        </CardBody>
      </VStack>
    </Card>
  );
};

export default ItemCard;
