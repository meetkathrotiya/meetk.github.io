"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DownArrow from "../assets/images/downarrow.svg";

const FooterData = ({ children,title,className }) => {
 
  const [collapse, setCollapse] = useState(true);  

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
      <ul className={`border-b border-[#eaeaea] dark:border-[#ffffff24] md:border-0 relative ${className}`} >
        <div className="flex items-center justify-between lg:py-0 py-4 px-3" onClick={() => CollapseToggle()}>
          <span className="font-normal lg:pb-[10px] block text-[#171717] dark:text-[#ededed] text-sm">{title}</span>
          {/* <Image
            src={DownArrow}
            className={`md:hidden block transition-all duration-300 cursor-pointer ${
              collapse ? "rotate-180" : ""
            }`}
            
          /> */}
        </div>
        {collapse &&
        <div
          className={`md:!h-auto md:!opacity-100 duration-300 transition-all  ${
            collapse
              ? "h-auto "
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
export default FooterData;

