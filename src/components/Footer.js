import React from 'react';
import Github from '../assets/misc-images/github.png';
import LinkedIn from '../assets/misc-images/linkedin.png';
import Stackoverflow from '../assets/misc-images/stack-overflow.png'

const Footer = () => (
    <footer>
        <section>
            <div>
                <a href='https://github.com/JBGinger'>
                    <img src={Github} alt="Github logo" />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/'>
                    <img src={LinkedIn} alt="LinkedIn logo" />
                </a>
            </div>
            <div>
                <a href='https://stackoverflow.com/'>
                    <img src={Stackoverflow} alt="Stackoverflow logo" />
                </a>
            </div>
        </section>
    </footer>
)

export default Footer;