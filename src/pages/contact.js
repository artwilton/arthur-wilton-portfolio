import * as React from "react";
import Layout from "../components/layout";
import HeaderWithBGImg from "../components/headerWithBGImg";
import contactBannerImg from "../media/contact/contact-banner.jpg";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Layout>
      <Container fluid className="g-0">
        <HeaderWithBGImg title="Contact Me" image={contactBannerImg} />
        <Row className="bg--light py-5 mx-auto">
          <Col xs={1} />
          <Col className="mx-auto" style={{ maxWidth: 850 }}>
            <p className="lead fw-light">
              Have a project you think I'd be a good fit for?
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              Feel free to connect with me on{" "}
              <a href="https://www.linkedin.com/in/artwilton">LinkedIn</a>, or
              contact me using the form below:
            </p>
            <Form className=" mt-3 mt-md-5">
              <Row className="mb-1">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label column="lg">Name *</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label column="lg">Email *</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-1" controlId="formGroupSubject">
                <Form.Label column="lg">Subject</Form.Label>
                <Form.Control type="email" placeholder="Subject (optional)" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label column="lg">Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Hi Arthur, I'd like to work with you on this project..."
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col xs={1} />
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
