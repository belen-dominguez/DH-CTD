import React from "react";
import { ProfileSummary } from "../../components/summaryCards/profileSummary/ProfileSummary";
import { AccountSummary } from "../../components/summaryCards/accountSummary/AccountSummary";
import { PrimaryLink } from "../../components/buttons/primary-link/PrimaryLink";
import ArrowIcon from "../../assets/icons/arrow";

export default function Perfil() {
  const userDetails = {
    email: "mauriciobrito@digitalhouse.com",
    firstname: "Mauricio",
    lastname: "Brito",
    dni: 20350269798,
    phone: "1146730989",
    password: "123",
  };
  const accountDetails = {
    cvu: "0000002100075320000000",
    alias: "estealiasnoexiste",
  };
  return (
    <section>
      <h1 className="sr-only ">Perfil</h1>
      <div>
        <ProfileSummary details={userDetails} />
        <div className="flex flex-col lg:flex-row gap-[5px] my-[10px]">
          <PrimaryLink
            label="Gestioná los medios de pago"
            href="/tarjetas"
            selectedTheme="green"
            classNames={` w-full flex justify-between items-center py-[22px] px-[20px] lg:py-[43px] lg:px-[32px] heading-2 `}
          >
            <ArrowIcon />
          </PrimaryLink>
        </div>
        <AccountSummary {...accountDetails} />
      </div>
    </section>
  );
}
