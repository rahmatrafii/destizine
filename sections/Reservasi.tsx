import ReservasiCategory from "@/components/ReservasiCategory";
import React from "react";
import { useTranslation } from "react-i18next";

const Reservasi = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-20">
      <div className="padding lg:flex flex-row-reverse items-start gap-x-5 lg:justify-between">
        <div className="relative w-full  flex-center  lg:w-1/2 mb-5 lg:mb-0 ">
          <img
            src="/static/image/image2.png"
            alt="card Reservasi"
            className="relative z-[2] w-full max-w-[700px] object-contain"
          />
          <div className="absolute w-[200px] h-[200px] z-[0] left-0  top-0  rounded-full opacity-80 bg-main-1 blur-[85px]" />
        </div>
        <div className="w-full lg:w-1/2">
          <h5 className="sub-text">{t("reservasiConstant.subText")}</h5>
          <h2 className="main-text mb-7"> {t("reservasiConstant.mainText")}</h2>
          <div className="">
            <ReservasiCategory
              img={t("reservasiConstant.ContentText.0.img")}
              title={t("reservasiConstant.ContentText.0.title")}
              paragraph={t("reservasiConstant.ContentText.0.paragraph")}
            />
            <ReservasiCategory
              img={t("reservasiConstant.ContentText.1.img")}
              title={t("reservasiConstant.ContentText.1.title")}
              paragraph={t("reservasiConstant.ContentText.1.paragraph")}
            />
            <ReservasiCategory
              img={t("reservasiConstant.ContentText.2.img")}
              title={t("reservasiConstant.ContentText.2.title")}
              paragraph={t("reservasiConstant.ContentText.2.paragraph")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservasi;
