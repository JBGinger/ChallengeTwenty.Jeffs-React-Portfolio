import React from 'react';
import profilePicture from '../../../assets/misc-images/Portrait.jpg';

const About = () => (
  <section className='my-5 about-me-section'>
    <h1 id="about">About Me</h1>
    <img src={profilePicture} className='my-2' style={{ width: "20%" }} alt="cover"></img>
    <div className='my-2'>
      <p>
      Hello everyone! My name is Jeff Brittingham, and this is my portfolio website.
      After a few years of working as a QA tester in the professional world, I decided to challenge myself by signing up for a web development bootcamp through Rutgers University.
      If you'd like to see more of my work, feel free to take a look at my <a href="https://github.com/JBGinger" target="_blank" rel="noreferrer">Github profile!</a>
      </p>
    </div>
  </section>
);

export default About;