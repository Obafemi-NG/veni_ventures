import React from "react";
import spiral from "../assets/images/accoutn_mgt_img.png";
import mgtImg from "../assets/images/Rectangle 25.png";
import CustomSolidBtn from "../components/UiComponents/CustomSolidBtn";

const AccountMgt = () => {
  return (
    <div className=" bg-[#FAFAFA] py-[4rem] ">
      <div className=" max-w-[1200px] m-auto flex justify-between items-center  ">
        <div className=" w-[45%] relative ">
          <img src={spiral} alt="spiral" className="  " />
          <div className=" bg-light-gray-backdrop w-[60%] h-[60%] absolute top-[50%] translate-y-[-50%] left-[50%] p-[0.5rem] rounded-[1rem] translate-x-[-50%]  ">
            <img src={mgtImg} alt="mgt_img" />
          </div>
        </div>
        <div className=" w-[40%] ">
          <h1 className=" font-lexendDeca font-[600] text-[4rem] leading-[4.6rem] mb-[1.8rem] ">
            {" "}
            Account Management{" "}
          </h1>
          <p className=" font-lexend text-text-gray text-[1.125rem] font-[500] leading-[180%] mb-[1.8rem] ">
            {" "}
            Veni Discere Investments offers clients a highly personalized and
            goal oriented investment experience – one designed to help you reach
            the full potential of your portfolio. {" "}
          </p>
          <CustomSolidBtn bgColor="light-blue" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default AccountMgt;
