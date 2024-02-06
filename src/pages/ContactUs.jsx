import React from "react";
import ModifiedNavbar from "../components/ModifiedNavbar";

import vector from "../assets/icons/contact-vector.svg";
import CustomSolidBtn from "../components/UiComponents/CustomSolidBtn";

const ContactUs = () => {
  return (
    <div className=" h-[100vh] relative ">
      <ModifiedNavbar pageTitle="Contact Us" starNeeded={true} />
      <div className=" max-w-[1200px] mx-auto flex justify-center mt-[-2rem]  ">
        <div className=" bg-dark-blue w-[80%] py-[2rem] flex flex-col items-center ">
          <h1 className=" font-lexendDeca text-light-blue text-[2.2rem] font-[600]  ">
            {" "}
            Get in touch with us{" "}
          </h1>
          <p className=" font-lexendDeca text-white text-[1rem] text-center w-[60%] mt-[0.2rem] ">
            {" "}
            Got a question? Make your enquiries below and a member of the team
            will contact you shortly.{" "}
          </p>
          <form
            className=" w-[70%] mt-[1rem] flex flex-col gap-[1.2rem] "
            action=""
          >
            <div className=" w-full  flex justify-between  ">
              <input
                type="text"
                placeholder="Name:"
                className=" w-[45%] py-[0.6rem] px-[0.8rem] outline-none "
              />
              <input
                type="text"
                placeholder="Phone No: "
                className=" w-[45%] py-[0.6rem] px-[0.8rem] outline-none "
              />
            </div>
            <input
              type="text"
              placeholder="Email Address: "
              className=" w-full py-[0.6rem] px-[0.8rem] outline-none "
            />
            <textarea
              name="Message"
              id=""
              rows="5"
              placeholder="Message"
              className="py-[0.6rem] px-[0.8rem] outline-none"
            ></textarea>
            <div className=" mx-auto ">
              <CustomSolidBtn bgColor="light-blue" text="Submit" />
            </div>
          </form>
        </div>
      </div>
      <img
        src={vector}
        alt="contact-vector"
        className=" absolute bottom-[-6rem] 2xl:bottom-0 right-0 "
      />
    </div>
  );
};

export default ContactUs;
