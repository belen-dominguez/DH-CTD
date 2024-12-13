import React from "react";
import styles from "./input.module.css";

type InputProps = {
  type: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  value?: string | number;
};

export const Input = ({
  type = "text",
  placeholder,
  className,
  disabled,
  value,
}: InputProps) => {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        id={value ? String(value) : ""}
      />
    </div>
  );
};
