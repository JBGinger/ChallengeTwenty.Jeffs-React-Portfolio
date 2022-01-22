import React from 'react';
import MyResume from '../../../assets/resume/Jeff-Brittingham-Resume.docx';

const Resume = () => (
    <section>
        <div className='title-container'>
            <h1>Resume</h1>
            <a href={MyResume}>Download My Resume!</a>
        </div>
        <section className='modalContainer'>
            <div className='content'>
                <h2>Front End Proficiencies</h2>
                <ul>
                    <li>• HTML</li>
                    <li>• CSS</li>
                    <li>• JavaScript</li>
                    <li>• JQuery</li>
                    <li>• Responsive Design</li>
                    <li>• React</li>
                    <li>• Bootstrap</li>
                </ul>
            </div>
            <div className='content'>
                <h2>Back End Proficiencies</h2>
                <ul>
                    <li>• C#</li>
                    <li>• APIs</li>
                    <li>• Node.js</li>
                    <li>• Express</li>
                    <li>• MySQL</li>
                    <li>• Sequelize</li>
                    <li>• MongoDB/Mongoose</li>
                </ul>
            </div>
        </section>
    </section>
)

export default Resume;