import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Experiences = () => {

    return(
        <Jumbotron fluid id='experiences'>
            <Container>
                <h2 className="experience-heading display-4"> Experiences </h2>
            </Container>
        </Jumbotron>
    );
}

export default Experiences;