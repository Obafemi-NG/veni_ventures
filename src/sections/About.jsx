import React from "react";
import bespoke_icon from "../assets/icons/bespoke.svg";
import process_icon from "../assets/icons/process_svg.svg";
import culture_icon from "../assets/icons/culture.svg";

import blueBlackDrop from "../assets/images/blue_topdrop.png";

const About = () => {
  const aboutData = [
    {
      id: 1,
      iconUrl: bespoke_icon,
      heading: "Bespoke Approach",
      text: "We tailor our strategy to suit your individual goals, while helping you navigate volatility to protect and grow your portfolio.",
    },
    {
      id: 2,
      iconUrl: process_icon,
      heading: "Tested Process",
      text: "Our clients rely on an active management process that has been tested in virtually every market condition.",
    },
    {
      id: 3,
      iconUrl: culture_icon,
      heading: "Culture of Innovation",
      text: "Veni Discere is latin for “I came to learn” and is engrained in our ethos. Our dedicated team combines top-down macroeconomic view with bottom-up research and analysis to put our best ideas toward your portfolio.",
    },
  ];
  return (
    <div className=" py-[4rem] flex flex-col items-center max-w-[1200px] m-auto ">
      <h1 className=" font-lexendDeca text-[3.2rem] font-[600] text-very-dark-blue leading-[4.7rem] mb-[2rem] ">
        A Partner You Can Trust
      </h1>
      <p className=" text-text-gray text-[1.125rem] text-center w-[70%] leading-[180%] mb-[4rem] ">
        {" "}
        Prior to launching our global community, VDI has been working with a
        wide range of individual clients to help them achieve their financial
        goals while navigating the turbulent crypto market. We build our
        investment strategies around you: your goals, your risk tolerance, your
        liquidity and your values. We then use the resources and expertise of
        the entire firm to build a bespoke strategy for you, delivering a
        customized asset allocation and implementation plan.
      </p>
      <div className=" relative ">
        <div className=" bg-dark-blue pt-[4.5rem] pb-[3rem] px-[5rem] w-[100%] rounded-[1.6rem] text-white flex justify-between  ">
          {aboutData.map((data) => {
            return (
              <div key={data.id} className=" w-[32%]   ">
                <img
                  src={data.iconUrl}
                  alt={data.heading}
                  className=" w-[3rem] "
                />
                <h3 className=" font-sora text-[1.3rem] font-[700] mt-[2.5rem] mb-[1.8rem] ">
                  {" "}
                  {data.heading}{" "}
                </h3>
                <p className=" text-text-gray text-[1rem] font-sora ">
                  {" "}
                  {data.text}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <img
          src={blueBlackDrop}
          alt="blue_top_backdrop"
          className=" absolute top-[-1rem] w-[80%] z-[-1] left-[50%] translate-x-[-50%] "
        />
      </div>
    </div>
  );
};

export default About;
