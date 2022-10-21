import * as React from "react";
import { Link } from "gatsby";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const WorkCard = ({ name, description, link, demo, imgSource, imgAlt, altLinkTo, altLinkName }) => {
  return (
    <Card className="work-card border-0 shadow-sm">
      <Row className="g-0">
        <Col md="5" lg="4">
          <img className="work-card__image" src={imgSource} alt={imgAlt} />
        </Col>
        <Col className="d-flex flex-column text-md-start" md="7" lg="8">
          <Card.Body>
            <Card.Title as="h4">{name}</Card.Title>
            <Card.Text className="work-card__description py-1 pb-sm-2 pb-lg-3">
              {description}
            </Card.Text>
          </Card.Body>
          <Row className="mb-3 mx-auto mx-md-0 px-1 g-2 g-md-4">
            <Col className="col-auto mx-auto mx-md-0">
              <Link
                to={link}
                className="work-card__button btn btn-sm btn-dark shadow-none"
              >
                Read More
              </Link>
            </Col>
            <Col className="col-auto mx-auto mx-md-0">
              {demo ? (
                <Link
                  to={demo}
                  className="work-card__button btn btn-outline-dark btn-sm"
                >
                  Watch Demo ▶
                </Link>
              ) : (
                <Link
                  to={altLinkTo}
                  className="work-card__button btn btn-outline-dark btn-sm"
                >
                  {altLinkName}
                </Link>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default WorkCard;
