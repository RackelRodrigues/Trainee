"use client";

import Header from "@/components/header";
import Image from "next/image";
import styles from "./styles.module.scss";
import { GoPerson } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function ProfileSettings() {
  const router = useRouter();

  function handleLogout() {
    // Lógica para deslogar o usuário, como limpar tokens de autenticação, redirecionar para a página de login, etc.
    console.log("Usuário deslogado");
  }

  function handleProfile() {
    // Lógica para acessar o perfil do usuário
    console.log("Acessando perfil do usuário");

    router.push("/candidate/RackelRodrigues");
  }

  return (
    <div>
      <Header />
      <div className={styles.profile}>
        <Image src="/images/logo.svg" alt="Logo" width={160} height={160} />
        <h2>Liam </h2>
      </div>

      <div className={styles.buttonsContainer}>
        <div className={styles.button} onClick={handleProfile}>
          <span className={styles.icon}>
            <GoPerson size={25} color="var(--primary-color)" />
          </span>
          <p>Meu perfil</p>
        </div>
        <div className={styles.button}>
          <span className={styles.icon}>
            <IoBriefcaseOutline size={25} color="var(--primary-color)" />
          </span>
          <p>Minhas Candidaturas</p>
        </div>
        <div className={styles.button}>
          <span className={styles.icon}>
            <PiBuildingOfficeBold size={25} color="var(--primary-color)" />
          </span>
          <p>Empresas Seguidas</p>
        </div>
        <div className={styles.button}>
          <span className={styles.icon}>
            <IoDocumentOutline size={25} color="var(--primary-color)" />
          </span>
          <p>Vagas Salvas</p>
        </div>

        <div className={styles.button}>
          <span className={styles.icon}>
            <GoBell size={25} color="var(--primary-color)" />
          </span>
          <p>Notificações</p>
        </div>
        <div className={styles.button}>
          <span className={styles.icon}>
            <BsQuestionCircle size={25} color="var(--primary-color)" />
          </span>
          <p>Central de duvidas</p>
        </div>
        <div className={styles.button}>
          <span className={styles.icon}>
            <IoSettingsOutline size={25} color="var(--primary-color)" />
          </span>
          <p>Configurações</p>
        </div>
        <div className={styles.button} onClick={handleLogout}>
          <span className={styles.iconLogout}>
            <IoIosLogOut size={25} color="var(--primary-color)" />
          </span>
          <p>Sair</p>
        </div>
      </div>
    </div>
  );
}
