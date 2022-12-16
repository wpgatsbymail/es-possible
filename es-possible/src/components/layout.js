import React from "react"
import {  useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"
import Header from "./header/Header"
import '../index.css'

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
      {/* <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header> */}
      <Header/>

      <main>{children}</main>

      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer> */}
    </div>
  )
}

export default Layout
