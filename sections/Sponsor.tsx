import React from "react";
import { sponsor } from "@/public/static/constant";
const Sponsor = () => {
  return (
    <section className="py-2 md:py-20 w-full">
      <div className="grid padding grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 sm:gap-7 md:gap-8 lg:gap-10">
        {sponsor.map((item: string) => (
          <div
            key={item}
            className="py-2 px-3 h-[100px] bg-white rounded-md  flex-center"
          >
            <img
              src={`/static/image/sponsor/${item}`}
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
