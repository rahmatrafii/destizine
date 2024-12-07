import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <section className="py-14">
      <div className="padding">
        <h5 className="sub-text">{t("galleryAndBlog.subText")}</h5>
        <div className="mb-6 flex items-center w-full justify-between gap-x-4">
          <h2 className="main-text">{t("galleryAndBlog.mainText")}</h2>
          <Link
            href={"/"}
            className="flex-center h-max text-sm text-main-1 whitespace-nowrap "
          >
            <p className="mr-2">{t("lihatSemua")}</p> <BsArrowRight />
          </Link>
        </div>
        <div>
          <div className="flex gap-x-2 mb-2">
            <div className="w-[200px] h-[285px] md:w-[300px] md:h-[400px] rounded-md shadow-lg overflow-hidden">
              <div className="w-full">
                <img
                  src="/static/image/destinasi/gunung-bromo.png"
                  alt="gunung-bromo"
                  className="w-full object-contain"
                />
              </div>
              <div className="p-2 ">
                <p className="text-xs md:text-sm mb-[2px] md:mb-2 text-slate-400">
                  {t("galleryAndBlog.content.0.tanggal")}
                </p>
                <h6 className="text-sm md:text-base font-semibold mb-[2px] md:mb-2 text-black">
                  {t("galleryAndBlog.content.0.title")}
                </h6>
                <p className="text-xs md:text-sm mb-[2px] md:mb-2 text-slate-600">
                  {t("galleryAndBlog.content.0.description")}
                </p>
                <Link
                  className="text-xs md:text-sm text-main-1 whitespace-nowrap "
                  href={"/"}
                >
                  {t("bacaSelengkapnya")}
                </Link>
              </div>
            </div>
            <div className="flex-1 h-[285px] md:h-[400px]  rounded-md overflow-hidden shadow-md">
              <img
                src="/static/image/gallery.jpg"
                alt="gallery"
                className="h-full w-full  object-cover"
              />
            </div>
          </div>
          <div className="relative w-full h-[150px] md:h-[200px] rounded-md overflow-hidden shadow-md">
            <img
              src="/static/image/gallery2.jpg"
              alt="kawah ijen"
              className="w-full h-full object-cover "
            />
            <div className="absolute left-0 h-full p-5 w-full bottom-0 text-white bg-black bg-opacity-40 z-[2] flex items-start justify-end flex-col">
              <h5 className="text-sm md:text-base font-bold mb-3">
                {t("galleryAndBlog.content.1.title")}
              </h5>
              <p className="text-xs md:text-sm font-normal mb-4">
                {t("galleryAndBlog.content.1.description")}
              </p>
              <div className="flex gap-x-5 text-xs md:text-sm">
                <p> {t("galleryAndBlog.google")}</p>
                <p> {t("galleryAndBlog.trending")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
// md:bg-gradient-to-r md:from-slate-600 md:to-transparent
