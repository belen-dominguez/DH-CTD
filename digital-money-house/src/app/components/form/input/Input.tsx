import React from "react";
import styles from "./input.module.css";

type InputProps = {
  type: string;
  placeholder: string;
  className?: string;
};

export const Input = ({
  type = "text",
  placeholder,
  className,
}: InputProps) => {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
