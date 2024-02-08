import React from "react";
import CustomSolidBtn from "../components/UiComponents/CustomSolidBtn";
import CustomOutlinedBtn from "../components/UiComponents/CustomOutlinedBtn";
import logo_head from "../assets/icons/logo_head.svg";

const Plans = () => {
  const handleAcctMgt = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" bg-plans-bg-img bg-cover bg-center ">
      <div className=" max-w-[1200px] mx-auto py-[4.5rem] flex flex-col items-center max-[480px]:px-3  ">
        <h1 className=" text-white font-lexend text-[2.5rem] font-[500] max-[480px]:text-[1.6rem] ">
          {" "}
          We Have a Plan for You{" "}
        </h1>
        <div className="max-[480px]:flex-col flex items-center text-white gap-[5rem] text-[1.5rem] font-lexend text-[500] my-[6.2rem] max-[480px]:gap-[1.5rem] max-[480px]:mt-[3.2rem] max-[480px]:mb-[1.5rem] max-[480px]:self-start max-[480px]:text-[1rem] ">
          <div className=" text-right flex flex-col gap-y-[3rem] max-[480px]:text-left max-[480px]:w-[100%] max-[480px]:gap-y-[1.5rem]  ">
            <p> Precise Trading Signals </p>
            <p> Real-Time Trade Alerts </p>
            <p> Market Analysis </p>
          </div>
          <img
            src={logo_head}
            alt="logo_head"
            className=" max-[480px]:hidden "
          />
          <div className="flex flex-col gap-y-[3rem] max-[480px]:gap-y-[1.5rem]">
            <p> Private Community Access </p>
            <p> Custom Deep Analysis </p>
            <p> Educational Content </p>
          </div>
        </div>
        <h3 className=" text-white text-[1.5rem] font-lexend max-[480px]:self-start max-[480px]:text-[1rem] ">
          {" "}
          24/7 Support{" "}
        </h3>
        <div className="flex gap-[1.25rem] mt-[5rem] max-[480px]:mt-[3rem] max-[480px]:flex-wrap ">
          <CustomSolidBtn text="Join Now" bgColor="light-blue" />
          <button
            onClick={handleAcctMgt}
            className=" bg-gradient-to-b from-gradient-light-gold to-gradient-dark-gold py-[1rem] px-[2.2rem] font-lexend text-[1rem] text-white rounded-[0.8rem] max-[480px]:text-[0.8rem] max-[480px]:py-[0.8rem] max-[480px]:px-[1.6rem] "
          >
            {" "}
            Account Management{" "}
          </button>
          <CustomOutlinedBtn text="Learn More" outlineColor="white" />
        </div>
      </div>
    </div>
  );
};

export default Plans;
