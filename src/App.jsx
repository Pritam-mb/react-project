import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import Hero from './scetions/Hero'
import {ScrollTrigger} from 'gsap/all'
import gsap from 'gsap'
import locomotiveScroll from 'locomotive-scroll'
import Messege from './scetions/Messege'
import Flavour from './scetions/Flavour'
import Neutrition from './scetions/Neutrition'
import Benifit from './scetions/benifit'
import Testimonial from './scetions/Testimonial'
import FooterSection from './scetions/FooterSection'
// import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);
// import './App.css'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Messege/>
    <Flavour/>
    <Neutrition/>
    <div>

    <Benifit/>
    <Testimonial/>
    </div>
    <FooterSection/>
 
    </>
  )
}

export default App
