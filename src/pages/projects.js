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
const ProjectPage = () => {

  return (
    <Layout pageTitle="Projects">
        <p>Here are some projects and papers I've been a part of. 
          I enjoy both starting new projects and improving on pre-existing ones.</p>
        <br/>
        <div className={flexWrapper}>
          <div>
            <h2> Syllascrape </h2>
            <p className={metadata}>
                Personal Project | Winter 2021 - Present | Tools: Python AI, Notion API </p>
            <p className={box}> Implemented a service for students that scrapes a syllabus and creates assignments
              in a Notion database. The service uses PdfMiner to scrape the syllabus to a pandas
              dataframe, which is inputted to the Notion API. Current work involves creating a web service 
              wrapper and creating a public interface. </p>
          </div>
          <div>
            <h2>
            <span className={linkWrapper}>
              <Link to="/" className={linkText}>this</Link>
            </span>
            </h2>
            <p className={metadata}>
                Personal Project | Winter 2021 | Tools: Gatsby.js, AWS</p>
            <p className={box}> Originally a website dedicated to&nbsp;
            <span className={linkWrapper}>
            <Link to="/misc/music" className={linkText}>musical tinkerings</Link>
            </span>
            , the first versions of this website 
            were originally built with pure HTML, CSS, and JS when I was a kid. I've since
             migrated to using Gatsby.js and AWS. CSS and JS by me. </p>
          </div>
          <div>
            <h2> Combinatorial Auctions in the Music Industry </h2>
            <p className={metadata}>
                CS 136 Final Project | Fall 2021</p>
            <p className={box}> The current standard of booking music venues in the United States is by the 
                hold-challenge mechanism, which we show lacks strategy-proofness and is inefficient for
                venue seekers. We provide a solution based on combinatorial VCG mechanisms, and show how
                this new mechanism is able to improve on the pathologies presented by the status quo 
                mechanism.</p>
          </div>

          <div>
            <h2>
              Shell &#38; WeensyOS
            </h2>
            <p className={metadata}>
                CS61 | Fall 2021 | Tools: C++ </p>
            <p className={box}> Implemented and debugged a Kernel for WeensyOS, as well as a simple shell. 
            Created virtual memory mappings via x86-64 architecture pagetables for distinct processes that allowed for 
            both exclusive and shared priveleges, all while obeying process isolation. Shell implementation included support
            for foreground and background processes, pipes, complex redirections, and signal interrupts.</p>
          </div>

          <div>
            <h2>
              Algorithm Collection: Heaps, Prim's Algorithm, Strassen's Algorithm, Heuristic Approaches for
              NP-Complete Partition Problem
            </h2>
            <p className={metadata}>
                CS 124 | Spring 2021 | Tools: C++, Python</p>
            <p className={box}> Wrote implementations for the following data structures and algorithms:
              Binary Heaps, Strassen's Algorithm for Matrix Multiplication, Prim's Algorithm for Minimmum
              Spanning Trees, and various heuristic algorithms for solving the NP-C Partition problem. 
              Conducted performance analysis and compared empirical results to expected theoretical findings.</p>
          </div>

          <div>
            <h2>
              Flite
            </h2>
            <p className={metadata}>
                Educational Website | Summer 2020 | Tools: Next.js, Socket.io, MongoDB</p>
            <p className={box}> A full-stack chatting system meant for learning communities. 
            Made at the onset of the COVID era, where the idea was to have different trees corresponding
            to different communities (e.x. math subject, language, classroom), and have users "fly" to
            trees that they are interested in. Real-time chat is powered by Socket.io, and user information is 
            stored via MongoDB. Deployed to Heroku. </p>
          </div>

          <div>
            <h2>
              COVID-19 Prediction Model
            </h2>
            <p className={metadata}>
                Hack:Now | Spring 2020 | Tools: TensorFlow, Vue.js, Google Map API</p>
            <p className={box}> Created and trained a LSTM Neural Network on COVID-19 infection rates over the globe
            to identify trends and predict when and where COVID-19 would predict. Mapped prediction data with Google
            Maps API and displayed it with Vue.js. </p>
          </div>

          <div>
            <h2>
              Informavirus
            </h2>
            <p className={metadata}>
                Personal Project | Spring 2020 | Tools: Vue.js, Google Map API, Firebase</p>
            <p className={box}> Wrote a end-to-end service that tracked users locations, and allowed them to broadcast
            in case they display any symptoms of COVID-19, to which users that have been in the same locations would be
            notified. The front-end was built with Vue.js, with a Firebase backend that stored user information. All data
            was presented to users by a map via the Google Maps API.</p>
          </div>

          <div>
            <h2>
              MiniML: Mini OCaml Interpreter
            </h2>
            <p className={metadata}>
                CS51 Final Project | Spring 2020 | Tools: OCaml, Patience</p>
            <p className={box}> Wrote a metacircular interpreter for the OCaml programming language. Implemented the substitution
            model, the dynamically-scoped environment model, and the lexically-scoped environment model. Also implemented syntactic sugar,
            and extension to interpreting all atomic types, including float, string, and unit.</p>
          </div>

          <div>
            <h2>
              Statistics&#x27; Evolution through Thermodynamics
            </h2>
            <p className={metadata}>
                HS 128VD Final Paper | Fall 2019 </p>
            <p className={box}> Modern views on statistics have placed it in a largely scientific based context. However, this has not always 
            been the case. This paper explores the unique path that statistics took in integrating with science, starting from its origins in the 
            social sciences to the hard sciences through one important field of science: themodynamics.</p>
          </div>
        </div>
        
    </Layout>
  )
}
// Step 3: Export your component
export default ProjectPage