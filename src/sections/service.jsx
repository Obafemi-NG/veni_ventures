import React from "react";
import target_icon from "../assets/icons/target.svg";
import fluent_icon from "../assets/icons/fluent.svg";
import analysis_icon from "../assets/icons/analysis.svg";
import community_icon from "../assets/icons/people.svg";
import ServiceCard from "../components/UiComponents/ServiceCard";
import CustomSolidBtn from "../components/UiComponents/CustomSolidBtn";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      imgUrl: target_icon,
      title: "Precision Signals",
      paragraph:
        "We integrate in-depth analysis with a comprehensive strategic perspective of the market to craft our signals with precision. Enhance your trades with a remarkable 90% success rate.",
    },
    {
      id: 2,
      imgUrl: fluent_icon,
      title: "Insight into Foresight",
      paragraph:
        "Our cutting-edge analysis protocols decipher market trends, offering you a panoramic view of lucrative opportunities and potential pitfalls.",
    },
    {
      id: 3,
      imgUrl: analysis_icon,
      title: "Custom Deep Analysis",
      paragraph:
        "Our expert team will delve into the intricacies of your chosen asset, providing you with a bespoke analysis designed to meet your unique investment goals.",
    },
    {
      id: 4,
      imgUrl: community_icon,
      title: "Community",
      paragraph:
        "Join a dynamic network of like-minded individuals. Engage in collaborative learning, stay informed with real-time updates, and celebrate successes together.",
    },
  ];
  return (
    <section className=" py-[4.5rem] max-w-[1200px] m-auto max-[480px]:px-3 max-[480px]:py-[3rem] ">
      <h1 className=" font-lexend text-[2.5rem] font-[500] max-[480px]:text-[1.4rem] ">
        Empowering Your Every Trade
      </h1>
      <div className=" flex gap-x-[3rem] border-t mt-[4rem] border-[gray] max-[480px]:flex-wrap max-[480px]:mt-[2rem] max-[480px]:border-l max-[480px]:border-t-0 max-[480px]:[&>*:first-child]:border-l-[0.2rem] max-[480px]:[&>*:first-child]:border-l-light-blue max-[480px]:[&>*:first-child]:border-t-0  max-[480px]:gap-y-[2rem] [&>*:first-child]:border-t-[0.2rem] [&>*:first-child]:border-light-blue  ">
        {serviceData.map((data) => {
          return (
            <ServiceCard
              key={data.id}
              imgUrl={data.imgUrl}
              paragraph={data.paragraph}
              title={data.title}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-[4rem]">
        <CustomSolidBtn bgColor="dark-blue" text="Join Now" />
      </div>
    </section>
  );
};

export default Service;
