import React from 'react'
import Image from "next/image";
import accel from '../assets/images/accel.png'
import bedrock from '../assets/images/bedrock.png'
import crv from '../assets/images/crv.png'
import ggv from '../assets/images/ggv.png'
import gv from '../assets/images/gv.png'
import svangel from '../assets/images/svangel.png'
import black from '../assets/images/8vc-black.svg'
import angellist from '../assets/images/angellist.svg'
import caffeinatedcapital from '../assets/images/caffeinatedcapital.svg'
import geodesic from '../assets/images/geodesic.svg'
import greenoaks from '../assets/images/greenoaks.svg'
import resolute from '../assets/images/resolute.svg'
import s28 from '../assets/images/s28.svg'
import salesforce from '../assets/images/salesforce.svg'
import tigerglobal from '../assets/images/tigerglobal.svg'
import truebridge from '../assets/images/truebridge-black.svg'

const Investors = () => {
    return (
        <div className='border-t border-[#eaeaea] dark:border-[#333] xl:mb-60 sm:mb-44 mb-36 px-3 lg:px-0'>
            <div className='max-w-[1248px] w-full mx-auto'>
                <h2 data-scroll data-scroll-speed="0.03" className='lg:text-[40px] text-3xl font-bold text-center my-24'>We're backed by incredible investors</h2>
                <div data-scroll data-scroll-speed="0.08" className='max-w-[864px] w-full mx-auto flex flex-wrap gap-7 md:mt-28 justify-center'>
                    <Image
                        src={accel}
                        className='w-[118px] invert dark:invert-0'
                        alt='accel'
                    />
                    <Image
                        src={bedrock}
                        className='w-[118px] invert dark:invert-0'
                        alt='bedrock'
                    />
                    <Image
                        src={crv}
                        className='w-[118px] invert dark:invert-0'
                        alt='crv'
                    />
                    <Image
                        src={ggv}
                        className='w-[118px] invert dark:invert-0'
                        alt='ggv'
                    />
                    <Image
                        src={gv}
                        className='w-[118px] invert dark:invert-0'
                        alt='gv'
                    />
                    <Image
                        src={svangel}
                        className='w-[118px] invert dark:invert-0'
                        alt='svangel'
                    />
                </div>
                <div data-scroll data-scroll-speed="0.09" className='max-w-[894px] w-full mx-auto gap-6 flex mt-16 flex-wrap justify-center'>
                    <Image
                        src={black}
                        className='dark:invert invert-0'
                        alt='black'
                    />
                    <Image
                        src={angellist}
                        className='dark:invert invert-0'
                        alt='angellist'
                    />
                    <Image
                        src={caffeinatedcapital}
                        className='dark:invert invert-0'
                        alt='caffeinatedcapital'
                    /> 
                    <Image
                        src={geodesic}
                        className='dark:invert invert-0'
                        alt='geodesic'
                    />
                    <Image
                        src={greenoaks}
                        className='dark:invert invert-0'
                        alt='greenoaks'
                    />
                    <Image
                        src={resolute}
                        className='dark:invert invert-0'
                        alt='resolute'
                    />
                    <Image
                        src={s28}
                        className='dark:invert invert-0'
                        alt='s28'
                    />
                    <Image
                        src={salesforce}
                        className='dark:invert invert-0'
                        alt='salesforce'
                    />
                    <Image
                        src={tigerglobal}
                        className='dark:invert invert-0'
                        alt='tigerglobal'
                    />
                    <Image
                        src={truebridge}
                        className='dark:invert invert-0'
                        alt='truebridge'
                    />
                </div>
            </div>
        </div>
    )
}

export default Investors;