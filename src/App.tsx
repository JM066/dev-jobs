import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Layout from "./components/layout/layout";
import PostJobs from "./pages/postjobs/postjobs";
import MyList from "./pages/mylist/mylist";
import SignInAndOut from "./pages/sign-in-and-out/sign-in-and-out";
const FindJobs = lazy(() => import("./pages/findjobs/findjobs"));

function App() {
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
          <Route path="/findjobs" component={FindJobs} />
          <Route path="/postjobs" component={PostJobs} />
          <Route path="/sign-in-and-out" component={SignInAndOut} />
          <Route path="/mylist" component={MyList} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
