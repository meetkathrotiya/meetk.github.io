import React, { useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import closeIcon from "../assets/images/close-smaill.svg";
import { motion, useAnimation } from "framer-motion";

const Expertise = () => {
  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: false,
      buttonText: "Discovery",
      panelText:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
      moreInfo: [
        "User Research",
        "User Interviews",
        "Usability Testing",
        "Market & Competitive Analysis",
      ],
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "Strategy & Planning",
      panelText:
        "Strategy & planning is everything. The needs of digital consumers are not the same today as they were yesterday. We have the experience and knowledge needed to create a smart strategy for your business to solve your digital problems.",
      moreInfo: [
        "Online Positioning & Strategy",
        "Brand Development & Integration",
        "Media Planning",
        "Site Architecture Planning",
        "Wireframing",
        "Analytics Analysis",
      ],
    },
    {
      id: "disclosure-panel-3",
      isOpen: false,
      buttonText: "Website Solutions",
      panelText:
        "Web design and development is our roots. Designing and developing for numerous screen sizes and devices takes precision, which is why our hand-crafted, innovative online solutions are second to none.",
      moreInfo: [
        "Visual Design",
        "Development",
        "CMS Design & Implementation",
        "Ecommerce",
        "Campaign Microsites",
        "Website Redesign Services",
        "Website Maintenance Services",
      ],
    },
    {
      id: "disclosure-panel-4",
      isOpen: false,
      buttonText: "Mobile Apps & Responsive Websites",
      panelText:
        "We are experts at delivering an engaging experience on mobile devices of all shapes and sizes. We know which best practices to follow and where we can push the envelope to deliver delight. ",
      moreInfo: ["Responsive Websites", "Interactive Sales Presentations"],
    },
    {
      id: "disclosure-panel-5",
      isOpen: false,
      buttonText: "Enterprise CMS Solutions",
      panelText:
        "If you are looking for the power and efficiencies found with enterprise content management solutions, we can help. Our enterprise solutions enable you to leverage enterprise content management platforms for your business.",
      moreInfo: [
        "Drupal Development",
        "Kentico",
        "Sitecore Implementation & Consultation",
        "Umbraco",
        "Sitefinity",
        "DNN",
        "WordPress",
        "An Award Winning Aem Development Agency",
      ],
    },
    {
      id: "disclosure-panel-6",
      isOpen: false,
      buttonText: "Digital Marketing",
      panelText:
        "You've spent a lot of time and money getting your business to where it is today. Let us help you take your business to the next level with our digital marketing solutions. We'll make sure your company gets the exposure it needs to thrive.",
      moreInfo: [
        "Social Media Marketing",
        "Search Engine Marketing (PPC)",
        "Display Advertising",
        "Search Engine Optimization (SEO)",
        "Email Marketing",
        "Video Production",
      ],
    },
  ]);

  const handleClick = (id) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  const controls = useAnimation();
  
  const containerVariants = {
    expanded: {
      height: "100%",
      transition: {
        duration: 0.3, 
        ease: "easeOut",
      },
    },
    collapsed: {
      height: "0",
      overflow: "hidden",
      transition: {
        duration: 0.3, 
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1180px] lg:max-w-[960px] mx-auto px-4 my-14 flex justify-between lg:flex-row flex-col lg:gap-0 gap-10">
      <div className="w-full lg:max-w-[407px] lg:mt-10 lg:sticky h-fit lg:top-[100px] px-6">
        <h5 className="text-sm uppercase mb-[22px] tracking-[1.5px] font-bold">
          OUR EXPERTISE
        </h5>
        <h3 class="xl:text-[54px] lg:text-[45px] md:text-[40px] text-[33px] font-[600] tracking-[-.778846px] leading-[1.19] we-are-innovators">
          We are innovators in creative web design in Los Angeles.
        </h3>
      </div>
      <div className="w-full max-w-[748px] md:px-6 px-2">
        <div className="w-full">
          {disclosures.map(({ id, isOpen, buttonText, panelText, moreInfo }) => (
              <div className="border border-[#3a3c42] last-of-type:border-b border-b-0">
                <React.Fragment key={id}>
                  <button
                    className={`w-full md:py-[43px] md:pr-[50px] md:pl-[84px] py-[20px] pr-[20px] pl-[60px] hover:text-[#6d6f78] text-left xl:text-[43px] lg:text-[30px] text-[23px] font-bold relative focus:outline-none transition-all duration-500 ${
                      isOpen ? "bg-white text-black" : "dark:text-white text-black"
                    }`}
                    onClick={() => handleClick(id)}
                    aria-expanded={isOpen}
                    {...(isOpen && { "aria-controls": id })}
                  >
                    <Image
                      src={closeIcon}
                      alt="closeIcon"
                      className={`${
                        !isOpen ? "-rotate-45 dark:invert-0" : "dark:invert"
                      } h-5 w-5 absolute top-[50%] translate-y-[-50%] md:left-[48px] left-[25px] transition-all invert`}
                    />
                    {buttonText}
                  </button>
                  <motion.div
                    className="expandable-container"
                    variants={containerVariants}
                    initial="collapsed"
                    animate={isOpen ? "expanded" : "collapsed"}
                  >
                    <div
                      className={`w-full overflow-hidden`}
                    >
                      <div
                        className={`w-full pt-2.5 px-9 md:pb-[70px] pb-[56px] text-sm flex md:flex-row flex-col md:gap-0 gap-10 bg-white`}
                      >
                        <div className="w-full md:max-w-[50%] px-6">
                          <p className="mb-10 text-[#666666] leading-7 tracking-[-0.32px] text-base">
                            {panelText}
                          </p>
                          <a
                            href="#0"
                            className="text-[#666666] hover:text-black transition-all text-base"
                          >
                            Learn More →
                          </a>
                        </div>
                        <div className="w-full md:max-w-[50%] px-6">
                          <h4 className="text-[20px] text-black font-medium mb-3">
                            More
                          </h4>
                          <ul>
                            {moreInfo.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center mb-2 xl:whitespace-nowrap border p-1 px-2 gap-1 w-fit md:ml-0 mx-0 rounded-full bg-[#fafafa] text-[#666666] hover:text-black"
                              > 
                                <a href="#0">{item}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
