import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HeaderWithBG = ({ title, imageComponent, children }) => {

  return (
    <Row className="header-with-bg-img pt-5 pb-4 py-md-5 g-0">
      <div className="header-with-bg-img__gradient-overlay"></div>
      <div className="header-with-bg-img__img-container">
      {imageComponent}
      </div>
      <Col xs="10" className="text-center mx-auto mt-4 mb-2 mt-md-6 mb-md-4">
        <h1 className={`header-with-bg-img__title${children ? "--small" : ""}`}>
          {title}
        </h1>
        {children}
      </Col>
    </Row>
  );
};

export default HeaderWithBG;