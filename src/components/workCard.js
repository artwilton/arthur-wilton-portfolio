import * as React from "react";
import { Link } from "gatsby";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { PlayIcon } from "../media/svg_icons";

const WorkCard = ({
  name,
  description,
  link,
  demo,
  tags,
  imgSource,
  imgAlt,
  altLinkTo,
  altLinkName,
}) => {
  return (
    <Card className="work-card text-start border-0 shadow-sm h-100 g-2">
      <Card.Img className="work-card__image" src={imgSource} alt={imgAlt} />
      <Card.Body className="d-flex flex-column border-top border-secondary border-1">
        <div>
          {tags?.map((tag) => (
            <Button
              className="d-inline-block mb-2 me-1 tag__small border-0 btn-secondary rounded-pill"
              disabled
            >
              {tag}
            </Button>
          ))}
        </div>
        <Card.Title className="work-card__title mt-1" as="h4">
          {name}
        </Card.Title>
        <Card.Text className="work-card__description">{description}</Card.Text>
        <Row className="mt-auto">
          <Col className="col-auto mx-md-0">
            <Link
              to={link}
              className="work-card__button mt-2 btn btn-sm btn-dark shadow-none"
            >
              Read More
            </Link>
          </Col>
          <Col className="col-auto mx-md-0">
            {demo ? (
              <Link
                to={demo}
                className="work-card__button mt-2 btn btn-outline-dark btn-sm"
              >
                Demo {<PlayIcon className="mb-1" />}
              </Link>
            ) : (
              <Link
                to={altLinkTo}
                className="work-card__button mt-2 btn btn-outline-dark btn-sm"
              >
                {altLinkName}
              </Link>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
