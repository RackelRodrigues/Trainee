import styles from "./styles.module.scss";
import Button from "../button";
import { FaRegBuilding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

interface JobCardProps {
  companyLogo?: string;
  title: string;
  company: string;
  description?: string;
  skills?: string[];
  workType?: "full-time" | "part-time" | "internship";
  workLocation: "remote" | string;
  deadline: string;
  variant: "job-listing" | "job-application";
  status?: string;
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
  variant,
  status,
}: JobCardProps) {
  return (
    <div className={styles.jobCard}>
      {variant === "job-application" && (
        <>
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
              {skills?.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <p>Prazo: {deadline}</p>
          </div>
        </>
      )}

      {variant === "job-listing" && (
        <div className={styles.jobListing}>
          <div>
            <h2 className={styles.label}>Empresa</h2>
            <p className={styles.caption}>BrightFuture</p>
          </div>
          <div>
            <h2 className={styles.label}>Titulo</h2>
            <p className={styles.caption}>{title}</p>
          </div>
          <div>
            <h2 className={styles.label}>Modelo de trabalho</h2>
            <p className={styles.caption}>{workLocation}</p>
          </div>
          <div>
            <h2 className={styles.label}>data de inscrição</h2>
            <p className={styles.caption}>{deadline}</p>
          </div>

          <span className={styles.tagStatus}>{status}</span>
          <div className={styles.containerButton}>
            <Button variant="primary">ver</Button>
          </div>
        </div>
      )}
    </div>
  );
}
