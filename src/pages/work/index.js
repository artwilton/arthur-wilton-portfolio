import { useState } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { WorkCard, WorkVideoModal } from "../../components/work";
import HeaderWithBG from "../../components/headerWithBG";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import "../../styles/work.scss";

const FILTER_MAP = {
  All: () => true,
  Software: (project) => project.frontmatter.category === "Software",
  Video: (project) => project.frontmatter.category === "Video",
  Creative: (project) => project.frontmatter.category === "Creative",
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const WorkPage = ({ location, data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [video, setVideo] = useState("");
  const [filter, setFilter] = useState(location.state?.fromLink ?? "All");

  const headerTitle = data.header.workHeader.title
  const bannerImage = getImage(data.header.workHeader.image)

  const demoCallback = (video) => {
    setVideo(video);
    setModalShow(true);
  };

  const filterButtonList = FILTER_NAMES.map((name) => (
    <ToggleButton
      className="filter-button-group__button"
      variant="light"
      key={name}
      id={name}
      value={name}
      aria-pressed={name === filter}
      onChange={() => setFilter(name)}
    >
      {name}
    </ToggleButton>
  ));

  const workCardsFiltered = data.work.nodes
    .filter(FILTER_MAP[filter])
    .map(
      ({
        id,
        frontmatter: {
          name,
          demo,
          description,
          category,
          cardImg,
          altLink,
          tags,
          slug,
        },
      }) => (
        <Col key={id} className="gy-4 gx-4">
          <WorkCard
            name={name ?? "Project Name"}
            demo={demo}
            demoCallback={demoCallback}
            tags={tags}
            description={description ?? "Project Description"}
            category={category}
            link={`/work/${slug ?? ""}`}
            image={getImage(cardImg)}
            altLinkTo={altLink?.to}
            altLinkName={altLink?.name ?? "Project Demo"}
          ></WorkCard>
        </Col>
      )
    );

  return (
    <Layout>
      <WorkVideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        video={video}
      />
      <Container fluid className="g-0">
        <HeaderWithBG title={headerTitle} image={bannerImage} />
        <Row className="bg--light px-2 py-4 py-md-5 justify-content-center text-center px-md-5 g-0">
          <Row className="g-0">
            <Col xs="12" className="mx-auto py-md-1 pb-md-2">
              <ToggleButtonGroup
                className="filter-button-group shadow-lg-light"
                type="radio"
                name="options"
                defaultValue={filter}
              >
                {filterButtonList}
              </ToggleButtonGroup>
            </Col>
          </Row>
          <Row xs="1" md="2" xl="3" className="work-card-group gx-0 gx-md-4">
            {workCardsFiltered}
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
{
  header: workJson {
    workHeader {
      title
      image {
      childImageSharp {
        gatsbyImageData(
          quality: 65
          placeholder: BLURRED
          formats: [JPG, WEBP, AVIF]
          layout: FULL_WIDTH
        )
      }
    }
    }
  }
  work: allMdx(sort: { frontmatter: { date: DESC } }) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        name
        category
        description
        demo
        cardImg {
          childImageSharp {
            gatsbyImageData(
              quality: 65
              placeholder: BLURRED
              formats: [JPG, WEBP, AVIF]
            )
          }
        }
        altLink {
          to
          name
        }
        tags
        slug
      }
      id
    }
  }
}
`;

export default WorkPage;

export const Head = () => <title>My Work</title>;
