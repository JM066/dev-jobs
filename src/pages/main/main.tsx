import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

import Chat from "./chat/chat";
import SignInAndOut from "../sign-in-and-out/sign-in-and-out";

function Main() {
  const [user] = useAuthState(auth as any);

  return <div>{user ? <Chat /> : <SignInAndOut />}</div>;
}
export default Main;
