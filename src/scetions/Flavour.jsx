import React from 'react'
import Flavourtitle from '../component/Flavourtitle'
import Slider from '../component/slider'
function Flavour() {
  return (
      <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          {/* <Flavourtitle /> */}
          <Flavourtitle/>
        </div>
        <div className="h-full">
          {/* <FlavorSlider /> */}
          <Slider/>
        </div>
      </div>
    </section>
  )
}

export default Flavour
