import React from 'react';
import ProjectCard from './projectcard';
import Space_RPG from '../../../assets/portfolio-images/space-rpg.png';
import Kanye_vs_Ron from '../../../assets/portfolio-images/kanye-vs-ron.png';
import Note_Taker from '../../../assets/portfolio-images/note-taker.png';
import Tech_Blog from '../../../assets/portfolio-images/tech-blog.png';
import Twenty_One_Days from '../../../assets/portfolio-images/21-days-homepage.png';
import Work_Day_Scheduler from '../../../assets/portfolio-images/work-day-scheduler.png';

function Portfolio() {
    const projectList = [
        {
            id: 1,
            name: "Space-RPG",
            image: Space_RPG,
            applink: "https://quiet-mountain-05103.herokuapp.com/",
            githublink: "https://github.com/JBGinger/Space-RPG"
        },
        {
            id: 2,
            name: "Kanye vs. Ron",
            image: Kanye_vs_Ron,
            applink: "https://jbginger.github.io/Group1.Module7Project/",
            githublink: "https://github.com/JBGinger/Group1.Module7Project"
        },
        {
            id: 3,
            name: "Note Taker",
            image: Note_Taker,
            applink: "https://stormy-meadow-27538.herokuapp.com/",
            githublink: "https://github.com/JBGinger/ChallengeEleven.NoteTaker"
        },
        {
            id: 4,
            name: "Tech Blog",
            image: Tech_Blog,
            applink: "https://intense-coast-68796.herokuapp.com/",
            githublink: "https://github.com/JBGinger/ChallengeFourteen.Jeffs-Tech-Blog"
        },
        {
            id: 5,
            name: "21 Days",
            image: Twenty_One_Days,
            applink: "https://lit-reaches-99655.herokuapp.com/",
            githublink: "https://github.com/djamz919/Track-My-Habits"
        },
        {
            id: 6,
            name: "Work Day Scheduler",
            image: Work_Day_Scheduler,
            applink: "https://jbginger.github.io/JBGinger.ChallengeFive.ThirdPartyAPIs/",
            githublink: "https://github.com/JBGinger/JBGinger.ChallengeFive.ThirdPartyAPIs"
        }
    ]

    return (
        <div id="portfolio">
            <div className='title-container'>
                <h1 id="portfolio_title">Portfolio</h1>
            </div>
            {projectList.length > 0 && projectList.map((projectList) => (
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