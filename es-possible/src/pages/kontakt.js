import React from 'react'
import {    FaWhatsappSquare} from "react-icons/fa"
import {  GoMail} from "react-icons/go"
import Footer from '../components/footer'
import Header from '../components/header/Header'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'


const kontakt = () => {
  return (
  <>
  <Header/>
  <div className="flex flex-col justify-center items-center my-8">
          <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-3xl  font-bold text-center ">
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
        <StaticImage className="md:max-w-[50vw] md:min-w-[450px]  max-w-[80vw] my-8" src="../images/zamiast mapy.jpg" alt="bar z dachem z słomy" />
        </div>
        <Footer/>
  </>
  )
}

export default kontakt