import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "gatsby";

const Navigation = ({ socialMediaIcons }) => {
  const [offCanvasToggled, setOffCanvasToggled] = useState(false);
  const [offCanvasExited, setOffCanvasExited] = useState(true);
  const [fadeNav, setFadeNav] = useState(false);

  const handleEnter = () => {
    setOffCanvasToggled(true);
    setOffCanvasExited(false);
    setFadeNav(false);
  };
  const handleExiting = () => {
    setOffCanvasToggled(false);
    setFadeNav(true);
  };
  const handleExited = () => {
    setOffCanvasExited(true);
  };
  const expand = "md";

  const socialMediaList = socialMediaIcons.map(({ name, link, SVGComp }) => (
    <Navbar.Brand href={link} aria-label={name}>
      <SVGComp
        role="img"
        alt={`${name} Icon`}
        className={`${
          offCanvasToggled
            ? "nav__social-media-logo--off-canvas mb-4 mx-2 mx-lg-3"
            : null
        } nav__link nav__social-media-logo d-inline-block align-text-top`}
      />
    </Navbar.Brand>
  ));

  return (
    <Navbar
      className={`${offCanvasExited ? null : "nav--under-logo"}`}
      variant="dark"
      expand={expand}
      fixed="top"
      style={{ backgroundColor: "transparent" }}
    >
      <Container fluid>
        <Navbar.Brand className="nav__site-logo" as={Link} to="/">
          <p className="pt-3 ps-4">AW</p>
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-0 shadow-none pt-4 pe-4"
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          onEnter={handleEnter}
          onExiting={handleExiting}
          onExited={handleExited}
          className="text-bg-dark border-0"
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header
            className="justify-content-end pt-4"
            closeButton
            closeLabel
            closeVariant="white shadow-none pe-5 pt-4"
          />
          <Offcanvas.Body
            className={`
                  ${
                    offCanvasToggled
                      ? "text-center d-flex flex-column align-items-center"
                      : "pt-2"
                  }
                  ${fadeNav ? "nav--fade-in" : null}
                `}
          >
            <Nav className={`${offCanvasToggled ? 'my-auto' : 'flex-grow-1'} justify-content-end px-5`}>
              <Nav.Link
                className={`nav__link ${
                  offCanvasToggled ? "nav__link--off-canvas" : null
                }`}
                as={Link}
                to="/work"
              >
                Work
              </Nav.Link>
              <Nav.Link
                className={`nav__link ${
                  offCanvasToggled ? "nav__link--off-canvas" : null
                }`}
                as={Link}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`nav__link ${
                  offCanvasToggled ? "nav__link--off-canvas" : null
                }`}
                href="https://artwilton.medium.com"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className={`nav__link ${
                  offCanvasToggled ? "nav__link--off-canvas" : null
                }`}
                as={Link}
                to="/contact"
              >
                Contact
              </Nav.Link>
            </Nav>
              <Nav className={`${offCanvasToggled ? 'pt-3 mt-auto flex-row' : null}`}>
                {socialMediaList}
              </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;