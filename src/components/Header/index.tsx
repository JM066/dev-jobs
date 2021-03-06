import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "@chakra-ui/react";

import { UserData } from "../../type";

import { SavedPostContext } from "../../store/SavePostContext";

import styles from "./Header.module.scss";

function Header({ currentUser }: { currentUser: UserData | null }) {
  const [user, setUser] = useState<UserData | null>({
    id: "",
    displayName: "",
    email: "",
    createdAt: new Date(),
  });
  const jobContext = useContext(SavedPostContext);
  const total = jobContext?.totalPost;

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
        <Button
          className={styles.Link}
          onClick={() =>
            setUser({ id: "", email: "", displayName: "", createdAt: null })
          }
        >
          SignOut
        </Button>
      )}
      <Link to="/findjobs" className={styles.Link}>
        Find Jobs
      </Link>
      <Link to="/postjobs" className={styles.Link}>
        Post Jobs
      </Link>
      <Link to="/mylist" className={styles.Link}>
        My List
        <Badge colorScheme="purple" ml={2}>
          {total}
        </Badge>
      </Link>
    </div>
  );
}
export default Header;
