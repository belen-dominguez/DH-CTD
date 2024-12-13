"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuItem } from "../../../types/menu.types";
import LogoIcon from "../../../assets/icons/logo";
import {
  PrimaryLink,
  PrimaryLinkProps,
} from "../../buttons/primary-link/PrimaryLink";
import MenuIcon from "../../../assets/icons/menu";
import { Sidebar } from "../sidebar/Sidebar";

import styles from "./header.module.css";

type HeaderProps = {
  menuLinks?: Array<MenuItem>;
  classnames?: string;
};

export const Header = ({ menuLinks, classnames }: HeaderProps) => {
  const currentUser = {
    name: "John Doe",
  };
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const menuAriaLabel = openMenu ? "Close menu" : "Open menu";

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
  }, [pathname]);

  return (
    <header className={styles.headerWrapper}>
      <nav
        className={`flex justify-between px-[20px] py-[19.5px] lg:py-[15.5px] ${
          classnames ? classnames : ""
        }`}
      >
        <div className="logo">
          <Link href="/" aria-label="Go to homepage ">
            <LogoIcon />
          </Link>
        </div>
        {menuLinks && (
          <ul className="flex justify-between gap-5">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <PrimaryLink {...(link as PrimaryLinkProps)} />
              </li>
            ))}
          </ul>
        )}
        {!menuLinks && currentUser && (
          <div className={styles.userInfoWrapper}>
            <div className={styles.tag}>MB</div>
            <div className={styles.userName}>
              <p>Hola, {currentUser.name}</p>
            </div>
            <button
              className={styles.menuButton}
              aria-label={menuAriaLabel}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon className={styles.menuIcons} />
            </button>
          </div>
        )}
      </nav>
      {openMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.userName}>
            <p>Hola, {currentUser.name}</p>
          </div>
          <Sidebar classNames={styles.mobileMenuNav} />
        </div>
      )}
    </header>
  );
};
