import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./header.styles.scss"

const Header = () => {
  const [navBar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
  }, [])

  return (
    <header
      className={`${navBar ? "scroll-view" : ""} fixed left-0 right-0 z-50`}
    >
      <div className="container mx-auto flex flex-wrap px-2 py-6 md:px-24 flex-col md:flex-row items-center main-header">
        <Link to="/" className="flex font-bold items-center mb-4 md:mb-0">
          <span className="text-xl">Asif Khan</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center">
          <Link to="/" className="mr-5 p-2">
            Home
          </Link>
          <AnchorLink to="/#works" className="mr-5 p-2">
            Projects
          </AnchorLink>
          <AnchorLink to="/#contact" className="mr-5 p-2">
            Let's Talk
          </AnchorLink>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Asif Khan`,
}

export default Header
