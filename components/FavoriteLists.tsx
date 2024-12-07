"use client";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import CardFavorite from "@/components/CardFavorite";
import { SwiperButton } from "@/components/SwiperButton";
import { useState } from "react";

const FavoriteList = () => {
  const [isBlur, setIsBlur] = useState(false);
  const { t } = useTranslation();
  const elements = [];
  for (let i = 0; i < 9; i++) {
    elements.push(`favoriteConstant.image.${i}`);
  }
  return (
    <Swiper
      modules={[Pagination, Navigation, A11y]}
      className="relative "
      draggable={false}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperButton />
      <div className="relative z-[1] ">
        {elements.map((item) => (
          <SwiperSlide
            key={item}
            className="p-2 "
            onMouseEnter={() => setIsBlur(true)}
            onMouseLeave={() => setIsBlur(false)}
          >
            <CardFavorite
              name={t(`${item}.name`)}
              src={t(`${item}.src`)}
              location={t(`${item}.location`)}
              isBlur={isBlur}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default FavoriteList;
