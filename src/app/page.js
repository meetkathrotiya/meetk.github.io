"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import Vercel from "../component/Vercel-Journey";
import Vercelway from "../component/vercel-way";
import Frameworks from "../component/Frameworks";
import Preview from "../component/Preview";
import Ship from "../component/ship";
import Scroll from "../component/scroll";
import Footer from "../component/Footer";
import Hero from "../component/Hero";  
import remarkable from "../component/remarkable"
import Loader from "../component/loader" 

const Home = () => { 
  
   return (
    <>
      <Loader/>
      <main className="scroll-smooth pt-[70px]">
      <Hero />
      <Vercelway />
      <Frameworks />
      <Preview />
      <Ship />
      <Scroll />
      <Vercel />
      <Footer /> 
      </main>
    </>
  )
}

export default Home 
