import React, { useRef } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Input, HStack, InputRightAddon, InputGroup } from "@chakra-ui/react";
interface Props {
  searchData: string;
}
function SearchBar({ searchData }: Props) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();
  const { pathname } = useLocation();
  // const { job_name } = useParams<Record<string, string | undefined>>();

  const handleSearchInput = () => {
    const searchId = searchInputRef.current?.value;
    if (searchId) {
      history.replace(`${pathname}/${searchId}`);
    }
  };

  return (
    <HStack>
      <InputGroup size="sm">
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
