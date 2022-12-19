import { Link } from "gatsby";
import Layout from "../components/layout";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/about.scss"

import aboutBannerImg from "../media/about/about-banner.jpg";
import {
  BashIcon,
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
} from "../media/icons/software";

import {
  AdobeAfterEffectsIcon,
  AdobeMediaEncoderIcon,
  AdobePhotoshopIcon,
  AdobePremiereProIcon,
  AppleCompressorIcon,
  AppleFinalCutProIcon, AvidIcon, CatDVIcon, DavinciResolveIcon, FFmpegIcon, MochaIcon, StorageDNAIcon
} from "../media/icons/video";

const SOFTWARE_SKILLS = [
  { nameFull: "HTML / CSS", SVGComp: HTML5Icon },
  { nameFull: "Sass", SVGComp: SassIcon },
  { nameFull: "JavaScript", SVGComp: JavaScriptIcon },
  { nameFull: "React", SVGComp: ReactIcon },
  { nameFull: "Python", SVGComp: PythonIcon },
  { nameFull: "Ruby", SVGComp: RubyIcon },
  { nameFull: "Ruby on Rails", SVGComp: RubyOnRailsIcon },
  { nameFull: "React Native", SVGComp: ReactIcon },
  { nameFull: "Selenium", SVGComp: SeleniumIcon },
  { nameFull: "PostgreSQL", SVGComp: PostgreSQLIcon },
  { nameFull: "Bash", SVGComp: BashIcon },
  { nameFull: "Linux", SVGComp: LinuxIcon },
];

const VIDEO_SKILLS = [
  { nameFull: "Final Cut Pro", SVGComp: AppleFinalCutProIcon },
  { nameFull: "Mocha Pro", SVGComp: MochaIcon },
  {
    nameFull: "Adobe Premiere Pro",
    nameShort: "Premiere Pro",
    SVGComp: AdobePremiereProIcon,
  },
  { nameFull: "Davinci Resolve", SVGComp: DavinciResolveIcon },
  { nameFull: "Avid", SVGComp: AvidIcon },
  { nameFull: "Adobe Photoshop", nameShort: "Photoshop", SVGComp: AdobePhotoshopIcon },
  { nameFull: "FFmpeg", SVGComp: FFmpegIcon },
  { nameFull: "StorageDNA", SVGComp: StorageDNAIcon },
  {
    nameFull: "Adobe After Effects",
    nameShort: "After Effects",
    SVGComp: AdobeAfterEffectsIcon,
  },
  {
    nameFull: "Apple Compressor",
    nameShort: "Compressor",
    SVGComp: AppleCompressorIcon,
  },
  { nameFull: "CatDV", SVGComp: CatDVIcon },
  {
    nameFull: "Adobe Media Encoder",
    nameShort: "Media Encoder",
    SVGComp: AdobeMediaEncoderIcon,
  },
];

const AboutPage = () => {
  const renderSkills = (skillsArray, shortened = false) =>
    skillsArray.map(({ nameFull, nameShort, SVGComp }) => {
      if (shortened && nameShort) {
        nameFull = nameShort;
      }
      return (
        <Col>
          <p className="about-skills-section__skill text-nowrap">
            <SVGComp
              className="about-skills-section__icon me-1 me-lg-2"
              role="img"
              alt={`${nameFull} Icon`}
            />
            {`${nameFull}`}
          </p>
        </Col>
      );
    });

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
                <a
                href={'arthur-wilton-resume.pdf'}
                download
                className="about-banner__button mt-2 btn btn-light shadow-none"
                >
                  View My Resume
                </a>
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
        <Row className="bg--dark py-5 justify-content-center px-3 px-xxl-5 g-0 text-center text-md-start">
          <Col />
          <Col xs="12" md="4" className="px-3 px-md-0 pe-md-5">
            <h3>Software Development</h3>
            <p className="about-skills-section__description lead mt-3">
              {" "}
              Whether it's writing front-end or back-end code, automating tasks with shell scripts, or building
              PCs, I love solving problems using technology.
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
        <Row className="bg--light py-5 justify-content-center pe-3 px-xxl-5 g-0 text-center text-md-start">
          <Col />
          <Col
            xs="12"
            md="4"
            className="order-first order-md-last px-3 px-md-0 pe-md-5"
          >
            <h3>Video Production</h3>
            <p className="about-skills-section__description lead mt-3">
              {" "}
              With a background in Editing and Media Asset Management, I've worked across a variety of industries from Advertising to Film and Television. My skills also include Color Correction, VFX, Motion Graphics, and Camera Operation.
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
            <Row xs="2" xl="3" className="d-none d-md-flex g-0">
              {renderSkills(VIDEO_SKILLS)}
            </Row>
            <Row xs="2" xl="3" className="d-flex d-md-none g-0">
              {renderSkills(VIDEO_SKILLS, true)}
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
