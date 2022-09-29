import * as React from "react";
import { Link } from "gatsby";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { workCreativeBG } from "../media/home";

const WorkCard = () => {
    return (
                    <Card className="work-card border-0 shadow-sm">
                        <Row className="g-0">
                            <Col md="5" lg="4">
                            <img className="work-card__image" src={workCreativeBG} alt="..."/>
                            </Col>
                            <Col className="d-flex flex-column" md="7" lg="8">
                                <Card.Body >
                                    <Card.Title as="h4">Project Name</Card.Title>
                                    <Card.Text className="work-card__description py-2">FCPX Marker Tool is written in Python, and allows for parsing, displaying, and saving marker metadata from FCPXML files in both .fcpxml and .fcpxmld formats.</Card.Text>
                                </Card.Body>
                                <Row className="mb-3">
                                    <Col className="col-auto me-auto ms-3">
                                        <Link to="/" className="btn btn-sm btn-dark shadow-none">Read More</Link>
                                    </Col>
                                    <Col className="col-auto me-3">
                                        <Link to="/about" className=" btn btn-outline-dark btn-sm">Watch Demo ▶</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
    );
}

export default WorkCard;