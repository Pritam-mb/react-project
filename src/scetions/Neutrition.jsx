import React, { use } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
function Neutrition() {
//       useGSAP(() => {
//     const firstTextSplit = SplitText.create(".first-text-split h1", {
//       type: "chars",
//     });
//     const secondTextSplit = SplitText.create(".second-text-split h1", {
//       type: "chars",
//     });

//     gsap.from(firstTextSplit.chars, {
//       yPercent: 200,
//       stagger: 0.02,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".nutrition-section",
//         start: "top 60%",
//       },
//     });

//     gsap.to(".flavor-text-scroll", {
//       duration: 1,
//       // y: ,
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       scrollTrigger: {
//         trigger: ".nutrition-section",
//         start: "top 40%",
//       },
//     });

//     gsap.from(secondTextSplit.chars, {
//       yPercent: 4000,
//       // y: 40,
//       opacity: 1,
//       stagger: 0.02,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".nutrition-section",
//         start: "top 50%",
//       },
//     });
//   });
useGSAP(()=>{
    const firstTextSplit = SplitText.create(".nutrition-title", {
        type: "chars",
      });

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".nutrition-section",
          start: "top 60%",}});
         t1.from(firstTextSplit.chars,{
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
            })
            .to(".nutrition-text-scroll", {
                duration: 1,
                opacity:1,
clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
ease: "circ.out",
            })
                // duration: 1,
                // y: ,);
            const t2 = gsap.timeline({
                scrollTrigger: {
                  trigger: ".nutrition-section",
                  start: "top 50%",
                }});
                    t2.to(".second h2",{
                        opacity:1,
                        y: -3,
                        delay: 0.5,
                        // stagger: 0.02,
                        ease: "power1.inOut",
                    })
            

});    return (
        
        <div className="nutrition-section"
            // style={{ border: "1px solid red" }}
            >
            
            <img
                src="/images/slider-dip.png"
                alt=""
                className="w-full object-cover mb-20"
            />

            <div className=" border-mid-brown relative h-[90vh] overflow-hidden">
                <img
                    src="/images/big-img.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                    className="absolute left-10 top-20 -translate-y-1/2 flex items-center"
                    // style={{ border: "1px solid blue" }}
                >
          <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title ">It still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>
                </div>
                 <div className='second absolute right-10 top-20 -translate-y-1/2 flex items-center'
                 style={{
                    maxWidth:"290px",
                 }}>
                <h2 className='text-lg md:text-right text-balance font-paragraph opacity-0 '>
                 Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
                </h2>
            </div>
        </div>
    
            </div>
)
           
}

export default Neutrition;
