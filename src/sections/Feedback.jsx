import React from "react";
import swigglyIcon from "../assets/icons/dotted_icon.svg";
import FeedbackCard from "../components/UiComponents/FeedbackCard";
import client from "../assets/icons/client.svg";

const Feedback = () => {
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };
  const dummyData = [
    {
      id: 1,
      imgUrl: client,
      text: "Find the answers you need in a flash and take your next steps with confidence. Find the answers you need in a flash and take your next steps with confidence Find the answers",
    },
    {
      id: 2,
      imgUrl: client,
      text: "Find the answers you need in a flash and take your next steps with confidence. Find the answers you need in a flash and take your next steps with confidence Find the answers",
    },
    {
      id: 3,
      imgUrl: client,
      text: "Find the answers you need in a flash and take your next steps with confidence. Find the answers you need in a flash and take your next steps with confidence Find the answers",
    },
    {
      id: 4,
      imgUrl: client,
      text: "Find the answers you need in a flash and take your next steps with confidence. Find the answers you need in a flash and take your next steps with confidence Find the answers",
    },
    {
      id: 5,
      imgUrl: client,
      text: "Find the answers you need in a flash and take your next steps with confidence. Find the answers you need in a flash and take your next steps with confidence Find the answers",
    },
  ];
  return (
    <div className="relative">
      <div className="pt-[4.5rem] pb-[9rem] max-w-[1200px] m-auto pl-3 max-[480px]:pt-[3rem] max-[480px]:pb-[4rem] ">
        <h1 className=" font-lexend text-[2.5rem] font-[500] max-[480px]:text-center max-[480px]:text-[1.6rem] ">
          {" "}
          What Our Clients Say{" "}
        </h1>
        <div
          onWheel={handleScroll}
          className=" mt-[5rem] mb-[2.5rem] flex flex-nowrap overflow-x-scroll gap-[1rem] no-scrollbar max-[480px]:mt-[2.5rem] max-[480px]:z-10  "
        >
          {dummyData.map((data) => {
            return (
              <FeedbackCard
                key={data.id}
                id={data.id}
                text={data.text}
                imgUrl={data.imgUrl}
              />
            );
          })}
        </div>
      </div>
      <img
        src={swigglyIcon}
        alt="swiggly_icon"
        className=" absolute right-0 bottom-0 "
      />
    </div>
  );
};

export default Feedback;
