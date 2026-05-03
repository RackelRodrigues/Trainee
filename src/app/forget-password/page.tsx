"use client";

import Logo from "../../../public/images/logo.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import * as Input from "@/components/input";
import Button from "@/components/button";
import { AiOutlineMail } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/components/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyCodeSchema, TVerifyCodeSchema } from "@/schemas/verifyCode";
import { useRef } from "react";

export default function ForgetPassword() {
  const [steps, setSteps] = useState(2);
  const router = useRouter();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { register, handleSubmit, watch } = useForm<TVerifyCodeSchema>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: ["", "", "", "", "", ""],
    },
  });

  function handleBackToLogin() {
    router.push("/sign-in");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  function onSubmit(data: TVerifyCodeSchema) {
    const code = data.code.join("");
    console.log(code);

    setSteps(3);
  }

  function handlenewPassword() {
    router.push("/");
  }
  return (
    <div className={styles.forgetPassword}>
      <header className={styles.header}>
        <Image src={Logo} alt="Logo" width={60} height={60} />
        <h1>trainee</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          {steps === 1 && (
            <Modal>
              <Image src={Logo} alt="Logo" width={150} height={150} />
              <h1>Recuperar senha</h1>

              <label>Email</label>
              <Input.Root>
                <AiOutlineMail size={20} color="var(--primary-color)" />

                <Input.Field placeholder="Digite seu email" />
              </Input.Root>
              <Button variant="primary">Enviar</Button>
              <Button onClick={handleBackToLogin} variant="terciary">
                <MdArrowBackIos />
                Voltar para o login
              </Button>
            </Modal>
          )}
          {steps === 2 && (
            <Modal>
              <span className={styles.padlock}>
                <IoMdLock color="var(--color-primary)" size={30} />
              </span>
              <h1>Codigo de verificação</h1>
              <p>digite o código que enviamos para seu e-mail.</p>

              <div className={styles.codeContainer}>
                {watch("code").map((_, index) => (
                  <Input.Root key={index}>
                    <Input.Field
                      maxLength={1}
                      {...register(`code.${index}`)}
                      ref={(el) => {
                        inputsRef.current[index] = el;
                      }}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Input.Root>
                ))}
              </div>

              <div className={styles.codeButtons}>
                <Button variant="secondary">Cancelar</Button>

                <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                  Verificar
                </Button>
              </div>
            </Modal>
          )}

          {steps === 3 && (
            <Modal>
              <Image src={Logo} alt="Logo" width={150} height={150} />
              <h1>Crie sua nova senha</h1>
              <p>Crie sua nova sneha segura para acessar sua conta novamente</p>

              <div>
                <label htmlFor="">Senha</label>
                <Input.Root>
                  <Input.Field placeholder="senha" />
                </Input.Root>
              </div>
              <div>
                <label htmlFor="">Confirme sua senha</label>
                <Input.Root>
                  <Input.Field placeholder="confirme sua senha" />
                </Input.Root>
              </div>

              <div className={styles.codeButtons}>
                <Button variant="secondary">Cancelar</Button>

                <Button variant="primary">Verificar</Button>
              </div>
            </Modal>
          )}
        </div>
      </main>
    </div>
  );
}
