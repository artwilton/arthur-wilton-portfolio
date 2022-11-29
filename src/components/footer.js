import * as React from 'react'
import Container from 'react-bootstrap/Container';

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
    <Container as="footer" className="bg--dark d-flex flex-wrap justify-content-between align-items-center py-3 mt-auto">
      <div className="col-md-4 d-flex align-items-top">
        <span className="text-muted">© 2022 Arthur Wilton</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {socialMediaList}
      </ul>
    </Container>
  )
}

export default Footer