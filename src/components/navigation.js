import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "gatsby";

const Navigation = (props) => {
  const [offCanvasToggled, setOffCanvasToggled] = useState(false);
  const [offCanvasExited, setOffCanvasExited] = useState(true);
  const [fadeNav, setFadeNav] = useState(false);

  const handleEnter = () => {
    setOffCanvasToggled(true);
    setOffCanvasExited(false)
    setFadeNav(false);
  };
  const handleExiting = () => {
    setOffCanvasToggled(false);
    setFadeNav(true);
  };
  const handleExited = () => {
    setOffCanvasExited(true);
  }
  const expand = "md";
  const socialMediaIcons = props.socialMediaIcons;

  const socialMediaList = socialMediaIcons.map(({ name, link, SVGComp }) => (
    <Navbar.Brand href={link} aria-label={name}>
      <SVGComp role="img" alt={`${name} Icon`} className="d-inline-block align-text-top"/>
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
        <Navbar.Brand className="site-logo" as={Link} to="/">
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
                      ? "mx-auto text-center nav-offcanvas pt-5 my-auto"
                      : "nav-top pt-2"
                  }
                  ${fadeNav ? "nav-fade" : null}
                `}
          >
            <Nav className={`justify-content-end flex-grow-1 px-5`}>
              <Nav.Link as={Link} to="/work">
                Work
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link href="https://artwilton.medium.com">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="flex-row justify-content-evenly">
              {socialMediaList}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;