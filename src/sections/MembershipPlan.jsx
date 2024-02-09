import React from "react";
import bulletPoint from "../assets/icons/check_icon.svg";
import swigglyLine from "../assets/icons/swiggly_arrow.svg";
import dots from "../assets/icons/domino_icon.svg";
import ipad from "../assets/images/hero_img.png";

import CustomSolidBtn from "../components/UiComponents/CustomSolidBtn";

const MembershipPlan = () => {
  const membershipList = [
    {
      id: 1,
      text: "Elevate your trading with our precision signals and expert guidance",
    },
    {
      id: 2,
      text: "Real-time updates to keep you ahead of market movements.",
    },
    {
      id: 3,
      text: "Community access for collaborative insights",
    },
    {
      id: 4,
      text: "Weekly/monthly market analysis for comprehensive market understanding",
    },
    {
      id: 5,
      text: "Engage in polls to influence the selection of trading pairs for in-depth analysis",
    },
    {
      id: 6,
      text: "Access a wealth of educational content designed to arm you with the foresight you need to make informed decisions",
    },
    {
      id: 7,
      text: "24/7 support, ensuring assistance is always within reach",
    },
    {
      id: 8,
      text: "Unlock custom deep analysis for a tailored investment approach at $99",
    },
  ];
  return (
    <div className=" py-[6rem] max-w-[1200px] m-auto flex max-[480px]:flex-col max-[480px]:px-4 max-[480px]:pt-[2.4rem] max-[480px]:gap-y-[3rem] ">
      <div className=" w-[55%] max-[480px]:w-full ">
        <h1 className=" font-lexendDeca text-[4rem] font-[600] leading-[4.6rem] text-very-dark-blue max-[480px]:text-[2rem] ">
          {" "}
          Membership Plan{" "}
        </h1>
        <p className=" font-lexend text-text-gray mt-[1.25rem] ">
          {" "}
          Tailored to cater to traders at every level, our plan offers a
          spectrum of benefits, from essential signals to advanced analytics and
          a thriving community.
        </p>
        <div className=" flex flex-col gap-y-[2.4rem] mt-[2.6rem] w-[90%] mb-[3.6rem] max-[480px]:w-full ">
          {membershipList.map((data) => {
            return (
              <div
                key={data.id}
                className=" flex items-start gap-x-[0.75rem]  "
              >
                <img src={bulletPoint} alt="check_point" />
                <p className=" font-lexend text-[1.125rem] text-[#0a0a0a] ">
                  {" "}
                  {data.text}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <CustomSolidBtn
          bgColor="light-blue"
          text="Join Now for $179 per Month"
        />
      </div>
      <div className=" w-[40%] flex items-center justify-center relative  max-[480px]:w-[90%] max-[480px]:mt-[2rem] ">
        <img src={ipad} alt="phone" className=" w-[70%] z-10 " />
        <img
          src={swigglyLine}
          alt="swiggly_line"
          className=" absolute left-[-1rem] bottom-[10rem] max-[480px]:w-[60%] max-[480px]:left-[1rem] max-[480px]:bottom-0 "
        />
        <img
          src={dots}
          alt="dots"
          className=" absolute right-4 max-[480px]:right-2 "
        />
      </div>
    </div>
  );
};

export default MembershipPlan;
