import * as React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { featuredProject01 } from "../../media/home";

const HomeFeatured = () => {
  return (
    <section className="featured" id="Section03">
      <Container fluid className="py-5 py-xl-3">
        <Row className="justify-content-center align-self-center mx-md-auto px-3">
          <Col md="1" lg="2"></Col>
          <Col md="5" lg="4" className="my-auto text-center text-md-start">
            <h2 className="featured__header border-bottom border-white pb-3 pb-md-4 mx-md-0 mx-auto">Featured Project:</h2>
            <h3 className="featured__title pt-3 pt-md-4 pb-2">
              PIM: The Personal <br /> Inventory Manager
            </h3>
            <p className="featured__description moz-smoothed mx-sm-4 mx-md-0 pb-3 pb-md-4 mb-md-0">
              Mobile Application built with a React Native frontend and Ruby on Rails backend.
            </p>
            <Button className="featured__button d-none d-md-block" variant="outline-light" size="lg" block>
              project case study
            </Button>
          </Col>
          <Col md="5" lg="4" className="my-auto">
            <img className="featured__image shadow-lg ps-md-4 ps-lg-5 d-block mx-auto mb-4 mb-md-5 mt-md-5" src={featuredProject01} alt="PIM Project"/>
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