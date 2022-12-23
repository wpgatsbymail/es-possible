import React from "react"
import {  useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"
import Header from "./header/Header"
import '../index.css'
import Footer from "./footer"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    // <div className="global-wrapper" data-is-root-path={isHomePage}>
    <div className="" data-is-root-path={isHomePage}>

      <Header/>

      <main>{children}</main>
      <Footer/>


    </div>
  )
}

export default Layout
