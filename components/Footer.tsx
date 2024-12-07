"use client";
import React from "react";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";
import { Information } from "@/public/static/constant";
import LinkFooter from "./LinkFooter";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="pt-10 pb-4">
      <div className="padding lg:flex lg:gap-x-6">
        <div className="mb-6 lg:w-[40%]">
          <Icon />
          <p className="mt-3 mb-7 text-text-3 max-w-lg">
            {t("footerConstant.description")}
          </p>
          <div>
            {Information.map((item) => (
              <div
                className="flex gap-x-2  text-text-3 items-center mb-2"
                key={item.text}
              >
                {item.icon} <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[60%] sm:flex  sm:justify-between">
          <LinkFooter title={t("footerConstant.content.0.title")} index={"0"} />
          <LinkFooter title={t("footerConstant.content.1.title")} index={"1"} />
          <LinkFooter title={t("footerConstant.content.2.title")} index={"2"} />
        </div>
      </div>
      <p className="text-text-3 text-center text-sm">
        © 2022-2023, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
