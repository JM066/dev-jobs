import React, { useEffect, useState } from "react";
import { Stack, HStack } from "@chakra-ui/react";
import { getAllJobs } from "../../firebase/firebase.utils";
import Search from "./Search";
import JobItemPreview from "../../components/JobItemPreview";
import JobItem from "../../components/JobItem";

import { JobPost } from "../../types/types";

function FindJobs() {
  const [jobs, setJobs] = useState<Array<JobPost>>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<JobPost>>([]);
  const [jobDetail, setJobDetail] = useState<JobPost>(jobs[0]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await getAllJobs();
        const jobList = [];
        for (const key in res) {
          const job = {
            id: key,
            ...res[key],
          };
          jobList.push(job);
        }
        setJobs(jobList);
        setFilteredJobs(jobList);
        setJobDetail(jobList[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobs();
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
