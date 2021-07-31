import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjectCard from './ProjectCard';

const Projects = () => {

    return(
        <Jumbotron fluid id='projects'>
            <Container>
                <h2 className="project-heading display-4"> Relevant Projects </h2>
            </Container>
        </Jumbotron>
    );
}

export default Projects;