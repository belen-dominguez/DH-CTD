"use client";
import { FC, PropsWithChildren } from "react";
import { Footer } from "../components/layout/footer/Footer";
import { Header } from "../components/layout/header/Header";
import "../globals.css";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const MENU_LINKS = [
    {
      href: "/login",
      label: "Iniciar sesion",
      selectedTheme: "darkGrey",
      hidden: window.location.pathname === "/login",
    },
  ];
  return (
    <html lang="en">
      <body className="auth-body">
        <Header
          menuLinks={MENU_LINKS}
          classnames="bg-colorYellow text-colorGrey"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default AuthLayout;
