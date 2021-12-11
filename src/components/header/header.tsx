import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../../types/types";

import CustomButton from "../button/custom-button";

import styles from "./header.module.scss";

function Header({ currentUser }: { currentUser: UserData | null }) {
  const [user, setUser] = useState<UserData | null>({
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
        <Link to="/sign-in-and-out" className={styles.Link}>
          Sign-In
        </Link>
      ) : (
        <CustomButton
          className={styles.Link}
          noStyle
          onClick={() =>
            setUser({ id: "", email: "", displayName: "", createdAt: null })
          }
        >
          SignOut
        </CustomButton>
      )}
      <Link to="/findjobs" className={styles.Link}>
        Find Jobs
      </Link>
      <Link to="/postjobs" className={styles.Link}>
        Post Jobs
      </Link>
      <Link to="/myapplications" className={styles.Link}>
        My Applications
      </Link>
    </div>
  );
}
export default Header;
