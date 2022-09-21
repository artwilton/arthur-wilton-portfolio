import * as React from "react"
import Card from "react-bootstrap/Card";

const TitleCard = (props) => {
  return (
    <Card className="title-card border-0 text-white">
      <Card.Img className="title-card__img" src={props.thumbnail} alt={props.alt} />
      <Card.ImgOverlay className="title-card__gradient d-flex flex-column">
        <Card.Title className="title-card__title my-auto text-center">{props.title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default TitleCard;