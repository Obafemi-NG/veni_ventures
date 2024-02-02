import React from "react";

const ServiceCard = ({ imgUrl, title, paragraph }) => {
  return (
    <div className=" pt-[7rem] ">
      <img src={imgUrl} alt="title" />
      <h4 className=" font-lexend font-[600] py-[0.86rem] w-[60%] text-[1.4rem] ">
        {" "}
        {title}{" "}
      </h4>
      <p> {paragraph} </p>
    </div>
  );
};

export default ServiceCard;
