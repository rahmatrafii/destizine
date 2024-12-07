import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const MobileNavList = ({ list, type }: { list: string; type: boolean }) => {
  const { t } = useTranslation();
  const elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(`headerConstant.navLink.${list}.content.${i}`);
  }

  return (
    <div
      className={`${
        type
          ? "max-h-[400px]  transition-[max-height] border-main-1 duration-500"
          : "max-h-0 transition-[max-height] duration-500 border-white"
      } bg-slate-200 text-sm font-light rounded-md flex flex-col  border-t-[2px] overflow-hidden transition-[max-height] duration-500`}
    >
      {elements.map((item) => (
        <Link href={"/"} key={item} className="m-2 ">
          {t(item).length > 19 ? `${t(item).slice(0, 19)}...` : t(item)}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavList;
