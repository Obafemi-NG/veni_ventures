import React from "react";
import ModifiedNavbar from "../components/ModifiedNavbar";
import Footer from "../components/Footer";

import blendImage from "../assets/icons/blend-image.svg";

const About = () => {
  return (
    <div className=" h-[100vh]  relative ">
      <img
        src={blendImage}
        alt="blend_image"
        className=" absolute top-[28rem]"
      />
      <ModifiedNavbar pageTitle="About Us" />

      <div className=" max-w-[1200px] m-auto flex flex-col items-center p-[5rem] ">
        <h1 className=" font-lexendDeca text-[2.5rem] font-[600] text-dark-blue mb-[2.5rem] ">
          {" "}
          Welcome to{" "}
          <span className=" text-light-blue ">
            Veni Discere Investments
          </span>{" "}
        </h1>
        <p className=" text-text-gray text-center w-[90%] leading-[180%]">
          {" "}
          Where "I came to learn" is not just a name but a philosophy ingrained
          in our ethos. Knowledge, community, and superintendence form the
          pillars of our commitment to empower you in the cryptocurrency market.
          We are a decision support firm for cryptocurrency traders providing
          precise signals and market insights. As a group, we've invested
          countless hours in research and strategic planning, transcending the
          challenges posed by market makers and whales. Enlightened with the
          ability to assess investments and positions strategically, we don't
          compete against financial giants; we align with them, providing you
          with a gateway to walk alongside market leaders. Our success lies in
          building a robust community, aimed at widening the knowledge of mass
          retail and awakening those determined to succeed.
        </p>
        <p className="text-text-gray text-center w-[90%] leading-[180%]">
          Internationally diverse, our research group spans from Singapore to
          London, delivering precise signals, actionable insights, and account
          management services. Committed to continuous innovation, Veni Discere
          actively reinvests a significant portion of our revenue into research
          and development, ensuring our community stays ahead in the
          ever-evolving cryptocurrency trading landscape. Whether you're a
          beginner or an experienced investor, Veni Discere Investments is here
          to offer the support and guidance you need for success. Knowledge is
          power, and at Veni Discere, we're here to empower you on your
          financial journey.
        </p>
        <div className=" mt-[1rem] flex flex-col items-center gap-y-[2.8rem] ">
          <div>
            <h1 className="font-lexendDeca text-[2.5rem] font-[600] text-center text-light-blue mb-[0.9rem]">
              {" "}
              Our Promise{" "}
            </h1>
            <p className=" text-dark-blue text-center leading-[180%]">
              {" "}
              We convert insight into foresight.{" "}
            </p>
          </div>
          <div className=" w-[50%] ">
            <h1 className="font-lexendDeca text-[2.5rem] font-[600] text-center text-light-blue mb-[0.9rem]">
              {" "}
              Our Mission{" "}
            </h1>
            <p className=" text-dark-blue text-center leading-[180%] ">
              Empower our clients through knowledge, community and strategic
              navigation for financial success.
            </p>
          </div>
          <div className=" w-[45%] ">
            <h1 className="font-lexendDeca text-[2.5rem] font-[600] text-center text-light-blue mb-[0.9rem]">
              {" "}
              Vision{" "}
            </h1>
            <p className=" text-dark-blue text-center leading-[214.5%] ">
              Provide a panoramic view of the cryptocurrency market for
              investors globally, through pioneering analytic protocols and
              collaborative engagement.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
