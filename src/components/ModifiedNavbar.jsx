import React from "react";
import Navbar from "./Navbar";

const ModifiedNavbar = ({ pageTitle }) => {
  return (
    <div className=" bg-plans-bg-img pb-[3rem] pt-[2rem] bg-cover bg-center ">
      <Navbar />
      <p className=" text-white text-center font-lexend text-[2.5rem] font-medium mt-[1.5rem] ">
        {" "}
        {pageTitle}{" "}
      </p>
    </div>
  );
};

export default ModifiedNavbar;
