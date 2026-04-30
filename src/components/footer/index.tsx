import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import styles from "./styles.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Trainee Logo" width={30} height={30} />
          <h1 className={styles.nameTrainee}>trainee</h1>
        </div>
        <div className={styles.socialMedia}>
          <span className={styles.socialIcon}>
            <FaInstagram size={20} color="#000" />
          </span>
          <span className={styles.socialIcon}>
            <FaLinkedinIn size={20} color="#000" />
          </span>
          <span className={styles.socialIcon}>
            <FaFacebookF size={20} color="#000" />
          </span>
          <span className={styles.socialIcon}>
            <FaXTwitter size={20} color="#000" />
          </span>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.links}>
          <div className={styles.navigation}>
            <h2 className={styles.linkTitle}>Navegação</h2>
            <a href="/">Home</a>
            <a href="#">Vagas</a>
            <a href="#">Notificações</a>
          </div>
          <div className={styles.students}>
            <h2 className={styles.linkTitle}>Para estudantes</h2>
            <a href="">Criar conta</a>
            <a href="">Buscar vagas</a>
            <a href="">Minhas candidaturas</a>
          </div>
          <div className={styles.support}>
            <h2 className={styles.linkTitle}>Suporte</h2>
            <a href="">FAQ</a>
            <a href="">Termos de uso</a>
            <a href="">política de privacidade</a>
          </div>
        </div>
        <p>© 2026 Trainee - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
