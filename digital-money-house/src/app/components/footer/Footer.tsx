import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-colorBlack text-colorYellow flex justify-center lg:justify-start py-[25px] px-[20px]">
      © {new Date().getFullYear()} Digital Money House
    </footer>
  );
};
