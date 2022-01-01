// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  circularImage,
  flexWrapper,
  flexWrapperSub,
  contactWrapper,
  contactInfo,
  linkText,
  linkWrapper,
} from '../components/css/pages.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={flexWrapper}>
        <div className={flexWrapperSub}>
          <div>
            <p> I'm John, a junior&nbsp;
              <span className={linkWrapper}>
                <a className = {linkText} href="www.linkedin.com/in/john-w-wang" rel="noreferrer" target="_blank"> 
                  @ Harvard College 
                </a>
              </span> studying Computer Science and Neuroscience, with a secondary in Economics.
                I'm generally interested in interdisciplinary applications of computer science, mainly in Artificial Intelligence/Machine Learning 
                and Algorithmic Economics.
              </p>
              <p>
              Last summer, I interned&nbsp; 
                <span className={linkWrapper}>
                  <a className = {linkText} href="https://aws.amazon.com/?nc2=h_lg" rel="noreferrer" target="_blank"> 
                    @ AWS
                  </a>
                </span>
              , solving code pipeline related issues that impacted the way Amazon Web Services products were 
              deployed to customers globally. A year before that, I spent my time volunteering&nbsp;
              <span className={linkWrapper}>
                    <a className = {linkText} href="https://www.16strongproject.com/did-you-know" rel="noreferrer" target="_blank"> 
                    @ 16 Strong Project
                    </a>
              </span> as a web designer, creating mental
              health resources for youth affected by adverse childhood experiences.
            </p>
            <p>In my free time, I work on&nbsp;
                <span className={linkWrapper}>
                  <Link to="/projects" className={linkText}>projects</Link>
                </span>
              ,&nbsp;
                <span className={linkWrapper}>
                  <Link to="/misc/baking" className={linkText}>bake</Link>
                </span>
              , and&nbsp;
                <span className={linkWrapper}>
                  <Link to="/misc/music" className={linkText}>produce music</Link>
                </span>
              . 
              </p>
          </div>
        </div>

        <div className={flexWrapperSub}> 
          <div>
            <StaticImage
            alt="A photograph of me (at hotpot)."
            src="../images/close-up-hotpot.jpg"
            className = {circularImage}
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