import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = (props) => {
  const socialMediaIcons = props.socialMediaIcons;
  const renderSocialMediaIcons = socialMediaIcons.map(
    ({ name, to, SVGComp }) => (
      <Nav.Link
      href={to}
      aria-label={name}
      key={name}
        className="footer__social-media-logo"
      >
        <SVGComp
          role="img"
          alt={`${name} Icon`}
          className="d-inline-block"
        />
      </Nav.Link>
    )
  );

  return (
    <Row
      as="footer"
      className="bg--dark text-light g-0 justify-content-between align-items-center px-3 px-md-5 py-2 mt-auto"
    >
      <Col>
        <div className="text-muted">© 2022 Arthur Wilton</div>
      </Col>
      <Nav className="col justify-content-end ">
        {renderSocialMediaIcons}
        </Nav>
    </Row>
  );
};

export default Footer;