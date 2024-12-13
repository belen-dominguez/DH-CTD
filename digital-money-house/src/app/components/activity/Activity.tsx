import React from "react";
import Image from "next/image";
import searchIcon from "../../assets/icons/search.svg";
import clearIcon from "../../assets/icons/close.svg";
import styles from "./activity.module.css";
import { Input } from "../form/input/Input";
import { ActivityItem } from "../../types/transaction.types";
import { ActivityCards } from "../cards/activity-card/ActivityCards";
import Link from "next/link";
import ArrowIcon from "../../assets/icons/arrow";

type ActivityProps = {
  activityList: Array<ActivityItem>;
};

export const Activity = ({ activityList }: ActivityProps) => {
  return (
    <form className={styles.activityWrapper}>
      <div className={styles.inputWrapper}>
        <Image
          className={styles.iconSearch}
          src={searchIcon}
          alt="Search icon"
          width={24}
          height={24}
        />
        <Input
          type="text"
          placeholder="Buscar en tu actividad"
          className={styles.searchInput}
        />
        <button aria-label="Clear">
          <Image
            className={styles.iconSearch}
            src={clearIcon}
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className={styles.activityDetail}>
        <h3 className="headline-03 font-bold mb-[10px]">Tu actividad</h3>
        <ul>
          {activityList.map((activity, index) => {
            return (
              <li key={index}>
                {index === activityList.length - 1 ? (
                  <ActivityCards
                    details={activity}
                    classNames="border-b-[1px] border-current"
                  />
                ) : (
                  <ActivityCards details={activity} />
                )}
              </li>
            );
          })}
        </ul>
        <div className="headline-03 font-bold">
          <Link href="/actividad" className="flex justify-between mt-[10px]">
            Ver toda tu actividad
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </form>
  );
};
