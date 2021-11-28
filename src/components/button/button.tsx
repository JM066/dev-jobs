import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  round?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  noStyle?: boolean;
}
function Button({
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
    <button
      className={classNames(styles.Button, {
        [styles.round]: round,
        [styles.isGoogleSignIn]: isGoogleSignIn,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
