import React, { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

import Chat from "./Chat";
import SignInAndOut from "../SignInAndOut";

function Main() {
  const [user, setUser] = useState<string>();
  // const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("uid", uid);
      setUser(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  // const [user] = useAuthState(auth as any);

  return <div>{user ? <Chat /> : <SignInAndOut />}</div>;
}
export default Main;
