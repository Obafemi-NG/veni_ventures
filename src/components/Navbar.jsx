import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const mobileNavVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="max-[480px]:px-[1rem] px-[2rem] w-[100%] max-w-[1200px] mx-auto bg-[#ffffff0a] rounded-[0.625rem] border border-[#ffffff17] flex justify-between items-center ">
      <div
        className=" cursor-pointer py-[1rem] max-[480px]:w-[8rem]"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </div>
      <ul className=" max-[480px]:hidden flex gap-x-[5rem] font-inter text-white h-full items-center  ">
        <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer h-[100%] flex items-center justify-center  ">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "h-[100%] flex items-center justify-center border-b border-light-blue "
                : ""
            }
          >
            About{" "}
          </NavLink>
        </li>
        <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer h-[100%] flex items-center justify-center ">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "  h-[100%] flex items-center justify-center border-b border-light-blue "
                : ""
            }
          >
            Services
          </NavLink>
        </li>
        <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer h-[100%] flex items-center justify-center  ">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "h-[100%] flex items-center justify-center border-b border-light-blue "
                : ""
            }
          >
            Blog
          </NavLink>
        </li>
        <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer h-[100%] flex items-center justify-center  ">
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive
                ? "h-[100%] flex items-center justify-center border-b border-light-blue "
                : ""
            }
          >
            Testimonials
          </NavLink>
        </li>
        <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer h-[100%] flex items-center justify-center  ">
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive
                ? " h-[100%] flex items-center justify-center border-b border-light-blue "
                : ""
            }
          >
            Community
          </NavLink>
        </li>
      </ul>
      <img
        src={menuIcon}
        alt="menu_icon"
        className="min-[480px]:hidden "
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <motion.div
          variants={mobileNavVariant}
          initial="initial"
          animate="visible"
          exit="exit"
          className="fixed w-full h-[100vh] right-0 top-0 py-[3.5rem] px-[2rem] bg-very-dark-blue z-20"
        >
          <div className=" flex justify-end mb-[3rem] ">
            <FontAwesomeIcon
              icon={faXmark}
              size="xl"
              style={{ color: "#fff" }}
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-y-[5rem] font-inter text-white h-full items-center  ">
            <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer  flex items-center justify-center  ">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "h-[100%] flex items-center justify-center text-light-blue "
                    : ""
                }
              >
                About{" "}
              </NavLink>
            </li>
            <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer flex items-center justify-center ">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "  h-[100%] flex items-center justify-center text-light-blue "
                    : ""
                }
              >
                Services
              </NavLink>
            </li>
            <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer  flex items-center justify-center  ">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "h-[100%] flex items-center justify-center text-light-blue "
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer  flex items-center justify-center  ">
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive
                    ? "h-[100%] flex items-center justify-center text-light-blue "
                    : ""
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li className=" text-md text-blue font-archivo font-normal hover:text-orange hover:cursor-pointer  flex items-center justify-center  ">
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive
                    ? " h-[100%] flex items-center justify-center text-light-blue "
                    : ""
                }
              >
                Community
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
