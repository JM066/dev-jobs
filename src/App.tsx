import React, { Suspense, lazy, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Layout from "./components/layout/layout";
import PostJobs from "./pages/postjobs/postjobs";
import MyList from "./pages/mylist/mylist";
import Job from "./pages/findjobs/job/job";
import SignInAndOut from "./pages/sign-in-and-out/sign-in-and-out";

import { JobPost } from "./types/types";

const FindJobs = lazy(() => import("./pages/findjobs/findjobs"));

function App() {
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

  return (
    <Layout className="Home">
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      >
        <Switch>
          <Route exact path="/findjobs">
            {jobs && <FindJobs jobs={jobs} />}
          </Route>

          <Route path="/findjobs/:job_name" component={Job} />
          <Route path="/postjobs" component={PostJobs} />
          <Route path="/sign-in-and-out" component={SignInAndOut} />
          <Route path="/mylist" component={MyList} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
