import React, { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
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
    () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 20
      );
      setPrevScrollPos(currentScrollPos);
    },
    // delay in ms
    80
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

  const renderSocialMediaIcons = socialMediaIcons.map(
    ({ name, to, SVGComp }) => (
      <Navbar.Brand href={to} aria-label={name} key={name}>
        <SVGComp
          role="img"
          alt={`${name} Icon`}
          className={`${
            offCanvasToggled
              ? "custom-navbar__social-media-logo--off-canvas mb-4 mx-2 mx-lg-3"
              : ""
          } custom-navbar__link custom-navbar__social-media-logo d-inline-block align-text-top`}
        />
      </Navbar.Brand>
    )
  );

  const renderNavLinks = navLinks.map(({ name, to }) => (
    <Nav.Link
      key={name}
      className={`custom-navbar__link ${
        offCanvasToggled ? "custom-navbar__link--off-canvas" : ""
      }`}
      as={AdaptiveLink}
      to={to}
    >
      {name}
    </Nav.Link>
  ));

  return (
    <>
      <Navbar.Brand
        className={`navbar-dark custom-navbar__site-logo ${
          visible ? "" : "custom-navbar__site-logo--off-screen"
        }`}
        as={AdaptiveLink}
        to={navbarBrand.to}
      >
        <navbarBrand.SVGComp/>
      </Navbar.Brand>
      <Navbar
        className={`custom-navbar ${
          visible ? "" : "custom-navbar--off-screen"
        } ${prevScrollPos ? "" : "custom-navbar--top-of-screen"}`}
        variant="dark"
        expand={expand}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Toggle
            className="border-0 shadow-none pe-3 ms-auto me-1"
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
              closeLabel='Close'
              closeVariant="white shadow-none pe-7 pt-3"
            />
            <Offcanvas.Body
              className={`
                  ${
                    offCanvasToggled
                      ? "text-center d-flex flex-column align-items-center"
                      : "pt-2"
                  }
                  ${fadeNav ? "custom-navbar--fade-in" : ""}
                `}
            >
              <Nav
                className={`${
                  offCanvasToggled ? "my-auto" : "flex-grow-1 pb-2"
                } justify-content-end px-5`}
              >
                {renderNavLinks}
              </Nav>
              <Nav
                className={`${
                  offCanvasToggled ? "pt-3 mt-auto flex-row" : "pt-1 pe-2"
                }`}
              >
                {renderSocialMediaIcons}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
