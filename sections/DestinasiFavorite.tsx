"use client";

import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import Link from "next/link";
import FavoriteList from "@/components/FavoriteLists";
const DestinasiFavorite = () => {
  const { t } = useTranslation();
  return (
    <section className="py-5 w-full  ">
      <div className="padding">
        <h5 className=" sub-text">{t("favoriteConstant.subText")}</h5>
        <div className="mb-3 flex items-center w-full justify-between">
          <h2 className="main-text mb-3 md:mb-5">
            {t("favoriteConstant.mainText")}
          </h2>
          <Link
            href={"/"}
            className="flex-center h-max text-sm text-main-1 whitespace-nowrap "
          >
            <p className="mr-2">{t("lihatSemua")}</p> <BsArrowRight />
          </Link>
        </div>
        <FavoriteList />
      </div>
    </section>
  );
};

export default DestinasiFavorite;
