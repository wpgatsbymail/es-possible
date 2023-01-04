import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import NavbarHome from "./NavbarHome"


const HeaderHomePage = () => {
  return (
    <div className="relative z-0 flex flex-col  before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[1] before:bg-[#000] before:bg-opacity-30   ">
      <NavbarHome />
      {/* <Slider/> */}
      <StaticImage
        className="hero-image"
        src="zamiast slajdera.jpg"
        alt="hero image"
      />
    </div>
  )
}

export default HeaderHomePage
