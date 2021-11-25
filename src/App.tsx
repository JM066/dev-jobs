import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

import Header from "./components/header/header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    console.log("currentUser currentUser", currentUser);
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser({ userAuth });
      }
    });

    return () => {
      console.log("unmounts");
      unsubscribe();
    };
  }, []);

  return (
    <div className="Home">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
