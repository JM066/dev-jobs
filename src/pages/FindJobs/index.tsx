import React, { useEffect, useState } from "react";
import { Stack, HStack } from "@chakra-ui/react";
import { getAllJobs } from "../../firebase/firebase.utils";
import Search from "./Search";
import JobItemPreview from "../../components/JobItemPreview";
import JobItem from "../../components/JobItem";

import { JobPostState } from "../../type";

function FindJobs() {
  const [jobs, setJobs] = useState<Array<JobPostState>>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<JobPostState>>([]);
  const [jobSelected, setJobSelected] = useState<JobPostState>(jobs[0]);
  const [postDetail, setPostDetail] = useState<JobPostState>();

  useEffect(() => {
    async function fetchJobs() {
      try {
        const jobList = await getAllJobs();
        setJobs(jobList);
        setFilteredJobs(jobList);
        setJobSelected(jobList[0]);
        console.log("jobs", jobs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobs();
  }, []);

  useEffect(() => {
    setPostDetail(jobSelected);
  }, [jobSelected]);

  return (
    <Stack p={5}>
      {jobs && filteredJobs && (
        <Search
          jobs={jobs}
          setFilteredJobs={setFilteredJobs}
          setJobDetail={setJobSelected}
        />
      )}
      <HStack spacing={5} align="start" justify="start">
        <Stack w={"40%"}>
          {filteredJobs?.map((job) => {
            return (
              <JobItemPreview
                key={job.id}
                post={job}
                showDetail={setJobSelected}
              />
            );
          })}
        </Stack>
        <Stack w={"60%"}>{postDetail && <JobItem post={postDetail} />}</Stack>
      </HStack>
    </Stack>
  );
}
export default FindJobs;
