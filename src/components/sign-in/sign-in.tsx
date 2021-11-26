import React, { useState, useEffect } from "react";

import { auth, signInWithGoogle } from "src/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input";
import Button from "../../components/button/button";

interface SignInProps {
  email: string;
  password: string;
}
function SignIn() {
  const [user, setUser] = useState<SignInProps>({ email: "", password: "" });

  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = user;
    console.log("email", email, "pass", password);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <Button type="submit"> Sign in </Button>
        <Button isGoogleSignIn onClick={signInWithGoogle}>
          SignIn with Google
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
