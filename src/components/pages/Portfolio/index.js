import React, { useState } from 'react';
import ProjectCard from './projectcard';
import projects from './projects.json';

import Astronaut from '../../../assets/portfolio-images/Astronaut.jpg';



function Portfolio() {
    const projectList = [
        {
            id: projects.id,
            name: projects.name,
            image: Astronaut,
            applink: projects.applink,
            githublink: projects.githublink
        }
    ]

    return (
        <div id="portfolio">
            <h1 id="portfolio_title">Portfolio</h1>
            {projectList.map((projects) => (
                <ProjectCard
                    id={projects.id}
                    name={projects.name}
                    image={projects.image}
                    applink={projects.applink}
                    githublink={projects.githublink}
                />
            ))}
        </div>
    )
}

export default Portfolio;