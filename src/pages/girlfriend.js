// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  girlfriendImageWrapper,
  girlfriendImage,
  girlfriendText
} from '../components/css/pages.module.css'

// Step 2: Define your component
const GirlfriendPage = () => {
  return (
    <Layout pageTitle="alanna" isPage={false}>
        <div className={girlfriendImageWrapper}>
          <StaticImage
          alt="A photograph of my girlfriend (at hotpot)."
          src="../images/close-up-hotpot-gf.jpg"
          className = {girlfriendImage} 
        />
        </div>
    <p className={girlfriendText}> 🍜 at hotpot! 😎 </p>
    <p className={girlfriendText}>love you ❤️</p>
    </Layout>
  )
}
// Step 3: Export your component
export default GirlfriendPage