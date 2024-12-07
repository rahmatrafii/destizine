import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const LinkFooter = ({ title, index }: { title: string; index: string }) => {
  const { t } = useTranslation();

  const elements = [];

  for (let i = 0; i < 7; i++) {
    elements.push(`footerConstant.content.${index}.lists.${i}`);
  }

  return (
    <div className="mb-5">
      <h6 className="text-base text-black mb-3 font-semibold">{title}</h6>
      <div className="flex text-sm flex-col gap-y-2 text-text-3">
        {elements.map((item) => (
          <Link href={""} key={item}>
            {t(`${item}`)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkFooter;
