import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Messege() {
  const title = "Stir up your fearless past and"
  const subtitle = " your future with every gulp of Perfect Protein"
  useGSAP(() => {
    const tl1 = gsap.timeline({ delay: 0.5 });
    tl1.to(".msg-text-scroll ", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".msg-text-scroll ",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
    })

    const msg = document.querySelector('.first-message').textContent;
    const tl2 = gsap.timeline({ delay: 0.5 });
    // var clut ="";
    //   msg.split("").map((e)=>{
    //     clut += `<span>${e}</span>`;
    //    })
    //  document.querySelector('.first-message span').innerHTML = clut;
    tl2.to(".first-message span", {
      color: "white",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".first-message",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    }).to(".second-message span", {
      color: "white",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".second-message",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    }).to(".third p", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".third",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });




    console.log(msg);

  }, []);

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message"
              style={{
                maxWidth: "730px"
              }}>
              {title.split("").map((char, index) => (
                <span key={index} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>))}
            </h1>

            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message"
              style={{
                maxWidth: "780px"
              }}>
              {subtitle.split("").map((char, index) => (
                <span key={index} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>))}
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="third max-w-md px-10 flex-center overflow-hidden translate-y-10">
              <p className=' opacity-0'>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Messege
