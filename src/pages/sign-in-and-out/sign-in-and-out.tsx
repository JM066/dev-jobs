import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import styles from "./sign-in-and-out.module.scss";

function SignInAndOut() {
  return (
    <div className={styles.SignInAndOut}>
      <Flex wrap="wrap" className={styles.SignInAndOutContainer}>
        <SignIn />
        <Spacer />
        <SignUp />
      </Flex>
    </div>
  );
}

export default SignInAndOut;
