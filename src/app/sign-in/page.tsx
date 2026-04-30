"use client";

import styles from "./styles.module.scss";
import Logo from "../../../public/images/logo.svg";
import innovation from "../../../public/images/inovation.svg";
import Google from "../../../public/images/logos/google.png";
import Facebook from "../../../public/images/logos/facebook.png";
import Button from "@/components/button";
import * as Input from "@/components/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { signInSchema, TSignInSchema } from "@/types/signIn";
import Checkbox from "@/components/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: TSignInSchema) => {
    try {
      const res = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("body:", data);
      console.log(res);

      const result = await res.json();
      console.log(result);
      reset();
      await fetch("/api/auth/set-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: result.token }),
      });
      toast.success("Login realizado com sucesso!");

      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao fazer login. Por favor, tente novamente.");
    }
    reset();
  };

  return (
    <div className={styles.page}>
      <div className={styles.imageLogin}>
        <h1 className={styles.logoName}>trainee</h1>
        <div className={styles.imageContainer}>
          <Image
            src={innovation}
            alt="imagem de login"
            className={styles.image}
            priority
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Image
              src={Logo}
              alt="logo trainee"
              className={styles.logoTrainee}
              width={80}
              height={80}
            />
            <h1 className={styles.nameTrainee}>trainee</h1>
          </div>

          <h1 className={styles.title}>Bem vindo(a) de volta!</h1>
          <p className={styles.subtitle}>
            Estamos felizes em ter você de volta, faça login para continuar.
          </p>
        </div>
        <form>
          <div>
            <label>Email</label>
            <Input.Root isError={!!errors.email}>
              <AiOutlineMail size={23} />
              <Input.Field
                placeholder="Email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email")}
                autoComplete="email"
              />
            </Input.Root>
            {errors.email && (
              <span className={styles.labelError}>{errors.email.message}</span>
            )}
          </div>
          <div>
            <label>Password</label>
            <Input.Root isError={!!errors.password}>
              <CiLock size={25} />
              <Input.Field
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                aria-invalid={errors.password ? "true" : "false"}
                {...register("password")}
                autoComplete="current-password"
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

          <div className={styles.options}>
            <Checkbox label="Lembrar-me" name="rememberMe" />

            <a href="">Esqueci senha</a>
          </div>
        </form>

        <Button onClick={() => handleSubmit(onSubmit)()} variant="primary">
          Login
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
        </div>
        <div className={styles.createAccount}>
          <a href="/register/candidate" className={styles.link}>
            Não tem uma conta? <span>Crie e comece a se candidatar.</span>
          </a>
        </div>

        <div className={styles.createAccount}>
          <a href="/register/company" className={styles.link}>
            Publique suas vagas conosco! <span>Inscreva sua empresa aqui</span>
          </a>
        </div>
      </div>
    </div>
  );
}
