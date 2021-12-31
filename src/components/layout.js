import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from './footer.js'
import {
    container,
    navLinks,
    navLinkItem,
    linkText,
    siteTitle
  } from './css/layout.module.css'
  

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
          <ul className = {navLinks}>
            <li className={navLinkItem}><Link to="/" className={linkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="/experience" className={linkText}>Experience</Link></li>
            <li className={navLinkItem}><Link to="/coursework" className={linkText}>Coursework</Link></li>
            <li className={navLinkItem}><Link to="/projects" className={linkText}>Projects</Link></li>
            <li className={navLinkItem}><Link to="/blog" className={linkText}>Blog</Link></li>
          </ul>
      </nav>
      {/* <hr/> */}
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    <Footer/>
    </div>
  )
}
export default Layout