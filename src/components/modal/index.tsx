import styles from "./styles.module.scss";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return <div className={styles.content}>{children}</div>;
}
