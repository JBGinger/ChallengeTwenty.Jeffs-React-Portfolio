import React from 'react';
import Github from '../assets/misc-images/github.png';
import LinkedIn from '../assets/misc-images/linkedin.png';
import Stackoverflow from '../assets/misc-images/stack-overflow.png'

const Footer = () => {
    const iconList = [
        {
            link: 'https://github.com/JBGinger',
            src: Github,
            alt: "Github logo"
        },
        {
            link: 'https://www.linkedin.com/',
            src: LinkedIn,
            alt: "LinkedIn logo"
        },
        {
            link: 'https://stackoverflow.com/',
            src: Stackoverflow,
            alt: "Stackoverflow logo"
        }
    ]
    return (
        <footer>
            <section id='footer-section'>
                {
                    iconList.length > 0 && iconList.map((icon, index) => (
                        <div className='footer-logo' key={index}>
                            <a href={icon.link}>
                                <img src={icon.src} alt={icon.alt} />
                            </a>
                        </div>
                    ))
                }
            </section>
        </footer>
    )
}

export default Footer;