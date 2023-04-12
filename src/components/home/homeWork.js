import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { DynamicButton, TitleCard } from "../../components";

import "../../media/home/index";

const SKILLS_TEXT_ARRAY = [
  "Python",
  "JavaScript",
  "Ruby",
  "React",
  "HTML/CSS",
  "Ruby on Rails",
  "Shell Scripting",
  "FFmpeg",
  "Final Cut Pro",
  "Premiere Pro",
  "After Effects",
];

const HomeWork = () => {
  const data = useStaticQuery(graphql`
    {
      allTitleCard {
        nodes {
          id
          title
          category
          image {
            childImageSharp {
              gatsbyImageData(
                quality: 55
                placeholder: BLURRED
                formats: [JPG, WEBP, AVIF]
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `);

  const titleCards = data.allTitleCard.nodes.map(
    ({ id, title, image, category }) => (
      <Col lg="4" key={id}>
        <Link to="/work" state={{ fromLink: category }}>
          <TitleCard title={title} image={getImage(image)} alt="testing alt here"></TitleCard>
        </Link>
      </Col>
    )
  );

  return (
    <section className="home-work bg--light">
      <Container fluid className="py-5">
        <Row className="pb-2 pb-lg-4 px-lg-5 px-xl-7">
          <Col xs="8" lg="5" className="mx-auto">
            <h1 className="home-work__header border-bottom border-dark align-self-center card-title text-center pb-3">
              My Work
            </h1>
          </Col>
        </Row>
        <Row className="text-center pb-lg-3">
          <Col>
            <p className="home-work__lead lead text-center">
              I solve technical and <br className="d-md-none" />
              creative problems using:
              <br className="d-xl-none" />
            </p>
            <DynamicButton
              to="/work"
              textArray={SKILLS_TEXT_ARRAY}
              className="home-work__skills-button btn btn-outline-dark btn-lg btn-block ms-lg-3 mb-3 mt-3 mt-xl-0"
            />
          </Col>
        </Row>
        <Row className="pt-2 px-5 g-3 g-lg-4">{titleCards}</Row>
      </Container>
    </section>
  );
};

export default HomeWork;
