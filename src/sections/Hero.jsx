import React from "react";
import Navbar from "../components/Navbar";
import hero_image from "../assets/images/hero_img.png";
import CustomOutlinedBtn from "../components/UiComponents/CustomOutlinedBtn";

const Hero = () => {
  return (
    <div className="bg-hero-bg-img bg-cover bg-center h-[100vh] relative ">
      <div className=" w-full h-full flex flex-col pt-[2rem]">
        <Navbar />
        <div className="h-[100%] w-full max-w-[1200px] m-auto ">
          <div className=" translate-y-[10%] 2xl:translate-y-[50%] top-[-50%]  flex flex-row items-center">
            <div className="  ">
              <h1 className=" font-sora text-[5.3rem] font-[600] w-[70%] text-white ">
                {" "}
                Money Talks, We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gradient-light-blue to-gradient-dark-blue ">
                  {" "}
                  Translate
                </span>{" "}
              </h1>
              <p className=" w-[60%] text-white font-sora mb-[2rem] ">
                Consistently precise crypto signals, analysis and strategies. We
                don't compete against the whales; we join them, providing you
                with a gateway to walk alongside market leaders.  
              </p>
              <CustomOutlinedBtn
                text="Join Now"
                outlineColor="white"
                hoverBg="light-blue"
              />
            </div>
            <div className="w-[40%]">
              <img src={hero_image} alt="hero_img" className="w-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
