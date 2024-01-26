import React from "react";

const scroll = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#111] border-y border-[#eaeaea] dark:border-[#333] mt-24 lg:mt-32 relative z-[99]">
      <div data-scroll data-scroll-speed="0.02" className="max-w-[1248px] mx-auto flex lg:p-8 md:p-6 p-5 grow flex-wrap flex-col md:flex-row">
        <div className="lg:border-r border-[#eaeaea] dark:border-[#333] px-7 flex flex-col grow justify-center items-center flex-wrap md:my-8 sm:my-5 my-3 lg:my-0">
          <p className="sm:text-6xl text-[58px] font-bold">90</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold sm:pt-1 tracking-[.1em] text-[#666666]">Cities</span>
        </div>
        <div className="lg:border-r border-[#eaeaea] dark:border-[#333] px-7 flex flex-col grow justify-center items-center flex-wrap md:my-8 sm:my-5 my-3 lg:my-0">
          <p className="sm:text-6xl text-[58px] font-bold">41B+</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold sm:pt-1 tracking-[.1em] text-[#666666]">Requests Per Week</span>
        </div>
        <div className="lg:border-r border-[#eaeaea] dark:border-[#333] px-7 flex flex-col grow justify-center items-center flex-wrap md:my-8 sm:my-5 my-3 lg:my-0">
          <p className="sm:text-6xl text-[58px] font-bold">10PB</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold sm:pt-1 tracking-[.1em] text-[#666666]">Data Served</span>
        </div>
        <div className="px-7 flex flex-col grow justify-center items-center flex-wrap my-8 lg:my-0">
          <p className="sm:text-6xl text-[58px] font-bold">99.99%</p>
          <span className="text-sm text-center dark:text-[#888888] uppercase font-semibold sm:pt-1 tracking-[.1em] text-[#666666]">Guaranteed Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default scroll;
