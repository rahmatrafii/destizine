"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdAddLocationAlt } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import CariTempatLists from "@/components/CariTempatLists";
const CariTempat = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 w-full">
      <div className="padding">
        <h5 className="sub-text text-center mb-3">
          {t("cariTempatConstant.subText")}
        </h5>
        <h2 className="main-text text-center mb-3 md:mb-6">
          {t("cariTempatConstant.mainText")}
        </h2>
        <p className="paragraph text-center mx-auto mb-3">
          {t("cariTempatConstant.paragraph")}
        </p>
        <img
          src="/static/image/map.svg"
          alt="map"
          className="w-full object-contain mb-5"
        />
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-2 lg:gap-x-4">
          <CariTempatLists
            icon={<MdAddLocationAlt />}
            title={t("cariTempatConstant.category.0.title")}
            paragraph={t("cariTempatConstant.category.0.paragraph")}
          />
          <CariTempatLists
            icon={<MdFavorite />}
            title={t("cariTempatConstant.category.1.title")}
            paragraph={t("cariTempatConstant.category.1.paragraph")}
          />
          <CariTempatLists
            icon={<FaPeopleGroup />}
            title={t("cariTempatConstant.category.2.title")}
            paragraph={t("cariTempatConstant.category.2.paragraph")}
          />
        </div>
      </div>
    </section>
  );
};

export default CariTempat;
