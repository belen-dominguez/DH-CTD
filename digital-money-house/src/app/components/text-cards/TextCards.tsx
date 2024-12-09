import React from "react";

type TextCardsProps = {
  title: string;
  description: string;
};

export const TextCards = ({ title, description }: TextCardsProps) => {
  return (
    <div className={`rounded-md  `}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
