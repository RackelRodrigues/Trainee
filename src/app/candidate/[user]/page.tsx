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
import { useState } from "react";

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
//data
const jobsData = [
  {
    id: 1,
    title: "Desenvolvedor Front-end React",
    company: "Rocket Labs",
    workType: "Remoto",
    workLocation: "São Paulo - SP",
    deadline: "20/05/2026",
    status: "applied",
  },
  {
    id: 2,
    title: "UI Developer",
    company: "DevCore",
    workType: "Remoto",
    workLocation: "Rio de Janeiro - RJ",
    deadline: "25/05/2026",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Engenheiro Front-end",
    company: "Next Solutions",
    workType: "Remoto",
    workLocation: "Patos - PB",
    deadline: "30/05/2026",
    status: "completed",
  },

  {
    id: 4,
    title: "Desenvolvedor Back-end Node.js",
    company: "Cloud Systems",
    workType: "Remoto",
    workLocation: "Recife - PE",
    deadline: "18/05/2026",
    status: "applied",
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "API Tech",
    workType: "Remoto",
    workLocation: "Curitiba - PR",
    deadline: "28/05/2026",
    status: "in-progress",
  },
  {
    id: 6,
    title: "Node.js Developer",
    company: "Server Company",
    workType: "Remoto",
    workLocation: "Fortaleza - CE",
    deadline: "02/06/2026",
    status: "completed",
  },

  {
    id: 7,
    title: "Desenvolvedor Full Stack",
    company: "Infinity Code",
    workType: "Remoto",
    workLocation: "João Pessoa - PB",
    deadline: "15/06/2026",
    status: "applied",
  },
  {
    id: 8,
    title: "Full Stack Engineer",
    company: "Tech Vision",
    workType: "Remoto",
    workLocation: "Natal - RN",
    deadline: "10/06/2026",
    status: "in-progress",
  },
  {
    id: 9,
    title: "Software Engineer",
    company: "Future Dev",
    workType: "Remoto",
    workLocation: "Belo Horizonte - MG",
    deadline: "05/06/2026",
    status: "completed",
  },
];

export default function CandidateProfile({ params, user }: Props) {
  const { username } = params;
  const [jobsfiltered, setJobsfiltered] = useState(jobsData);

  const handleApplied = () =>
    setJobsfiltered(jobsData.filter((job) => job.status === "applied"));
  const handleInProgress = () =>
    setJobsfiltered(jobsData.filter((job) => job.status === "in-progress"));

  const handleCompleted = () =>
    setJobsfiltered(jobsData.filter((job) => job.status === "completed"));

  const handleLinkedin = async (value: string) => {
    // setUser((prev) => ({
    //   ...prev,
    //   linkedin: value,
    // }));

    try {
      // await api.patch("/profile", {
      //   linkedin: value,
      // });
    } catch {
      // toast.error("Erro ao salvar");
    }
  };
  const handleGithub = () => {};
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
                  <FaLocationDot size={20} color="var(--color-error)" />
                  <Input.Field className={styles.field} />
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
              <div>
                <CiLinkedin size={25} color="var(--color-error)" />
                <Input.Field
                  className={styles.field}
                  // onChange={handleLinkedin}
                />
              </div>
            )}

            {user?.github ? (
              <a href="#">
                <LuGithub size={25} color="#000" />
                https://github.com/liam-ferreira
              </a>
            ) : (
              <div>
                <LuGithub size={25} color="var(--color-error)" />
                <Input.Field className={styles.field} onChange={handleGithub} />
              </div>
            )}
          </span>
        </div>
        <div className={styles.inscriptions}>
          <h2 className={styles.title}>Minhas Incrições</h2>
          <div className={styles.anchor}>
            <a onClick={handleApplied}>Inscrito</a>
            <a onClick={handleInProgress}>Em andamento</a>
            <a onClick={handleCompleted}>Concluido</a>
          </div>

          <main className={styles.jobsContainer}>
            {jobsfiltered.map((job) => (
              <JobCard
                variant="job-listing"
                key={job.id}
                title={job.title}
                company={job.company}
                deadline={job.deadline}
                workLocation={job.workLocation}
                status={job.status}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
