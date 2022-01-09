import React, { useRef } from "react";

import { useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Input, HStack, InputRightAddon, InputGroup } from "@chakra-ui/react";
interface Props {
  searchData: string;
}
function SearchBar({ searchData }: Props) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();
  const handleSearchInput = () => {
    const searchId = searchInputRef.current?.value;

    history.push(`findjobs/${searchId}`);
    // console.log("searchInputRef", searchInputRef.current?.value);
  };

  return (
    <HStack>
      <InputGroup size="sm" p={10}>
        <Input
          ref={searchInputRef}
          placeholder="Search by company or job title"
        />
        <InputRightAddon>
          <BiSearch onClick={handleSearchInput} />
        </InputRightAddon>
      </InputGroup>
    </HStack>
  );
}
export default SearchBar;
