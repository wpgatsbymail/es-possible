import React from 'react'
import { Carousel } from 'flowbite-react'
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {
  return (
<div className="carousel-h  ">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <StaticImage  className='h-full' src="austin-distel-rpESjbIhZQg-unsplash NEW Z BLUREM.jpg" alt="A dinosaur" />

    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <StaticImage className='h-full'  src="austin-distel-rpESjbIhZQg-unsplash NEW Z BLUREM.jpg" alt="A dinosaur" />

    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <StaticImage className='h-full'  src="austin-distel-rpESjbIhZQg-unsplash NEW Z BLUREM.jpg" alt="A dinosaur" />

    </div>
  </Carousel>
</div>
  )
}

export default Slider