import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Text,
  Divider,
  Heading,
  Spinner,
  Badge,
} from "@chakra-ui/react";
import { JobType } from "../../types/types";
// import styles from "./findjobs.module.scss";

function FindJobs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobType[]>([]);

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
    // <div className={styles.FindJobs}>
    <Stack direction={["column", "row"]} w="100%" p={10} spacing={8}>
      {jobs.map((job, id) => {
        return (
          <Box
            key={id}
            maxW="lg"
            w="100%"
            borderWidth="1px"
            borderadius="lg"
            p="6"
          >
            <Heading as="h3" size="lg">
              {job.companyName}
            </Heading>
            <Badge colorScheme="green">{job.title}</Badge>
            <Stack spacing={8}>
              <Text> {job.address}</Text>
              <Text>{job.aboutJob}</Text>
              <Divider orientation="horizontal" />
              <Text>{job.responsibilities}</Text>
              <Text>{job.preferences}</Text>
            </Stack>
          </Box>
        );
      })}
    </Stack>
    // </div>
  );
}
export default FindJobs;
