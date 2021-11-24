import React, { useEffect, useState } from "react";

import { signInWithGoogle } from "src/firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

import Button from "../button/button";

function SignInAndOut({ currentUser }: any) {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleSignOut = () => {
    console.log("currentUser.userAuth ", currentUser.userAuth);
    auth.signOut();
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <Button isGoogleSignIn onClick={handleSignOut}>
          Google SignOut
        </Button>
      ) : (
        <Button isGoogleSignIn onClick={signInWithGoogle}>
          Sign In
        </Button>
      )}
    </div>
  );
}

export default SignInAndOut;
