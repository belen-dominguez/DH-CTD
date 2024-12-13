import React from "react";
import styles from "./primaryButton.module.css";

export type PrimaryButtonProps = {
  label: string;
  selectedTheme?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
};

export const PrimaryButton = ({
  label,
  type = "button",
  selectedTheme,
  onClick,
  className,
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
      } ${styles.primaryButtonWrapper} ${className}`}
    >
      <button type={type} className={styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
