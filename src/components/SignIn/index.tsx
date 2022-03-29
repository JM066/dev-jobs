import React, { useState } from "react";
import { User } from "../../type";

import { ButtonGroup, Stack, Box } from "@chakra-ui/react";

import { auth, signInWithGoogle } from "src/firebase/firebase.utils";
import firebase from "firebase/compat/app";

import CustomButton from "../Button";
import FormInput from "../FormInput";

function SignIn() {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);

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
      h="100%"
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <form onSubmit={(event) => handleSubmit(event)}>
        <Stack spacing="15px">
          <FormInput
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            label="password"
            required
          />
          <ButtonGroup variant="outline" spacing="3">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              SignIn with Google
            </CustomButton>
          </ButtonGroup>
        </Stack>

        <p>{message}</p>
      </form>
    </Box>
  );
}

export default SignIn;
