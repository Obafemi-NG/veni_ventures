import React from "react";
import ModifiedNavbar from "../components/ModifiedNavbar";

// import star from "../assets/icons/longstar.svg";

// const pageTitle = () => {
//   return (
//     <div className=" flex items-center ">
//       <img src={star} alt="star_icon" />
//       <p> Contact Us </p>
//       <img src={star} alt="star_icon" />
//     </div>
//   );
// };

const ContactUs = () => {
  return (
    <div className=" h-[100vh] ">
      <ModifiedNavbar pageTitle="Contact Us" starNeeded={true} />
    </div>
  );
};

export default ContactUs;
