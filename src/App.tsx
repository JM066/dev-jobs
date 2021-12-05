import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

// import { User } from "./types/types";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import SignInAndOut from "./pages/sign-in-and-out/sign-in-and-out";

import Header from "./components/header/header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

export interface IUserData {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date | null;
}
function App() {
  const [currentUser, setCurrentUser] = useState<IUserData | null>({
    id: "",
    displayName: "",
    email: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    console.log("currentUser currentUser", currentUser);
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      console.log("userAuth", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          const userInfo = snapShot.data() as IUserData;
          console.log("snapShot", userInfo);
          setCurrentUser({
            ...userInfo,
          });
        });
      } else {
        setCurrentUser(userAuth);
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
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in-and-out" component={SignInAndOut} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
