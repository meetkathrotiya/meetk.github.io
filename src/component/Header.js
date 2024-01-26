"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import downArrow from "../assets/images/downarrow.svg";
import previewsiIcon from "../assets/images/previews-icon.png";
import infrastructureiIcon from "../assets/images/infrastructure-icon.png";
import storageiIcon from "../assets/images/storage-icon.png";
import analyticsiIcon from "../assets/images/analytics-icon.png";
import edgefunctionsiIcon from "../assets/images/edge-functions-icon.png";
import nextjsiIcon from "../assets/images/nextjs-icon.png";
import menuicon from "../assets/images/menu-icon.svg";
import close from "../assets/images/close-icon.svg";
import { useState } from "react";
import HeaderData from "./HeaderData";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const MenuToggle = () => {
    setMenu(!menu);
  };

  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        // Adjust the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuList = [
    {
      id: 1,
      name: "docs",
      url: "/",
    },
    {
      id: 2,
      name: "templates",
      url: "/",
    },
    {
      id: 3,
      name: "integrations",
      url: "/",
    },
    {
      id: 4,
      name: "customers",
      url: "/",
    },
    {
      id: 5,
      name: "enterprise",
      url: "/",
    },
    {
      id: 6,
      name: "our expertise",
      url: "/our-expertise",
    },
  ];

  const featuresList = [
    {
      id: 1,
      icon: previewsiIcon,
      name: "Previews",
      subtitle: "Zero config, more innovation",
    },
    {
      id: 2,
      icon: infrastructureiIcon,
      name: "Infrastructure",
      subtitle: "Always fast, always online",
    },
    {
      id: 3,
      icon: nextjsiIcon,
      name: "nextjs",
      subtitle: "The native Next js platform",
    },
    {
      id: 4,
      icon: edgefunctionsiIcon,
      name: "Edge Functions",
      subtitle: "Dynamic pages, static speed",
    },
    {
      id: 5,
      icon: analyticsiIcon,
      name: "Analytics",
      subtitle: "Real-time insights, peak performance",
    },
    {
      id: 6,
      icon: storageiIcon,
      name: "storage",
      subtitle: "Serverless storage for the frontend",
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 w-full lg:bg-white/80 bg-white dark:bg-black/60 dark:border-[#1a1a1a] border-b border-[#0000001A] backdrop-blur-sm z-[999]`}
      >
        <div className="max-w-[1442px] w-full mx-auto px-6 lg:bg-transparent lg:dark:bg-transparent dark:bg-black bg-white">
          <div className="flex items-center xl:py-2 py-4 justify-between">
            <div className="flex gap-2 items-center">
              <div className="flex-1 dark:invert">
                <Link href="/">
                  <svg
                    aria-label="Vercel Logotype"
                    fill="var(--geist-foreground)"
                    height="26"
                    viewBox="0 0 283 64"
                  >
                  <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <ul
                  className={`lg:px-0 px-6 lg:top-auto lg:relative absolute top-[64px] left-0 z-[999] w-full lg:shadow-none shadow-lg lg:bg-transparent lg:dark:bg-transparent dark:bg-black bg-white text-black transition-all duration-300 lg:flex xl:gap-1 items-center lg:h-auto h-screen ${
                    menu ? "block overflow-y-auto" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      className="p-3 text-sm leading-none text-[#171717] mb-4 mt-2 text-center transition-all border border-[#00000014] rounded-md lg:hidden block dark:text-[#ededed] dark:border-[#333]"
                      href="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <Link
                    className="p-3 text-sm leading-none font-medium text-white bg-[#171717] mb-3 text-center transition-all rounded-[5px] whitespace-nowrap lg:hidden block dark:bg-[#ededed] dark:text-[#0A0A0A]"
                    href="/login"
                  >
                    Sign Up
                  </Link>
                  <li className="group relative text-center lg:inline-block block">
                    <button
                      type=""
                      className="dark:bg-[#171717d5] dark:hover:bg-[#666] dark:text-white  items-center lg:justify-start justify-between w-full lg:py-2 py-4 px-3 lg:pr-6 gap-1.5 text-sm leading-none hover:dark:text-white lg:text-[#666666] text-[#171717] hover:text-[#171717] group-hover:lg:bg-[#0000001a] lg:rounded-full transition-all lg:border-none border-b border-[#00000014] lg:flex hidden"
                    >
                      Features
                      <Image
                        src={downArrow}
                        alt="downArrow"
                        className="w-[10px] dark:invert group-hover:rotate-180 transition-all group-hover:opacity-100 opacity-70"
                      />
                    </button>
                    <HeaderData
                      title={"Features"}
                      className="lg:hidden block lg:pb-0 py-1 px-2"
                      downArrowShow={true}
                    >
                      {featuresList.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 text-sm w-1/2 rounded-lg hover:bg-[#f2f2f2] dark:hover:bg-[#ffffff0f] transition-all"
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={item.icon}
                              alt="downArrow"
                              className="w-[18px] h-[18px] dark:invert"
                            />
                            <h5 className="dark:text-[#ededed]">{item.name}</h5>
                          </div>
                        </div>
                      ))}
                    </HeaderData>
                    <div className="lg:group-hover:block absolute top-[30px] w-[565px] pt-3 group-hover:hidden lg:hidden hidden dark:backdrop-blur-sm dark:bg-black/80 rounded-xl">
                      <div className="flex flex-wrap w-full p-1.5 bg-white cursor-pointer border border-[#ebebeb] rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12),0_30px_60px_-30px_rgba(0,0,0,0.15)] dark:bg-black dark:border-[#333] dark:bg-opacity-50">
                        {featuresList.map((item) => (
                          <div
                            key={item.id}
                            className="p-3 text-sm w-1/2 rounded-lg hover:bg-[#f2f2f2] dark:hover:bg-[#ffffff0f] transition-all"
                          >
                            <div className="flex items-center gap-2">
                              <Image
                                src={item.icon}
                                alt="downArrow"
                                className="w-[18px] h-[18px] dark:invert"
                              />
                              <h5 className="dark:text-[#ededed]">
                                {item.name}
                              </h5>
                            </div>
                            <p className="text-[#666666] dark:text-[#a1a1a1] text-start pt-2">
                              {item.subtitle}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                  {menuList.map((item) => (
                    <li key={item.id} className="xl:p-3">
                      <Link
                        className="p-2 lg:py-2 py-4 text-sm leading-none lg:inline-block block dark:text-[#A1A1A1] hover:dark:text-white lg:text-[#666666] text-[#171717] hover:text-[#171717] transition-all capitalize lg:border-none border-b border-[#00000014] dark:border-[#333] whitespace-nowrap"
                        href={item.url}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      className="p-2 lg:py-2 py-4 text-sm leading-none lg:text-[#666666] text-[#171717] hover:text-[#171717] dark:text-[#A1A1A1] transition-all capitalize lg:hidden block lg:border-none border-b border-[#00000014] dark:border-[#333]"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex-1">
              <div className="lg:flex justify-end items-center gap-3">
                <ul className="lg:flex sm:hidden hidden">
                  <li>
                    <Link
                      className="px-3 py-2 text-sm leading-none dark:text-[#A1A1A1] hover:dark:text-white lg:text-[#666666] text-[#171717] hover:text-[#171717] transition-all"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 text-sm leading-none dark:text-white hover:dark:text-white lg:text-[#666666] text-[#171717] hover:text-[#171717] dark:hover:bg-[#171717] transition-all border dark:border-[#ffffff14] border-[#00000014] dark:bg-[#0a0a0a] rounded-md"
                      href="/login"
                    >
                      Log In
                    </Link>
                  </li>
                </ul>
                <Link
                  className="px-4 py-[9px] text-sm lg:block sm:hidden hidden leading-none font-medium dark:text-[#0a0a0a] text-white bg-[#171717] dark:bg-[#ededed] transition-all rounded-[5px] whitespace-nowrap"
                  href="/login"
                >
                  Sign Up
                </Link>
                <div className="lg:hidden block w-7" onClick={MenuToggle}>
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full dark:border-[#333]">
                    <Image
                      src={menuicon}
                      alt="menu"
                      className={`${
                        menu ? "hidden" : "block"
                      } dark:invert opacity-80`}
                    />
                    <Image
                      src={close}
                      alt="close"
                      className={`${
                        menu ? "block" : "hidden"
                      } dark:invert opacity-80`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
