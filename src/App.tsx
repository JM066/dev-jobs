import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import FindJobs from "./pages/findjobs/findjobs";
import PostJobs from "./pages/postjobs/postjobs";
import MyList from "./pages/mylist/mylist";
import SignInAndOut from "./pages/sign-in-and-out/sign-in-and-out";

function App() {
  return (
    <Layout className="Home">
      <Switch>
        <Route exact path="/findjobs" component={FindJobs} />
        <Route exact path="/postjobs" component={PostJobs} />
        <Route exact path="/sign-in-and-out" component={SignInAndOut} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </Layout>
  );
}

export default App;
