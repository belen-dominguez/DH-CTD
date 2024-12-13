import React from "react";
import styles from "./activityCards.module.css";
import { ActivityItem } from "../../../types/transaction.types";

type ActivityCardProp = {
  classNames?: string;
  details: ActivityItem;
};

export const ActivityCards = ({ details, classNames }: ActivityCardProp) => {
  const { detail, sum, date } = details;
  return (
    <div className={`text-large ${classNames} ${styles.activityCardWrapper}`}>
      <div className={styles.detailWrapper}>
        <span className={styles.dot} />
        <p>{detail}</p>
      </div>
      <div className={styles.sumWrapper}>
        <p>$ {sum}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
