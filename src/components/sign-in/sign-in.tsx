import React, { useState, useEffect } from "react";
import { User } from "../../types/types";
import { InputGroup } from "@chakra-ui/react";

import { auth, signInWithGoogle } from "src/firebase/firebase.utils";

import firebase from "firebase/compat/app";

import FormInput from "../../components/form-input/form-input";
import Button from "../../components/button/button";

function SignIn() {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({ email: "", password: "" });
      setMessage("");
    } catch (error) {
      if ((error as Error).name === "FirebaseError") {
        const firebaseError = error as firebase.FirebaseError;
        const errorMessage = firebaseError.message;
        const message = errorMessage.split(" ");
        message.shift();
        message.pop();
        setMessage(message.join(" "));
      }
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <InputGroup size="md">
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
        <p>{message}</p>
      </form>
    </InputGroup>
  );
}

export default SignIn;
