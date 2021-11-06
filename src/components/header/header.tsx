import { Link } from "react-router-dom";
// import { ReactComponent as HamburgerMenu } from "../../assets/icons/hamburger_menu.svg";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.Nav}>
      {/* <div className={styles.Menu}>
        <HamburgerMenu />
      </div> */}

      <Link to="/about" className={styles.AboutLink}>
        About Me
      </Link>
      <Link to="/contact" className={styles.ContactLink}>
        My Work
      </Link>
      <Link to="/contact" className={styles.ContactLink}>
        My Blog
      </Link>
      <Link to="/contact" className={styles.ContactLink}>
        Contact Me
      </Link>
    </div>
  );
}
export default Header;
