import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Kursy = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="flex justify-center text-4xl font-bold mb-2 text-center">
          Kursy oferowane przez nasze nauczycielki
        </h2>
        <hr className="bg-[#DE9A08] h-1 w-12 mb-4" />
      </div>
      <div className="flex justify-center items-center flex-col gap-2 md:flex-row md:flex-wrap md:text-[#fff] ">
        <div className="flex flex-col gap-2 relative before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[1] before:bg-[#fff] before:bg-opacity-30">
          <Link
            to="/solo"
            className="flex  justify-center items-center overlay relative max-w-xs  md:max-w-md "
          >
            <StaticImage className="" src="../images/Optimized-1.jpg" alt="Panel kursu solo-lekcje indywidualne" /> 
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              solo-lekcje indywidualne
            </span>
          </Link>
          <Link
            to="/duo"
            className="flex justify-center items-center overlay relative max-w-xs md:max-w-md"
          >
            <StaticImage src="../images/Optimized-2.jpg" alt="Panel kursu duo-lekcje w parach" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              duo-lekcje w parach
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-2 relative before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[1] before:bg-[#fff] before:bg-opacity-30">
          <Link
            to="/amigos"
            className="flex justify-center items-center overlay relative max-w-xs md:max-w-md"
          >
            <StaticImage src="../images/Optimized-3.jpg" className="w-xs" alt="Panel kursu amigos-lekcje-grupowe" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              amigos-lekcje-grupowe
            </span>
          </Link>
          <Link
            to="/medellin"
            className="flex justify-center items-center  overlay relative max-w-xs md:max-w-md"
          >
            <StaticImage src="../images/Optimized-4.jpg" alt="Panel kursu MEDELLÍN lekcje stacjonarne" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              MEDELLÍN lekcje stacjonarne
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Kursy
