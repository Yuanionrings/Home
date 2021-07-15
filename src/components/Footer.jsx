import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({heading, message, email}) => {
    return (
        <footer className='footer py-5 text-center'>
            <Container>
                <h2 className='display-4 pb-3 text-center'>{heading}</h2>
                <p className='lead text-center pb-3'>
                    {message}
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </Container>
        </footer>
    )
}

export default Footer;