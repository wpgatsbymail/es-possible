import React from "react"
import Nav from "./Navbar"
import { StaticImage } from "gatsby-plugin-image"


const HeaderPages = () => {
  return (
    <div className="relative z-0 flex flex-col  before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-1 before:bg-black bg-opacity-40   ">
      <Nav />

      <StaticImage
        className="min-h-[450px] md:max-h-[300px]"
        src="zamiast kubka z kawa3.jpg"
        alt="hero image"
      />
    </div>
  )
} 

export default HeaderPages
