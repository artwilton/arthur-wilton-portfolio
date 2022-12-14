import * as React from "react";
import Layout from "../components/layout";
import HeaderWithBGImg from "../components/headerWithBGImg";
import contactBannerImg from "../media/contact/contact-banner.jpg";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "../styles/contact.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Container fluid className="g-0">
        <HeaderWithBGImg title="Contact Me" image={contactBannerImg} />
        <Row className="bg--light pt-4 pb-5 py-md-5 mx-auto">
          <Col xs={1} />
          <Col className="contact-form mx-auto">
            <p className="contact-form__title--main">
              Have a role you think I'd be a good fit for?
            </p>
            <p className="contact-form__title--secondary mb-n1">
              Feel free to connect with me on{" "}
              <a href="https://www.linkedin.com/in/artwilton">LinkedIn</a>, or
              contact me using the form below:
            </p>
            <Form data-static-form-name="contact" className="mt-3 mt-md-5">
              <Row>
                <Form.Group className="mb-2" as={Col} sm={6} controlId="formGridName">
                  <Form.Label column="lg">Name *</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} sm={6} controlId="formGroupEmail">
                  <Form.Label column="lg">Email *</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-2" controlId="formGroupSubject">
                <Form.Label column="lg">Subject</Form.Label>
                <Form.Control type="email" placeholder="Subject (optional)" />
              </Form.Group>
              <Form.Group className="mb-2 mb-md-3" controlId="formGroupMessage">
                <Form.Label column="lg">Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Hi Arthur, I'd like to work with you on this project..."
                />
              </Form.Group>
              <Button className="contact-form__button--submit" variant="dark" type="submit">
                Send Message
              </Button>
              <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
              <div class="cf-turnstile" data-sitekey="0x4AAAAAAABlzym_jmQK0sez" data-callback="javascriptCallback"></div>
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
