import React from "react";
import { Flex, HStack } from "@chakra-ui/react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

function SignInAndOut() {
  return (
    <Flex p={10} w="100%" gap={3} justifyContent="space-around">
      <HStack spacing="24px" flexWrap="wrap">
        <SignIn />
        <SignUp />
      </HStack>
    </Flex>
  );
}

export default SignInAndOut;
