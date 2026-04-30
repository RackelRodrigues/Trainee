import styles from "./styles.module.scss";
import Button from "../button";
import { FaRegBuilding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

interface JobCardProps {
  companyLogo: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  workType: "full-time" | "part-time" | "internship";
  workLocation: "remote" | string;
  deadline: string;
}

export default function JobCard({
  companyLogo,
  title,
  company,
  description,
  skills,
  workType,
  workLocation,
  deadline,
}: JobCardProps) {
  return (
    <div className={styles.jobCard}>
      <div className={styles.header}>
        <div className={styles.companyInfo}>
          <img
            src={companyLogo}
            alt={company}
            onError={(e) => {
              e.currentTarget.src = "/images/logo.svg";
            }}
          />
          <h2 className={styles.companyName}>{company}</h2>
        </div>
        {workLocation === "remote" ? (
          <span>
            <FaRegBuilding size={24} />
            Remoto
          </span>
        ) : (
          <span>
            <SlLocationPin size={24} />
            {workLocation}
          </span>
        )}
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.applyButton}>
          <Button variant="primary">Aplicar</Button>
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.skillsTitle}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <p>Prazo: {deadline}</p>
      </div>
    </div>
  );
}
