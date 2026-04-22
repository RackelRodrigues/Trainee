"use client";

import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { PiHouseLight } from "react-icons/pi";

export default function NotFound() {
  return (
    <div>
      <div className="header">
        <div>
          <Image
            src="/images/logo.svg"
            alt="logo Trainee"
            width={100}
            height={100}
          />
          <h1>Traiane</h1>
        </div>

        <a href="/">
          <PiHouseLight />
        </a>

        <span>
          <div>
            <GoPerson size={24} />
          </div>
          <p>Rackel de Olvieira</p>
        </span>
      </div>

      <h1>Ops! Página não encontrada</h1>
      <p>
        A página não existe, mas seu estágio ideal ainda está te esperando 🚀
      </p>

      <div>
        <Image
          src="/images/imagenotfound.svg"
          alt="Página não encontrada"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
