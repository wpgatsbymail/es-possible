import React from 'react'
import { Navbar } from 'flowbite-react'
import { StaticImage } from 'gatsby-plugin-image'
const Nav = () => {
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    {/* <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    /> */}
        <StaticImage className="mr-3 w-9 h-9 sm:h-9" placeholder='none' src="LOGO.svg" alt="logo" />

    <span className="self-center whitespace-nowrap text-md text-yellow-600 font-semibold">
      Es-possible

    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Nav