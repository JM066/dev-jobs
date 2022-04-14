import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonGroup, Stack, Box, Button } from "@chakra-ui/react";
import { auth, signInWithGoogle } from "src/firebase/firebase.utils";
import FormInput from "../FormInput";

import { SignInForm } from "../../type";

function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: yupResolver(schema) });

  const onSubmit = async ({ email, password }: SignInForm) => {
    setIsLoading(true);
    try {
      const signedIn = await auth.signInWithEmailAndPassword(email, password);
      signedIn && setIsLoading(false);
      reset();
    } catch (error) {
      console.log(error);
    }
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="15px">
          <FormInput
            type="email"
            name="email"
            label="Email"
            error={errors?.email?.message}
            register={register("email")}
          />

          <FormInput
            type="password"
            label="Password"
            name="password"
            error={errors?.password?.message}
            register={register("password")}
          />
          <ButtonGroup variant="outline" spacing="3">
            <Button variant="primary" type="submit" isLoading={isLoading}>
              Sign in
            </Button>
            <Button variant="secondary" onClick={signInWithGoogle}>
              SignIn with Google
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Box>
  );
}

export default SignIn;
