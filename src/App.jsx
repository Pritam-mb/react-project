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
    <div
    className='h-full w-full'
    style={{height:"100vh",
      width:"100vw",backgroundColor:"#f5f5f5",
      
    }}></div>
    </>
  )
}

export default App
