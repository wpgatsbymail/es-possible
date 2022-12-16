import React from "react"
import Nav from "./navbar"
import { StaticImage } from 'gatsby-plugin-image'

// import Slider from './Slider'
// import HeroImage from "./HeroImage"
const Header = () => {
  return (
    <div className="relative z-0 flex flex-col before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-1 before:bg-black bg-opacity-30   ">
      <Nav />
      {/* <Slider/> */}
      <StaticImage  className='hero-image' src="zamiast slajdera.jpg" alt="A dinosaur" />

    </div>
  )
}

export default Header
