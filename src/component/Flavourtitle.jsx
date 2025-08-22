import { useGSAP } from '@gsap/react';
import React from 'react'

function Flavourtitle() {
    const title = "Flavour that takes you back to your childhood";
//    useGSAP(() => {
//         const tl1 = gsap.timeline({ delay: 0.5 });
//     //     tl1.to(".msg-text-scroll ", {
//     //           duration: 1,
//     //   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//     //   ease: "circ.inOut",
//     //         scrollTrigger: {
//     //             trigger: ".msg-text-scroll ",
//     //             scroller: "body",
//     //             start: "top 80%",
//     //             end: "top 30%",
//     //             scrub: 1,}
//     //     })

// //         const msg = document.querySelector('.first-message').textContent;
//         const tl2 = gsap.timeline({ delay: 0.5 });
//       // var clut ="";
//       //   msg.split("").map((e)=>{
//       //     clut += `<span>${e}</span>`;
//       //    })
//           //  document.querySelector('.first-message span').innerHTML = clut;
//  tl2.to(".first-message span", {
//       color: "white",
//       stagger: 0.05,
//       scrollTrigger: {
//         trigger: ".first-message",
//         scroller: "body",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 1,
//       },
//     })
//     // .to(".second-message span", {
// //       color: "white",
// //        stagger: 0.05,
// //       scrollTrigger: {
// //         trigger: ".second-message",
// //         scroller: "body",
// //         start: "top 80%",
// //         end: "top 30%",
// //         scrub: 1,
// //       },
// //     }).to(".third p", {
// //       y: 0,
// //       opacity: 1,
// //       duration: 1,
// //       ease: "power2.out",
// //       scrollTrigger: {
// //         trigger: ".third",
// //         scroller: "body",
// //         start: "top 80%",
// //         end: "top 30%",
// //         scrub: 1,
// //       },
// //       });
         
          
          
        
// //         console.log(msg);
        
//     }, []);
  useGSAP(()=>{
    const t1 = gsap.timeline({delay:0.5});
    t1.to(".first-message span", {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".first-message",    
            scroller: "body",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,}
    })
  }
)
  return (
   <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
         <h1 className="first-message"
            style={{
              maxWidth: "730px"
            }}>
              {title.split("").map((char, index) => (
                <span key={index} className="inline-block opacity-0">
                  {char === " " ? "\u00A0" : char}
                </span>))}
            </h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  )
}

export default Flavourtitle
