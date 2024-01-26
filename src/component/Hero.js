"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Okta from "../assets/images/okta.svg";
import Adobe from "../assets/images/adobe.svg";
import Washingtonpost from "../assets/images/washingtonpost.svg";
import TailwindcssLogo from "../assets/images/tailwindcss_logo.svg";
import Hashicorp from "../assets/images/hashicorp.svg";
import Loom from "../assets/images/loom.svg";
import Zapier from "../assets/images/zapier.svg";
import Ebay from "../assets/images/ebay.svg";
import UnderArmou from "../assets/images/under-armour.svg";
import Marquee from "react-fast-marquee";
import next from "../assets/images/next-2023.svg"
import right from "../assets/images/next-right.png"

const Hero = () => {
  return (
    <>
      <section className="xl:pb-32 xl:pt-28 lg:py-16  lg:mt-0 mt-14">
        <div className="container">
          <div data-scroll data-scroll-speed="0.08" className="flex justify-center items-center md:flex-wrap md:flex-row flex-col my-4">
          <Image
              className="md:block hidden dark:invert"
              src={next}
              width={106}
              alt="next"
            />
            <a className="my-1 whitespace-nowrap flex justify-center items-center lg:text-[22px] md:text-base text-sm font-semibold px-2"> 2023 <p className="text-[#666666] md:text-base text-sm pl-2 md:block hidden"> Join us for the </p> <span className="md:text-base text-sm text-[#171717] px-2 dark:text-white">Live Keynote</span> <span className="text-[#666] lg:text-base text-sm">on</span> <span className="lg:text-base text-sm text-[#171717] lg:px-2 dark:text-white">October 26 at 10am PT.</span> </a>
          <div className="flex gap-3">
          <Image
              className="md:hidden block dark:invert"
              src={next}
              width={106}
              alt="next"
            />
            <a href="#0" className="bg-[#171717] dark:bg-white dark:text-black text-sm tracking-[1.2px] text-white rounded-full px-4 py-[6px] hover:bg-[#383838] transition-all duration-300 flex justify-center items-center">Get your ticket
            <Image
              className="dark:invert-0 invert ml-2"
              src={right}
              alt="right"
            />
            </a>
          </div>
         </div>
          <h1 data-scroll data-scroll-speed="0.2" className="dark-color xl:text-[112px] lg:text-[80px] md:text-[90px] lg:mt-8 dark:text-[#EDEDED] -tracking-wider text-7xl justify-center items-center font-extrabold flex leading-none mb-11 lg:flex-row flex-col">
            <span className="animated-gradient-text develop-animated-text">
              <span className="develop-animated">Develop.</span>
            </span>
            <span className="animated-gradient-text preview-animated-text">
              <span className="preview-animated">Preview.</span>
            </span>
            <span className="animated-gradient-text ship-animated-text">
              <span className="ship-animated">Ship.</span>
            </span>
          </h1>
          <h2 data-scroll data-scroll-speed="0.1" className="md:text-2xl text-xl text-[#666] dark:text-[#888888] md:leading-[38px] tracking-[-0.48px] w-full max-w-[780px] mx-auto text-center mb-16">
            {"Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web."}
          </h2>
          <div className="flex items-center gap-6 justify-center mb-[96px] sm:flex-row flex-col">
            <Link
              className="flex justify-center items-center w-full sm:max-w-[188px] dark:text-[#0A0A0A] max-w-full gap-2 font-medium py-3 px-4 rounded-lg bg-[#171717] dark:bg-[#EDEDED] hover:bg-[#383838] text-white transition-all"
              href=""
            >
              <svg
                aria-label="Vercel Logo"
                fill="#fff"
                viewBox="0 0 75 65"
                height="15.600000000000001"
                width="18"
                className="dark:invert"
              >
                <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
              </svg>
              Start Deploying
            </Link>
            <Link
              className="get-a-demo-btn justify-center relative w-full sm:max-w-[188px] max-w-full h-[48px] text-center hover:text-white transition-all duration-150 font-medium py-2 px-4 rounded-lg group"
              href=""
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                Get a Demo
              </span>
              <span className="absolute top-0 left-0 right-0 w-full h-full get-demo-animated-one"></span>
              <span className="absolute top-0 left-0 right-0 w-full h-full get-demo-animated-two"></span>
              <span className="absolute top-0 left-0 right-0 w-full h-full get-demo-animated-three"></span>
              <span className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] w-[calc(100%-3px)] dark:bg-black dark:text-white h-[calc(100%-2px)] rounded-[7px] bg-white z-40 group-hover:bg-transparent transition-all duration-150"></span>
            </Link>
          </div>
          <div className="tracking-[0.2rem] text-xs text-[#666] dark:text-black font-bold uppercase text-center w-full mx-auto max-w-[900px]">
            <p className="mb-12 dark:text-[#888888]">Trusted by the best frontend teams</p>
            <div className="lg:block hidden">
              <div className="flex justify-between items-center h-[47px] gap-10">
                <Image
                  className="h-auto dark:invert"
                  width={116.28}
                  src={Adobe}
                  alt="Adobe"
                />
                <Image className="h-auto dark:invert" width={79.56} src={Okta} alt="Okta" />
                <Image
                  className="h-auto dark:invert"
                  width={66}
                  src={UnderArmou}
                  alt="logo"
                />
                <Image className="h-auto dark:invert" width={81.6} src={Ebay} alt="Ebay" />
                <Image className="h-auto dark:invert" width={102} src={Zapier} alt="Zapier" />
              </div>
              <div className="flex justify-between h-[47px] mt-6 gap-10">
                <Image
                  className="h-auto dark:invert"
                  width={108.12}
                  src={Loom}
                  alt="Loom"
                />
                <Image
                  className="h-auto dark:invert"
                  width={131.9}
                  src={Hashicorp}
                  alt="Hashicorp"
                />
                <Image
                  className="h-auto dark:invert"
                  width={179.52}
                  src={TailwindcssLogo}
                  alt="TailwindcssLogo"
                />
                <Image
                  className="h-auto dark:invert"
                  width={212.28}
                  src={Washingtonpost}
                  alt="Washingtonpost"
                />
              </div>
            </div>
          </div>

          <div className="slider md:mt-[70px] lg:!hidden">
            <Marquee>
              <Image
                className="h-auto mx-8 dark:invert"
                width={116.28}
                src={Adobe}
                alt="logo"
              />
              <Image className="h-auto mx-8 dark:invert" width={79.56} src={Okta} alt="logo" />
              <Image
                className="h-auto mx-8 dark:invert"
                width={66}
                src={UnderArmou}
                alt="logo"
              />
              <Image className="h-auto mx-8 dark:invert" width={81.6} src={Ebay} alt="logo" />
              <Image className="h-auto mx-8 dark:invert" width={102} src={Zapier} alt="logo" />
              <Image
                className="h-auto mx-8 dark:invert"
                width={108.12}
                src={Loom}
                alt="logo"
              />
              <Image
                className="h-auto mx-8 dark:invert"
                width={131.9}
                src={Hashicorp}
                alt="logo"
              />
              <Image
                className="h-auto mx-8 dark:invert"
                width={179.52}
                src={TailwindcssLogo}
                alt="logo"
              />
              <Image
                className="h-auto mx-8 dark:invert"
                width={212.28}
                src={Washingtonpost}
                alt="logo"
              />
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
