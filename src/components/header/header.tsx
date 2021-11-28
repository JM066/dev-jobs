import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { User } from "../../types/types";

import Button from "../button/button";

import styles from "./header.module.scss";

function Header() {
  const [user, setUser] = useState({ email: "", password: "" });

  // useEffect(() => {
  //   setUser(currentUser);
  // }, [currentUser]);

  return (
    <div className={styles.Nav}>
      {!user.email && !user.password ? (
        <Link to="/sign-in-and-out" className={styles.ContactLink}>
          Sign-In
        </Link>
      ) : (
        <Button noStyle onClick={() => setUser({ email: "", password: "" })}>
          SignOut
        </Button>
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
