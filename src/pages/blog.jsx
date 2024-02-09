import React, { useEffect, useState } from "react";
import ModifiedNavbar from "../components/ModifiedNavbar";
import client, { urlFor } from "../client";

import calendar from "../assets/icons/calendar.svg";
import arrow from "../assets/icons/arrow-right.svg";
import { format } from "date-fns";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("insights");
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
      ...
    }`
      )
      .then((data) => setBlogPosts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className=" h-[100vh] ">
      <ModifiedNavbar pageTitle="Blogs" />
      <div className=" max-w-[1200px] mx-auto py-[3rem] pl-[1.2rem] max-[480px]:px-4 ">
        <h1 className=" text-[2.5rem] font-lexendDeca font-[500] px-[1rem] border-l-[0.3rem] border-l-light-blue max-[480px]:text-[1.75rem]">
          {" "}
          Categories{" "}
        </h1>
        <div className=" flex gap-[2rem] mt-[1.6rem] ">
          <button
            onClick={() => setActiveCategory("insights")}
            className={` py-[0.68rem] px-[1.4rem] text-[1.125rem] border-[0.1rem]  rounded-[0.4rem] font-lexendDeca ${
              activeCategory === "insights"
                ? ` bg-light-blue text-white border border-light-blue `
                : `border-light-gray-backdrop text-light-gray-backdrop `
            }`}
          >
            VDI Insights
          </button>
          <button
            onClick={() => setActiveCategory("education")}
            className={` py-[0.68rem] px-[1.4rem] text-[1.125rem] border-[0.1rem]  rounded-[0.4rem] font-lexendDeca ${
              activeCategory === "education"
                ? `bg-light-blue text-white border border-light-blue  `
                : `border-light-gray-backdrop text-light-gray-backdrop`
            }`}
          >
            Education
          </button>
        </div>
        <div className=" flex justify-center  ">
          <div className=" pt-[2.4rem] flex flex-wrap gap-x-[2rem] gap-y-[2.5rem]  ">
            {blogPosts.map((post) => {
              return (
                <div
                  key={post.slug.current}
                  className=" w-[30%] rounded-[1rem] bg-[#f8f8f8] pb-[1.4rem] max-[480px]:w-full relative "
                >
                  <div className=" w-[100%] h-[18rem] object-cover object-center ">
                    <img
                      src={urlFor(post?.mainImage.asset._ref).url()}
                      alt={post.title}
                      className=" w-[100%] h-[100%] rounded-t-[1rem] "
                    />
                  </div>
                  <div className=" px-3 ">
                    <p className=" text-[1.2rem] font-lexendDeca mt-[0.5rem] leading-[27px] text-very-dark-blue font-[600] ">
                      {" "}
                      {post.title}{" "}
                    </p>
                    <div className=" flex gap-[0.5rem]  mt-[0.4rem] ">
                      <img src={calendar} alt="calendar_icon" />
                      <p className=" text-[0.8rem] font-lexendDeca text-[#c2c2c2] ">
                        {" "}
                        {format(
                          new Date(post.publishedAt),
                          "dd MMMM yyyy"
                        )}{" "}
                      </p>
                    </div>
                    <p className=" text-[1rem] text-[#444f77] mt-[1rem] font-lexendDeca text-[400] ">
                      {`${post.body[0].children[0].text.substring(0, 70)}...`}
                    </p>
                    {/* <div className=" mt-auto "> */}
                    <button className=" text-light-blue border border-[#efefef] flex items-center justify-center font-lexendDeca text-[1rem] py-[0.6rem] rounded-[0.5rem] bg-[#efefef] gap-[1rem] mt-[2rem] w-[100%] hover:bg-white hover:border hover:border-light-blue ">
                      Read More{" "}
                      <span className=" bg-light-blue p-[0.1rem] rounded-[50%] ">
                        {" "}
                        <img
                          src={arrow}
                          alt="arrow_right"
                          className=" w-[1rem] "
                        />{" "}
                      </span>
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
