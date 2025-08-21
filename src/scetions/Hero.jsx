import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
// import hero from  '../../public/images'
// function Hero() {
//     const title = "Freaking Delicious"
//     // var txt = document.querySelector(".hero-title h1").innerHTML
//     // var spliit= txt.split("")
//     var clu ="";
//     title.split("").forEach(e => {
//         clu += `<span>${e}</span>`
//         });
//       console.log(`${clu}`) 
//    useGSAP(() => {
//     const tl = gsap.timeline({ delay: 0.5 });

//     // Fade in whole hero content
//     tl.to(".hero-content", {
//       duration: 1,
//       opacity: 1,
//       ease: "power2.out",
//     })

//     // Animate title letters
//     .to(".hero-title span", {
//       y: 10,
//       opacity: 1,
//       stagger: 0.03,
//       ease: "power2.out",
//     }, "-=0.5")

//     // Reveal scroll text
//     .to(".hero-text-scroll", {
//       duration: 1,
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       ease: "circ.out",
//     }, "-=0.3");
//   }, []);
//     return (
//         <section className='bg-main-bg'>
//             <div className='hero-container '>
//                 <img src="\images\hero-img.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto" />
           
//           <div className="hero-content opacity-0 ">
//           <div className="overflow-hidden">
//             <h1 className="hero-title  ">{
//                title.split("").map((char, index) => (
//                 <span key={index} className="inline-block opacity-0">
//                   {char === " " ? "\u00A0" : char}
//                 </span>
//               ))
// }</h1>
//           </div>
//           <div className='hero-text-scroll
//           '
//             style={{
//               clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
//             }}>
//             <div className='hero-subtitle'>
//                 <h1 >Protin+caffin</h1>
//             </div>
//           </div>

//             <h2>
//             Live life to the fullest  with SPYLT: Shatter boredom and embrace
//             your inner kid with every deliciously smooth chug.
//           </h2>

//           <div className="hero-button">
//             <p>Chug a SPYLT</p>
//           </div>
//           </div>
//            </div>
//         </section>
//     )
// }

function Hero() {
  const title = "Freaking Delicious";
   const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Fade in whole hero content
    tl.to(".hero-content", {
      // duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    })

    // Animate title letters
   

    // Reveal scroll text
    .to(".hero-text-scroll", {
      duration: 1,
      y: -40,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
    }, "-=0.5")

     .to(".hero-title span", {
      y: -3,
      opacity: 1,
      stagger: 0.03,
      ease: "power2.out",
    }, "-=0.5");

    const tl2 = gsap.timeline({ delay: 0.5 });
    tl2.to(".hero-container", {
      rotate: 10,
      scale: 0.9,
      ease: "power2.out",
      yPercent:30,
      scrollTrigger: {
        trigger: ".hero-container",
        // trigger: "#page2 p",
        scroller: "body",
        
         
        start:"14% top",

       
       
        end: "80% top",
        markers: true,
          scrub: true,
          // pin: true,
      }
    });
  }, []);

  return (
    <section className="bg-main-bg relative overflow-hidden">
      <div className="hero-container relative">
    {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-img.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        /* Initially hidden, GSAP will fade in */
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">
              {title.split("").map((char, index) => (
                <span key={index} className="inline-block opacity-0">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <div
            className="hero-text-scroll"
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
          >
            <div className="hero-subtitle">
              <h1>Protin+caffin</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>

      </section>
  );
}

export default Hero;

