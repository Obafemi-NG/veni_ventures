import React from "react";

const FeedbackCard = ({ id, imgUrl, text }) => {
  return (
    <div
      className={`backdrop-filter-[blur(21.928443908691406px)] bg-backdrop-white min-w-[30rem] h-[17rem] rounded-[1rem] p-[0.67rem] `}
    >
      <div
        className={`w-full h-full ${
          id === 1 || id % 2 !== 0 ? `bg-white` : `bg-light-blue`
        } rounded-[0.73rem] py-[1.7rem] px-[2rem] `}
      >
        <div className=" flex items-center gap-x-[1.3rem] mb-[2rem] ">
          <img src={imgUrl} alt="client_img" />
          <p
            className={`font-lexend font-600 text-[1.2rem] ${
              id === 1 || id % 2 !== 0 ? `text-black` : `text-white`
            }`}
          >
            {" "}
            Chris Morgan{" "}
          </p>
        </div>
        <p
          className={`font-lexend text-gray/60 text-[0.9rem] leading-[177.5%] ${
            id === 1 || id % 2 !== 0 ? `text-black` : `text-white`
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
