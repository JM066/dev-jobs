import React, { useEffect, useState } from "react";

import SignIn from "../../components/sign-in/sign-in";
import { auth } from "../../firebase/firebase.utils";
import Button from "../../components/button/button";
import FormInput from "../../components/form-input/form-input";
import styles from "./home.module.scss";

interface SignInProps {
  // email: string;
  // password: string;
}

function Home({ currentUser }: any) {
  const [loginUser, setLoginUser] = useState<{}>();

  useEffect(() => {
    console.log("loginUser", loginUser);
  }, [loginUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginUser({ [name]: value });
  };

  const handleSignOut = () => {
    console.log("clicked");
    auth.signOut();
  };
  return (
    <div className={styles.Home}>
      <h1>Home Mina Home</h1>
      <FormInput name="email" label="enter email" handleChange={handleChange} />
      {currentUser ? (
        <Button isGoogleSignIn onClick={handleSignOut}>
          Google SignOut
        </Button>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
export default Home;
