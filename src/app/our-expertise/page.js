"use client"
import React from 'react'
import Footer from "../../component/Footer";
import Expertise from '@/component/Expertise';

const page = () => {
  return (
    <main className="scroll-smooth pt-[70px]">
      <Expertise />
      <Footer />
    </main>
  )
}

export default page;