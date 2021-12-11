import React, { useState, useEffect } from "react";

import { Stack, Box } from "@chakra-ui/react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import CustomButton from "../button/custom-button";
import FormInput from "../form-input/form-input";

import { User } from "../../types/types";
import styles from "./sign-up.module.scss";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState<User>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = currentUser;
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setCurrentUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentUser((prevState) => ({
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
      <form onSubmit={handleSubmit}>
        <Stack spacing="14px">
          <FormInput
            type="text"
            name="displayName"
            id="displayName"
            value={currentUser.displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            value={currentUser.email}
            onChange={handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            value={currentUser.password}
            onChange={handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={currentUser.confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
        </Stack>

        <CustomButton type="submit" className={styles.SignUpButton}>
          Sign Up
        </CustomButton>
      </form>
    </Box>
  );
};

export default SignUp;
