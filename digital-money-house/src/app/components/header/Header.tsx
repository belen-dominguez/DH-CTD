import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../primary-button/PrimaryButton";
import { MenuItem } from "../../types/menu.types";

type HeaderProps = {
  menuLinks: Array<MenuItem>;
};

export const Header = ({ menuLinks }: HeaderProps) => {
  return (
    <header>
      <nav className="flex justify-between">
        <div className="logo">
          <Link href="/">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </Link>
        </div>
        <ul className="flex justify-between gap-5">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <PrimaryButton
                label={link.label}
                href={link.href}
                hasBackground={false}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
