"use client";
import { langContext } from "@/context/context";
import React, { useContext, useState } from "react";
import MobileNavIcon from "./MobileNavIcon";
import MobileNavList from "./MobileNavList";
import MobileNavCategory from "./MobileNavCategory";
import { useTranslation } from "react-i18next";
const MobileNav = () => {
  const { t } = useTranslation();

  const { showNav } = useContext(langContext);
  const [gunung, setGunung] = useState(false);
  const [alam, setAlam] = useState(false);
  const [pantai, setPantai] = useState(false);
  const [romantis, setRomantis] = useState(false);
  const [edukasi, setEdukasi] = useState(false);
  const [sejarah, setSejarah] = useState(false);

  return (
    <nav
      className={`${
        showNav ? " visible" : " invisible"
      } fixed w-full left-0  bottom-0 top-0 bg-black bg-opacity-40 z-[51] transition-all duration-300`}
    >
      <div
        className={`${
          showNav ? "-translate-x-[0%]" : " -translate-x-[100%]"
        } h-full w-[250px] md:w-[350px]  bg-white p-5 transition-all duration-500`}
      >
        <MobileNavIcon />
        <div className="w-full h-full overflow-y-auto hide-scrollbar  pb-20">
          <div className="py-2 border-y text-lg cursor-pointer">
            <MobileNavCategory
              dropDown={gunung}
              setDropDown={setGunung}
              name={t("headerConstant.navLink.gunung.title")}
            />
            <MobileNavList list={"gunung"} type={gunung} />
          </div>

          <div className="py-2 border-y text-lg cursor-pointer">
            <MobileNavCategory
              dropDown={alam}
              setDropDown={setAlam}
              name={t("headerConstant.navLink.alam.title")}
            />
            <MobileNavList list={"alam"} type={alam} />
          </div>

          <div className="py-2 border-y text-lg cursor-pointer">
            <MobileNavCategory
              dropDown={pantai}
              setDropDown={setPantai}
              name={t("headerConstant.navLink.pantai.title")}
            />
            <MobileNavList list={"pantai"} type={pantai} />
          </div>

          <div className="py-2 border-y text-lg cursor-pointer">
            <MobileNavCategory
              dropDown={romantis}
              setDropDown={setRomantis}
              name={t("headerConstant.navLink.romantis.title")}
            />
            <MobileNavList list={"romantis"} type={romantis} />
          </div>

          <div className="py-2 border-y text-lg cursor-pointer">
            <MobileNavCategory
              dropDown={edukasi}
              setDropDown={setEdukasi}
              name={t("headerConstant.navLink.edukasi.title")}
            />
            <MobileNavList list={"edukasi"} type={edukasi} />
          </div>

          <div className="py-2 border-y text-lg cursor-pointer">
            <MobileNavCategory
              dropDown={sejarah}
              setDropDown={setSejarah}
              name={t("headerConstant.navLink.sejarah.title")}
            />
            <MobileNavList list={"sejarah"} type={sejarah} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
