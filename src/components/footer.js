import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
    icon,
    footerInner,
    footerRight,
    footerLeft
} from './css/footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={footerInner}>
                <div className={footerLeft}>
                    <p> 2023 Moogis </p>
                </div>
                <div className = {footerRight}>

                     <a href="https://github.com/johnwwang" rel="noreferrer" target="_blank">
                        <StaticImage
                            alt="Github Icon"
                            src="../images/icons/github.png"
                            className = {icon}
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/john-w-wang" rel="noreferrer" target="_blank">
                        <StaticImage
                            alt="LinkedIn Icon"
                            src="../images/icons/linkedin.png"
                            className = {icon}
                        />                    
                    </a>
                    
                    <a href="mailto:jwwang@college.harvard.edu">
                        <StaticImage
                            alt="Mailbox Icon"
                            src="../images/icons/mail.png"
                            className = {icon}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer