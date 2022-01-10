import * as React from 'react'
import resume from '../static/resume.pdf'

// Step 2: Define your component
const ResumePage = () => {
  return (
    <li>
     <label htmlFor="resume">resume: </label>
            <a href={resume} target="_blank" rel="noreferrer" id="email">
              resume
            </a>
          </li>
  )
}
// Step 3: Export your component
export default ResumePage