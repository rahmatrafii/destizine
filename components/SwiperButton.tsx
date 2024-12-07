import { useSwiper } from "swiper/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const SwiperButton = () => {
  const swiper = useSwiper();
  const { t } = useTranslation();

  const handleClick = (type: "next" | "prev") => {
    if (type == "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };
  return (
    <div className="relative bottom-0 right-0 z-[3] w-full flex justify-end items-center ">
      <div className="flex-center gap-x-5 md:text-lg m-3">
        <button
          className="p-1 md:p-2 rounded-md border-[2px] border-main-1 shadow-md"
          onClick={() => handleClick("prev")}
        >
          <BsArrowLeft />
        </button>
        <button
          className="p-1 md:p-2 rounded-md border-[2px] border-main-1 shadow-md"
          onClick={() => handleClick("next")}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};
