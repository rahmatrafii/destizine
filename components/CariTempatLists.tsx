import React, { ReactNode } from "react";
import { MdAddLocationAlt } from "react-icons/md";

const CariTempatLists = ({
  icon,
  title,
  paragraph,
}: {
  icon?: ReactNode;
  title?: string;
  paragraph?: string;
}) => {
  return (
    <div className="flex justify-start gap-x-2">
      <div className="text-lg text-black">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg lg:text-xl mb-1">{title}</h3>
        <p className="font-light text-sm lg:text-base text-text-2">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default CariTempatLists;
