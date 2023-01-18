import React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs"


const Nav = () => {
  let [open, setOpen] = useState(false)
  return (

    <div className="flex flex-col justify-center md:justify-center items-center gap-8 md:gap-20 absolute top-0 bottom-0 left-0 right-0 z-[2] bg-transparent w-full">
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around md:w-full">
        <Link to="/">
          <StaticImage
            className="w-20 h-20"
            placeholder="none"
            src="LOGO.png"
            alt="logo"
          />
        </Link>

        <div className="flex gap-4 text-[#fff] ">
          <a
            className=" hover:text-[#DE9A08] text-2xl md:text-[#fff]"
            href="https://www.facebook.com/espossiblelc"
          >
            <BsFacebook className="text-[#fff]" />
          </a>
          <a
            className="text-[#fff] hover:text-[#DE9A08] text-2xl md:text-[#fff]"
            href="https://www.youtube.com/channel/UC3J0HapRz_lMaUKQpUcKSrQ"
          >
            <BsYoutube />
          </a>
          <a
            className="text-[#fff] hover:text-[#DE9A08] text-2xl"
            href="http://www.linkedin.com/in/es-possible"
          >
            <BsLinkedin />
          </a>
          <a
            className="text-[#fff] hover:text-[#DE9A08] text-2xl"
            href="https://www.instagram.com/espossible.spanish/?igshid=YmMyMTA2M2Y%3D"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className="relative flex flex-col justify-around items-center">
        <svg
          onClick={() => setOpen(!open)}
          className="w-12 h-12 flex justify-center text-[#fff] cursor-pointer md:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d={`${
              open
                ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            }`}
            clipRule="evenodd"
          />
          
        </svg>
        <div
          className={`absolute top-16 z-[2] w-40 flex justify-center items-center flex-col p-4 gap-4 text-lg bg-[#fff] shadow font-bold overflow-hidden transition-all duration-500 ease-in md:relative md:top-0 md:flex-row md:text-[#fff]   md:text-2xl md:gap-6 transparent md:shadow-none md:flex md:w-full ${
            open ? "flex" : "hidden"
          }`}
        >
          <Link
            className="md:text-[#fff] hover:text-[#DE9A08] md:active:text-[#DE9A08]  "
            to="/"
            activeStyle={{ color: "#DE9B09" }}
          >
            Hiszpański
          </Link>
          <Link
            className="md:text-[#fff] hover:text-[#DE9A08] md:active:text-[#DE9A08]  "
            to="/kursy"
            activeStyle={{ color: "#DE9B09" }}
          >
            Kursy
          </Link>
          <Link
            className=" md:text-[#fff] hover:text-[#DE9A08] md:active:text-[#DE9A08]  "
            to="/blog"
            activeStyle={{ color: "#DE9B09" }}
          >
            Blog
          </Link>
          <Link
            className="md:text-[#fff] hover:text-[#DE9A08] md:active:text-[#DE9A08]  "
            to="/cwiczenia"
            activeStyle={{ color: "#DE9B09" }}
          >
            Ćwiczenia
          </Link>
          <Link
            className="md:text-[#fff] hover:text-[#DE9A08] md:active:text-[#DE9A08]  "
            to="/o-nas"
            activeStyle={{ color: "#DE9B09" }}
          >
            O nas
          </Link>
          <Link
            className="md:text-[#fff] hover:text-[#DE9A08] md:active:text-[#DE9A08]  "
            to="/kontakt"
            activeStyle={{ color: "#DE9B09" }}
          >
            Kontakt
          </Link>
        </div>
      </div>


    </div>

  )
}

export default Nav
