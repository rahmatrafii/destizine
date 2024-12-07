import React from "react";

const ReservasiCategory = ({
  img,
  title,
  paragraph,
}: {
  img?: string;
  title?: string;
  paragraph?: string;
}) => {
  return (
    <div className="flex items-start mb-5 group cursor-pointer">
      <img
        src={`/static/icon/${img}`}
        className="w-[50px] h-[50px] mr-5 mb-3 group-hover:scale-125 transition duration-200"
      />
      <div>
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="font-light text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default ReservasiCategory;
