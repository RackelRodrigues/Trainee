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
import { signUpCompanySchema, TSignUpSchema } from "@/schemas/singUpCompany";
import { useForm } from "react-hook-form";
import { CiUnlock } from "react-icons/ci";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

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

  const onSubmit = (data: TSignUpSchema) => {
    console.log(data);
    reset();

    router.push("/");

    toast.success("Conta criada com sucesso! ");
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
            <label>Nome da Empresa</label>
            <Input.Root isError={!!errors.nameCompany}>
              <AiOutlineMail size={23} />
              <Input.Field
                placeholder="Nome da Empresa "
                type="text"
                aria-invalid={errors.nameCompany ? "true" : "false"}
                {...register("nameCompany")}
              />
            </Input.Root>
            {errors.nameCompany && (
              <span className={styles.labelError}>
                {errors.nameCompany.message}
              </span>
            )}
          </div>
          <div>
            <label>Email</label>
            <Input.Root isError={!!errors.email}>
              <CiLock size={25} />
              <Input.Field
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
            <label>CNPJ</label>
            <Input.Root isError={!!errors.cnpj}>
              <IoDocumentTextOutline size={25} />
              <Input.Field
                placeholder="CNPJ"
                type="text"
                aria-invalid={errors.cnpj ? "true" : "false"}
                {...register("cnpj")}
              />
            </Input.Root>
            {errors.cnpj && (
              <span className={styles.labelError}>{errors.cnpj.message}</span>
            )}
          </div>
          <div>
            <label>Senha</label>
            <Input.Root isError={!!errors.password}>
              <CiUnlock size={25} />

              <Input.Field
                placeholder="Senha"
                type="password"
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
            <label>Confirmar Senha</label>
            <Input.Root isError={!!errors.confirmPassword}>
              <CiLock size={25} />
              <Input.Field
                placeholder="Confirmar Senha"
                type="password"
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
          <a href="/login" className={styles.link}>
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
