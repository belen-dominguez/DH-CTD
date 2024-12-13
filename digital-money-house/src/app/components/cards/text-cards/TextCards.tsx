import React from "react";
import styles from "./TextCards.module.css";

type TextCardsProps = {
  title: string;
  description: string;
};

export const TextCards = ({ title, description }: TextCardsProps) => {
  return (
    <div className={`bg-white text-black ${styles.textCard}`}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.border} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
