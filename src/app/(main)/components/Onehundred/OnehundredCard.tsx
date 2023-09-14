import React from "react";
import Image from "next/image";
import { OneCard } from "./Onedata";

type OneCardProps = {
  card: OneCard;
};

export default function OnehundredCard({ card }: OneCardProps) {
  if (!card) {
    return <div>No card data</div>;
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 md:p-5">
      <Image
        className="rounded-t-lg"
        src={card.image}
        alt={card.title}
        width={300}
        height={170}
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-sm md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
        </a>
        <p className="mb-3 text-xs md:text-sm  font-normal text-gray-700 dark:text-gray-400">
          {card.description}
        </p>
      </div>
    </div>
  );
}
