import Header from "@/components/header";
import styles from "./styles.module.scss";
import { IoMdNotificationsOutline, IoMdTime } from "react-icons/io";

interface NotificationsProps {
  urgency?: "low" | "medium" | "high";
  read?: boolean;
}

export default function Notifications() {
  return (
    <>
      <Header isCandidate={true} username="John Doe" />

      <div>
        <div
          className={styles.notification}
          // onClick={() => console.log("Notificação clicada")}
        >
          <div className={styles.notificationDetails}>
            <div className={styles.notificationIcon}>
              <span className={styles.iconBackground}>
                <IoMdNotificationsOutline
                  size={40}
                  color="var(--primary-color)"
                />
              </span>
            </div>

            <div className={styles.notificationContent}>
              <h1>techWave </h1>
              <p>
                voce avancou apos a triagem e foi selecionado para a próxima
                etapa
              </p>
            </div>
          </div>
          <div className={styles.notificationTime}>
            <div className={styles.time}>
              <IoMdTime size={20} color="var(--primary-color)" />
              <p>15 abr as 14:30</p>
            </div>
            <p>lida</p>
          </div>
        </div>
      </div>
    </>
  );
}
