// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  circularImage,
  circularImageWrapper,
  flexWrapper,
  flexWrapperSub,
  contactWrapper,
  contactInfo,
  linkText,
  linkWrapper,
  imageWrapper
} from '../components/css/pages.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Hi!">
      <div className={flexWrapper}>
        <div className={flexWrapperSub}>
          <div>
            <p> I'm John, a senior&nbsp;
              <span className={linkWrapper}>
                <a className = {linkText} href="https://www.harvard.edu/" rel="noreferrer" target="_blank"> 
                  @ Harvard College 
                </a>
              </span> studying Computer Science (B.S, M.S) and Neuroscience (B.S).
                My interests lie in anything related to systems programming and biological and artificial intelligence. 
              </p>
            <p>In my free time, I&nbsp;
                <span className={linkWrapper}>
                  <Link to="/projects" className={linkText}>work on projects/research</Link>
                </span>
              ,&nbsp;
                <span className={linkWrapper}>
                  <Link to="/misc/baking" className={linkText}>bake</Link>
                </span>
              , and&nbsp;
                <span className={linkWrapper}>
                  <Link to="/misc/music" className={linkText}>produce music</Link>
                </span>.
              </p>
              <p> I am on gap for academic year 2022-2023.</p>
          </div>
        </div>

        <div className={flexWrapperSub}> 
          <div className={imageWrapper}>
            <StaticImage
            alt="A photograph of me (at hotpot)."
            src="../images/close-up-hotpot.jpg"
            imgClassName = {circularImage} 
            className= {circularImageWrapper}
            />
          </div>

          <div className={contactWrapper}>
            <p className={contactInfo}> E-mail: </p>
            <p className={contactInfo}> jwwang (at) college (dot) harvard (dot) edu </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage