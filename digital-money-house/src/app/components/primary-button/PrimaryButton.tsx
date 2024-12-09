import Link from "next/link";
import React from "react";

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
    green: `bg-colorYellow text-colorBlack`,
    black: `bg-colorGrey text-colorYellow border-2 border-colorYellow`,
    grey: `bg-colorLightGrey text-colorBlack`,
    darkGrey: `bg-colorGrey text-white`,
  };
  return (
    <div
      className={`rounded-md p-[14px] lg:p-[10px] button-small ${
        themes[selectedTheme as keyof typeof themes]
      }`}
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};
