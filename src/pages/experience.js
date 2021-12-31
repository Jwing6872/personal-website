// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {
  flexWrapper,
  box,
  metadata,
  linkText,
  linkWrapper
} from '../components/css/pages.module.css'

// Step 2: Define your component
const ExperiencePage = () => {
  return (
    <Layout pageTitle="Experience">
        <p>Here is a collection of stuff that I have done in the past few years.</p>
        <br/>
        <div className={flexWrapper}>
          <div>
            <h3>Case Team Lead <br/> @ Harvard Undergraduate Data Analytics Group</h3>
            <p className={metadata}> S3 for Outposts <br/> August 2020 - Present</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3>TF for CS 124<br/> (Data Structures and Algorithms)</h3>
            <p className={metadata}> Spring 2022</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3>TF for CS 51<br/> (Abstraction and Design) </h3>
            <p className={metadata}> Spring 2021, Spring 2022</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3>Software Engineer Intern <br/> @ CCC Intelligent Solutions</h3>
            <p className={metadata}> AI Enablement <br/> September 2021 - December 2021</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3>Software Engineer Intern <br/> @ Amazon Web Services</h3>
            <p className={metadata}> S3 for Outposts <br/> May 2021 - August 2021</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3>Volunteer <br/> @ 16 Strong Project</h3>
            <p className={metadata}> Web Design <br/> July 2020 - June 2021</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3>Data Scientist <br/> @ Global Alliance in Medical Innovation</h3>
            <p className={metadata}> Neurodegenerative Disease Detection <br/> August 2020 - December 2021</p>
            <ul className={box}>
            </ul>
          </div>
          <div>
            <h3> Analyst <br/> @ Harvard Consulting on Business and Environment</h3>
            <p className={metadata}> Consulting <br/> August 2020 - December 2021</p>
            <ul className={box}>
            </ul>
          </div>
        </div>
    </Layout>
  )
}
// Step 3: Export your component
export default ExperiencePage