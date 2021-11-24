import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import firebase from "./firebase/firebase.utils";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

import Header from "./components/header/header";

function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loggin, setLogging] = useState<boolean>(true);

  const unsubscribe = (isUnsubscribed: boolean) => {
    if (isUnsubscribed) {
      setCurrentUser(null);
      return null;
    } else {
      return auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef?.onSnapshot((snapShot) => {
            console.log("snapshot.data", snapShot);
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
      });
    }
  };
  // const onAuthStateChanged = () => {
  //   return auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setLogging(false);
  //       setCurrentUser(user);
  //       console.log("user", user);
  //     } else {
  //       console.log("the user is not logged in");
  //     }
  //   });
  // };
  useEffect(() => {
    unsubscribe(false);
    // const unsubscribe = onAuthStateChanged();

    return () => {
      unsubscribe(true);
    };
  }, []);
  useEffect(() => {
    console.log("current", currentUser);
  }, [currentUser]);

  return (
    <div className="Home">
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Home currentUser={currentUser}></Home>
    </div>
  );
}

export default App;
