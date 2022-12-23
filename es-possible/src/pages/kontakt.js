import React from 'react'
import {    FaWhatsappSquare} from "react-icons/fa"
import {  GoMail} from "react-icons/go"
import Footer from '../components/footer'
import Header from '../components/header/Header'
import { StaticImage } from "gatsby-plugin-image"


const kontakt = () => {
  return (
  <>
  <Header/>
  <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-3xl  font-bold text-center my-4">
            Dane Kontaktowe
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-14" />
        </div>
        <div className="flex flex-col justify-center items-center">
        <FaWhatsappSquare
        className='text-5xl text-[#4AC959]'
        />
<p className='font-bold text-lg'>+57 313 533 3945</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <GoMail
        className='text-5xl '
        />
<p className='font-bold text-lg'>
info@espossible-online.com
</p>
        </div>

        </div>
        <Footer/>
  </>
  )
}

export default kontakt