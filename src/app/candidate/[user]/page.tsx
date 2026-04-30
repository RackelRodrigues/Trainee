"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Header from "@/components/header";
import Logo from "../../../../public/images/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

type Props = {
  user: {
    isComplete: boolean;
  };
  params: {
    username: string;
  };
};

export default function CandidateProfile({ params }: Props) {
  const { username } = params;

  return (
    <div className={styles.container}>
      <Header username={username} />
      <div className={styles.content}>
        <div className={styles.profile}>
          <Image src={Logo} alt="Logo" />
          <h1></h1>
          <p>Liam da silva Ferreira</p>

          <span>
            <FaLocationDot size={20} color="#000" />
            <p>São Paulo, SP</p>
          </span>
          <span>
            <GrDocument size={20} color="#000" />
            <a href="#">Currículo</a>
          </span>
          <span>
            <AiOutlineLink size={20} color="#000" />
            <a href="#">Portfólio</a>
          </span>

          <span className={styles.socialMedia}>
            <h2>Rede Sociais</h2>

            <a href="#">
              <CiLinkedin size={25} color="#000" />
            </a>
            <a href="#">
              <LuGithub size={25} color="#000" />
            </a>
          </span>
        </div>
        <div className={styles.inscriptions}>
          <h2>Minhas Incrições</h2>
          <p>Informações adicionais sobre o candidato...</p>
        </div>
      </div>
    </div>
  );
}
