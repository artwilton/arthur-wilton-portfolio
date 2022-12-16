import * as React from "react";
import { useRef } from "react";
import Layout from "../components/layout";
import HeaderWithBGImg from "../components/headerWithBGImg";
import contactBannerImg from "../media/contact/contact-banner.jpg";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "../styles/contact.scss";

const ContactPage = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    fetch("/contact", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((response) => {
        response.json().then((error) => {
          console.error("Error Message:", error);
        });
      });
  };

  return (
    <Layout>
      <Container fluid className="g-0">
        <HeaderWithBGImg title="Contact Me" image={contactBannerImg} />
        <Row className="bg--light pt-4 pb-5 py-md-5 mx-auto">
          <Col xs={1} />
          <Col className="contact-form mx-auto">
            <p className="contact-form__title--main">
              Interested in working with me?
            </p>
            <p className="contact-form__title--secondary mb-n1">
              Feel free to connect with me on{" "}
              <a href="https://www.linkedin.com/in/artwilton">LinkedIn</a>, or
              contact me using the form below:
            </p>
            <Form ref={form} onSubmit={handleSubmit} className="mt-3 mt-md-5">
              <Row>
                <Form.Group className="mb-2" as={Col} sm={6} controlId="name">
                  <Form.Label column="lg">Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={""}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} sm={6} controlId="email">
                  <Form.Label column="lg">Email *</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={""}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-2" controlId="subject">
                <Form.Label column="lg">Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject (optional)"
                  defaultValue={""}
                />
              </Form.Group>
              <Form.Group className="mb-2 mb-md-3" controlId="message">
                <Form.Label column="lg">Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  name="message"
                  placeholder="Hi Arthur, I'd like to work with you on this project..."
                  defaultValue={""}
                />
              </Form.Group>
              {/* <div class="cf-turnstile" data-sitekey="0x4AAAAAAABlzym_jmQK0sez" data-callback="javascriptCallback" data-name="contact-form"></div> */}
              <div class="checkbox mb-3">
                <div
                  class="cf-turnstile"
                  data-sitekey="1x00000000000000000000AA"
                  data-theme="light"
                ></div>
              </div>
              <Button
                className="contact-form__button--submit"
                variant="dark"
                type="submit"
              >
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

export const Head = () => (
  <>
    <title>Contact</title>
    <script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      async
      defer
    ></script>
  </>
);
