import OnehundredCard from "./OnehundredCard";
import { oneData } from "./Onedata";

export default function OnehundredCardWrapper() {
  return (
    <div
      className={`flex items-center justify-center bg-white pt-5 mx-10 md:mx-24 md:pt-10 pb-24 md:pb-40`}
    >
      <div className="grid xs:grid-cols-6 grid-cols-10 gap-4 md:gap-10">
        {oneData.map((card) => {
          return <OnehundredCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}
