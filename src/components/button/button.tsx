import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  round?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}
function Button({ round, children, ...props }: ButtonProps) {
  console.log("props", props);
  return (
    <button
      className={classNames(styles.Button, { [styles.round]: round })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
