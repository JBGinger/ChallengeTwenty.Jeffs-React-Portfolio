import React, { useState } from 'react';
import ProjectCard from './projectcard';
import Astronaut from '../../../assets/portfolio-images/Astronaut.jpg';
import Screenshot from '../../../assets/portfolio-images/Project.png';

function Portfolio() {
    const projectList = [
        {
            "id": 1,
            "name": "Space-RPG",
            "image": Astronaut,
            "applink": "https://quiet-mountain-05103.herokuapp.com/",
            "githublink": "https://github.com/JBGinger/Space-RPG"
        },
        {
            "id": 2,
            "name": "Kanye-vs-Ron",
            "image": Screenshot,
            "applink": "https://jbginger.github.io/Group1.Module7Project/",
            "githublink": "https://github.com/JBGinger/Group1.Module7Project"
        }
    ]

    return (
        <div id="portfolio">
            <h1 id="portfolio_title">Portfolio</h1>
            { projectList.length > 0 && projectList.map((projectList) => (
                <ProjectCard key={projectList.id}
                    id={projectList.id}
                    name={projectList.name}
                    image={projectList.image}
                    applink={projectList.applink}
                    githublink={projectList.githublink}
                />
            ))}
        </div>
    )
}

export default Portfolio;