import React, { useEffect, useState } from "react";
import { Stack, Spinner, Box } from "@chakra-ui/react";

import { JobPost } from "../../types/types";

import JobItem from "./jobItem/jobitem";

function FindJobs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobPost[]>([]);

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
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    <section>
      <Spinner />
    </section>;
  }
  return (
    <Stack direction={["column", "row"]} w="100%" p={10} spacing={8}>
      {jobs.map((job) => {
        return (
          <Box
            key={job.id}
            maxW="lg"
            w="100%"
            borderWidth="1px"
            borderadius="lg"
            p="6"
          >
            <JobItem key={job.id} post={job} />
          </Box>
        );
      })}
    </Stack>
  );
}
export default FindJobs;
