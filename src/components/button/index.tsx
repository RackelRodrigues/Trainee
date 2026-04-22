import { ComponentProps } from "react";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<"button"> {
  variant?: "default" | "primary" | "secondary" | "terciary";
}

const Button = ({ className, variant = "default", ...props }: Props) => {
  return (
    <button
      data-variant={variant}
      className={`${styles.button} ${className ?? ""}`}
      {...props}
    />
  );
};

export default Button;
