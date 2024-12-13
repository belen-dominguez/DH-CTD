import React from "react";
import { Summary } from "../../components/summary/Summary";
import { Activity } from "../../components/activity/Activity";
import { PrimaryLink } from "../../components/buttons/primary-link/PrimaryLink";
import { ActivityItem } from "../../types/transaction.types";

const LINKS = [
  {
    label: "Cargar dinero",
    href: "/carga",
    selectedTheme: "green",
    classNames: "w-[100%] lg:w-[50%] py-[23px] lg:py-[37px] text-center",
  },
  {
    label: "Pago de servicios",
    href: "/servicios",
    selectedTheme: "green",
    classNames: "w-[100%] lg:w-[50%] py-[23px] lg:py-[37px] text-center",
  },
];

export default function Inicio() {
  const moneyAvailable = "6.800.878,76";
  const activityList: Array<ActivityItem> = [
    {
      detail: "Transferiste a Rodrigo",
      sum: "-1.000,00",
      date: "sabado",
    },
    {
      detail: "Transfereriste a Consorcio",
      sum: "-2.000,00",
      date: "lunes",
    },
    {
      detail: "Ingresaste dinero",
      sum: "10.000,00",
      date: "04/12/24",
    },
    {
      detail: "Te transfirieron dinero",
      sum: "15.000,00",
      date: "03/12/24",
    },
  ];
  return (
    <section>
      <h1 className="sr-only ">Inicio</h1>
      <div>
        <Summary moneyAvailable={moneyAvailable} />
        <div className="flex flex-col lg:flex-row gap-[5px] mt-[10px]">
          {LINKS.map((link, index) => (
            <PrimaryLink key={index} {...link} />
          ))}
        </div>
        <Activity activityList={activityList} />
      </div>
    </section>
  );
}
