"use client";

import Image from "next/image";
import { PiHouseLight } from "react-icons/pi";
import styles from "./not-found.module.scss";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.svg"
            alt="logo Trainee"
            width={100}
            height={100}
          />
          <h1>Trainee</h1>
        </div>

        <a>
          <Link href="/">
            <PiHouseLight color="red" size={23} />
          </Link>
        </a>

        <span className={styles.userInfo}>
          <div>
            <MdEmail size={23} />
          </div>
          <p>Rackel de Olvieira</p>
        </span>
      </div>
      <div className={styles.notFoundContainer}>
        <h1>Ops! Página não encontrada</h1>
        <p>
          A página não existe, mas seu estágio ideal ainda está te esperando 🚀
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/images/imagenotfound.svg"
          alt="Página não encontrada"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
