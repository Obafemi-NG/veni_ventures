import React from "react";
import CustomSolidBtn from "../components/UiComponents/CustomSolidBtn";
import CustomOutlinedBtn from "../components/UiComponents/CustomOutlinedBtn";
import logo_head from "../assets/icons/logo_head.svg";

const Plans = () => {
  return (
    <div className=" bg-plans-bg-img bg-cover bg-center py-[4.5rem] flex flex-col items-center">
      <h1 className=" text-white font-lexend text-[2.5rem] font-[500] ">
        {" "}
        We Have a Plan for You{" "}
      </h1>
      <div className=" flex items-center text-white gap-[5rem] text-[1.5rem] font-lexend text-[500] my-[6.2rem] ">
        <div className=" text-right flex flex-col gap-y-[3rem] ">
          <p> Precise Trading Signals </p>
          <p> Real-Time Trade Alerts </p>
          <p> Market Analysis </p>
        </div>
        <img src={logo_head} alt="logo_head" />
        <div className="flex flex-col gap-y-[3rem]">
          <p> Private Community Access </p>
          <p> Custom Deep Analysis </p>
          <p> Educational Content </p>
        </div>
      </div>
      <h3 className=" text-white text-[1.8rem] font-lexend "> 24/7 Support </h3>
      <div className="flex gap-[1.25rem] mt-[5rem]">
        <CustomSolidBtn text="Join Now" bgColor="light-blue" />
        <CustomOutlinedBtn text="Learn More" outlineColor="white" />
      </div>
    </div>
  );
};

export default Plans;
