import { GatsbyImage } from "gatsby-plugin-image";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HeaderWithBGImg = ({ title, image, small = false, children }) => {
  const renderImage = (image) => {
    if (typeof image === "string") {
      return (
        <img
          className="img-fluid background-element background-element--center-bottom"
          src={image}
          alt=""
        ></img>
      );
    } else {
      return (
        <GatsbyImage
          loading="eager"
          className="background-element"
          imgClassName="background-element background-element--center-bottom"
          image={image}
          alt=""
        />
      );
    }
  };

  return (
    <Row className="header-with-bg-img pt-5 pb-4 py-md-5 g-0">
      <div className="header-with-bg-img__gradient-overlay"></div>
      {renderImage(image)}
      <Col xs="10" className="text-center mx-auto mt-4 mb-2 mt-md-6 mb-md-4">
        <h1 className={`header-with-bg-img__title${small ? "--small" : ""}`}>
          {title}
        </h1>
        {children}
      </Col>
    </Row>
  );
};

export default HeaderWithBGImg;