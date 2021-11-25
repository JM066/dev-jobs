import styles from "./home.module.scss";
import SignInAndOut from "../../components/sign-in-and-out/sign-in-and-out";

function Home() {
  return (
    <div className={styles.Home}>
      <h1>Home Mina Home</h1>
      <SignInAndOut />
    </div>
  );
}
export default Home;
