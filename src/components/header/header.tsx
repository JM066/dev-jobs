import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IUserData } from "src/App";
// import { User } from "../../types/types";

import CustomButton from "../button/custom-button";

import styles from "./header.module.scss";

function Header({ currentUser }: { currentUser: IUserData | null }) {
  const [user, setUser] = useState<IUserData | null>({
    id: "",
    displayName: "",
    email: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className={styles.Nav}>
      {!user?.id && !user?.email ? (
        <Link to="/sign-in-and-out" className={styles.ContactLink}>
          Sign-In
        </Link>
      ) : (
        <CustomButton
          noStyle
          onClick={() =>
            setUser({ id: "", email: "", displayName: "", createdAt: null })
          }
        >
          SignOut
        </CustomButton>
      )}
      <Link to="/home" className={styles.AboutLink}>
        Home
      </Link>
      <Link to="/about" className={styles.AboutLink}>
        About Me
      </Link>
      <Link to="/contact" className={styles.ContactLink}>
        Contact Me
      </Link>
    </div>
  );
}
export default Header;
