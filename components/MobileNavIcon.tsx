import { langContext } from "@/context/context";
import Link from "next/link";
import React, { useContext } from "react";
import Icon from "./Icon";

const MobileNavIcon = () => {
  const { showNav, setShowNav } = useContext(langContext);

  return (
    <div className="flex items-center justify-start gap-x-5 w-full mb-5">
      <div
        className={`${showNav ? "" : ""} flex flex-col cursor-pointer`}
        onClick={() => setShowNav(false)}
      >
        <span
          className={`${
            !showNav
              ? "delay-100 -translate-x-5 opacity-0 "
              : "delay-100 -translate-x-0 opacity-100"
          } block w-[30px] h-[2px] bg-text-1 mb-1 transition-all duration-1000 `}
        ></span>
        <span
          className={`${
            !showNav
              ? "delay-200 -translate-x-5 opacity-0 "
              : "delay-200 -translate-x-0 opacity-100"
          } block w-[30px] h-[2px] bg-text-1 mb-1 transition-all duration-1000`}
        ></span>
        <span
          className={`${
            !showNav
              ? "delay-300 -translate-x-5 opacity-0 "
              : "delay-300 -translate-x-0 opacity-100"
          } block w-[30px] h-[2px] bg-text-1  transition-all duration-1000`}
        ></span>
      </div>
      <Icon forMobileNav={true} />
    </div>
  );
};

export default MobileNavIcon;
