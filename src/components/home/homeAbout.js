import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { aboutPhoto } from "../../media/home";

const HomeAbout = () => {
  return (
    <section className="home-about" id="Section04">
      <Container fluid className="py-5 px-5 px-md-0">
        <Row className="pb-5 ">
          <Col md="8" lg="6" className="mx-auto">
            <h1 class="home-about__header border-bottom border-dark align-self-center card-title mx-auto text-center pb-3">
              Let's Work Together
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md="1" lg="2"></Col>
          <Col md="5" lg="4" className="home-about__description text-center text-md-start">
            <Row>
              <Col sm="12">
                <p>
                  <span className="home-about__description--bold">
                    When I'm not writing code:
                  </span>
                  <br />
                  You can find me at the skatepark, on a golf course, at a punk
                  show, playing D&amp;D, or making friends with tiny animals (as
                  pictured here).
                </p>
              </Col>
              <Col className="d-none d-xl-block">
                <p> Have a project you think I might be a good fit for?</p>
                <Button variant="outline-dark" size="lg" className="px-5">
                  Contact Me
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md="5" lg="4">
            <img
              className="home-about__image img-fluid mx-auto d-block pt-md-0 pt-3 pl-md-5 pl-0"
              src={aboutPhoto}
              alt="Arthur holding a cute dog"
            />
          </Col>
          <Col md="1" lg="2"></Col>
        </Row>
        <Row>
          <Col className="home-about__description d-xl-none py-5 text-center">
            <p>Have a project you think I might be a good fit for?</p>
            <Button variant="outline-dark" size="lg" className="px-5">
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;