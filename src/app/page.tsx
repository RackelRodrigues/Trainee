"use client";

import styles from "./page.module.scss";
import Header from "../components/header";
import JobCard from "../components/jobCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <JobCard
          companyLogo="/images/logo.svg"
          title="Desenvolvedor Front-end"
          company="Tecnologia & Love"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          skills={["React", "TypeScript", "CSS"]}
          workType="full-time"
          workLocation="remote"
          deadline="24/04/2024"
        />
      </main>
    </div>
  );
}
