import Link from "next/link";
import React from "react";

const CardFavorite = ({
  src,
  name,
  location,
  isBlur,
}: {
  src?: string;
  name?: string;
  location?: string;
  isBlur: boolean;
}) => {
  return (
    <Link
      href={"/"}
      className="relative block rounded-lg overflow-hidden h-[280px] md:h-[340px] lg:h-[400px] shadow-xl"
    >
      <img
        src={`/static/image/destinasi/${src}`}
        className={`${
          isBlur ? "blur-sm" : "blur-0 "
        } h-full w-auto transition-all duration-200 object-cover hover:blur-0 `}
      />
      <div className="absolute bottom-0 left-0 p-2 bg-white backdrop-blur-[1px] bg-opacity-60 rounded-tr-lg font-semibold">
        <p className="text-sm text-black mb-1">{name}</p>
        <p className="text-xs text-black text-opacity-60">{location}</p>
      </div>
    </Link>
  );
};

export default CardFavorite;
