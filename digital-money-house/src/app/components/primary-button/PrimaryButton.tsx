import Link from "next/link";
import React from "react";

export type PrimaryButtonProps = {
  label: string;
  href: string;
  hasBackground: boolean;
};

export const PrimaryButton = ({
  label,
  href,
  hasBackground = true,
}: PrimaryButtonProps) => {
  return (
    <div className={`rounded-md  ${hasBackground ?? "full"}`}>
      <Link href={href}>{label}</Link>
    </div>
  );
};
