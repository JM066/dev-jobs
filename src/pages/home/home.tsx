import { Link } from "react-router-dom";
import { auth } from "src/firebase/firebase.utils";
import SignIn from "../../components/sign-in/sign-in";
import styles from "./home.module.scss";

function Home({ currentUser }: any) {
  console.log("user", currentUser);
  return (
    <div className={styles.Home}>
      <h1>Home Mina Home</h1>
      <SignIn />

      {currentUser ? (
        <div onClick={() => auth.signOut()}>Google SignOut</div>
      ) : (
        <Link to="/about"></Link>
      )}
    </div>
  );
}
export default Home;
