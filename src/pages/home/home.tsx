import React, { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import styles from "./home.module.scss";
import SignInAndOut from "../../components/sign-in-and-out/sign-in-and-out";

function Home() {
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser({ userAuth });
      }
    });

    return () => {
      console.log("unmounts");
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.Home}>
      <h1>Home Mina Home</h1>
      <SignInAndOut currentUser={currentUser} />
    </div>
  );
}
export default Home;
