import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import aboutBannerImg from "../media/about/about-banner.jpg";
import {
  BashIcon,
  CSS3Icon,
  HTML5Icon,
  JavaScriptIcon,
  LinuxIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RubyOnRailsIcon,
  RubyIcon,
  SassIcon,
  SeleniumIcon,
} from "../media/svg_icons";

const SOFTWARE_SKILLS = [
  { name: "HTML / CSS", SVGComp: HTML5Icon },
  { name: "Sass", SVGComp: SassIcon },
  { name: "JavaScript", SVGComp: JavaScriptIcon },
  { name: "React", SVGComp: ReactIcon },
  { name: "Python", SVGComp: PythonIcon },
  { name: "Ruby", SVGComp: RubyIcon },
  { name: "Ruby on Rails", SVGComp: RubyOnRailsIcon },
  { name: "React Native", SVGComp: ReactIcon },
  { name: "Selenium", SVGComp: SeleniumIcon },
  { name: "PostgreSQL", SVGComp: PostgreSQLIcon },
  { name: "Bash", SVGComp: BashIcon },
  { name: "Linux", SVGComp: LinuxIcon },
];

const VIDEO_SKILLS = [
  { name: "Final Cut Pro", SVGComp: PythonIcon },
  { name: "Mocha Pro", SVGComp: PythonIcon },
  { name: "Adobe Premiere Pro", SVGComp: PythonIcon },
  { name: "Davinci Resolve", SVGComp: PythonIcon },
  { name: "Media Management", SVGComp: PythonIcon },
  { name: "Adobe Photoshop", SVGComp: PythonIcon },
  { name: "FFmpeg", SVGComp: PythonIcon },
  { name: "StorageDNA", SVGComp: PythonIcon },
  { name: "Adobe After Effects", SVGComp: PythonIcon },
  { name: "Apple Compressor", SVGComp: PythonIcon },
  { name: "CatDV", SVGComp: PythonIcon },
  { name: "Adobe Media Encoder", SVGComp: PythonIcon },
];

const AboutPage = () => {
  const renderSkills = (skillsArray) =>
    skillsArray.map(({ name, SVGComp }) => (
      <Col>
        <p style={{ fontSize: "1.4rem" }}>
          <SVGComp role="img" alt={`${name} Icon`} /> {`${name}`}
        </p>
      </Col>
    ));

  return (
    <Layout>
      <Container fluid className="g-0">
        <Row className="about-banner pt-3 pe-md-0 pb-md-5 g-0 pb-3">
          <div className="about-banner__gradient-overlay"></div>
          <img
            src={aboutBannerImg}
            class="img-fluid background-element--top-left"
          ></img>
          <Col xs="1" sm="5" />
          <Col xs="10" sm="6" className="mt-20 my-sm-auto">
            <div className="text-start mt-5">
              <h2 className="about-banner__header work__header pt-sm-5 mb-0">
                Hey, I'm Arthur
              </h2>
              <h3 className="about-banner__sub-header fw-light d-none d-xl-block">
                a software developer with a<br />
                background in post production.
              </h3>
              <h3 className="about-banner__sub-header fw-light d-block d-xl-none">
                a software developer with a background in post production.
              </h3>
              <p className="about-banner__description lead mt-md-5 d-none d-md-block">
                With years of experience in the media industry, I've worked with
                clients like Netflix, Hulu, Amazon, AT&T, and NBCUniversal.
                Currently, I'm looking for opportunities in the software
                development space.
              </p>
              <p className="about-banner__description lead mt-sm-3 d-block d-md-none">
                I've worked with clients like Netflix, Hulu, Amazon, and AT&T.
                Currently, I'm looking for software development roles.
              </p>
            </div>
            <Row className="mt-3 mb-3 mb-sm-5">
              <Col className="col-auto mx-md-0">
                <Link
                  to="/work"
                  className="about-banner__button mt-2 btn btn-light shadow-none"
                >
                  View My Resume
                </Link>
              </Col>
              <Col className="col-auto mx-md-0">
                <Link
                  to="/contact"
                  className="about-banner__button mt-2 btn btn-outline-light"
                >
                  Contact Me
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs="1" sm="1" />
        </Row>
        <Row className="bg--dark py-5 justify-content-center px-3 px-xl-5 g-0 text-center text-md-start">
          <Col />
          <Col xs="12" md="4" className="px-5 px-md-0 pe-md-5">
            <h3>Software Development</h3>
            <p style={{ fontSize: "1.5rem" }} className="lead mt-3">
              {" "}
              Working across the full stack, this is a paragraph about my
              software skills.
            </p>
            <Link
              to="/work"
              className="mt-2 mb-5 mb-md-0 btn btn-outline-light"
              state={{ fromLink: "Software" }}
            >
              Software Projects
            </Link>
          </Col>
          <Col />
          <Col xs="12" md="7" className="my-auto">
            <Row xs="2" xl="3" className="g-0">
              {renderSkills(SOFTWARE_SKILLS)}
            </Row>
          </Col>
        </Row>
        <Row className="bg--light py-5 justify-content-center px-3 px-xl-5 g-0 text-center text-md-start">
          <Col />
          <Col
            xs="12"
            md="4"
            className="order-first order-md-last px-5 px-md-0 pe-md-5"
          >
            <h3>Video Production</h3>
            <p style={{ fontSize: "1.5rem" }} className="lead mt-3">
              {" "}
              Post production, camera, and sound. This is a paragraph about my
              video skills.
            </p>
            <Link
              to="/work"
              className="mt-2 mb-5 mb-md-0 btn btn-outline-dark"
              state={{ fromLink: "Video" }}
            >
              Video Projects
            </Link>
          </Col>
          <Col xs="12" md="7" className="my-auto">
            <Row xs="2" xl="3" className="g-0">
              {renderSkills(VIDEO_SKILLS)}
            </Row>
          </Col>
          <Col />
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
