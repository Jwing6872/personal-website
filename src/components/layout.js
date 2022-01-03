import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './footer.js'
import {
    container,
    navLinks,
    navLinkItem,
    linkText,
    siteTitle,
    nonPageHeading
  } from './css/layout.module.css'
  

const Layout = ({ pageTitle, isPage=true, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          baseUrl
        }
      }
    }
  `)
 if (isPage){
  return (
    <div className={container}>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <link id="favicon" rel="icon" href="..\images\apple-touch-icon.png" type="image/x-icon"/>
        <meta name="icon" href="..\images\apple-touch-icon.png" />
      </Helmet>
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
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    <Footer/>
    </div>
  )
 } else{
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <main>
        <h1 className={nonPageHeading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
 }
}
export default Layout