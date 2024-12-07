"use client";
import { langContext } from "@/context/context";
import React, { useContext } from "react";

const Icon = ({ forMobileNav = false }: { forMobileNav?: boolean }) => {
  const { showNav } = useContext(langContext);

  return (
    <div
      onClick={() => window.location.reload()}
      className={` ${
        forMobileNav && showNav
          ? "opacity-100 "
          : !forMobileNav && !showNav
          ? "opacity-100 "
          : "opacity-0"
      } delay-200 transition-all duration-500 h-[30px] cursor-pointer`}
    >
      <img
        src="/static/icon/logo.svg"
        className="h-[30px] w-max object-contain"
      />
    </div>
  );
};

export default Icon;
