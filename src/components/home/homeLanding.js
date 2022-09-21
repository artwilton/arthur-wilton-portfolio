import React, { useState } from "react";
import { Link } from 'gatsby';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { landingAboutBG, landingDefaultBGStill, landingDefaultBG } from "../../media/home"

const HomeLanding = (props) => {
  const [backgroundVideo, setBackgroundVideo] = useState(landingDefaultBG);
  const blogUrl = "https://artwilton.medium.com/";

  return (
    <section id="Section01">
      <div className="videoOverlay"></div>

      <video
        key={backgroundVideo}
        id="homeScreenVideo"
        poster={landingDefaultBGStill}
        autoPlay
        muted
        loop
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Container fluid className="d-flex flex-column h-100">
        <div className="my-auto align-self-center text-center">
          <h1 className="display-1">ARTHUR WILTON</h1>
          <br />
          <p className="lead">software development | post production</p>
          <br />
          <Row className="justify-content-center">
            <Col sm="auto">
              <Link
                className="btn btn-outline-light btn-lg"
                role="button"
                block
                to="/work"
              >
                work
              </Link>
            </Col>
            <Col sm="auto">
              <Link
                className="btn btn-outline-light btn-lg"
                role="button"
                block
                to="/about"
                onMouseEnter={() => setBackgroundVideo(landingAboutBG)}
                onMouseLeave={() => setBackgroundVideo(landingDefaultBG)}
              >
                about
              </Link>
            </Col>
            <Col sm="auto">
                <Button href={blogUrl} variant="outline-light" size="lg">
                    blog
                </Button>
              {/* <a
                class="btn btn-outline-light btn-lg"
                role="button"
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                blog
              </a> */}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HomeLanding;
