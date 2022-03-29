import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Layout from "./components/Layout";
import PostJobs from "./pages/PostJobs";
import MyList from "./pages/MyList";
import Main from "./pages/Main";
import SignInAndOut from "./pages/SignInAndOut";

const FindJobs = lazy(() => import("./pages/FindJobs"));

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
          <Route exact path="/" component={Main} />
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
