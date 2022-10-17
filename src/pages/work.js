import React, { useState } from "react";
import { Layout, WorkCard } from "../components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { workCreativeBG } from "../media/home";

const FILTER_MAP = {
  All: () => true,
  Software: (project) => project.category === "Software",
  Video: (project) => project.category === "Video",
  Creative: (project) => project.category === "Creative",
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const PROJECTS_ARRAY = [
  {
    id: 1,
    name: "Software Example",
    description:
      "FCPX Marker Tool is written in Python, and allows for parsing, displaying, and saving marker metadata from FCPXML files in both .fcpxml and .fcpxmld formats.",
    imgSource: workCreativeBG,
    imgAlt: "FCPX Marker Tool Icon",
    category: "Software",
  },
  {
    id: 2,
    name: "Video Example",
    description:
      "FCPX Marker Tool is written in Python, and allows for parsing, displaying, and saving marker metadata from FCPXML files in both .fcpxml and .fcpxmld formats.",
    imgSource: workCreativeBG,
    imgAlt: "FCPX Marker Tool Icon",
    category: "Video",
  },
  {
    id: 3,
    name: "Creative Example",
    description:
      "FCPX Marker Tool is written in Python, and allows for parsing, displaying, and saving marker metadata from FCPXML files in both .fcpxml and .fcpxmld formats.",
    imgSource: workCreativeBG,
    imgAlt: "FCPX Marker Tool Icon",
    category: "Creative",
  },
];

const WorkPage = ({ location }) => {
  const [filter, setFilter] = useState(
    location.state.fromLink ? location.state.fromLink : "All"
  );

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

  const workCardsFiltered = PROJECTS_ARRAY.filter(FILTER_MAP[filter]).map(
    ({ id, name, description, imgSource, imgAlt, category }) => (
      <WorkCard
        key={name}
        {...{ id, name, description, imgSource, imgAlt, category }}
      />
    )
  );

  return (
    <Layout>
      <Container fluid>
        <Row className="cover-section__bg--dark pt-5 pb-4 py-md-5">
          <Col xs="7" md="5" className="mx-auto mt-4 mb-2 mt-md-6 mb-md-3">
            <h1 className="work__header text-center border-bottom border-light pb-2 pb-md-3">
              My Work
            </h1>
          </Col>
        </Row>
        <Row className="main-content__bg--light py-4 py-md-5 justify-content-center text-center">
          <Row >
            <Col xs="10" className="mx-auto g-0 py-md-1 pb-md-2">
              <ToggleButtonGroup className="filter-button-group shadow-lg-light" type="radio" name="options" defaultValue={filter}>
                {filterButtonList}
              </ToggleButtonGroup>
            </Col>
          </Row>
          <Col xs="10" className="mx-auto d-grid gap-4 pt-4 pt-md-5">
            {workCardsFiltered}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default WorkPage;

export const Head = () => <title>Work</title>;