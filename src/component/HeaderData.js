"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DownArrow from "../assets/images/downarrow.svg";

const HeaderData = ({ children, title, className, downArrowShow }) => {
 
  const [collapse, setCollapse] = useState(false);  

  const CollapseToggle = () => {
    // const { innerWidth: width, innerHeight: height } = window;
    setCollapse(!collapse);   
  };
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapse(!collapse);
    } else {
      // setCollapse(true);
    }

    const footercollapse = () => {
      if (window.innerWidth > 767) {
        setCollapse(true);
      } else {
        setCollapse(!collapse);
      }
    };
    window.addEventListener('resize', footercollapse);
    return () => window.removeEventListener('resize', footercollapse);
  }, []);

  return (
    <>
      <ul className={`border-b border-[#eaeaea] dark:border-[#333] lg:border-0 ${className}`} >
        <div className="flex items-center justify-between" onClick={() => CollapseToggle()}>
          <span className={`font-normal dark:text-[#a1a1a1] lg:pb-[10px] block text-[#171717] text-sm py-2 ${collapse && 'dark:text-[#ffffff]'}`}>{title}</span>
          {downArrowShow &&
          <Image
            src={DownArrow}
            alt="downarrow"
            className={`lg:hidden block transition-all duration-300 cursor-pointer dark:invert ${
              collapse ? "rotate-180" : ""
            }`}            
          />}
        </div>
        {collapse &&
        <div
          className={`lg:!h-auto lg:!opacity-100 duration-300 transition-all  ${
            collapse
              ? "h-auto"
              : "opacity-0 h-0 duration-0"
          }`}
        >
          {children}
        </div>
        }
      </ul>
    </>
  );
};
export default HeaderData;