// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { circularImage } from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="John Wang">
      <StaticImage
        alt="A photograph of me (at hotpot)."
        src="../images/hotpot.jpg"
        className = {circularImage}
      />
        <p> hi </p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage