import React from 'react';
import MyResume from '../../../assets/resume/Jeff-Brittingham-Resume.docx';

const Resume = () => (
    <section>
        <h1 id="resume">Resume</h1>
        <a href={MyResume}>Download My Resume!</a>
        <h2>Front End Proficiencies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h2>Back End Proficiencies</h2>
        <ul>
            <li>C#</li>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB/Mongoose</li>
        </ul>
        <h2>Other Proficiencies</h2>
        <ul>
            <li>Help Desk</li>
            <li>Azure DevOps</li>
            <li>Selenium Webdriver</li>
        </ul>
    </section>
)

export default Resume;