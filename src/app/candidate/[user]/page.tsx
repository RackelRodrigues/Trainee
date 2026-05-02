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
import JobCard from "@/components/jobCard";
import * as Input from "../../../components/input";

type Props = {
  user?: {
    isComplete: boolean;
    name?: string;
    username?: string;
    location?: string;
    resume?: string;
    portfolio?: string;
    linkedin?: string;
    github?: string;
  };
  params: {
    username: string;
  };
};

export default function CandidateProfile({ params, user }: Props) {
  const { username } = params;

  return (
    <div className={styles.container}>
      <Header username={username} />
      <div className={styles.content}>
        <div className={styles.profile}>
          <Image src={Logo} alt="Logo" width={160} height={160} />

          <h1>Liam da Silva Ferreira</h1>
          <p>22 anos</p>

          <div className={styles.information}>
            <span className={styles.location}>
              {user?.location ? (
                <>
                  <FaLocationDot size={20} color="#000" />
                  <p>{user?.location}</p>
                </>
              ) : (
                <>
                  <FaLocationDot size={20} color="#000" />
                  <Input.Field />
                </>
              )}
            </span>
            <span className={styles.document}>
              <GrDocument size={20} color="#000" />
              <a href="#">Currículo</a>
            </span>
            <span className={styles.portfolio}>
              <AiOutlineLink size={20} color="#000" />
              <a href="#">Portfólio</a>
            </span>
          </div>

          <span className={styles.socialMedia}>
            <h2>Rede Sociais</h2>

            {user?.linkedin ? (
              <a href="#">
                <CiLinkedin size={25} color="#000" />
                https://linkedin.com/in/liam-ferreira
              </a>
            ) : (
              <a href="#">
                <CiLinkedin size={25} color="#000" />
                <Input.Field />
              </a>
            )}

            {user?.github ? (
              <a href="#">
                <LuGithub size={25} color="#000" />
                https://github.com/liam-ferreira
              </a>
            ) : (
              <a href="#">
                <LuGithub size={25} color="#000" />
                <Input.Field />
              </a>
            )}
          </span>
        </div>
        <div className={styles.inscriptions}>
          <h2 className={styles.title}>Minhas Incrições</h2>
          <JobCard
            title="Desenvolvedor Front-end"
            company="Tech Company"
            companyLogo={Logo}
            description="lorem dsjncsdjcnjdscnsdkjcncvniefnw"
            skills={["React", "TypeScript", "CSS"]}
            deadline="23/43/1233"
            workLocation="patos -PN"
            workType="full-time"
          />{" "}
          <JobCard
            title="Desenvolvedor Front-end"
            company="Tech Company"
            companyLogo={Logo}
            description="lorem dsjncsdjcnjdscnsdkjcncvniefnw"
            skills={["React", "TypeScript", "CSS"]}
            deadline="23/43/1233"
            workLocation="patos -PN"
            workType="full-time"
          />
          <JobCard
            title="Desenvolvedor Front-end"
            company="Tech Company"
            companyLogo={Logo}
            description="lorem dsjncsdjcnjdscnsdkjcncvniefnw"
            skills={["React", "TypeScript", "CSS"]}
            deadline="23/43/1233"
            workLocation="patos -PN"
            workType="full-time"
          />
        </div>
      </div>
    </div>
  );
}
