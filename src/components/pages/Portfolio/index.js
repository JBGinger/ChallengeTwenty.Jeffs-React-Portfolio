import React, { useState } from 'react';
import ProjectCard from './projectcard';
import projects from './projects.json';

function Portfolio() {
    const [projectList] = useState(projects);

    return (
        <Wrapper>
            <h1 id="portfolio">Portfolio</h1>
            {projectList.map(projects => (
                <ProjectCard
                    id={projects.id}
                    name={projects.name}
                    image={projects.image}
                    app-link={projects.applink}
                    github-link={projects.githublink}
                    />
            ))}
        </Wrapper>
    )
}

export default Portfolio;