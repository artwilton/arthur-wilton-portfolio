import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HeaderWithBGImg = ({title, image, children}) => {
    return (
        <Row className="header-with-bg-img pt-5 pb-4 py-md-5 g-0">
          <div className="header-with-bg-img__gradient-overlay"></div>
          <img
            className="img-fluid background-element--center-bottom"
            src={image}
            alt={`${title} background`}
          ></img>
          <Col xs="10" md="7" className="text-center mx-auto mt-4 mb-2 mt-md-6 mb-md-4">
            <h1 className="header-with-bg-img__title">
              {title}
            </h1>
            {children}
          </Col>
        </Row>
    )
};

export default HeaderWithBGImg;