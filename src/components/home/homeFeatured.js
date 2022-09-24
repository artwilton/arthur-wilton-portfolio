import * as React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { featuredProject01 } from "../../media/home";

function HomeFeatured(props) {
  return (
    <section className="featured" id="Section03">
      <Container fluid className="py-5 py-xl-3 g-7 g-md-0 ">
        <Row className="justify-content-center align-self-center">
          <Col md="1" lg="2"></Col>
          <Col md="5" lg="4" className="my-auto text-center text-md-start">
            <h2 className="featured__header border-bottom border-white pb-4">Featured Project:</h2>
            <h3 className="featured__title pt-4 pb-2">
              PIM: The Personal <br /> Inventory Manager
            </h3>
            <p className="featured__description fw-lighter pb-4 mb-n1 mb-md-0">
              Mobile Application built with a React Native frontend and Ruby on Rails backend.
            </p>
            <Button className="featured__button d-none d-md-block" variant="outline-light" size="lg" block>
              project case study
            </Button>
          </Col>
          <Col md="5" lg="4" className="my-auto">
            <img className="featured__image ps-md-1 ps-lg-3 d-block mx-auto mb-n3 mb-md-0 mt-n5 mt-md-0" src={featuredProject01} />
            <Button className="featured__button d-md-none mx-auto d-block" variant="outline-light" size="lg" block>
              project case study
            </Button>
          </Col>
          <Col md="1" lg="2"></Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeFeatured;
