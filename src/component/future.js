import React from 'react'

const future = () => {
  return (
    <div data-scroll data-scroll-speed="0.08" className='border-t border-[#eaeaea] dark:border-[#333]'>
      <div className='max-w-[1308px] w-full mx-auto flex lg:flex-row flex-col lg:py-20 py-12 items-center px-5 justify-between'>
          <div>
            <h2 className='bold-text text-[56px] lg:leading-[64px] font-extrabold leading-[1] tracking-tighter max-w-[672px] text-center lg:text-left'>Join us and shape the future of the web</h2>
          </div>
        <a href="#0" className='bg-black font-medium tracking-[1px] hover:bg-[#1b1b1bf3] dark:hover:bg-[#f1f0f0d8] transition duration-150 ease-out dark:bg-white dark:text-black rounded-lg text-white h-fit py-3 max-w-[205px] w-full text-center mx-4 mt-9 lg:mt-0'>View Open Positions</a>
      </div>
    </div>
  )
}

export default future;