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

export default function ProfileSettings() {
  return (
    <div>
      <Header />
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={160} height={160} />
        <h2>Liam </h2>
      </div>

      <div className={styles.button}>
        <span className={styles.icon}>
          <GoPerson size={20} color="#000" />
        </span>
        <p>Meu perfil</p>
      </div>
      <div className={styles.button}>
        <span className={styles.icon}>
          <IoBriefcaseOutline size={20} color="#000" />
        </span>
        <p>Minhas Candidaturas</p>
      </div>
      <div className={styles.button}>
        <span className={styles.icon}>
          <PiBuildingOfficeBold size={20} color="#000" />
        </span>
        <p>Empresas Seguidas</p>
      </div>
      <div className={styles.button}>
        <span className={styles.icon}>
          <IoDocumentOutline size={20} color="#000" />
        </span>
        <p>Vagas Salvas</p>
      </div>

      <div className={styles.button}>
        <span className={styles.icon}>
          <GoBell size={20} color="#000" />
        </span>
        <p>Notificações</p>
      </div>
      <div className={styles.button}>
        <span className={styles.icon}>
          <BsQuestionCircle size={20} color="#000" />
        </span>
        <p>Central de duvidas</p>
      </div>
      <div className={styles.button}>
        <span className={styles.icon}>
          <IoSettingsOutline size={20} color="#000" />
        </span>
        <p>Configurações</p>
      </div>
      <div className={styles.button}>
        <span className={styles.icon}>
          <IoIosLogOut size={20} color="#000" />
        </span>
        <p>Sair</p>
      </div>
    </div>
  );
}
