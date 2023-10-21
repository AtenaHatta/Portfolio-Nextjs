import React from "react";
import OnehundredCardWrapper from "@/app/(main)/components/Onehundred/OnehundredCardWrapper";

export default function Page() {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-4xl md:text-8xl">100 things</h1>
        <div className="relative pt-2 md:pt-5 text-xs md:text-xl inline-block">
          <span className="absolute inset-x-0 bottom-1 h-2 bg-violet-400 opacity-50"></span>
          <p className="relative z-10">
            These are the 100 elements that make up who I am.
          </p>
        </div>
      </div>
      <OnehundredCardWrapper />
    </div>
  );
}
