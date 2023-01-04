import { Link } from "gatsby"
import React from "react"
import { BsWhatsapp } from "react-icons/bs"
import { FaMailBulk } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="border-t border-black border-solid ">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="flex justify-center text-3xl md:text-6xl text-black font-bold my-8 text-center">
          Dane Kontaktowe
        </h2>
        <hr className="bg-[#DE9A08] h-1 w-12 mb-4" />
      </div>
      <div className="flex flex-col justify-around items-center gap-4 mb-4">
        <div className="flex items-center flex-col">
          <BsWhatsapp className="text-4xl text-[#4AC959]" />
          <span className="text-xl">+57 313 533 3945</span>
        </div>
        <div className="flex items-center flex-col">
          <FaMailBulk className="text-4xl text-[#DE9A08]" />
          <span className="text-xl text-center">

            info@espossible-online.com</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#EECC82] gap-4 py-2">
        
        <Link className="font-bold underline" to="/polityka-prywatnosci"> 
        Polityka Prywatności
        </Link>
    
        <span className="text-xs">Copyright © 2023 Es-possible</span>
      </div>
    </div>
  )
}

export default Footer
