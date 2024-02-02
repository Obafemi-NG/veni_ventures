import React from "react";
import CustomOutlinedBtn from "../components/UiComponents/CustomOutlinedBtn";

const Contact = () => {
  return (
    <div className=" bg-contact-section_bg_img bg-cover bg-center ">
      <div className="h-full w-full bg-dark-blue/60 backdrop-brightness-75 py-[4rem] ">
        <div className=" flex flex-col items-center ">
          <h1 className=" text-[2.25rem] text-white font-lexend font-[700] text-center w-[60%] mb-[1.5rem] ">
            {" "}
            We’d be happy to connect and discuss our services with you{" "}
          </h1>
          <CustomOutlinedBtn outlineColor="white" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
