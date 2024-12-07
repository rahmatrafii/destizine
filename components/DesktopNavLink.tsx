import React from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";

const DesktopNavLink = ({ title, list }: { title: string; list: string }) => {
  const { t } = useTranslation();
  const elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(`headerConstant.navLink.${list}.content.${i}`);
  }

  return (
    <div className="relative cursor-pointer group">
      <p className="flex items-center gap-x-3 peer">
        {title} <MdKeyboardArrowDown />
      </p>
      <div className="absolute p-5 overflow-hidden shadow-lg rounded-lg w-max grid grid-cols-2 gap-6 translate-y-5 opacity-0 invisible bg-white  group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible duration-200">
        {elements.map((item: string) => (
          <p
            key={t(`${item}`)}
            className="hover:text-main-1 hover:scale-105 transition-all  duration-300 "
          >
            {t(`${item}`)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavLink;
