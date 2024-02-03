import React from "react";
import Navbar from "./Navbar";

import star from "../assets/icons/longstar.svg";

const ModifiedNavbar = ({ pageTitle, starNeeded }) => {
  return (
    <div className="h-[16rem]">
      <div className=" bg-plans-bg-img pb-[3rem] pt-[2rem] bg-cover bg-center flex flex-col h-full ">
        <Navbar />
        <p className=" text-white text-center font-lexend text-[2.5rem] font-medium mt-[1.5rem] flex items-center justify-center gap-x-[1rem] ">
          {starNeeded && (
            <img src={star} alt="star_icon" className=" w-[1.6rem] " />
          )}{" "}
          {pageTitle}
          {starNeeded && (
            <img src={star} alt="star_icon" className=" w-[1.6rem] " />
          )}
        </p>
      </div>
    </div>
  );
};

export default ModifiedNavbar;
