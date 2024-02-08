import React, { useState } from "react";
import arrow from "../../assets/icons/arrow-right.svg";
// import styles from "../../App.module.css";
import coloredArrow from "../../assets/icons/colored-arrow.svg";

const CustomSolidBtn = ({ text, bgColor }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={` bg-${bgColor} border border-${bgColor} py-[1rem] px-[2.2rem] font-lexend text-[1rem] text-white rounded-[0.8rem] flex items-center gap-[0.62rem] max-[480px]:text-[0.8rem] max-[480px]:py-[0.8rem] max-[480px]:px-[1.6rem] hover:bg-white hover:text-dark-blue `}
    >
      {text}
      <span>
        {hovered ? (
          <img src={coloredArrow} alt="colored_arrow" />
        ) : (
          <img src={arrow} alt="arrow_right" />
        )}
      </span>
    </button>
  );
};

export default CustomSolidBtn;
