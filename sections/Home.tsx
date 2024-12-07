"use client";
import { FaArrowRight, FaPlay } from "react-icons/fa";

import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="  pt-24 pb-5 lg:py-[0px] w-full">
      <div className="w-full padding  sub-text lg:flex">
        <div className="mb-12 w-full lg:w-1/2">
          <h5 className="py-2 flex-center gap-x-3 font-bold text-[12px] tracking-wide sm:text-[16px] px-5 bg-main-3 text-main-1 rounded-full mb-2 w-max">
            <img
              src="/static/icon/pesawat.svg"
              className="w-[25px] h-[25px] object-contain"
            />
            {t("homeConstant.subText")}
          </h5>
          <h1 className="text-text-1   text-[40px] sm:text-[55px] md:text-[65px] lg:text-[55px] xl:text-[65px] font-extrabold mb-2 max-w-2xl">
            {t("homeConstant.mainText.0")}
            <span className="text-main-1">{t("homeConstant.mainText.1")}</span>
            {t("homeConstant.mainText.2")}
          </h1>
          <p className="text-text-2 mb-5 text-sm sm:text-base lg:text-lg max-w-2xl font-normal">
            {t("homeConstant.paragraphs")}
          </p>
          <div className="flex gap-x-3">
            <button className="flex-center gap-x-3 bg-main-1 text-white py-2 px-6 text-xs md:text-sm font-semibold rounded-lg group">
              <p> {t("homeConstant.button1")}</p>
              <FaArrowRight className="group-hover:translate-x-2 transition duration-200 ease-in-out" />{" "}
            </button>
            <button className="flex-center gap-x-3 bg-white py-2 px-6 text-xs md:text-sm font-semibold rounded-lg group">
              <div className="text-main-1 w-8 rounded-full h-8 border border-main-1 flex-center shadow-lg shadow-main-3 group-hover:scale-125 group-hover:shadow-2xl transition duration-200 ease-in-out">
                <FaPlay className="" />
              </div>{" "}
              {t("homeConstant.button2")}
            </button>
          </div>
        </div>
        <div className="mb-10 w-full lg:w-1/2 ">
          <img
            src={"/static/image/main-img2.svg"}
            alt="Travel"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
