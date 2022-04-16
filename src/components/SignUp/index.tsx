import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, Box, Button } from "@chakra-ui/react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../../components/Form/FormInput";

import { SignUpForm } from "../../type";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    displayName: yup
      .string()
      .max(12, "User name must be less than 12 characters")
      .required("User name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    passwordConfirm: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: SignUpForm) => {
    const { displayName, email, password } = data;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const signedUp = await createUserProfileDocument(user, { displayName });
      signedUp && setIsLoading(false);
      reset();
    } catch (error) {
      console.log("error", error);
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
        <Stack spacing={4}>
          <FormInput
            type="text"
            name="name"
            label="Name"
            error={errors?.displayName?.message}
            register={register("displayName")}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            error={errors?.email?.message}
            register={register("email")}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            error={errors?.password?.message}
            register={register("password")}
          />
          <FormInput
            type="password"
            name="passwordConfirm"
            label="PasswordConfirm"
            error={errors?.passwordConfirm?.message}
            register={register("passwordConfirm")}
          />

          <Button variant="primary" type="submit" isLoading={isLoading}>
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SignUp;
