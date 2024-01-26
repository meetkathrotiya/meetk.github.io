import React from "react";
import Image from "next/image";
import push from "../assets/images/pushdeploy.png";
import push2 from "../assets/images/push2.png";
import preview from "../assets/images/Automatipreviews.png";
import preview2 from "../assets/images/preview-2.png";
import collaborative from "../assets/images/Collaborative.png";
import collaborative2 from "../assets/images/collaborativedark.png";
import pushicon from "../assets/images/push-icon.png";
import automation from "../assets/images/automaticicon.png";
import Collaborativeicon from "../assets/images/collaborativeicon.png";

const Preview = () => {
  return ( 
    <div>
      <div className="mx-auto justify-center items-center flex flex-col mt-12 px-6">
      <div className="justify-center items-center flex flex-col" data-scroll data-scroll-speed="0.12">
        <span className="self-center block w-[1px] h-[100px] Preview-line"></span>
        <div className="Preview-sec rounded-full flex justify-center items-center">
          <span className="text-white dark:text-black">2</span>
        </div>
        <span data-scroll data-scroll-speed="0.03" className="Preview-text text-[32px] font-bold my-6">Preview</span>
      </div>
        <h2 className="md:text-6xl text-[40px] font-bold text-center leading-tight" data-scroll data-scroll-speed="0.07">
          Iterate with your team
        </h2>
        <p className="max-w-[640px] dark:text-[#a1a1a1] text-[#666666] text-center mt-8 md:text-xl text-xl" data-scroll data-scroll-speed="0.08">
          Make frontend development a collaborative experience with automatic
          Preview Deployments for every code change, by seamlessly integrating
          with
          <a href="#0" className="text-[#de1d8d] ml-1">
            GitHub
          </a>
          ,
          <a href="#0" className="text-[#de1d8d] ml-1">
            GitLab
          </a>
          , and
          <a href="#0" className="text-[#de1d8d] ml-1">
            Bitbucket
          </a>
        </p>
      </div>
      {/* first section code strat  */}
      <div className="max-w-[1200px] mx-auto mt-24 px-6">
        <div className="flex flex-col justify-center">
          <p className="preview-line w-[2px] self-center h-[100px] md:hidden"></p>
          <span className="self-center w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10 md:hidden sm:block block"></span>
        </div>
        <div className="flex justify-between md:items-start items-center sm:flex-col md:flex-row flex-col gap-y-10 ">
          <div className="lg:pr-14 md:pr-7 md:max-w-[48%] sm:max-w-[70%] w-full" data-scroll data-scroll-speed="0.2">
            <Image
              src={push}
              alt="push"
              className="relative rounded-md mr-2 w-full dark:hidden block"
            />
            <Image
              src={push2}
              alt="push"
              className="relative rounded-md mr-2 w-full hidden dark:block"
            />
          </div>
          <div className="flex flex-col">
            <p className="preview-line w-[2px] self-center h-[100px]"></p>
            <span className="w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10"></span>
            <span className="border-[#999] self-center dark:border-[#444] border-dashed border-r-[1px] h-[399px] md:block sm:hidden hidden"></span>
          </div>
          <div data-scroll data-scroll-speed="0.3" className="lg:pl-[59px] lg:pr-12 md:pl-6 md:max-w-[48%] sm:max-w-[70%] w-full sm:order-[-1] md:order-1 order-[-1] sm:text-center md:text-left text-center md:mt-24 mt-5">
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333333] dark:bg-[#333333] rounded-lg flex items-center justify-center sm:mx-auto md:mx-0 mx-auto">
              <Image
                src={pushicon}
                alt="next"
                className="relative w-5 h-5 contrast-50 dark:invert"
              />
            </div>
            <h4 className="text-[22px] font-semibold my-2">Push to deploy</h4>
            <p className="text-[#666] leading-7 dark:text-[#888888] tracking-[-0.32px]">
              Every deploy automatically generates a shareable live preview site
              that stays up-to-date with your changes.
            </p>
          </div>
        </div>
      {/* second section code start */}
        <div className="flex justify-between md:items-start items-center sm:flex-col md:flex-row flex-col gap-y-10">
          <div className="lg:pr-14 md:pr-7 md:max-w-[48%] sm:max-w-[70%] w-full md:-translate-y-36 md:mt-0 mt-4" data-scroll data-scroll-speed="0.2">
            <Image
              src={preview}
              alt="preview"
              className="relative rounded-md mr-2 w-full dark:invert block dark:hidden"
            />
            <Image
              src={preview2}
              alt="preview2"
              className="relative rounded-md mr-2 w-full  hidden dark:block"
            />
          </div>
          <div className="flex flex-col">
            <p className="preview-line w-[2px] self-center h-[100px] dark:bg-[#444] md:hidden sm:block block"></p>
            <span className="w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10"></span>
            <span className="border-[#999] self-center border-dashed border-r-[1px] h-[399px] md:block sm:hidden hidden dark:border-[#444]"></span>
          </div>
          <div data-scroll data-scroll-speed="0.3" className="lg:pl-[59px] lg:pr-12 md:pl-6 md:max-w-[48%] sm:max-w-[70%] w-full sm:order-[-1] md:order-1 order-[-1] sm:text-center md:text-left text-center md:mt-0 mt-6">
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333333] dark:bg-[#333333] rounded-lg flex items-center justify-center sm:mx-auto md:mx-0 mx-auto">
              <Image
                src={automation}
                alt="next"
                className="relative w-5 h-5 contrast-50 dark:invert"
              />
            </div>
            <h4 className="text-[22px] font-semibold my-2">
              Automatic Previews for every branch
            </h4>
            <p className="text-[#666] leading-7 dark:text-[#888888] tracking-[-0.32px]">
              Each new branch receives a live, production-like URL that everyone
              on your team can visit.
            </p>
          </div>
        </div>
      {/* third section code start  */}
      <div className="flex justify-between md:items-start items-center sm:flex-col md:flex-row flex-col gap-y-10">
          <div className="lg:pr-14 md:pr-7 md:max-w-[48%] sm:max-w-[70%] w-full md:-translate-y-36 md:mt-0 mt-4" data-scroll data-scroll-speed="0.2">
          <Image
              src={collaborative}
              alt="collaborative"
              className="relative rounded-md mr-2 w-full mt-6 dark:hidden block"
            />
            <Image
              src={collaborative2}
              alt="collaborative"
              className="relative rounded-md mr-2 w-full mt-6 hidden dark:block"
            />
          </div>
          <div className="flex flex-col">
            <span className="w-2 h-2 rounded-full my-1 shadow-[0_0px_0px_1.5px_#999] z-10 md:block sm:hidden hidden"></span>
            <span className="collaborative-line self-center border-r-[1px] lg:h-[600px] h-[450px] md:block sm:hidden hidden"></span>
          </div>
          <div data-scroll data-scroll-speed="0.3" className="lg:pl-[59px] lg:pr-12 md:pl-6 md:max-w-[48%] sm:max-w-[70%] w-full sm:order-[-1] md:order-1 order-[-1] sm:text-center md:text-left text-center md:mt-0 mt-6">
            <div className="w-10 h-10 border border-[#eaeaea] dark:border-[#333333] dark:bg-[#333333] rounded-lg flex items-center justify-center sm:mx-auto md:mx-0 mx-auto">             
              <Image
                  src={Collaborativeicon}
                  alt="next"
                  className="relative w-5 h-5 contrast-50 dark:invert"
                />
            </div>
            <h4 className="text-[22px] font-semibold my-2">
                Collaborative reviews on UI
              </h4>
              <p className="text-[#666] dark:text-[#888888] leading-7 tracking-[-0.32px]">
                Comment directly on components, layouts, copy, and more in real
                context and real time, integrated seamlessly with GitHub and
                Slack.
              </p>
              <div className="flex items-center mt-8 xl:whitespace-nowrap border p-[6px] gap-1 dark:border-[#333] w-fit md:ml-0 mx-auto rounded-full bg-[#fafafa] dark:bg-[#111111]">
                <button className="bg-[#eb367f] px-2 rounded-full text-white dark:text-black text-xs flex justify-center items-center whitespace-nowrap">
                  New
                </button>
                <a
                  href="#0"
                  className="text-sm text-[#666] dark:text-[#888888] dark:hover:text-white"
                >
                  Commenting on Preview Deployments is now available →
                </a>
              </div>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default Preview;
