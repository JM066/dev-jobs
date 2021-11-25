import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../button/button";

import styles from "./header.module.scss";

function Header({ currentUser, click }: any) {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className={styles.Nav}>
      {!user ? (
        <Link to="/home" className={styles.ContactLink}>
          Sign-In
        </Link>
      ) : (
        <Button onClick={() => setUser(null)}>SignOut</Button>
      )}

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
