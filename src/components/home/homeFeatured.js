import * as React from "react";
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { featuredProject01 } from "../../media/home";

const HomeFeatured = () => {
  const renderProjectButton = (additionalClassInfo) => (
    <>
      <Link
        className={`home-featured__button btn btn-outline-light btn-lg ${additionalClassInfo}`}
        role="button"
        to="/work/personal-inventory-manager"
      >
        Read More
      </Link>
    </>
  );

  return (
    <section className="home-featured">
      <Container fluid className="py-5 py-xl-3">
        <Row className="justify-content-center align-self-center mx-md-auto px-3">
          <Col md="1" lg="2"></Col>
          <Col md="5" lg="4" className="my-auto text-center text-md-start">
            <h2 className="home-featured__header border-bottom border-white pb-3 pb-md-4 mx-md-0 mx-auto">
              Featured Project:
            </h2>
            <h3 className="home-featured__title pt-3 pt-md-4 pb-2">
              PIM: The Personal <br /> Inventory Manager
            </h3>
            <p className="home-featured__description mx-sm-4 mx-md-0 pb-3 pb-md-4 mb-md-0">
              Mobile Application built with a React Native frontend and Ruby on
              Rails backend.
            </p>
            {renderProjectButton("d-none d-md-inline-block")}
          </Col>
          <Col md="5" lg="4" className="my-auto">
            <img
              className="home-featured__image shadow-lg ps-md-4 ps-lg-5 d-block mx-auto mb-4 mb-md-5 mt-md-5"
              src={featuredProject01}
              alt="PIM Project"
            />
            {renderProjectButton("d-md-none mx-auto d-block")}
          </Col>
          <Col md="1" lg="2"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeFeatured;
