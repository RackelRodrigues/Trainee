import styles from "./styles.module.scss";
import { ComponentProps } from "react";

interface ContextProps extends ComponentProps<"div"> {
  isError?: boolean;
}
export function Root({ isError, ...props }: ContextProps) {
  return (
    <div
      data-error={isError ? "true" : "false"}
      className={styles.Container}
      {...props}
    >
      {props.children}
    </div>
  );
}
interface InputProps extends ComponentProps<"input"> {}
export function Field({ ...props }: InputProps) {
  return <input className={`${styles.input}`} {...props} />;
}
