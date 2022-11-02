import * as React from "react";
import Layout from "../components/layout";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import aboutBannerImg from '../media/about/about-banner.jpg'

const AboutPage = () => {
  return (
    <Layout>
      <Container fluid className="g-0" style={{color: "#f0f0f0"}}>
        <Row className="pt-5 pb-4 py-md-5" style={{position: "relative", minHeight: "500px"}}>
          <img src={aboutBannerImg}  class="img-fluid background-element--top-left"></img>
          <Col xs="7" md="5" className="mx-auto mt-4 mb-2 mt-md-6 mb-md-3">
            <h1 className="work__header text-center pb-2 pb-md-3">
              About Me
            </h1>
          </Col>
        </Row>
        <Row className="bg--dark py-4 py-md-5 justify-content-center text-center px-md-5">
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
