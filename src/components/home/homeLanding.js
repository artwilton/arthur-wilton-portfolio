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

      <Container fluid className="d-flex flex-column h-100 align-items-center justify-content-center text-center">
          <h1 className="display-1 py-3 pb-3 pb-md-4">ARTHUR WILTON</h1>
          <br />
          <p className="lead fw-lighter d-none d-md-block">software development | post production</p>
          <p className="lead d-md-none">software development <br/> &amp; <br/> post production</p>
          <br />

          <Row className="justify-content-center pt-4 pb-3 pt-md-10">
            <Col md="4" className="px-6 px-md-3 pb-3">
              <Link
                className="d-grid d-block btn btn-block btn-outline-light btn-lg pb-1"
                role="button"
                block
                to="/work"
              >
                work
              </Link>
            </Col>
            <Col md="4" className="px-6 px-md-3 pb-3">
              <Link
                className="d-grid d-block btn btn-outline-light btn-lg pb-1"
                role="button"
                block
                to="/about"
                onMouseEnter={() => setBackgroundVideo(landingAboutBG)}
                onMouseLeave={() => setBackgroundVideo(landingDefaultBG)}
              >
                about
              </Link>
            </Col>
            <Col md="4" className="px-6 px-md-3 pb-3">
                <Button href={blogUrl} variant="outline-light" size="lg" className="d-grid d-block pb-1">
                    blog
                </Button>
            </Col>
          </Row>
      </Container>
    </section>
  );
}

export default HomeLanding;
