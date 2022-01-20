import React from 'react';
import profilePicture from '../../../assets/misc-images/Portrait.jpg';

const About = () => (
  <section>
    <h1 id="about">About Me</h1>
    <img src={profilePicture} className='my-2' style={{ height: "50%", width: "50%" }} alt="cover"></img>
    <div className='my-2'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed viverra hendrerit est, vel pharetra ante gravida vitae.
        Vestibulum pellentesque posuere lacus placerat pretium.
        Praesent aliquet sapien dui, ac sagittis quam porttitor in.
        Mauris ullamcorper nec dui non laoreet.
        Vestibulum ut erat id libero viverra condimentum.
        Aliquam fringilla tortor at fringilla bibendum.
        In sit amet placerat massa. Ut ut urna urna.
        Fusce cursus elementum tortor, ac tincidunt turpis gravida a.
        Mauris auctor, augue vel commodo volutpat, neque ex iaculis leo, non sodales ante magna ut leo.
        Praesent vitae molestie nunc.
        Nunc eu orci elementum, aliquam justo sed, vestibulum dolor.
        Nunc et metus mauris.
      </p>
    </div>
  </section>
);

export default About;