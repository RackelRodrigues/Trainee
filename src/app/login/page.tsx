"use client";

import styles from "./styles.module.scss";
import Logo from "../../../public/images/logo.svg";
import imageLogin from "../../../public/images/imagelogin.svg";
import Button from "@/components/button";
import * as Input from "@/components/input";
import Image from "next/image";
import { signUpSchema, TSignUpSchema } from "@/types/singUp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: TSignUpSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.page}>
      <Image
        src={imageLogin}
        alt="imagem de login"
        className={styles.imageLogin}
      />

      <div className={styles.container}>
        <Image
          src={Logo}
          alt="logo trainee"
          className={styles.logoTrainee}
          width={100}
          height={100}
        />

        <h1 className={styles.title}>Welcome Back</h1>

        <form>
          <label>Email</label>
          <Input.Root>
            <Input.Field
              placeholder="Email"
              type="email"
              isError={!!errors.name}
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name")}
            />
          </Input.Root>
          {errors.name && (
            <span className={styles.labelError}>{errors.name.message}</span>
          )}
          <label>Password</label>
          <Input.Root>
            <Input.Field
              placeholder="Password"
              type="password"
              isError={!!errors.email}
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email")}
            />
          </Input.Root>
          {errors.email && (
            <span className={styles.labelError}>{errors.email.message}</span>
          )}
          <div className={styles.options}>
            <a href="">check</a>

            <a href="">esqueci senha</a>
          </div>
        </form>

        <Button onClick={() => handleSubmit(onSubmit)()}>Login</Button>

        <div className={styles.divider}>
          <span>ou</span>
        </div>

        <Button className={styles.buttonGoogle}>Login com Google</Button>
        <Button className={styles.buttonFacebook}>Login com Github</Button>
        <div>
          <a href="/createAccount" className={styles.link}>
            Não tem uma conta? <span>Cadastre-se</span>
          </a>
        </div>
      </div>
    </div>
  );
}
