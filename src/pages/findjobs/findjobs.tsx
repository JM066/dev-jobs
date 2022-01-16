import React, { useEffect, useState } from "react";

import { Stack, Spinner, Box, CheckboxGroup, HStack } from "@chakra-ui/react";

import { JobPost } from "../../types/types";

import CustomCheckBox from "../../components/custom-checkbox/custom-checkbox";
import SearchBar from "../../components/search-bar/search-bar";
import JobItemPreview from "../../components/jobItem-preview/jobItem-preview";
import JobItem from "../../components/jobItem/jobitem";

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
function FindJobs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [jobDetail, setJobDetail] = useState<JobPost>();
  useEffect(() => {
    console.log("jobs", jobs);
  }, [jobs]);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch("https://my-project-c37fd-default-rtdb.firebaseio.com/jobpost.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const jobList = [];
          for (const key in data) {
            console.log("key", key);
            const job = {
              id: key,
              ...data[key],
            };
            jobList.push(job);
          }

          setIsLoading(false);
          setJobs(jobList);
          setJobDetail(jobList[0]);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showDetail = (post: JobPost) => {
    setJobDetail(post);
  };
  if (isLoading) {
    <section>
      <Spinner />
    </section>;
  }
  return (
    <Stack p={5}>
      <Box>
        <SearchBar searchData={"search"} />
        <Stack p={5}>{PositionCheckBox()}</Stack>
      </Box>
      <HStack spacing={5} align="start" justify="start">
        <Stack w={"40%"}>
          {jobs.map((job) => {
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
export default FindJobs;
