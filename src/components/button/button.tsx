import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  round?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
}
function Button({ round, children, isGoogleSignIn, ...props }: ButtonProps) {
  // console.log("props", props);
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
