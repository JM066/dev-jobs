import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import firebase from "./firebase/firebase.utils";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

import Header from "./components/header/header";

function App() {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loggin, setLogging] = useState<boolean>(true);

  const onAuthStateChanged = () => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setLogging(false);
        setCurrentUser(user);
        console.log("user", user);
      } else {
        console.log("the user is not logged in");
      }
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged();

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    console.log("current", currentUser);
  }, [currentUser]);
  return (
    <div className="Home">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Home currentUser={currentUser}></Home>
      </Switch>
    </div>
  );
}

export default App;
