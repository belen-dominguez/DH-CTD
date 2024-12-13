import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./primaryLink.module.css";

export type PrimaryLinkProps = {
  label: string;
  href: string;
  selectedTheme: string;
  hidden?: boolean;
  classNames?: string;
  children?: ReactNode;
};

export const PrimaryLink = ({
  label,
  href,
  selectedTheme,
  hidden,
  classNames,
  children,
}: PrimaryLinkProps) => {
  const themes = {
    green: `bg-colorYellow text-colorBlack ${styles.green}`,
    black: `bg-colorGrey text-colorYellow border-2 border-colorYellow ${styles.black}`,
    grey: `bg-colorLightGrey text-colorBlack ${styles.grey}`,
    darkGrey: `bg-colorGrey text-white border-2 border-colorGrey ${styles.darkGrey}`,
  };
  return (
    <Link
      href={href}
      className={`rounded-md p-[14px] lg:p-[10px] ${
        themes[selectedTheme as keyof typeof themes]
      } ${styles.primaryLinkWrapper} ${
        hidden ? styles.hidden : ""
      } ${classNames} `}
    >
      <div className={styles.anchor}>{label}</div>
      {children}
    </Link>
  );
};
