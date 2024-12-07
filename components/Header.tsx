"use client";
import { FaSearch } from "react-icons/fa";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { languages } from "@/public/static/constant";
import { langContext } from "@/context/context";
import MobileNav from "./MobileNav";
import Icon from "./Icon";
import DesktopNav from "./DesktopNav";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState("");
  const { showNav, setShowNav } = useContext(langContext);

  useEffect(() => {
    try {
      setLang(localStorage.getItem("lang") || "id");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
  return (
    <>
      <header className="fixed w-full left-0 top-0 h-[70px]  shadow bg-white z-[20]">
        <div className="flex w-full h-full items-center justify-between gap-x-5 padding">
          <div
            className={`${
              showNav ? "" : ""
            } flex flex-col cursor-pointer lg:hidden`}
            onClick={() => setShowNav(true)}
          >
            <span
              className={`${
                showNav
                  ? "delay-100 -translate-x-5 opacity-0 "
                  : "delay-100 -translate-x-0 opacity-100"
              } block w-[30px] h-[2px] bg-text-1 mb-1 transition-all duration-1000 `}
            ></span>
            <span
              className={`${
                showNav
                  ? "delay-200 -translate-x-5 opacity-0 "
                  : "delay-200 -translate-x-0 opacity-100"
              } block w-[30px] h-[2px] bg-text-1 mb-1 transition-all duration-1000`}
            ></span>
            <span
              className={`${
                showNav
                  ? "delay-300 -translate-x-5 opacity-0 "
                  : "delay-300 -translate-x-0 opacity-100"
              } block w-[30px] h-[2px] bg-text-1  transition-all duration-1000`}
            ></span>
          </div>

          <Icon />

          <div className="hidden md:flex  flex-1 max-w-2xl">
            <p className="bg-slate-100 text-text-3 rounded-l-full p-3 ">
              <FaSearch />
            </p>
            <input
              type="text"
              className=" flex-1 bg-slate-100 rounded-r-full focus:border-none focus:outline-none placeholder:font-extralight placeholder:text-sm "
              placeholder={t("headerConstant.placeholder")}
            />
          </div>

          <div className="hidden lg:flex gap-x-2 text-text-3">
            <label htmlFor="language">
              <img
                src="/static/icon/global.svg"
                alt="global"
                className="hidden lg:block w-[24px] cursor-pointer"
              />
            </label>
            <select
              name="language"
              id="language"
              className="focus:outline-none focus:border-none cursor-pointer"
              value={lang}
              onChange={(e) => handleChangeLang(e)}
            >
              {languages.map((item) => (
                <option
                  value={item.value}
                  key={item.value}
                  className="cursor-pointer"
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-center gap-x-3  text-base ">
            <button className="text-lg md:hidden text-text-2">
              <FaSearch />{" "}
            </button>
            <div className="flex-center  text-sm">
              <div className="w-[30px] h-[30px] flex-center bg-main-3 rounded-full mr-2">
                <img
                  src="/static/icon/location.svg"
                  alt="location"
                  className="w-[15px] object-contain"
                />
              </div>
              <p className="text-main-1 font-semibold text-sm flex whitespace-nowrap">
                Jawa Timur<span className="hidden sm:block">, Indonesia</span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

export default Header;
