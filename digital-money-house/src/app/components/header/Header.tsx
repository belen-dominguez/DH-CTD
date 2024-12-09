import Link from "next/link";
import React from "react";
import {
  PrimaryButton,
  PrimaryButtonProps,
} from "../primary-button/PrimaryButton";
import { MenuItem } from "../../types/menu.types";
import LogoIcon from "../../assets/icons/logo";

type HeaderProps = {
  menuLinks: Array<MenuItem>;
  classnames?: string;
};

export const Header = ({ menuLinks, classnames }: HeaderProps) => {
  return (
    <header>
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
        <ul className="flex justify-between gap-5">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <PrimaryButton {...(link as PrimaryButtonProps)} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
