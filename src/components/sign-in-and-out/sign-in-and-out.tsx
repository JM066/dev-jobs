import React, { useState } from "react";

import { signInWithGoogle } from "src/firebase/firebase.utils";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

interface SignInAndOutProps {
  email?: string;
  password?: string;
}
function SignInAndOut() {
  const [user, setUser] = useState<SignInAndOutProps>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setUser({
      [name]: value,
    });
  };

  return (
    <div>
      <Button isGoogleSignIn onClick={signInWithGoogle}>
        SignIn with Google
      </Button>
      <Button onClick={() => setUser({})}>Google SignOut</Button>

      <Button type="submit"> Sign in </Button>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
          label="password"
          required
        />
      </form>
    </div>
  );
}

export default SignInAndOut;
