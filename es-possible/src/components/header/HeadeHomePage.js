import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import NavbarHome from "./NavbarHome"


const HeaderHomePage = () => {
  return (
    <div className="relative z-0 flex flex-col">
    {/* <div className="relative z-0 flex flex-col  before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[1] before:bg-[#000] before:bg-opacity-30   "> */}
      <NavbarHome />

      <StaticImage
        className="hero-image"
        src="zamiast slajdera.webp"
        alt="hero image"
        placeholder= "none"
      />
    </div>
  )
}

export default HeaderHomePage

//There is no clear solution in Gatsby documentation how to create layout only for one page so instead i created another header.