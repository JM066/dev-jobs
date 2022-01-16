import React from "react";
import { Stack, Flex } from "@chakra-ui/react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

function SignInAndOut() {
  return (
    <Flex p={10} w={"100%"} wrap="wrap" justify={"center"}>
      <Stack p={5}>
        <SignIn />
      </Stack>
      <Stack p={5}>
        <SignUp />
      </Stack>
    </Flex>
  );
}

export default SignInAndOut;
