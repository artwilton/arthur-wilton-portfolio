import ImageWrapper from "./imageWrapper";
import Card from "react-bootstrap/Card";

const TitleCard = ({ title, image, alt, loading }) => (
  <Card className="title-card border-0 text-white">
    <ImageWrapper
      {...{ image, alt, loading }}
      className="card-img title-card__img"
    />
    <Card.ImgOverlay className="title-card__gradient d-flex flex-column">
      <Card.Title className="title-card__title my-auto text-center">
        {title}
      </Card.Title>
    </Card.ImgOverlay>
  </Card>
);

export default TitleCard;