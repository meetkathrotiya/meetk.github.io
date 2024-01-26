import React from "react";
import Image from "next/image";
import nextreact from "../assets/images/nextjs-icon.png";
import Reacticon from "../assets/images/react.svg";
import svelte from "../assets/images/svelte.svg";
import Nuxt from "../assets/images/nuxt.png";
import vue from "../assets/images/vue.png";
import Ember from "../assets/images/ember.png"; 
import Angular from "../assets/images/angular-icon.svg";
import Hugo from "../assets/images/hugo.png";
import Gatsby from "../assets/images/gatsby.png";

const Frameworks = () => {
  return (
    <div className="mt-10">
      <div className="text-center" data-scroll data-scroll-speed="0.06">
        <span className="mb-12 text-[#666666] dark:text-[#888888] font-bold tracking-[0.2rem] text-xs uppercase z-50 relative">
          Works with 30+ Frameworks
        </span>
      </div>
      <ul className="flex justify-center items-center my-6 px-3 flex-wrap">
        <li className="m-4" data-scroll data-scroll-speed="0.07">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={nextreact} alt="next" className="relative sm:w-[52px] md:w-10 w-10 dark:border-[#fff] dark:border rounded-full"/>
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
              Next.js
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.09">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={Reacticon} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
              Create React App
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.09">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={svelte} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
             Svelte
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.1">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={Nuxt} alt="next" className="relative w-12 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
             Nuxt.js
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.1">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={vue} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
             Vue.js
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.1">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={Ember} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
            Ember.js
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.09">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={Angular} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
            Angular.js
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.09">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={Hugo} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
            Hugo
            </p>
          </a>
        </li>
        <li className="m-4" data-scroll data-scroll-speed="0.07">
          <a href="#0" className="relative framewotrk duration-700">
            <Image src={Gatsby} alt="next" className="relative w-10 dark:invert" />
            <p className="bg-black p-2 rounded-lg text-white dark:bg-white dark:text-black absolute tooltip mt-4 max-w-[250px] opacity-0 -translate-x-2/4 left-2/4 whitespace-nowrap">
            Gatsby
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Frameworks;
