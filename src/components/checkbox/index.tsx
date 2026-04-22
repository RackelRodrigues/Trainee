import styles from "./styles.module.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({ label, name, ...rest }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" name={name} {...rest} />
      {label}
    </label>
  );
}
