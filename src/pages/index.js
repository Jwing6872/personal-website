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
    <Layout pageTitle="Bio.">
      <div className={flexWrapper}>
        <div className={flexWrapperSub}>
          <div>
            <p> I'm John, a senior @ Harvard College studying Computer Science (B.S, M.S) and Neuroscience (B.S).
                I am broadly intereted in how we can model the brain through both biological and computational methods. 
              </p>
            <p>In my free time, I&nbsp;
                <span className={linkWrapper}>
                  <Link to="/projects" className={linkText}>work on projects/research</Link>
                </span>
              , produce music, and spend time with friends and family.
              </p>
              {/* <p> </p> */}
          </div>
        </div>

        <div className={flexWrapperSub}> 
          <div className={imageWrapper}>
            <StaticImage
            alt="A photograph of me, with flowers in the background."
            src="../images/wang_john.JPG"
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