import React from 'react';

function ProjectCard(props) {
    return (
        <section className='card'>
            <h2>
                <strong>{props.name}</strong>
            </h2>
            <div className='img-container'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='content'>
                <ul>
                    <li>
                        <a href={props.applink} target="_blank" rel="noreferrer">Deployed Application</a>
                    </li>
                    <li>
                        <a href={props.githublink} target="_blank" rel="noreferrer">Github Repo</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ProjectCard;