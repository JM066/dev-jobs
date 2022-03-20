import React from "react";
import { Stack, Flex } from "@chakra-ui/react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

function SignInAndOut() {
  return (
    <Flex
      p={10}
      w="100%"
      flexWrap="wrap"
      height="100%"
      display="flex"
      justifyContent="space-around"
    >
      <Stack w={"45%"} h={"100%"}>
        <SignIn />
      </Stack>
      <Stack w={"45%"} h={"100%"}>
        <SignUp />
      </Stack>
    </Flex>
  );
}

export default SignInAndOut;
