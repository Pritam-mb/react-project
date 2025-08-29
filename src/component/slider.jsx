import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

function Slider() {
  const flavorlists = [
    {
      name: "Chocolate Milk",
      color: "brown",
      rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
      name: "Strawberry Milk",
      color: "red",
      rotation: "md:rotate-[8deg] rotate-0",
    },
    {
      name: "Cookies & Cream",
      color: "blue",
      rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
      name: "Peanut Butter Chocolate",
      color: "orange",
      rotation: "md:rotate-[8deg] rotate-0",
    },
    {
      name: "Vanilla Milkshake",
      color: "white",
      rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
      name: "Max Chocolate Milk",
      color: "black",
      rotation: "md:rotate-[8deg] rotate-0",
    },
  ];

  // ✅ Hook inside component, not in return
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 60%",
        end: "+=500px",
        scrub: true,
        // pin: true,
      },
    });
    tl.to(".flavor-section", {
      x: "-500px", // cleaner than transform: translateX
      // delay: 1,
      // duration: 3,
      ease: "power1.inOut",
     
    });
  });

  return (
    <div className="slider-wrapper">
      <div
        className="flavors"
       style={{border:"1px solid red"}}
      >
        
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/brown-bg.svg`}
              className="absolute bottom-0"
              alt=""
            />
            <img
              src={`/images/brown-drink (1).webp`}
              className="drinks"
              alt=""
            />
            <img
              src={`images/brown-elements.webp`}
              className="absolute"
              alt=""
            />
            <h3
              className={`absolute text-3xl font-bold capitalize ${
                flavor.color === "white" ? "text-black" : "text-white"
              } bottom-5 left-5`}
            >
              {flavor.name}
            </h3>
          </div>
        ))}
  
      </div>
    </div>
  );
}

export default Slider;
