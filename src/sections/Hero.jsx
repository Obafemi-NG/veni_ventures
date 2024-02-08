import React from "react";
import Navbar from "../components/Navbar";
import hero_image from "../assets/images/hero_img.png";
import CustomOutlinedBtn from "../components/UiComponents/CustomOutlinedBtn";
import heroLineSvg from "../assets/icons/hero_line_svg.svg";

const Hero = () => {
  return (
    <div className="bg-hero-bg-img bg-cover bg-center h-[100vh] relative ">
      <div className=" w-full h-full flex flex-col pt-[2rem]">
        <div className=" px-[2rem] max-[480px]:px-3  ">
          <Navbar />
        </div>
        <div className="h-[100%] w-full max-w-[1200px] m-auto px-3 ">
          <div className=" translate-y-[10%] 2xl:translate-y-[50%] top-[-50%]  flex flex-row items-center max-[480px]:flex-col max-[480px]:gap-y[3rem] ">
            <div className=" max-[480px]:mb-[2rem]  ">
              <img src={heroLineSvg} alt="hero_line_svg" />
              <h1 className="max-[480px]:text-[2.75rem] max-[480px]:w-[90%] font-sora text-[5.3rem] font-[600] w-[70%] text-white ">
                {" "}
                Money Talks, We{" "}
                <span className="gradient-text"> Translate</span>{" "}
              </h1>
              <p className=" w-[60%] text-white font-sora mb-[2rem] max-[480px]:w-[90%] max-[480px]:text-[0.83rem] max-[480px]:mb-[1rem] max-[480px]:mt-[1.1rem] ">
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
            <div className="w-[40%] max-[480px]:w-[80%]">
              <img src={hero_image} alt="hero_img" className="w-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
