import React from "react";
import Image from "next/image";
import devlopimg from "../assets/images/devlop-img.png";
import devlopimg2 from "../assets/images/bg-pot.png";

const vercelway = () => { 
  return (
    <div>
      <div className="text-center lg:pt-0 pt-10" data-scroll-speed="0.01">
        <span data-scroll data-scroll-speed="0.1" className="mb-12 text-[#666666] dark:text-[#888888] tracking-[0.2rem] font-bold text-xs uppercase">
          Explore the Vercel way
        </span>
      </div>
      <div className="mx-auto justify-center items-center flex flex-col mt-8 px-6">
        <span className="self-center w-[1px] h-[100px] devlop-line"></span>
        <div className="develop-sec rounded-full flex justify-center items-center">
          <span className="text-white dark:text-black">1</span>
        </div>
        <span className="develop-text text-[32px] font-bold my-6" data-scroll data-scroll-speed="0.03">Develop</span>
        <h2 className="md:text-6xl text-[40px] font-bold text-center leading-tight" data-scroll data-scroll-speed="0.07">Build when inspiration strikes</h2>
        <p className="z-50 max-w-[640px] text-[#666666] dark:text-[#a1a1a1] text-center mt-8 text-xl" data-scroll data-scroll-speed="0.08">
          Free developers from time-consuming, unnecessary processes that slow
          your work, so you and your team can focus on creating.
        </p>
      </div>
      <div className="max-w-[1248px] mx-auto mt-20 flex px-6 lg:flex-row sm:flex-col flex-col">
        <div className="max-w-[580px] mx-auto w-full" data-scroll data-scroll-speed="-0.03">
          <Image
            src={devlopimg}
            alt="devlopimg"
            className="relative rounded-md mr-2 w-full dark:invert block dark:hidden"
          />
           <Image
            src={devlopimg2}
            alt="devlopimg2"
            className="relative rounded-md mr-2 w-full invert dark:invert-0 hidden dark:block"
          />
        </div>
        <div className="sm:px-12 px-6 mt-14 lg:mt-0">
        <div className="max-w-[488px] pb-4 mx-auto text-center lg:text-left">
          <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333] dark:bg-[#333] rounded-lg flex items-center justify-center mx-auto lg:mx-0">
            <svg
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="#666666"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              className=""
            >
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h4 className="text-[22px] font-semibold my-2">
            The complete toolkit for the Web
          </h4>
          <p className="text-[#666] dark:text-[#888888] leading-7">
            Everything you need to build your site exactly how you imagine, from
            automatic API handling to built-in image and performance
            optimizations.
          </p>
          {/* -------------------- */}
          <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333] dark:bg-[#333] rounded-lg flex items-center justify-center mt-14 mx-auto lg:mx-0">
            <svg
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="#666666"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          <h4 className="text-[22px] font-semibold my-2">
            Easy integration with your backend
          </h4>
          <p className="text-[#666] dark:text-[#888888] leading-7">
            {"Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment."}
          </p>
          {/* -------------------- */}
          <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333] dark:bg-[#333] rounded-lg flex items-center justify-center mt-14 mx-auto lg:mx-0">
            <svg
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="#666666"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M4 17l6-6-6-6"></path>
              <path d="M12 19h8"></path>
            </svg>
          </div>
          <h4 className="text-[22px] font-semibold my-2">
            End-to-end testing on Localhost
          </h4>
          <p className="text-[#666] dark:text-[#888888] leading-7">
            From caching to Serverless Functions, all our cloud primitives work
            perfectly on localhost.
          </p>
          {/* --------------------- */}
        </div>
        </div>
      </div>
      </div>
  );
};

export default vercelway;
