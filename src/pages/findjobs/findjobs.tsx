import React, { useEffect, useState } from "react";

import { Stack, HStack } from "@chakra-ui/react";

import Search from "./search/search";
import JobItemPreview from "../../components/jobItem-preview/jobItem-preview";
import JobItem from "../../components/jobItem/jobitem";

import { JobPost } from "../../types/types";

function FindJobs() {
  const [jobs, setJobs] = useState<Array<JobPost>>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<JobPost>>([]);
  const [jobDetail, setJobDetail] = useState<JobPost>(jobs[0]);

  useEffect(() => {
    try {
      fetch("https://my-project-c37fd-default-rtdb.firebaseio.com/jobpost.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const jobList = [];
          for (const key in data) {
            const job = {
              id: key,
              ...data[key],
            };
            jobList.push(job);
          }
          setJobs(jobList);
          setFilteredJobs(jobList);
          setJobDetail(jobList[0]);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showDetail = (post: JobPost) => {
    setJobDetail(post);
  };

  return (
    <Stack p={5}>
      {jobs && filteredJobs && (
        <Search
          jobs={jobs}
          setFilteredJobs={setFilteredJobs}
          setJobDetail={setJobDetail}
        />
      )}
      <HStack spacing={5} align="start" justify="start">
        <Stack w={"40%"}>
          {filteredJobs?.map((job) => {
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
