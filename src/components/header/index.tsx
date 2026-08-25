"use client";

import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import styles from "./styles.module.scss";
import { GoPerson } from "react-icons/go";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const router = useRouter();

  // function handleProfile() {
  //   router.push("/candidate/profilesettings");
  // }

  function handleHome() {
    router.push("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent} onClick={handleHome}>
        <Image
          src={Logo}
          alt="logo trainee"
          className={styles.logoTrainee}
          width={50}
          height={50}
        />
        <h1 className={styles.nameTrainee}>trainee</h1>
      </div>

      <div>
        {isCandidate && (
          <nav className={styles.nav}>
            <Link href="/">Home</Link>

            <Link href="/jobs">Vagas</Link>

            <Link href="/notifications">Notificações</Link>
          </nav>
        )}
      </div>

      <span
        className={styles.username}
        onClick={() => router.push("/candidate/profilesettings")}
      >
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
            <GoPerson size={25} color="#fff" />
          </span>
        )}

        <p>{username}</p>
      </span>
    </header>
  );
}
