// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {
  flexWrapper,
  box,
  key,
  linkText,
  linkWrapper
} from '../components/css/pages.module.css'

// Step 2: Define your component
const CourseworkPage = () => {
  return (
    <Layout pageTitle="Coursework">
        <p>There are the courses I have taken&nbsp;
          <span className={linkWrapper}>
            <a className = {linkText} href="www.linkedin.com/in/john-w-wang" rel="noreferrer" target="_blank"> 
              @ Harvard 
            </a>
          </span>
        .</p>
        <br/>
        <div className={key}> 
          CS -&gt; Computer Science |
          LS -&gt; Life Sciences |
          HS -&gt; History of Science |
          EC -&gt; Economics | 
          GENED -&gt; General Education
        </div>
        {/* <p> * </p> */}
        <div className={flexWrapper}>
          <div>
            <h3>Spring 2022</h3>
            <ul className={box}>
              <li>CS 181: Machine Learning</li>
              <li>CS 161: Operating Systems</li>
              <li>Stat 111: Statistical Inference</li>
              <li>EC 10b: Principles of Macroeconomics</li>
            </ul>
          </div>
          <div>
            <h3>Fall 2021</h3>
            <ul className={box}>
              <li>CS 61: Systems Programming and Machine Organization</li>
              <li>CS 136: Economics and Computation</li>
              <li>Stat 110: Probability</li>
              <li>LS 2: Evolutionary Biology</li>
              <li>EC 10a: Principles of Microeconomics</li>
            </ul>
          </div>
          <div>
            <h3>Summer 2021</h3>
            <ul className={box}>
              <li>CHEM S-17: Principles of Organic Chemistry</li>
            </ul>
          </div>
          <div>
            <h3>Spring 2021</h3>
            <ul className={box}>
              <li>CS 124: Data Structures and Algorithms</li>
              <li>MATH 22b: Vector Calculus and Linear Alg</li>
              <li>GENED 1030: The Philosopher and the Tyrant</li>
              <li>CHNSE 123xb: Intermediate Chinese for Advanced Beginners</li>
            </ul>
          </div>
          <div>
            <h3>Fall 2020</h3>
            <ul className={box}>
              <li>COMPSCI 121: Intro to Theory of Computation</li>
              <li>NEURO 80: Neurobiology of Behavior</li>
              <li>MATH 22a: Vector Calculus and Linear Alg</li>
              <li>HS 100: Intro to History of Science</li>
              <li>CHNSE Bx: Elementary Chinese for Advanced Beginners</li>
            </ul>
          </div>
          <div>
            <h3>Spring 2020</h3>
            <ul className={box}>
              <li>COMPSCI 51: Computation Abstraction and Design</li>
              <li>LS 1b: Genetics, Genomics, and Evolution</li>
              <li>Expos 20: Expository Writing 20</li>
              <li>GENED 1045: Choose to Be Healthy </li>
            </ul>
          </div>
          <div>
            <h3>Fall 2019</h3>
            <ul className={box}>
              <li>HUM 10a: A Humanities Colloquium: From Homer to García Márquez</li>
              <li>LS 1a: Chemistry, Molecular Biology, and Cell Biology</li>
              <li>FRSEMR 30Q: Death and Immortality</li>
              <li>HS 128VD: Nature, Energy, Industry: A Cultural History of Physical Science</li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}
// Step 3: Export your component
export default CourseworkPage