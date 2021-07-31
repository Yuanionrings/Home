import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Skills = () => {

    return(
        <Jumbotron fluid id='skills'>
            <Container>
                <h2 className="skill-heading display-4"> Skills </h2>
            </Container>
        </Jumbotron>
    );
}

export default Skills;