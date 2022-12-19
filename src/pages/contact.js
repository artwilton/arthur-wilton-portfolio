import { useState, useRef } from "react";
import ContactAlertModal from "../components/contactAlertModal";

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
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    fetch("/contact", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response
          .json()
          .catch(() => {
            throw new Error(`${response.status}, ${response.statusText}`);
          })
          .then((response) => {
            throw new Error(response.errors);
          });
      })
      .then(() => {
        renderFormSuccessful();
      })
      .catch((error) => renderFormFailed(error.message));
  };

  const renderFormSuccessful = () => {
    form.current.reset();
    setModalSuccess(true);
    setModalTitle("Thank you!");
    setModalBody(
      "Your message was submitted successfully and I'll get back to you as soon as I can."
    );
    setModalShow(true);
  };

  const renderFormFailed = (errorMessage) => {
    setModalSuccess(false);
    setModalTitle(
      "An error occurred during message submission, please try again!"
    );
    setModalBody(`Error Message: ${errorMessage}`);
    setModalShow(true);
  };

  return (
    <Layout>
      <ContactAlertModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        success={modalSuccess}
        title={modalTitle}
        body={modalBody}
      />
      <Container fluid className="g-0">
        <HeaderWithBGImg title="Contact Me" image={contactBannerImg} />
        <Row className="bg--light pt-4 pb-5 py-md-5 mx-auto gx-0 gx-sm-2">
          <Col xs={1} />
          <Col xs={10} className="contact-form mx-auto">
            <p className="contact-form__title--main mb-1 mb-md-3">
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
                  <Form.Label className="contact-form__label">
                    Name *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue=""
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} sm={6} controlId="email">
                  <Form.Label className="contact-form__label">
                    Email *
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue=""
                    required
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-2" controlId="subject">
                <Form.Label className="contact-form__label">Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject (optional)"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group className="mb-2 mb-md-3" controlId="message">
                <Form.Label className="contact-form__label">
                  Message *
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  name="message"
                  placeholder="Hi Arthur, I'd like to work with you on this project..."
                  defaultValue=""
                  required
                />
              </Form.Group>
              <div class="mb-3">
                <div
                  className="cf-turnstile"
                  data-sitekey="0x4AAAAAAABlzym_jmQK0sez"
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

export const Head = () => <title>Contact</title>;
