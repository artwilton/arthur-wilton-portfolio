import React, { useState, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import AdaptiveLink from "./adaptiveLink";

const Navigation = ({ navLinks, navbarBrand, socialMediaIcons }) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [offCanvasToggled, setOffCanvasToggled] = useState(false);
  const [offCanvasExited, setOffCanvasExited] = useState(true);
  const [fadeNav, setFadeNav] = useState(false);

  const handleScroll = useDebouncedCallback(
    // function
    () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
  
    },
    // delay in ms
    100
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

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
            ? "navbar__social-media-logo--off-canvas mb-4 mx-2 mx-lg-3"
            : null
        } navbar__link navbar__social-media-logo d-inline-block align-text-top`}
      />
    </Navbar.Brand>
  ));

  const renderNavLinks = navLinks.map(({name, to}) => (
    <Nav.Link
    className={`navbar__link ${
      offCanvasToggled ? "navbar__link--off-canvas" : null
    }`}
    as={AdaptiveLink}
    to={to}
    >
    {name}
    </Nav.Link>
  ));

  return (
    <Navbar
      className={`${offCanvasExited ? null : "navbar--under-logo"} ${visible ? 'navbar--on-screen' : 'navbar--off-screen' }`}
      variant="dark"
      expand={expand}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand className="navbar__site-logo ps-4" as={AdaptiveLink} to={navbarBrand.to}>
          {navbarBrand.logo}
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-0 shadow-none pe-4 me-0"
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
            closeVariant="white shadow-none pe-7 pt-3"
          />
          <Offcanvas.Body
            className={`
                  ${
                    offCanvasToggled
                      ? "text-center d-flex flex-column align-items-center"
                      : "pt-2"
                  }
                  ${fadeNav ? "navbar--fade-in" : null}
                `}
          >
            <Nav className={`${offCanvasToggled ? 'my-auto' : 'flex-grow-1 pb-2'} justify-content-end px-5`}>
              {renderNavLinks}
            </Nav>
              <Nav className={`${offCanvasToggled ? 'pt-3 mt-auto flex-row' : 'pt-1 pe-2'}`}>
                {renderSocialMediaIcons}
              </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;