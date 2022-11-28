import * as React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HeaderWithBGImg = ({title, image}) => {
    return (
        <Row className="header-with-bg-img pt-5 pb-4 py-md-5 g-0">
          <div className="header-with-bg-img__gradient-overlay"></div>
          <img
            src={image}
            class="img-fluid background-element--center-bottom"
          ></img>
          <Col className="mx-auto mt-4 mb-2 mt-md-6 mb-md-3">
            <h1 className="header-with-bg-img__title text-center pb-2 pb-md-3">
              {title}
            </h1>
          </Col>
        </Row>
    )
};

export default HeaderWithBGImg;