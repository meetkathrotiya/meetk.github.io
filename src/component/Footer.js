"use client";
import React from "react";
import Image from "next/image";
import gitub from "../assets/images/footer-gitub.svg";
import formerly from "../assets/images/footer-x.png";
import dark from "../assets/images/dark-mode.svg";
import desktop from "../assets/images/footer-desktop.svg";
import lightmode from "../assets/images/footer-light.svg";
import FooterData from "../component/FooterData";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import downArrow from "../assets/images/down-arrow.png";
import configArrow from "../assets/images/configArrow.png";
import Link from "next/link";

const Footer = () => {
  const [legal, setLegal] = useState(false);

  const productList = [
    {
      id: 1,
      name: "Infrastructure",
      url: "/docs",
    },
    {
      id: 2,
      name: "Previews",
      url: "/templates",
    },
    {
      id: 3,
      name: "Edge Functions",
      url: "/integrations",
    },
    {
      id: 4,
      name: "Analytics",
      url: "/customers",
    },
    {
      id: 5,
      name: "Next.js",
      url: "/enterprise",
    },
    {
      id: 6,
      name: "Turbo",
      url: "/pricing",
    },
    {
      id: 7,
      name: "Enterprise",
      url: "/pricing",
    },
    {
      id: 8,
      name: "CLI & API",
      url: "/pricing",
    },
    {
      id: 9,
      name: "Changelog",
      url: "/pricing",
    },
  ];
  const Explore = [
    {
      id: 1,
      name: "Docs",
      url: "/docs",
    },
    {
      id: 2,
      name: "Pricing",
      url: "/templates",
    },
    {
      id: 3,
      name: "Customers",
      url: "/integrations",
    },
    {
      id: 4,
      name: "Integrations",
      url: "/customers",
    },
    {
      id: 5,
      name: "Templates",
      url: "/enterprise",
    },
    {
      id: 6,
      name: "Resources",
      url: "/pricing",
    },
    {
      id: 7,
      name: "Experts",
      url: "/pricing",
    },
    {
      id: 8,
      name: "Guides",
      url: "/pricing",
    },
    {
      id: 9,
      name: "Help",
      url: "/pricing",
    },
    {
      id: 9,
      name: "⌘K",
      url: "/pricing",
    },
  ];
  const Company = [
    {
      id: 1,
      name: "About",
      url: "/about",

    },
    {
      id: 2,
      name: "Blog",
      url: "/templates",
    },
    {
      id: 3,
      name: "Careers",
      url: "/integrations",
    },
    {
      id: 4,
      name: "Contact Us",
      url: "/customers",
    },
    {
      id: 5,
      name: "Next.js Conf",
      url: "/enterprise",
      img: configArrow
    },
    {
      id: 6,
      name: "Open Source",
      url: "/pricing",
    },
    {
      id: 7,
      name: "Partners",
      url: "/pricing",
    },
    {
      id: 8,
      name: "Security",
      url: "/pricing",
    },
    {
      id: 9,
      name: "Privacy Policy",
      url: "/pricing",
    },
    {
      id: 10,
      name: "Legal ",
      icon: downArrow,
      moreData: true
    },
  ];

  const { theme, setTheme } = useTheme(true);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("light");
    } else {
      setTheme("light");
    }
  };

  const handleThemeDarkChange = () => {
    if (theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    // localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-[#fafafa] dark:!bg-[#111] px-4 border-t border-[#eaeaea] dark:border-[#333] footer-div">
      <div className="max-w-[1200px] w-full mx-auto py-16">
        <div className="flex md:flex-row sm:flex-col flex-col">
          <div className="max-w-[100%] w-full flex flex-col md:justify-start items-start">
            <svg
              aria-label="Vercel Logotype"
              fill=""
              height="26"
              viewBox="0 0 283 64"
              className="dark:invert"
            >
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
            </svg>
            <div className="flex mt-10 items-center hover:bg-[#eaeaea] py-1 px-[6px] rounded-lg text-sm dark:hover:text-black">
              <span>Status:</span>
              <p className="w-[10px] h-[10px] bg-[#0070f3] rounded-full mx-2"></p>
              <span className="text-[#0070f3]">All systems normal.</span>
            </div>
          </div>
          <div className="max-w-[100%] w-full mt-4 sm:mt-0">
            <FooterData title={"ProductList"}>
              {productList.map((item) => (
                <li key={item.id} className="list-none py-2 px-3 leading-none">
                  <a
                    className="hover:-translate-y-[5px] text-sm leading-none text-[#666666] dark:text-[#888888] hover:text-[#171717] transition-all capitalize"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </FooterData>
          </div>
          <div className="max-w-[100%] w-full">
            <FooterData title={"Explore"}>
              {Explore.map((item) => (
                <li key={item.id} className="list-none py-2 px-3 leading-none">
                  <a
                    className="text-sm leading-none text-[#666666] dark:text-[#888888] hover:text-[#171717] transition-all capitalize"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </FooterData>
          </div>
          <div className="max-w-[100%] w-full">
            <FooterData title={"Company"}>
              {Company.map((item) => (
                <li key={item.id} className="list-none py-2 px-3 flex gap-1 items-center leading-none">
                  {item.moreData ?
                    <>
                      <div onClick={() => setLegal(!legal)} className="flex items-center cursor-pointer gap-1">
                        <div
                          className="text-sm leading-none text-[#666666] dark:text-[#888888] hover:text-[#171717] transition-all capitalize"
                        >
                          {item.name}
                        </div>
                        <Image src={item.icon} alt="" className="w-5 dark:invert" />
                      </div>
                      <div className={`${legal ? 'block' : 'hidden'} text-[#171717] z-[99] dark:text-white dark:border-[#333] dark:bg-[#0a0a0a] absolute border border-[#eaeaea] max-w-[230px] bottom-8 w-full bg-white text-sm rounded-xl p-2`}>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Privacy Policy</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Terms of Service</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Trademark Policy</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Inactivity Policy</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">DMCA Policy</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Support Terms</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">DPA</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">SLA</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Sub-processors</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Cookie Preferences</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Event Terms and Conditions</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Event Code of Conduct</Link>
                        <Link href="#0" className="block px-2 py-[10px] hover:bg-[#0000000d] dark:hover:bg-[#ffffff0f] rounded-md">Job Applicant Privacy Notice</Link>
                      </div>
                    </>
                    :
                    <>
                      <a
                        className="text-sm leading-none text-[#666666] dark:text-[#888888] hover:text-[#171717] transition-all capitalize"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </>
                  }
                  {item.img && <Image src={item.img} alt="" className="w-4 dark:invert opacity-50" />}
                </li>
              ))}
            </FooterData>
          </div>
        </div>
        <div className="mt-8">
          <span className="text-[#666] text-sm block md:text-left text-center">
            © 2023 Vercel Inc.
          </span>
          <div className="flex justify-between mt-4 items-center md:flex-row flex-col">
            <div className="flex gap-4 md:ml-0 ml-5 items-center">
              <Image src={gitub} alt="gitub" />
              <div className="border-r border-[#eaeaea] dark:border-[#333] h-4"></div>
              <Image src={formerly} alt="formerly" className="opacity-50 dark:invert w-[17px]" />
            </div>
            <div className="flex border border-[#d0cfcf] dark:border-[#ffffff24] rounded-full py-[3px] px-1 mt-5 sm:mt-6 md:mt-0">
              <button onClick={handleThemeDarkChange} className="rounded-full w-8 p-2 dark:bg-[#1a1a1a]">
                <Image src={dark} alt="dark" className="mx-auto" />
              </button>
              <button onClick={handleThemeChange} className="rounded-full p-1 dark:bg-transparent bg-[#f2f2f2] w-8">
                <Image src={lightmode} alt="lightmode" className="mx-auto dark:invert" />
              </button>
              <button onClick={handleThemeDarkChange} className="p-2">
                <Image src={desktop} alt="dark" className="mx-auto dark:invert" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
