import { GatsbyImage } from "gatsby-plugin-image";

import AdaptiveLink from "../adaptiveLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { PlayIcon } from "../../media/icons/generic";

const WorkCard = ({
  name,
  description,
  link,
  demo,
  demoCallback,
  tags,
  image,
  altLinkTo,
  altLinkName,
}) => {
  return (
    <Card className="work-card text-start border-0 shadow-light h-100">
      <AdaptiveLink to={link}>
        <GatsbyImage
          // fix for translateZ(0) issue in Firefox
          // reference - https://github.com/gatsbyjs/gatsby/pull/31905
          imgStyle={{"-moz-transform": "none"}}
          className="card-img work-card__image"
          image={image}
          alt=""
        >
        </GatsbyImage>
      </AdaptiveLink>
      <Card.Body className="work-card-body d-flex flex-column">
        <div>
          {tags?.map((tag) => (
            <Button
              key={tag}
              className="d-inline-block mb-2 me-1 tag__small border-0 btn-secondary rounded-pill"
              disabled
            >
              {tag}
            </Button>
          ))}
        </div>
        <Card.Title className="work-card-body__title mt-1" as="h4">
          {name}
        </Card.Title>
        <Card.Text className="work-card-body__description">{description}</Card.Text>
        <Row className="mt-auto">
          <Col className="col-auto mx-md-0">
            <AdaptiveLink
              to={link}
              className="work-card-body__button mt-2 btn btn-sm btn-dark shadow-none"
            >
              Read More
            </AdaptiveLink>
          </Col>
          <Col className="col-auto mx-md-0">
            {demo? (
              <Button
                onClick={() => demoCallback(demo)}
                size="sm"
                variant="outline-dark"
                className="work-card-body__button mt-2"
              >
                Demo {<PlayIcon className="mb-1" />}
              </Button>
            ) : (
              <AdaptiveLink
                to={altLinkTo}
                className="work-card-body__button mt-2 btn btn-outline-dark btn-sm"
              >
                {altLinkName}
              </AdaptiveLink>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
