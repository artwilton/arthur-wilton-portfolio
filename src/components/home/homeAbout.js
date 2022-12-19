import { Link } from 'gatsby';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { aboutPhoto } from "../../media/home";

const HomeAbout = () => {

  const renderContact = () => (
    <>
      <p> Have a project you think I might be a good fit for?</p>
      <Link
        className="btn btn-outline-dark btn-lg px-5"
        role="button"
        to="/contact"
      >
        Contact Me
      </Link>
    </>
  )
  
  return (
    <section className="home-about bg--light" id="Section04">
      <Container fluid className="py-5 px-4">
        <Row className="pb-3 pb-md-5">
          <Col md="10" className="mx-auto">
            <h1 className="home-about__header border-bottom border-dark align-self-center card-title mx-auto text-center pb-3">
              Let's Work Together
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg="2"></Col>
          <Col lg="4" className="home-about__description text-center text-lg-start">
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
              <Col className="d-none d-lg-block">
                {renderContact()}
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <img
              className="home-about__image img-fluid mx-auto d-block pl-md-5 pl-0"
              src={aboutPhoto}
              alt="Arthur holding a cute dog"
            />
          </Col>
          <Col lg="2"></Col>
        </Row>
        <Row>
          <Col className="home-about__description d-lg-none py-3 py-md-5 text-center">
            {renderContact()}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;