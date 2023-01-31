import { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { WorkCard, WorkVideoModal } from "../../components/work";
import HeaderWithBGImg from "../../components/headerWithBGImg";
import workBannerImg from "../../media/work/work-banner.jpg";

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
            imgSource={cardImg?.publicURL}
            imgAlt={cardImg?.alt ?? "Project Icon"}
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
        <HeaderWithBGImg title="My Work" image={workBannerImg} />
        <Row className="bg--light px-3 py-4 py-md-5 justify-content-center text-center px-md-5 g-0">
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
          <Row xs="1" md="2" xl="3" className="work-card-group">
            {workCardsFiltered}
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    work: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
          category
          description
          demo
          cardImg {
            publicURL
            childImageSharp {
              gatsbyImageData
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
