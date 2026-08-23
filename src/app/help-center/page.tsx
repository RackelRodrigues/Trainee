"use client";

import styles from "./styles.module.scss";
import Button from "@/components/button";
import Header from "@/components/header";
import * as Input from "@/components/input";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineQuestion } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function HelpCenter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <h1>Duvidas frequentes</h1>
        <Input.Root>
          <IoMdSearch />
          <Input.Field placeholder="Buscar duvidas" />
        </Input.Root>
        <div>
          <h3>Perguntas Frequentes</h3>
        </div>

        <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.questionHeader}>
            <h2>Como posso me candidatar a uma vaga?</h2>

            <span>
              {isOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </span>
          </div>
          {isOpen && (
            <span>
              Para se candidatar a uma vaga, basta clicar no botão Candidatar-se
              na página da vaga desejada. Certifique-se de ter um perfil
              completo e um currículo atualizado para aumentar suas chances de
              sucesso.
            </span>
          )}
        </div>
        <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.questionHeader}>
            <h2>Como acomponho o status da minha candidatura ?</h2>

            <span>
              {isOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </span>
          </div>
          {isOpen && (
            <span>
              Você pode acompanhar o andamento da sua candidatura acessando sua
              conta na plataforma e entrando na área “inscrições”. Lá serão
              exibidas as vagas e entrando pode visualizar as etapas do processo
              e possíveis atualizações feitas pela empresa.
            </span>
          )}
        </div>
        <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.questionHeader}>
            <h2>Como funciona o acompanhamento da minha candidatura?</h2>

            <span>
              {isOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </span>
          </div>
          {isOpen && (
            <span>
              Cada empresa possui seu próprio processo seletivo e define as
              etapas, avaliações e critérios das vagas anunciadas. Nossa
              plataforma busca tornar essa experiência mais simples, rápida e
              transparente, facilitando a comunicação entre candidatos e
              recrutadores. <br />
              Você poderá acompanhar atualizações da sua candidatura diretamente
              pela plataforma e receber notificações sempre que houver mudanças
              no processo. <br />
              Além disso, prezamos por feedbacks, organização e um processo mais
              eficiente tanto para empresas quanto para candidatos. Caso tenha
              dúvidas sobre sua candidatura, vaga ou empresa, nosso suporte
              estará disponível para ajudar.
            </span>
          )}
        </div>
        <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.questionHeader}>
            <h2>Onde encontro minha candidaturas ?</h2>

            <span>
              {isOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </span>
          </div>
          {isOpen && (
            <span>
              Para se candidatar a uma vaga, basta clicar no botão Candidatar-se
              na página da vaga desejada. Certifique-se de ter um perfil
              completo e um currículo atualizado para aumentar suas chances de
              sucesso.
            </span>
          )}
        </div>
        <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.questionHeader}>
            <h2>Quais os formatos de curriculos são aceitos ?</h2>

            <span>
              {isOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </span>
          </div>
          {isOpen && (
            <span>
              Aceitamos currículos nos formatos PDF, DOC e DOCX. Recomendamos
              enviar em PDF para evitar problemas de formatação.
            </span>
          )}
        </div>
        <div className={styles.suport}>
          <span className={styles.icon}>
            <AiOutlineQuestion size={30} />
          </span>
          <div>
            <h2> Não encontrou sua resposta?</h2>
            <p>Entre em contato com o nosso suporte</p>
          </div>
          <Button variant="primary">Falar com o suporte </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
