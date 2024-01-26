import React from 'react'
import Image from "next/image";
import easy from '../assets/images/easy.png'
import universal from '../assets/images/universal.png'
import accessible from '../assets/images/accessible.png'

const Mission = () => {
  return (
    <div className='lg:min-h-[900px] sm:min-h-[780px] min-h-[694px] flex items-center justify-center flex-col h-full max-w-[1248px] mx-auto px-3 sm:px-0'>
      <div>
        <div className='max-w-[953px] mx-auto text-center'>
          <p data-scroll data-scroll-speed="0.20" className='text-sm text-[#0070f3] uppercase tracking-[4.4px]'>Our Mission</p>
          <h2 data-scroll data-scroll-speed="0.30" className='lg:text-[56px] md:text-5xl text-[30px] font-bold lg:leading-[60px] md:leading-[58px] leading-[34px] mt-4 px-4'>We enable developers to build and publish wonderful things</h2>
        </div>
        <h5 data-scroll data-scroll-speed="0.40" className='sm:mt-10 mt-4 lg:mt-14 max-w-[570px] text-center font-normal lg:text-2xl sm:text-xl mx-auto'>We build products for <span className='font-bold'>developers and designers.</span> And those who aspire to become one.</h5>
      </div>
      <div className='flex lg:flex-row flex-col lg:mt-24 mt-16 lg:gap-6 gap-10'>
        <div data-scroll data-scroll-speed="0.4" className='flex flex-row gap-6 max-w-[310px] w-full'>
          <div className='bg-black dark:bg-white rounded-[10px] h-[42px] mt-2 max-w-[40px] w-full flex justify-center items-center'>
            <Image
              src={easy}
              alt="easy"
              className='flex items-center justify-center rounded-xl invert dark:invert-0 w-[18px]'  
            />
          </div>
          <div>
            <h4 className='text-2xl font-semibold'>Easy</h4>
            <p className='text-base text-[#666] dark:text-[#a1a1a1]'>Building and deploying should be as easy as a single tap.</p>
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.3" className='flex flex-row gap-6 max-w-[310px] w-full'>
        <div className='bg-black dark:bg-white rounded-[10px] h-[42px] mt-2 max-w-[40px] w-full flex justify-center items-center'>
          <Image
            src={universal}
            alt="universal"
            className='flex items-center justify-center rounded-xl invert dark:invert-0 w-[18px]'
          />
          </div>
          <div>
            <h4 className='text-2xl font-semibold'>Universal</h4>
            <p className='text-base text-[#666] dark:text-[#a1a1a1]'>To connect the world, sites should be fast from everywhere.</p>
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.2" className='flex flex-row gap-6 max-w-[310px] w-full'>
        <div className='bg-black dark:bg-white rounded-[10px] h-[42px] mt-2 max-w-[40px] w-full flex justify-center items-center'>
          <Image
            src={accessible}
            alt="accessible"
            className='flex items-center justify-center rounded-xl invert dark:invert-0 w-[18px]'
          />
          </div>
          <div>
            <h4 className='text-2xl font-semibold'>Accessible</h4>
            <p className='text-base text-[#666] dark:text-[#a1a1a1]'>Great care in user experience and design enables everyone.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission ;