import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'gatsby';
import { GitHubIcon, LinkedInIcon, BehanceIcon} from '../images/social_media_icons'

function OffcanvasExample() {
  const [centerText, setCenterText] = useState(false);

  const handleExit = () => setCenterText(false);
  const handleEnter = () => setCenterText(true);
  const expand = 'md'

  return (
        <Navbar bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
                AW
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            onEnter={handleEnter}
            onExit={handleExit}
            className="text-bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton closeLabel closeVariant="white">
                <Offcanvas.Title
                as={Link}
                to="/"
                id={`offcanvasNavbarLabel-expand-${expand}`}>
                  AW
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={`${centerText ? "mx-auto text-center" : null}`}>
                <Nav className="justify-content-end flex-grow-1 px-5">
                  <Nav.Link as={Link} to="/work">Work</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link href="https://artwilton.medium.com">Blog</Nav.Link>
                </Nav>
                <Nav className="flex-row justify-content-evenly">
                  <Navbar.Brand href="https://www.github.com/artwilton" aria-label="GitHub">
                    <GitHubIcon style={{fontSize: '1.2em'}} role="img" alt="GitHub Icon" className="nav-svg d-inline-block align-text-top"/>
                  </Navbar.Brand>                  
                  <Navbar.Brand href="https://www.linkedin.com/in/artwilton" aria-label="LinkedIn">
                    <LinkedInIcon style={{fontSize: '1.2em'}} role="img" alt="LinkedIn Icon" className="nav-svg d-inline-block align-text-top"/>
                  </Navbar.Brand>
                  <Navbar.Brand href="https://www.behance.net/artwilton" aria-label="Behance">
                    <BehanceIcon style={{fontSize: '1.2em'}} role="img" alt="Behance Icon" className="nav-svg d-inline-block align-text-top"/>
                  </Navbar.Brand>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default OffcanvasExample;