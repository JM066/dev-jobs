import React, { useState } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import { User } from "../../types/types";

const SignUp = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleSubmit = () => {
    setUser({ email: "", password: "" });
  };

  const handleChange = () => {
    setUser({ email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
