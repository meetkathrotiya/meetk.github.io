import React,{useState} from "react";
import Image from "next/image";
import Next from "../assets/images/next.png";
import Nexticon from "../assets/images/next-dark.svg";
import Sveltekit from "../assets/images/sveltekit.png";
import Sveltekiticon from "../assets/images/svelte(v1).svg";
import nuxt from "../assets/images/nuxt-img.png";
import nuxticon from "../assets/images/nuxticon.svg";
import vite from "../assets/images/vite.png";
import viteicon from "../assets/images/viteicon.svg";
import bucket from '../assets/images/bitbucket.svg'
import gitlab from '../assets/images/gitlab.svg'  

const VercelJourney = () => {
 
  return (
    <div className="lg:pt-24 pt-16 mx-auto mb-24 relative z-[99] bg-white dark:bg-black">
      <div className="text-center" data-scroll data-scroll-speed="0.01">
        <span className="mb-12 text-[#666666] dark:text-[#888888] tracking-[0.2rem] font-bold text-xs uppercase">
          Begin Your Vercel Journey
        </span>
      </div>
      <div className="flex gap-8 w-full mx-auto max-w-[1088px] lg:mt-12 mt-4 md:flex-row flex-col px-6">
        <div data-scroll data-scroll-speed="0.2" className="lg:max-w-[520px] w-full max-w-[520px] mx-auto sm:border border-[#eaeaea] dark:border-[#333] sm:px-6 py-8 rounded-lg sm:shadow-[0_8px_30px_rgba(0,0,0,.12)]">
          <h2 className="text-2xl text-[#171717] dark:text-[#EDEDED] font-semibold mb-3 text-center md:text-left">
            Import Git Repository
          </h2>
          <div className="border border-[#eaeaea] dark:border-[#333] bg-[#fafafa] dark:bg-[#111111] flex justify-center items-center md:py-[73px] rounded-md flex-col mb-6 sm:p-8 py-12 px-6 mt-4">
            <p className="text-center text-sm text-[#444444]  dark:text-[#999999] font-normal">
              Select a Git provider to import an existing project from a Git
              Repository.
            </p>
            <a
              href="#0"
              className="text-sm sm:text-base mt-8 flex bg-[#24292e] max-w-[320px] w-full p-[10px] text-[#fff] items-center justify-center rounded-md hover:bg-[#555] duration-700"
            >
              <svg
                className="mr-2"
                aria-label="github"
                height="20"
                viewBox="0 0 14 14"
                width="20"
              >
                <path
                  d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
              <span className="sm:block hidden text-sm">
                Continue with GitHub
              </span>
              <span className="sm:hidden block text-sm">GitHub</span>
            </a>
            <a
              href="#0"
              className="text-sm sm:text-base mt-2 flex bg-[#6b4fbb] max-w-[320px] w-full p-[10px] text-[#fff] items-center justify-center rounded-md hover:bg-[#8367D3] duration-700"
            >
              <Image
                src={gitlab}
                alt="gitlab"
                className="relative rounded-md mr-2"
              />
             <span className="sm:block hidden text-sm">
                Continue with GitLab
              </span>
              <span className="sm:hidden block text-sm">GitLab</span>
            </a>
            <a
              href="#0"
              className="text-sm sm:text-base mt-2 flex bg-[#0052cc] max-w-[320px] w-full p-[10px] text-[#fff] items-center justify-center rounded-md hover:bg-[#1668E2] duration-700"
            >
              <Image
                src={bucket}
                alt="bucket"
                className="relative rounded-tl-md rounded-tr-md mr-2"
              />
              <span className="sm:block hidden text-sm">
                Continue with Bitbucket
              </span>
              <span className="sm:hidden block text-sm">Bitbucket</span>
            </a>
          </div>
          <a href="#0" className="text-[#444444] dark:text-[#999999] text-sm">
            Import Third-Party Git Repository →
          </a>
        </div>
        <div data-scroll data-scroll-speed="0.2" className="lg:max-w-[520px] w-full max-w-[520px] mx-auto dark:border-[#333] p-6 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,.12)] dark:bg-[#111] bg-[#fafafa]">
          <h2 className="sm:text-2xl text-lg text-[#171717] dark:text-[#EDEDED] font-semibold">
            Clone Template
          </h2>
          <p className="text-[#666666] dark:text-[#999999] text-sm mt-2 mb-6">
            Alternatively, get started with a template
          </p>
          <div className="grid grid-cols-2 gap-4 items-center justify-center flex-wrap mb-6">
            <div className="main-box xl:max-w-[219px] lg:max-w-[205px] md:max-w-[207px] max-w-full w-full relative shadow-[0_5px_10px_rgba(0,0,0,.12)]">
              <Image
                src={Next}
                alt="next"
                className="relative rounded-tl-md rounded-tr-md h-[120px]"
              />
              <div className="center-icon absolute top-[38%] left-2/4 w-12 h-12 bg-[#00000081] dark -ml-6 -mt-6 rounded-full flex justify-center items-center opacity-0 duration-700">
                <svg
                className="text-white"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <div className="bg-white w-full p-3 shadow-[0_5px_10px_rgba(0,0,0,.12)] border dark:border-[#333] rounded-b-md dark:bg-black">
                <div className="flex gap-4 items-center">
                  <Image
                    src={Nexticon}
                    alt="Nexticon"
                    className="relative w-5 h-5"
                  />
                  <p className="font-semibold text-sm">Next.js</p>
                </div>
              </div>
            </div>
            <div className="main-box xl:max-w-[219px] lg:max-w-[205px] md:max-w-[207px] max-w-full w-full relative shadow-[0_5px_10px_rgba(0,0,0,.12)]">
              <Image
                src={Sveltekit}
                alt="Sveltekit"
                className="relative rounded-tl-md rounded-tr-md h-[120px]"
              />
              <div className="center-icon absolute top-[38%] left-2/4 w-12 h-12 bg-[#00000081] -ml-6 -mt-6 rounded-full flex justify-center items-center opacity-0 duration-700">
                <svg
                className="text-white"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <div className="bg-white w-full sm:p-3 p-2 shadow-[0_5px_10px_rgba(0,0,0,.12)] border dark:border-[#333] rounded-b-md dark:bg-black">
                <div className="flex gap-4 items-center">
                  <Image
                    src={Sveltekiticon}
                    alt="Sveltekiticon"
                    className="relative w-5 h-5"
                  />
                  <p className="font-semibold text-sm whitespace-nowrap">Sveltekit (V1)</p>
                </div>
              </div>
            </div>
            <div className="main-box xl:max-w-[219px] lg:max-w-[205px] md:max-w-[207px] max-w-full w-full relative shadow-[0_5px_10px_rgba(0,0,0,.12)]">
              <Image
                src={nuxt}
                alt="nuxt"
                className="relative rounded-tl-md rounded-tr-md h-[120px]"
              />
              <div className="center-icon absolute top-[38%] left-2/4 w-12 h-12 bg-[#00000081] -ml-6 -mt-6 rounded-full flex justify-center items-center opacity-0 duration-700">
                <svg
                className="text-white"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <div className="bg-white w-full sm:p-3 p-2 shadow-[0_5px_10px_rgba(0,0,0,.12)] border dark:border-[#333] rounded-b-md dark:bg-black">
                <div className="flex gap-4 items-center">
                  <Image
                    src={nuxticon}
                    alt="nuxticon"
                    className="relative w-5 h-5"
                  />
                  <p className="font-semibold text-sm">Nuxt.js</p>
                </div>
              </div>
            </div>
            <div className="main-box xl:max-w-[219px] lg:max-w-[205px] md:max-w-[207px] max-w-full w-full relative shadow-[0_5px_10px_rgba(0,0,0,.12)] ">
              <Image
                src={vite}
                alt="vite"
                className="relative h-[120px] rounded-tl-md rounded-tr-md"
              />
              <div className="center-icon absolute top-[38%] left-2/4 w-12 h-12 bg-[#00000081] -ml-6 -mt-6 rounded-full flex justify-center items-center opacity-0 duration-700">
                <svg
                className="text-white"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <div className="bg-white w-full sm:p-3 p-2 shadow-[0_5px_10px_rgba(0,0,0,.12)] border dark:border-[#333] rounded-b-md dark:bg-black">
                <div className="flex gap-4 items-center">
                  <Image
                    src={viteicon}
                    alt="viteicon"
                    className="relative w-5 h-5"
                  />
                  <p className="font-semibold text-sm">Vite</p>
                </div>
              </div>
            </div>
          </div>
            <a href="#0" className="text-[#666] dark:text-[#999999] text-sm relative block md:text-left text-center dark:hover:text-white hover:text-[#000]">
            Browse All Templates →
          </a>
        </div>
      </div>
    </div>
  );
};

export default VercelJourney;
