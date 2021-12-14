import React, { useEffect, useState } from "react";
import { JobType } from "../../types/types";
import styles from "./findjobs.module.scss";

function FindJobs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobType[]>([]);

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
          console.log("jobs", jobs);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    <section>
      <p>Loading</p>
    </section>;
  }
  return (
    <div className={styles.FindJobs}>
      <h1>FindJobs</h1>
    </div>
  );
}
export default FindJobs;
