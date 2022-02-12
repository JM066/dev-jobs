import React, { useEffect, useState } from "react";

import { Stack, Spinner, Box, CheckboxGroup, HStack } from "@chakra-ui/react";

import { JobPost } from "../../../types/types";

import CustomCheckBox from "../../../components/custom-checkbox/custom-checkbox";
import SearchBar from "../../../components/search-bar/search-bar";
import JobItemPreview from "../../../components/jobItem-preview/jobItem-preview";
import JobItem from "../../../components/jobItem/jobitem";

function PositionCheckBox() {
  const POSITIONS = [
    { id: "build-engineer", title: "Build Engineer" },
    { id: "release-manager", title: "Release Manager" },
    { id: "product-manager", title: "Product Manager" },
    { id: "frontend", title: "Front End Developer" },
    { id: "backend", title: "Back End Developer " },
    { id: "security-engineer", title: "Security Engineer" },
  ];
  return (
    <CheckboxGroup colorScheme="green" defaultValue={["build-engineer"]}>
      <HStack spacing="24px">
        <Box w="100%" pl={10}>
          {POSITIONS.map((position, i: number) => (
            <CustomCheckBox key={i} items={position} />
          ))}
        </Box>
      </HStack>
    </CheckboxGroup>
  );
}

type CompanyName = string;
type JobType = { jobs: JobPost[] };

function Search({ jobs }: JobType) {
  const [search, setSearch] = useState<string>("");
  const [matches, setMatches] = useState<CompanyName[]>([]);

  const [filteredJobs, setFilteredJobs] = useState<JobPost[]>(jobs);
  const [jobDetail, setJobDetail] = useState<JobPost>(jobs[0]);

  useEffect(() => {
    const filtered: CompanyName[] = [];
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

  const showDetail = (post: JobPost) => {
    setJobDetail(post);
  };

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
          matches={matches}
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
          selectSearchItem={selectSearchItem}
        />
        <Stack p={5}>{PositionCheckBox()}</Stack>
      </Box>
      <HStack spacing={5} align="start" justify="start">
        <Stack w={"40%"}>
          {filteredJobs.map((job) => {
            return (
              <JobItemPreview key={job.id} post={job} showDetail={showDetail} />
            );
          })}
        </Stack>
        <Stack w={"60%"}>{jobDetail && <JobItem post={jobDetail} />}</Stack>
      </HStack>
    </Stack>
  );
}
export default Search;
