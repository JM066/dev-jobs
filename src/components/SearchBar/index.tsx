import React from "react";
import { Input, Stack, Button, HStack } from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";

interface Props {
  search: string;
  handleSearchInput: (searchItem: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBar({
  search,

  handleSearchInput,
  handleSubmit,
}: Props) {
  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input
            value={search}
            onChange={(event) => handleSearchInput(event.target.value)}
            placeholder="Search by company or job title"
          />
          <Button size="md" type="submit">
            <BiSearch />
          </Button>
        </HStack>
      </form>
    </Stack>
  );
}
export default SearchBar;
