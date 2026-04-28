import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import styles from "./styles.module.scss";
import { GoPerson } from "react-icons/go";

interface HeaderProps {
  isCandidate?: boolean;
  username?: string;
  photoUrl?: string;
}

export default function Header({
  isCandidate,
  username,
  photoUrl,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Image
          src={Logo}
          alt="logo trainee"
          className={styles.logoTrainee}
          width={50}
          height={50}
        />
        <h1 className={styles.nameTrainee}>Trainee</h1>
      </div>

      <div>
        {!isCandidate && (
          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Vagas</a>
            <a href="#">Notificações</a>
          </nav>
        )}
      </div>

      <span className={styles.username}>
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={username || "Usuário"}
            className={styles.userPhoto}
            width={32}
            height={32}
          />
        ) : (
          <span className={styles.userIcon}>
            <GoPerson size={25} color="#000" />
          </span>
        )}

        <p>{username || "Rackel Rodrigues"}</p>
      </span>
    </header>
  );
}
