"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    <div className={`${styles.sidebarWrapper} ${classNames}`}>
      <nav>
        <ul>
          {SIDEBAR_LINKS.map((link, index) => {
            return (
              <li key={index} className={styles.linkItem}>
                {link.href ? (
                  <PrimaryLink
                    {...(link as PrimaryLinkProps)}
                    classNames={`button-small ${
                      activeMenu === link.href ? styles.active : ""
                    }`}
                  />
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
