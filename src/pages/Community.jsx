import React from "react";
import Navbar from "../components/Navbar";

import discord from "../assets/icons/discord.svg";
import telegram from "../assets/icons/telegram.svg";
import x from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import pinterest from "../assets/icons/pinterest.svg";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className=" bg-community_bg_img bg-cover bg-center  ">
      <div className="h-[100vh] w-full py-[3rem] flex flex-col items-start max-[480px]:px-4 max-[480px]:pt-[1.4rem]  ">
        <Navbar />
        <div className=" max-w-[1200px] mx-auto flex flex-col items-center m-auto ">
          <h1 className="font-lexendDeca text-[4rem] font-[600] text-white mb-[2rem] max-[480px]:text-[2.4rem] max-[480px]:text-center  ">
            {" "}
            Join the VDI Community{" "}
          </h1>
          <p className=" text-white w-[60%] text-center text-[1.1rem] mb-[2rem] max-[480px]:w-[90%] max-[480px]:leading-[2rem] ">
            {" "}
            Join a dynamic network of like-minded individuals. Engage in
            collaborative learning, stay informed with real-time updates, and
            celebrate successes together.{" "}
          </p>
          <button
            className={` bg-light-blue  py-[1rem] px-[2.2rem] font-lexend text-[1rem] text-white rounded-[0.8rem] flex items-center gap-[0.62rem] mb-[2.5rem] `}
          >
            Join Discord
            <span>
              {" "}
              <img src={discord} alt="discord_icon" />{" "}
            </span>
          </button>
          <div className=" flex gap-x-[1.4rem]  ">
            <Link>
              {" "}
              <img src={discord} alt="discord" />{" "}
            </Link>
            <Link>
              {" "}
              <img src={telegram} alt="telegram" />{" "}
            </Link>
            <Link>
              {" "}
              <img src={x} alt="x" />{" "}
            </Link>
            <Link>
              {" "}
              <img src={facebook} alt="facebook" />{" "}
            </Link>
            <Link>
              {" "}
              <img src={instagram} alt="instagram" />{" "}
            </Link>
            <Link>
              {" "}
              <img src={tiktok} alt="tiktok" />{" "}
            </Link>
            <Link>
              {" "}
              <img src={pinterest} alt="pinterest" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
