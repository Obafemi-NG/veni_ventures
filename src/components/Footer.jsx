import React from "react";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import discord from "../assets/icons/discord.svg";
import telegram from "../assets/icons/telegram.svg";
import x from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import pinterest from "../assets/icons/pinterest.svg";

const Footer = () => {
  return (
    <div className=" bg-footer-bg pt-[2rem] pb-[2.8rem] ">
      <div className=" max-w-[1200px] border-t border-gray m-auto flex items-center justify-between pt-[1rem] max-[480px]:flex-col max-[480px]:mx-3 ">
        <img
          src={logo}
          alt="logo"
          className=" w-[7rem] max-[480px]:self-start "
        />
        <div className="flex items-center max-[480px]:flex-col ">
          <div className=" text-white flex gap-x-[1.1rem] mr-[1.2rem] max-[480px]:text-[0.8rem]  max-[480px]:self-start max-[480px]:my-[1rem] max-[480px]:gap-y-[0.6rem]  ">
            <p> © All Rights Reserved 2024 | Veni Discere Investment</p>
            <span>|</span>
            <p className=" max-[480px]:text-[1rem] ">
              <Link to="/faq">FAQs</Link>
            </p>
          </div>
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

export default Footer;
