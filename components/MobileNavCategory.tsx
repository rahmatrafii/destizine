import React, { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const MobileNavCategory = ({
  setDropDown,
  dropDown,
  name,
}: {
  setDropDown: Dispatch<SetStateAction<boolean>>;
  dropDown: boolean;
  name: string;
}) => {
  return (
    <div
      className="flex items-center justify-between peer"
      onClick={() => {
        setDropDown(!dropDown);
      }}
    >
      {name}
      <MdKeyboardArrowDown
        className={`${
          dropDown ? "rotate-180" : "rotate-0"
        } transition-transform duration-500`}
      />{" "}
    </div>
  );
};

export default MobileNavCategory;
