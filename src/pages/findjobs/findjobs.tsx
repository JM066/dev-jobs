import React, { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";

import Search from "./search/search";
import { JobPost } from "../../types/types";

function FindJobs() {
  const [jobs, setJobs] = useState<JobPost[]>();

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
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <Stack p={5}>{jobs && <Search jobs={jobs} />}</Stack>;
}
export default FindJobs;
