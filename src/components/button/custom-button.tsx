import React from "react";
import classNames from "classnames";
import { Button } from "@chakra-ui/react";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  round?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  noStyle?: boolean;
}
function CustomButton({
  round,
  children,
  isGoogleSignIn,
  noStyle,
  ...props
}: ButtonProps) {
  if (noStyle) {
    return (
      <button className={styles.ButtonNoStyle} {...props}>
        {children}
      </button>
    );
  }
  return (
    <Button
      colorScheme="teal"
      variant="solid"
      className={classNames(styles.Button, {
        [styles.round]: round,
        [styles.isGoogleSignIn]: isGoogleSignIn,
      })}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
