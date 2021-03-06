import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import Header from "../Header";

import { UserData } from "../../type";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

interface LayoutProps {
  children: React.ReactNode;
  className: string;
}
function Layout({ children }: LayoutProps) {
  const [currentUser, setCurrentUser] = useState<UserData | null>({
    id: "",
    displayName: "",
    email: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      console.log("userAuth", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          const userInfo = snapShot.data() as UserData;
          setCurrentUser({
            ...userInfo,
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      console.log("unmounts");
      unsubscribe();
    };
  }, []);

  return (
    <Stack h={"100%"}>
      <Header currentUser={currentUser} />
      {children}
    </Stack>
  );
}

export default Layout;
