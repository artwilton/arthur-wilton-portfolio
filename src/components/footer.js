import * as React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
  const socialMediaIcons = props.socialMediaIcons
  const socialMediaList = socialMediaIcons.map(({name, link, SVGComp}) =>
    <li key={name} className="footer__social-media-logo">
      <a href={link} aria-label={name}>
      <SVGComp/>
      </a>
    </li>
    );

  return (
    <Row as="footer" className="bg--dark g-0 justify-content-between align-items-center px-3 px-md-5 py-3 mt-auto">
      <Col className="align-items-top">
        <span className="text-muted">© 2022 Arthur Wilton</span>
      </Col>
  
      <Col as="ul" className="nav justify-content-end list-unstyled">
        {socialMediaList}
      </Col>
    </Row>
  )
}

export default Footer