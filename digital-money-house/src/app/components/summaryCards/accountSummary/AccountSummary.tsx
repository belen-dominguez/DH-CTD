"use client";
import React from "react";
import CopyIcon from "../../../assets/icons/ copy";

import styles from "./accountSummary.module.css";

type AccountSummaryProps = {
  cvu: string;
  alias: string;
};
export const AccountSummary = ({ cvu, alias }: AccountSummaryProps) => {
  const handleClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className={`black-bg  ${styles.cardSummaryWrapper}`}>
      <p className={`heading-3 ${styles.description}`}>
        Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
      </p>
      <ul>
        {[cvu, alias].map((item, index) => {
          return (
            <li key={index} className={styles.accountItem}>
              <div>
                <p className={`${styles.yellowText} heading-2`}>
                  {item === cvu ? "CVU" : "Alias"}
                </p>
                <p>{item}</p>
              </div>
              <button
                className={`${styles.yellowText} ${styles.copyButton}`}
                onClick={() => handleClipboard(item)}
              >
                <CopyIcon />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
