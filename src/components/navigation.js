import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import AdaptiveLink from "./adaptiveLink";

const Navigation = ({ navLinks, navbarBrand, socialMediaIcons }) => {
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

  const renderSocialMediaIcons = socialMediaIcons.map(({ name, to, SVGComp }) => (
    <Navbar.Brand href={to} aria-label={name}>
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

  const renderNavLinks = navLinks.map(({name, to}) => (
    <Nav.Link
    className={`nav__link ${
      offCanvasToggled ? "nav__link--off-canvas" : null
    }`}
    as={AdaptiveLink}
    to={to}
    >
    {name}
    </Nav.Link>
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
        <Navbar.Brand className="nav__site-logo pt-4 ps-4" as={AdaptiveLink} to={navbarBrand.to}>
          {navbarBrand.logo}
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
            <Nav className={`${offCanvasToggled ? 'my-auto' : 'flex-grow-1 pt-1'} justify-content-end px-5`}>
              {renderNavLinks}
            </Nav>
              <Nav className={`${offCanvasToggled ? 'pt-3 mt-auto flex-row' : 'pt-1'}`}>
                {renderSocialMediaIcons}
              </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;