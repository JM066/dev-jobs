import React, { useEffect, useState } from "react";

import Header from "../header/header";

import { UserData } from "../../types/types";

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
    console.log("currentUser currentUser", currentUser);
  }, [currentUser]);

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
    <div>
      <Header currentUser={currentUser} />
      {children}
    </div>
  );
}

export default Layout;
