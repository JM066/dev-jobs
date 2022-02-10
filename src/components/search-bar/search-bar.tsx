import React from "react";

import { Input, Stack, Button, HStack, Box, Text } from "@chakra-ui/react";
// import { JobPost } from "../../types/types";
// import CustomButton from "../button/custom-button";

import { BiSearch } from "react-icons/bi";
type CompanyName = string;
interface Props {
  search: string;
  matches: CompanyName[];
  handleSearchInput: (searchItem: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  selectSearchItem: (selectItem: string) => void;
}

function SearchBar({
  search,
  matches,
  handleSearchInput,
  handleSubmit,
  selectSearchItem,
}: Props) {
  // const [search, setSearch] = useState<string>("");
  // const [matches, setMatches] = useState<CompanyName[]>([]);
  // useEffect(() => {
  //   const filtered: CompanyName[] = [];
  //   if (search.length > 0) {
  //     jobs.forEach((job) => {
  //       const regex = new RegExp(search, "gi");
  //       if (job.companyName.toLowerCase().match(regex)) {
  //         return filtered.push(job.companyName);
  //       }
  //       if (job.title.toLowerCase().match(regex)) {
  //         if (!filtered.includes(job.title)) {
  //           filtered.push(job.title);
  //         }
  //       }
  //     });
  //   }
  //   setMatches(filtered);
  // }, [search]);

  // useEffect(() => {
  //   console.log("matches", matches);
  // }, [matches]);
  // const selectSearchItem = (item: string) => {
  //   setSearch(item);
  // };

  // const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setMatches([]);
  //   handleSubmit();
  // };
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
        {matches.length > 0 && (
          <Box borderWidth="1px" p={2} mt={1}>
            {matches?.map((item, index) => (
              <Text key={index} onClick={() => selectSearchItem(item)}>
                {item}
              </Text>
            ))}
          </Box>
        )}
      </form>
    </Stack>
  );
}
export default SearchBar;
