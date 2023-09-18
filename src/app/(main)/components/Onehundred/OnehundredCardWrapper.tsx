import OnehundredCard from "./OnehundredCard";
import { oneData } from "./Onedata";
import Link from "next/link";

export default function OnehundredCardWrapper() {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-4xl md:text-8xl">100 things</h1>
        <p className="pt-2 md:pt-5 text-xs md:text-lg">
          These are the 100 elements that make up who I am.
        </p>
      </div>

      <div
        className={`flex items-center justify-center bg-white pt-5 mx-5 md:pt-10 pb-24 md:pb-40`}
      >
        <div className="grid grid-cols-5 lg:grid-cols-5 gap-5 md:gap-10">
          {oneData.map((card) => {
            return <OnehundredCard key={card.id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
}
