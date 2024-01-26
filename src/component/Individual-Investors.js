import React from 'react'
import Image from "next/image";
import Friedman from '../assets/images/natfriedman-1.png'
import jordanwalke from '../assets/images/jordanwalke-2.png'
import navalravikant from '../assets/images/navalravikant-3.png'
import jessiefrazelle from '../assets/images/jessiefrazelle-4.png'
import ilyasukhar from '../assets/images/ilyasukhar-6.png'
import davidcramer from '../assets/images/davidcramer-6.png'
import anthonycasalena from '../assets/images/anthonycasalena-7.png'
import soleiocuervo from '../assets/images/soleiocuervo-8.png'
import matiaswoloski from '../assets/images/matiaswoloski-9.png'
import michaelstoppelman from '../assets/images/michaelstoppelman-10.png'
import petehunt from '../assets/images/petehunt-11.png'
import brendaneich from '../assets/images/brendaneich-12.png'
import sahillavingia from '../assets/images/sahillavingia-13.png'
import rasmusanderson from '../assets/images/rasmusanderson-14.png'
import benjamindecock from '../assets/images/benjamindecock-15.png'
import alexandrwang from '../assets/images/alexandrwang-16.png'
import karrisaarinen from '../assets/images/karrisaarinen-17.png'

const IndividualInvestors = () => {
    return (
        <div className='max-w-[1248px] w-full mx-auto mb-52'>
            <h2 data-scroll data-scroll-speed="0.03" className='lg:text-[40px] text-3xl font-bold text-center xl:mb-20 lg:mb-20 mb-12'>Individual Investors</h2>
            <div className='flex flex-wrap justify-center gap-2'>
                <div data-scroll data-scroll-speed="0.09" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={Friedman}
                        alt="Friedman"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Nat Friedman</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Former CEO of <a className='font-bold investirs-sec relative' target="_blank" href="https://github.com/">GitHub</a></p>
                </div>
                <div data-scroll data-scroll-speed="0.08" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={jordanwalke} 
                        alt="jordanwalke"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Jordan Walke</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Creator of<a className='font-bold investirs-sec relative' target="_blank" href="https://react.dev/"> React</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.07" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={navalravikant}
                        alt="navalravikant"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Naval Ravikant</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder of<a className='font-bold investirs-sec relative' target="_blank" href="https://wellfound.com/"> AngelList</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.06" className='text-center my-4 max-w-[200px] w-full'>
                    <Image 
                        src={jessiefrazelle}
                        alt="jessiefrazelle"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Jessie Frazelle</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CPO of<a className='font-bold investirs-sec relative' target="_blank" href="https://oxide.computer/"> Oxide</a></p>
                </div>
                <div data-scroll data-scroll-speed="0.05" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={ilyasukhar}
                        alt="ilyasukhar"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Ilya Sukhar</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Former Partner at<a className='font-bold investirs-sec relative' target="_blank" href="https://www.ycombinator.com/">YC</a></p>
                    <p className='text-sm font-normal'>Founder of <a className='font-bold investirs-sec relative' target="_blank" href="https://parseplatform.org/">Parse</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.04" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={davidcramer}
                        alt="davidcramer"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>David Cramer</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder and CEO of <a className='font-bold investirs-sec relative' target="_blank" href="https://sentry.io/welcome/">Sentry</a></p>
                </div>
                <div data-scroll data-scroll-speed="0.03" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={anthonycasalena}
                        alt="anthonycasalena"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Anthony Casalena</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>CEO of <a className='font-bold investirs-sec relative' target="_blank" href="https://www.squarespace.com/">Squarespace</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.03" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={soleiocuervo}
                        alt="soleiocuervo"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Soleio Cuervo</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Early design at <a className='font-bold investirs-sec relative' target="_blank" href="https://www.facebook.com/"> Facebook</a>and <a className='font-bold investirs-sec relative' target="https://www.dropbox.com/" href="https://www.dropbox.com/">Dropbox</a></p>
                </div>
                <div data-scroll data-scroll-speed="0.02" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={matiaswoloski}
                        alt="matiaswoloski"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Matias Woloski</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CTO of<a className='font-bold investirs-sec relative' target="https://auth0.com/" href="https://auth0.com/"> Auth0</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.01" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={michaelstoppelman}
                        alt="michaelstoppelman"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Michael Stoppelman</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Former SVP at<a className='font-bold investirs-sec relative' target="_blank" href="https://www.yelp.com/"> Yelp </a>and <a href="https://www.google.com/" target="_blank" className='font-bold investirs-sec relative'>Google </a>engineer</p>
                </div>
                <div data-scroll data-scroll-speed="0.01" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={petehunt}
                        alt="petehunt"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Pete Hunt</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>ormer Founder of Smyte and <a className='font-bold investirs-sec relative' target="https://www.facebook.com/" href="https://www.facebook.com/"> Facebook </a>engineer</p>
                </div>
                <div data-scroll data-scroll-speed="0.02" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={brendaneich}
                        alt="brendaneich"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Brendan Eich</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>CEO of<a className='font-bold investirs-sec relative' target="_blank" href="https://brave.com/"> Brave. </a>Co-founded Mozilla & Firefox. Created JavaScript.</p>
                </div>
                <div data-scroll data-scroll-speed="0.03" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={sahillavingia}
                        alt="sahillavingia"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Sahil Lavingia</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CEO of <a className='font-bold investirs-sec relative' target="_blank" href="https://gumroad.com/"> Gumroad</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.04" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={rasmusanderson}
                        alt="rasmusanderson"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Rasmus Anderson</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Early design at<a className='font-bold investirs-sec relative' target="https://gumroad.com/" href="https://gumroad.com/"> Spotify </a>and <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1259059742842334578" target="_blank" className='investirs-sec relative font-bold'>Figma.</a>Creator of Inter.</p>
                </div>
                <div data-scroll data-scroll-speed="0.05" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={benjamindecock}
                        alt="benjamindecock"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold whitespace-nowrap mt-4'>Benjamin De Cock</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Early design at<a className='font-bold investirs-sec relative' target="_blank" href="https://stripe.com/en-in"> Stripe</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.06" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={alexandrwang}
                        alt="alexandrwang"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Alexandr Wang</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>CEO of<a className='font-bold investirs-sec relative' target='_blank' href="https://scale.com/"> Scale</a> </p>
                </div>
                <div data-scroll data-scroll-speed="0.07" className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={karrisaarinen}
                        alt="karrisaarinen"
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Karri Saarinen</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CEO of<a className='font-bold investirs-sec relative' target="_blank" href="https://linear.app/"> Linear</a>Early design at <a target="_blank" href="https://www.airbnb.co.in/?locale=en&_set_bev_on_new_domain=1694682442_N2EwOWRjZjM1Nzk4"> Airbnb</a>and <a className='font-bold investirs-sec relative' target="_blank" href="https://www.coinbase.com/">Coinbase</a></p>
                </div>
            </div>
        </div>
    )
}

export default IndividualInvestors;