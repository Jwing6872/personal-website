import * as React from 'react'
import { Link } from 'gatsby'
import { Footer } from './footer.js'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'
  

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className = {navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/experience" className={navLinkText}>Experience</Link></li>
          <li className={navLinkItem}><Link to="/coursework" className={navLinkText}>Coursework</Link></li>
          <li className={navLinkItem}><Link to="/projects" className={navLinkText}>Projects</Link></li>
          <li className={navLinkItem}><Link to="/misc" className={navLinkText}>Misc</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    <Footer/>
    </div>
  )
}
export default Layout