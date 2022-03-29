import React, { useEffect, useState } from "react";
import { Stack, Spinner, Box, Text } from "@chakra-ui/react";

import Filter from "../filter/filter";

import SearchBar from "../../../components/search-bar/search-bar";
import { JobPost } from "../../../type";

type JobType = {
  jobs: JobPost[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<JobPost[]>>;
  setJobDetail: React.Dispatch<React.SetStateAction<JobPost>>;
};

function Search({ jobs, setFilteredJobs, setJobDetail }: JobType) {
  const [search, setSearch] = useState<string>("");
  const [matches, setMatches] = useState<string[]>([]);

  useEffect(() => {
    const filtered: string[] = [];
    if (search.length > 0) {
      jobs.forEach((job) => {
        const regex = new RegExp(search, "gi");
        if (job.companyName.toLowerCase().match(regex)) {
          return filtered.push(job.companyName);
        }
        if (job.title.toLowerCase().match(regex)) {
          if (!filtered.includes(job.title)) {
            filtered.push(job.title);
          }
        }
      });
    }

    setMatches(filtered);
  }, [search]);

  const handleSearchInput = (searchItem: string) => {
    setSearch(searchItem);
  };

  const selectSearchItem = (selectItem: string) => {
    setSearch(selectItem);
  };

  if (!jobs) {
    <section>
      <Spinner />
    </section>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const item = search.toLowerCase();
    const filtered = jobs.filter(
      (job) =>
        job.companyName.toLowerCase() === item ||
        job.title.toLowerCase() === item
    );

    setFilteredJobs(filtered);
    setJobDetail(filtered[0]);
    setSearch("");
  };

  return (
    <Stack p={5}>
      <Box>
        <SearchBar
          search={search}
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
        />
        {matches.length > 0 && (
          <Box borderWidth="1px" p={2} mt={1}>
            {matches?.map((item, index) => (
              <Text key={index} onClick={() => selectSearchItem(item)}>
                {item}
              </Text>
            ))}
          </Box>
        )}
        <Stack p={5}>
          <Filter />
        </Stack>
      </Box>
    </Stack>
  );
}
export default Search;
