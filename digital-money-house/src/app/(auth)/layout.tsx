import { FC, PropsWithChildren } from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import "../globals.css";

const MENU_LINKS = [
  {
    href: "/login",
    label: "Iniciar sesion",
    hasBackground: true,
  },
];

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="auth-body">
        <Header menuLinks={MENU_LINKS} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default AuthLayout;
