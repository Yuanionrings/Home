import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import { mainBody, aboutMe } from './config';

const Navigation = () => {
    return (
        <Navbar className='fixed-top navbar-white'>
            <Navbar.Brand className='brand' href={'/#home'}>
                {`<${mainBody.firstName} />`}
            </Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link
                    className='nav-link lead'
                    href={'/#projects'}
                >
                    Projects
                </Nav.Link>
                <Nav.Link
                    className='nav-link lead'
                    href={aboutMe.resume}
                    target='blank'
                >
                    Resume
                </Nav.Link>
                <Nav.Link
                    className='nav-link lead'
                    href={'/#aboutme'}
                >
                    About
                </Nav.Link>
                <Nav.Link
                    className='nav-link lead'
                    href={'/#skills'}
                >
                    Skills
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;