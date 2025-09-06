import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPinSection from '../component/VideoPinSection';
function benifit() {
  const list = [
    "Shelf stable", "Protein + Caffeine", "Infinitely recyclable"
    , "Lactose free"]
  return (
   useGSAP(() => {
  const revealTl = gsap.timeline({
    delay: 1,
    scrollTrigger: {
      trigger: ".benefit-section",
      start: "top 60%",
      end: "top top",
      scrub: 1.5,
    },
  });

  // staggered reveal
  revealTl
    .to(".benefit-section .box-1", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    })
    .to(".benefit-section .box-2", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    }, "-=0.5") // starts a bit earlier (overlap)

    .to(".benefit-section .box-3", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    }, "-=0.5")

    .to(".benefit-section .box-4", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    }, "-=0.5");
}),

    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>
          <div 
          className="h-full box-1 flex col-center font-semibold uppercase tracking-tighter mt-15 p-5">
            <div     style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         
        }}
             className="box-1 w-100 h-29 border-[.8vw] border-[#222123] bg-[#c88e64] rotate-3 z-10 relative 
                flex items-center justify-center text-center p-5">
              <h2 className="text-7xl text-[#faeade]">
                SHELF STABLE
              </h2>
            </div>
            <div style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         
        }}
            className=" box-2 w-130 h-29 border  bg-[#faeade]   rotate-1 z-5
                flex items-center justify-center text-center">
              <h2 className="text-7xl text-[#222123]">
                PROTEIN + CAFFEINE
              </h2>
            </div>
            <div style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         
        }} className="box-3 w-150 h-30 border-[.8vw]  border-[#222123]  bg-[#7F3B2D] rotate-3 z-10 relative 
                flex items-center justify-center text-center">
              <h2 className="text-7xl text-[#c88e64]">
                INFINITELY RECYCLABLE
              </h2>
            </div>
            <div style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         
        }} className="box-4 w-100 h-28 border border-yellow-500 bg-[#FED775] rotate--100 z-5 relative 
                flex items-center justify-center text-center">
              <h2 className="text-7xl text-[#2E2D2F]">
                LACTOSE FREE
              </h2>
            </div>
          


          </div>
        </div>
      </div>
      
        <div className="relative overlay-box ">
        <VideoPinSection />
      </div>
    </section>
  )
}

export default benifit
