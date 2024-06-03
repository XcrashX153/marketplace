import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { ProductFrame } from "../App";

interface Props {
  product: ProductFrame[];
  onSearch: (results: ProductFrame[]) => void;
}

const SearchBar = ({ product, onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) {
      const query = ref.current.value.toLowerCase();
      const filteredProducts = product.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      onSearch(filteredProducts);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search"
          variant={"field"}
          onChange={handleSearch}
        />{" "}
      </InputGroup>
    </form>
  );
};

export default SearchBar;
