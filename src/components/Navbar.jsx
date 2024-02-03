import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[2rem] w-[100%] max-w-[1200px] mx-auto bg-[#ffffff0a] rounded-[0.625rem] border border-[#ffffff17] flex justify-between items-center ">
      <div className=" cursor-pointer py-[1rem]" onClick={() => navigate("/")}>
        <img
          //   className=" max-[480px]:w-15 w-12 p-2"
          src={logo}
          alt=""
          // className=" w-full "
        />
      </div>
      <ul className="flex gap-x-[5rem] font-inter text-white h-full items-center">
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
    </div>
  );
};

export default Navbar;
