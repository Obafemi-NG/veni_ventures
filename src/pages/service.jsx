import React from "react";
import ModifiedNavbar from "../components/ModifiedNavbar";
import MembershipPlan from "../sections/MembershipPlan";
import AccountMgt from "../sections/AccountMgt";
import Footer from "../components/Footer";
import About from "../sections/About";
import Contact from "../sections/Contact";

const Service = () => {
  return (
    <div className=" h-[100vh] ">
      <ModifiedNavbar pageTitle="Services" />
      <MembershipPlan />
      <AccountMgt />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Service;
