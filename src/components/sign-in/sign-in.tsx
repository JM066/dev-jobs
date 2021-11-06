import { signInWithGoogle } from "src/firebase/firebase.utils";
import Button from "../button/button";

function SignIn() {
  return (
    <div>
      <Button round onClick={signInWithGoogle}>
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;
