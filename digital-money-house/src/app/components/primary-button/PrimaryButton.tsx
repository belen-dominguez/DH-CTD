import Link from "next/link";
import React from "react";
import styles from "./primaryButton.module.css";

export type PrimaryButtonProps = {
  label: string;
  href: string;
  selectedTheme: string;
};

export const PrimaryButton = ({
  label,
  href,
  selectedTheme,
}: PrimaryButtonProps) => {
  const themes = {
    green: `bg-colorYellow text-colorBlack ${styles.green}`,
    black: `bg-colorGrey text-colorYellow border-2 border-colorYellow ${styles.black}`,
    grey: `bg-colorLightGrey text-colorBlack ${styles.grey}`,
    darkGrey: `bg-colorGrey text-white border-2 border-colorGrey ${styles.darkGrey}`,
  };
  return (
    <div
      className={`rounded-md p-[14px] lg:p-[10px] button-small ${
        themes[selectedTheme as keyof typeof themes]
      } ${styles.primaryButtonWrapper}`}
    >
      <Link href={href} className={styles.anchor}>
        {label}
      </Link>
    </div>
  );
};
