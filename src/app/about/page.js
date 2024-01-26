"use client"
import React from 'react'
import Mission from '../../component/Mission'
import Investors from '../../component/Investors'
import Individual from '../../component/Individual-Investors'
import Future from '../../component/future'
import Footer from "../../component/Footer";

const page = () => {
  return (
    <>
      <main className="scroll-smooth pt-[70px]"> 
        <Mission/>
        <Investors/>
        <Individual/>
        <Future/>
        <Footer />
      </main>
    </>
  )
}

export default page;