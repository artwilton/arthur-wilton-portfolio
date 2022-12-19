import { useState } from "react";
import { Link } from "gatsby";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { landingDefaultBGStill, landingDefaultBG } from "../../media/home";

// Re-enable when Work, About, and Blog videos are all prepared
// import { landingAboutBG } from "../../media/home";


const HomeLanding = () => {
  const [backgroundVideo, setBackgroundVideo] = useState(landingDefaultBG);
  const blogUrl = "https://artwilton.medium.com/";

  return (
    <section className="home-landing">
      <div className="background-element__overlay opacity-75"></div>

      <video
        key={backgroundVideo}
        className="background-element--centered"
        poster={landingDefaultBGStill}
        autoPlay
        muted
        loop
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Container fluid className="d-flex flex-column h-100 align-items-center justify-content-center text-center">
        <h1 className="home-landing__header display-1 py-3 pb-3 pb-md-4">ARTHUR WILTON</h1>
        <p className="home-landing__lead lead d-none d-md-block">Software Development | Post Production</p>
        <p className="home-landing__lead lead d-md-none"> Software Development <br /> &amp; <br /> Post Production</p>
        <Row className="justify-content-center pt-4 pb-3 pt-md-10">
          <Col md="4" className="px-6 px-md-3 pb-3">
            <Link
              className="home-landing__button d-grid d-block btn btn-block btn-outline-light btn-lg pb-1"
              to="/work"
            >
              Work
            </Link>
          </Col>
          <Col md="4" className="px-6 px-md-3 pb-3">
            <Link
              className="home-landing__button d-grid d-block btn btn-outline-light btn-lg pb-1"
              to="/about"
              // Re-enable when Work, About, and Blog videos are all prepared
              // onMouseEnter={() => setBackgroundVideo(landingAboutBG)}
              // onMouseLeave={() => setBackgroundVideo(landingDefaultBG)}
            >
              About
            </Link>
          </Col>
          <Col md="4" className="px-6 px-md-3 pb-3">
            <Button
              href={blogUrl}
              variant="outline-light"
              size="lg"
              className="home-landing__button d-grid d-block pb-1"
            >
              Blog
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeLanding;