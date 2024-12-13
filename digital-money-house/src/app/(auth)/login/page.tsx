"use client";
import { useState } from "react";
import { Input } from "../../components/form/input/Input";
import { PrimaryButton } from "../../components/buttons/primary-button/PrimaryButton";
import { PrimaryLink } from "../../components/buttons/primary-link/PrimaryLink";

export default function Login() {
  const [stepOne, setStepOne] = useState(true);

  const title = stepOne ? "¡Hola! Ingresá tu e-mail" : "Ingresá tu contraseña";

  const handleContinue = () => {
    if (stepOne) {
      setStepOne(false);
    } else {
      console.log("submit");
      // hay q router pushear al inicio.
    }
  };

  return (
    <section className="h-dvh relative">
      <div className="flex justify-center items-center flex-col py-[40px] px-[45px] lg:py-[92px] lg:px-[100px]">
        <h1 className="sr-only">Iniciar sesión</h1>
        <h2 className="heading-2 mb-[40px]">{title}</h2>

        <form>
          {stepOne && (
            <Input
              type="email"
              placeholder="Correo electrónico"
              className="mb-[20px]"
            />
          )}
          {!stepOne && (
            <Input
              type="password"
              placeholder="Contraseña"
              className="mb-[20px]"
            />
          )}
          <PrimaryButton
            type="button"
            label="Continuar"
            selectedTheme="green"
            onClick={handleContinue}
            className="mb-[20px]"
          />
          <PrimaryLink
            label="Crear cuenta"
            href="/register"
            selectedTheme="grey"
          />
        </form>
      </div>
    </section>
  );
}
