import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
    return (
        <footer>
            <div class="footer-inner">
                <div class="left">
                    <p> <span id="date-target">2022</span> John Wang</p>
                </div>
                <div class="right">
                    <a href="mailto:johnwang58@gmail.com">
                        <StaticImage
                            alt="Mailbox Icon"
                            src="../images/icons/mail.png"
                        />
                    </a>
                    <a href="www.linkedin.com/in/john-w-wang" target="_blank">
                        <StaticImage
                                alt="LinkedIn Icon"
                                src="../images/icons/mail.png"
                            />                    
                    </a>
                    <a href="https://github.com/johnwwang" target="_blank">
                        <StaticImage
                            alt="Github Icon"
                            src="../images/icons/mail.png"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer