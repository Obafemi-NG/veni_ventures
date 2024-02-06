import React from "react";
import arrow from "../../assets/icons/arrow-right.svg";

const CustomOutlinedBtn = ({ text, outlineColor, hoverBg, hoverTextColor }) => {
  return (
    <button
      className={` border border-${outlineColor} py-[1rem] px-[2.2rem] font-lexend text-[1rem] text-white rounded-[0.8rem] flex items-center gap-[0.62rem] hover:bg-${hoverBg} hover:bg-light-blue hover:text-dark-blue  `}
    >
      {text}{" "}
      <span>
        {" "}
        <img src={arrow} alt="arrow_right" />{" "}
      </span>
    </button>
  );
};

export default CustomOutlinedBtn;
