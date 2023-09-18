import Link from "next/link";

export default function Onehundred({ className = "" }) {
  return (
    <section id="100">
      <div className="flex items-center">
        <h1 className="text-6xl md:text-8xl pl-2 text-gray-300">100</h1>
        <div className="border-b text-gray-300" style={{ width: "30%" }}></div>
      </div>
      <div className="items-center flex flex-col justify-center mx-10 md:mx-32 pb-16 md:pb-24 pt-5 md:pt-10">
        <div
          className="bg-black text-white h-full w-full relative"
          style={{
            backgroundImage: "url('/red2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <Link href="/OnehundredCardWrapper">
            <div className="py-24 md:py-44 text-4xl md:text-9xl text-center">
              100 things
              <p className="text-[0.6rem] md:text-lg pt-10">
                These are the 100 elements that make up who I am.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
