// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  flexWrapper,
  box,
  metadata,
  linkText,
  linkWrapper,
  key
} from '../components/css/pages.module.css'

// Step 2: Define your component
const ExperiencePage = () => {
  return (
    <Layout pageTitle="Experience">
        <p>Here are some of the things I have done for industry, non-profits, and other organizations.</p>
        <br/>
        <p className={key}>* -&gt; Current.</p>
        <div className={flexWrapper}>
          <div>
            <h2>Case Team Lead&nbsp;
            <span className={linkWrapper}>
                <a className = {linkText} href="https://www.harvardanalytics.org/" rel="noreferrer" target="_blank"> 
                @ Harvard Undergraduate Data Analytics Group
                </a>
              </span>
            &nbsp;*
            </h2>
            <p className={metadata}> 
            <span className={linkWrapper}>
                  <a className = {linkText} href="https://www.hpe.com/us/en/home.html" rel="noreferrer" target="_blank"> 
                    HPE
                  </a>
              </span>
              ,&nbsp;
              <span className={linkWrapper}>
                  <a className = {linkText} href="https://www.se.com/us/en/" rel="noreferrer" target="_blank"> 
                    SE
                  </a>
              </span>
              ,&nbsp;
              <span className={linkWrapper}>
                  <a className = {linkText} href="https://www.bloom-edu.org/home" rel="noreferrer" target="_blank"> 
                    BE
                  </a>
              </span>
              &nbsp; | August 2020 - Present 
              | Tools: Python, Pandas, Sklearn, React, MongoDB
            </p>
            <ul className={box}>
              <li>Led data science consulting initiatives, working with clients to provide data driven insights for 
                problems of scale, economy, and optimization.
              </li>
              <li>Implementing various classification algorithms (SVM, RF) using NLP methods such as Tf-Idf and BoW that
                classify certain objects into subcategories of domains, with tentative model accuracy of 85%.
              </li>
              <li>Created and tested a time-series model for predicting revenue for a company to allow executives to
                leverage real time data to make large scale budget decisions.
              </li>
              <li>Previously have created a full-stack website for an education non-profit, allowing tutors and students
                alike to sign in and give each other feedback on group classes and individual lessons.
              </li>
            </ul>
          </div>

          <div>
            <h2>TF for CS 124 *</h2>
            <p className={metadata}> 
              <span className={linkWrapper}>
                    <a className = {linkText} href="https://www.coursicle.com/harvard/courses/COMPSCI/124/" rel="noreferrer" target="_blank"> 
                    Data Structures &#38; Algorithms
                    </a>
              </span>
              
            &nbsp;| Spring 2022</p>
            <ul className={box}>
              <li>Teaching algorithms and data structures to Harvard College and Extension School students.</li>
            </ul>
          </div>

          <div>
            <h2>TF for CS 51 * </h2>
            <p className={metadata}> 
            <span className={linkWrapper}>
                    <a className = {linkText} href="https://cs51.io/" rel="noreferrer" target="_blank"> 
                    Abstraction &#38; Design
                    </a>
            </span>
            
            &nbsp;| Spring 2021, Spring 2022</p>
            <ul className={box}>
              <li>Teaching abstraction and design principles in code using OCaml to Harvard College
                 and Extension School students.</li>
              <li>Maintain bi-weekly office hours and meetings with course staff.</li>
              <li>Grading and left feedback on assignments and examinations.</li>
              <li>Part of a problem set beta testing team that worked through and improved on a new 
                problem set aimed at teaching object-oriented programming.
              </li>
              <li>Wrote documentation on using the Windows Subsystem for Linux for future
                instances of the course.
              </li>
            </ul>
          </div>
          <div>
            <h2>Researcher&nbsp;
            <span className={linkWrapper}>
                <a className = {linkText} href="https://datamatch.me/" rel="noreferrer" target="_blank"> 
                @ Harvard Datamatch
                </a>
              </span>
            &nbsp;*
            </h2>
            <p className={metadata}> 
              Algo Team | November 2021 - Present | Tools: Python
            </p>
            <ul className={box}>
              <li>Researching methods to measure lack of sentiment within written text.</li>
              <li>Wrote an implementation of a revised Gale-Shapley algorithm and a corresponding scoring
                algorithm for the comp process.
              </li>
            </ul>
          </div>
          <div>
            <h2>DevOps Intern&nbsp; 
              <span className={linkWrapper}>
                <a className = {linkText} href="https://cccis.com/" rel="noreferrer" target="_blank"> 
                  @ CCC Intelligent Solutions
                </a>
              </span>
            </h2>
            <p className={metadata}> AI Enablement | September 2021 - December 2021 | Tools: Flask, Vue.js.</p>
            <ul className={box}>
              <li>Worked on a directed acyclic graph manager for AI Researchers that allowed for
                automated running of machine learning code. </li>
              <li>Implemented backend for task filters and updateable logic, enabling users to
                quickly filter through tasks and update them.</li>
            </ul>
          </div>
          <div>
          <h2>Software Engineer Intern&nbsp; 
              <span className={linkWrapper}>
                <a className = {linkText} href="https://aws.amazon.com/?nc2=h_lg" rel="noreferrer" target="_blank"> 
                  @ Amazon Web Services
                </a>
              </span>
            </h2>
            <p className={metadata}> 
              <span className={linkWrapper}>
                  <a className = {linkText} href="https://aws.amazon.com/s3/outposts/" rel="noreferrer" target="_blank"> 
                    S3 for Outposts
                  </a>
              </span>
            &nbsp;| May 2021 - August 2021 | Tools: AWS, Scala, Ruby.</p>
            <ul className={box}>
              <li>Architected and implemented end-to-end infrastructure for cloud-based testing, improving
                on pre-existing company-wide internal testing framework that addressed the need
                 for seamless automated deployment of services to AWS customers around the world.</li>
              <li>Wrote and debugged code that overhauled the antiquated artifact transform 
                infrastructure present in deployment pipeline code, allowing new capabilities such as saving code
                to S3 for automated instances of AWS Lambda and Fargate, giving engineers more flexibility in writing
                services for consumers.
              </li>
              <li>Developed and documented an API framework that extended the reach of the testing services to
                allow for developers to run tests on the cloud, rather than local machines, saving time and computing
                power for engineers.
              </li>
              <li>Researched and gained expertise in a poorly understood service used in S3 for Outposts code, 
                ultimately writing new documentation that improved understanding amongst the S3 for Outposts
                team.
              </li>
            </ul>
          </div>
          <div>
            <h2>Volunteer&nbsp;
            <span className={linkWrapper}>
                  <a className = {linkText} href="https://www.16strongproject.com/did-you-know" rel="noreferrer" target="_blank"> 
                  @ 16 Strong Project
                  </a>
            </span>
            </h2>
            <p className={metadata}> 
              <span className={linkWrapper}>
                  <a className = {linkText} href="https://www.16strongproject.com/did-you-know" rel="noreferrer" target="_blank"> 
                    Web Design &#38; Outreach
                  </a>
              </span>
              &nbsp;| July 2020 - July 2021 | Tools: HTML, CSS, JS
             </p>
            <ul className={box}>
              <li>One of the first interns at 16 Strong Project, a mental health non-profit found by Samantha Wettje,
                aimed at empowering resilience to adverse childhood experiences (ACEs) among youth across 
                the nation.
              </li>
              <li>Conducted research and interviewed Harvard professors on adverse childhood experiences for 
                use in the 16 Strong Project resource pages.
              </li>
              <li>Designed and deployed a new front page for the 16 Strong Project website, as well as 
                fifteen resource pages dedicated to different advere childhood experiences, aimed at both
                educating the general public and supporting youth that have lived through an adverse 
                childhood experience. </li>
              <li>Reached out to local high schools during the early stages of what is now the 
                Every Voice Heard (EVH) high school club, a network of student groups that raise
                awareness of mental health challenges of peers within their school environment.
              </li>
            </ul>
          </div>
          
          <div>
            <h2>Data Scientist&nbsp;
              <span className={linkWrapper}>
                    <a className = {linkText} href="https://harvardgami.org/" rel="noreferrer" target="_blank"> 
                    @ Global Alliance in Medical Innovation
                    </a>
              </span>
            </h2>
            <p className={metadata}>
            <span className={linkWrapper}>
                <a className = {linkText} href="https://harvardgami.org/projects/brain/" rel="noreferrer" target="_blank"> 
                  Neurodegenerative Disease Detection
                </a>
              </span>
             &nbsp;| August 2020 - December 2021 | Tools: Python, Seaborn, Sklearn, UMAP, t-SNE</p>
            <ul className={box}>
              <li>Worked on analyzing data involving penmanship to diagnose early-onset neurodegenerative diseases such
                as Parkinson's disease via pictorial analysis.
              </li>
              <li>Created visualizations from UMAP and t-SNE dimension reduction techniques to assess what features should
                be chosen for our model. </li>
              <li>Met with Harvard Professors and Massachussetts General Hospital Neurologists to collect data from patients, 
                as well as figure out how to deploy the algorithm in a clinical setting.
              </li>
            </ul>
          </div>
          <div>
            <h2> Strategy Consulting Analyst&nbsp;
            <span className={linkWrapper}>
                <a className = {linkText} href="https://www.harvardcbe.com/" rel="noreferrer" target="_blank"> 
                    @ Harvard CBE
                </a>
              </span></h2>
            <p className={metadata}>
            <span className={linkWrapper}>
                <a className = {linkText} href="https://www.msd.com/" rel="noreferrer" target="_blank"> 
                  MSD
                </a>
              </span>
            &nbsp;| August 2020 - December 2021</p>
            <ul className={box}>
              <li>Maintained a weekly slide deck outlining strategies and considerations for potential
                telehealth consultations, focused in South American and African areas. 
              </li>
              <li>Interviewed Harvard Professors to understand current telehealth landscape,
                culminating in a hundred page whitepaper that outlined solutions and strategies for 
                future developments in the digital healthcare revolution.
              </li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}
// Step 3: Export your component
export default ExperiencePage