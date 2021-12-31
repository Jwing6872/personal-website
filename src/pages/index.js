// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { circularImage } from '../components/css/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <StaticImage
        alt="A photograph of me (at hotpot)."
        src="../images/close-up-hotpot.jpg"
        className = {circularImage}
      />
        <p> hi </p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage