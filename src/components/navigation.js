import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'gatsby';

const Navigation = (props) => {
  const [centerText, setCenterText] = useState(false);

  const handleExit = () => setCenterText(false);
  const handleEnter = () => setCenterText(true);
  const expand = 'md'
  const socialMediaIcons = props.socialMediaIcons

  const socialMediaList = socialMediaIcons.map(({name, link, SVGComp}) =>
    <li key={name}>
      <a href={link} aria-label={name}>
      <SVGComp/>
      </a>
    </li>
    );

  return (
        <Navbar bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
                AW
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            onEnter={handleEnter}
            onExiting={handleExit}
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
              <Offcanvas.Body className={`${centerText ? "mx-auto text-center nav-offcanvas" : 'nav-top'}`}>
                <Nav className="justify-content-end flex-grow-1 px-5">
                  <Nav.Link as={Link} to="/work">Work</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link href="https://artwilton.medium.com">Blog</Nav.Link>
                </Nav>
                <Nav className="flex-row justify-content-evenly">
                  {socialMediaList}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default Navigation;