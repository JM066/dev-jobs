import React, { useState, useEffect } from "react";
import { User } from "../../types/types";

import { ButtonGroup, Stack, Box } from "@chakra-ui/react";

import { auth, signInWithGoogle } from "src/firebase/firebase.utils";

import firebase from "firebase/compat/app";

import CustomButton from "../button/custom-button";
import FormInput from "../form-input/form-input";

import styles from "./sign-in.module.scss";

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
    <Box
      p={10}
      maxW="lg"
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <form onSubmit={(event) => handleSubmit(event)}>
        <Stack spacing="14px">
          <FormInput
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            label="password"
            required
          />
        </Stack>

        <ButtonGroup
          variant="outline"
          spacing="10"
          className={styles.SignInButtons}
        >
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            SignIn with Google
          </CustomButton>
        </ButtonGroup>

        <p>{message}</p>
      </form>
    </Box>
  );
}

export default SignIn;
