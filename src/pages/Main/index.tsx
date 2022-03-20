import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

import Chat from "./Chat";
import SignInAndOut from "../SignInAndOut";

function Main() {
  const [user] = useAuthState(auth as any);

  return <div>{user ? <Chat /> : <SignInAndOut />}</div>;
}
export default Main;
