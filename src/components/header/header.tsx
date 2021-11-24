import { Link } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.Nav}>
      <Link to="/home" className={styles.ContactLink}>
        Sign-In
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
