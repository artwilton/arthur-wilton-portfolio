import * as React from 'react'
import Container from 'react-bootstrap/Container';

const Footer = (props) => {
  const socialMediaIcons = props.socialMediaIcons
  const socialMediaList = socialMediaIcons.map((icon) =>
    <li key={icon.name}>
      <a href={icon.link} aria-label={icon.name}>
      <icon.svgComponent/>
      </a>
    </li>
    );
    return (
      <Container>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-muted">© 2022 Arthur Wilton</span>
          </div>
      
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            {socialMediaList}
          </ul>
        </footer>
      </Container>
    )
}

export default Footer