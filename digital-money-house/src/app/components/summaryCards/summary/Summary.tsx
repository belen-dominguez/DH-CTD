import React from "react";
import Link from "next/link";
import styles from "./summary.module.css";

type SummaryProps = {
  moneyAvailable: string;
};
export const Summary = ({ moneyAvailable }: SummaryProps) => {
  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.anchorWrapper}>
        <Link href="/tarjetas" className={`button-underline ${styles.anchors}`}>
          Ver tarjetas
        </Link>
        <Link href="/perfil" className={`button-underline ${styles.anchors}`}>
          Ver CVU
        </Link>
      </div>
      <div className={styles.moneyWrapper}>
        <p>Dinero Disponible</p>
        <p className={`heading-1 ${styles.moneyDetail}`}>$ {moneyAvailable}</p>
      </div>
    </div>
  );
};
