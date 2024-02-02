import React from "react";
import arrow from "../../assets/icons/arrow-right.svg";
// import styles from "../../App.module.css";

const CustomSolidBtn = ({ text, bgColor }) => {
  return (
    <button
      className={` bg-${bgColor}  py-[1rem] px-[2.2rem] font-lexend text-[1rem] text-white rounded-[0.8rem] flex items-center gap-[0.62rem]`}
    >
      {text}
      <span>
        {" "}
        <img src={arrow} alt="arrow_right" />{" "}
      </span>
    </button>
  );
};

export default CustomSolidBtn;
