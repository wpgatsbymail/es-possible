import React from "react"
import { FaWhatsappSquare } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

const kontakt = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-4xl md:text-5xl  font-bold text-center my-4">
            Dane Kontaktowe
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-14" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaWhatsappSquare className="text-5xl text-[#4AC959]" />
          <p className="font-bold text-lg">+57 313 533 3945</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GoMail className="text-5xl " />
          <p className="font-bold text-lg">info@espossible-online.com</p>
        </div>
        <StaticImage
          className="md:max-w-[50vw] md:min-w-[450px]  max-w-[80vw] my-8"
          src="../images/zamiast mapy.jpg"
          alt="bar z dachem z słomy" 
        />
        <ContactForm />
      </div>
    </Layout>
  )
}

export default kontakt
