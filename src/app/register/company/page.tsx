"use client";

import styles from "./styles.module.scss";
import Logo from "../../../../public/images/logo.svg";
import Busnisscreateacccount from "../../../../public/images/Busnisscreteaccount.svg";
import Google from "../../../../public/images/logos/google.png";
import Facebook from "../../../../public/images/logos/facebook.png";
import Apple from "../../../../public/images/logos/apple.png";
import Button from "@/components/button";
import * as Input from "@/components/input";
import Image from "next/image";
import { signUpCompanySchema } from "@/schemas/singUpCompany";
import type { TSignUpSchema } from "@/schemas/singUpCompany";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CiUnlock } from "react-icons/ci";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { api } from "@/server/api";
import { formatCNPJ, unformatCNPJ } from "@/utils/formatCPNJ";
import { getCurrentDate } from "@/utils/getCurrentDate";

export default function CompanyRegister() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpCompanySchema),
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = async (data) => {
    const { confirmPassword, ...body } = data;

    console.log(body);

    const payload = {
      ...body,
      cnpj: unformatCNPJ(body.cnpj),
      companyStartDate: getCurrentDate(),
    };
    console.log("PAYLOAD:", payload);
    console.log("JSON:", JSON.stringify(payload));
    try {
      const result = await api("/enterprise/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });
      reset();
      await fetch("/api/auth/set-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: result.token }),
      });

      toast.success("Conta criada com sucesso! ");

      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
      toast.error("Erro ao criar conta. Por favor, tente novamente.");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Image
              src={Logo}
              alt="logo trainee"
              className={styles.logoTrainee}
              width={80}
              height={80}
              priority
            />
            <h1 className={styles.nameTrainee}>trainee</h1>
          </div>

          <h1 className={styles.title}>Crie sua conta</h1>
        </div>
        <form>
          <div>
            <label htmlFor="Nome da empresa">Nome da Empresa</label>
            <Input.Root isError={!!errors.companyName}>
              <AiOutlineMail size={23} />
              <Input.Field
                id="Nome da empresa"
                placeholder="Nome da Empresa "
                type="text"
                aria-invalid={errors.companyName ? "true" : "false"}
                {...register("companyName")}
              />
            </Input.Root>
            {errors.companyName && (
              <span className={styles.labelError}>
                {errors.companyName.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <Input.Root isError={!!errors.email}>
              <CiLock size={25} />
              <Input.Field
                id="Email"
                placeholder="Email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email")}
              />
            </Input.Root>
            {errors.email && (
              <span className={styles.labelError}>{errors.email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="CNPJ">CNPJ</label>
            <Input.Root isError={!!errors.cnpj}>
              <IoDocumentTextOutline size={25} />
              <Input.Field
                id="CNPJ"
                placeholder="CNPJ"
                type="text"
                aria-invalid={errors.cnpj ? "true" : "false"}
                {...register("cnpj", {
                  onChange: (e) => {
                    e.target.value = formatCNPJ(e.target.value);
                  },
                })}
              />
            </Input.Root>
            {errors.cnpj && (
              <span className={styles.labelError}>{errors.cnpj.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="Senha">Senha</label>
            <Input.Root isError={!!errors.password}>
              <CiUnlock size={25} />

              <Input.Field
                id="senha"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                aria-invalid={errors.password ? "true" : "false"}
                {...register("password")}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>
            </Input.Root>
            {errors.password && (
              <span className={styles.labelError}>
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="Confirma sua senha">Confirmar Senha</label>
            <Input.Root isError={!!errors.confirmPassword}>
              <CiLock size={25} />
              <Input.Field
                id="confirma sua senha"
                placeholder="Confirmar Senha"
                type={showConfirmPassword ? "text" : "password"}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                {...register("confirmPassword")}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>
            </Input.Root>
            {errors.confirmPassword && (
              <span className={styles.labelError}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </form>

        <Button onClick={() => handleSubmit(onSubmit)()} variant="primary">
          Criar conta
        </Button>

        <div className={styles.divider}>
          <span>ou</span>
        </div>
        <div className={styles.buttonsContainer}>
          <Button className={styles.buttonGoogle}>
            <Image
              src={Google}
              alt="logo google"
              className={styles.logoGoogle}
              width={20}
              height={20}
            />
          </Button>
          <Button className={styles.buttonFacebook}>
            <Image
              src={Facebook}
              alt="logo facebook"
              className={styles.logoFacebook}
              width={20}
              height={20}
            />
          </Button>
          <Button className={styles.buttonApple}>
            <Image
              src={Apple}
              alt="logo apple"
              className={styles.logoApple}
              width={20}
              height={20}
            />
          </Button>
        </div>
        <div className={styles.createAccount}>
          <a href="/sign-in" className={styles.link}>
            Já tem uma conta? <span>Entre na sua conta</span>
          </a>
        </div>
      </div>
      <div className={styles.imageLogin}>
        <h1 className={styles.logoName}>trainee</h1>

        <div className={styles.imageContainer}>
          <Image
            src={Busnisscreateacccount}
            alt="imagem de login"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
