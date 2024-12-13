import React from "react";
import {
  PrimaryLink,
  PrimaryLinkProps,
} from "../../buttons/primary-link/PrimaryLink";
import {
  PrimaryButton,
  PrimaryButtonProps,
} from "../../buttons/primary-button/PrimaryButton";
import styles from "./sidebar.module.css";

type SidebarProps = {
  classNames?: string;
};

const SIDEBAR_LINKS = [
  {
    label: "Inicio",
    href: "/inicio",
  },
  {
    label: "Actividad",
    href: "/actividad",
  },
  {
    label: "Tu perfil",
    href: "/perfil",
  },
  {
    label: "Cargar dinero",
    href: "/carga",
  },
  {
    label: "Pagar servicios",
    href: "/servicios",
  },
  {
    label: "Tarjetas",
    href: "/tarjetas",
  },
  {
    label: "Cerrar sesion",
    className: "",
    type: "button",
  },
];

export const Sidebar = ({ classNames }: SidebarProps) => {
  return (
    <div className={`${styles.sidebarWrapper} ${classNames}`}>
      <nav>
        <ul>
          {SIDEBAR_LINKS.map((link, index) => {
            return (
              <li key={index}>
                {link.href ? (
                  <PrimaryLink {...(link as PrimaryLinkProps)} />
                ) : (
                  <PrimaryButton
                    {...(link as PrimaryButtonProps)}
                    className="max-w-[max-content] lg:pl-[0]"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
