import * as React from "react";
import { Link } from "gatsby";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { workCreativeBG } from "../media/home";

const WorkCard = () => {
    return (
                    <Card className="mb-3 border-0 shadow-sm">
                        <Row className="g-0">
                            <Col md="4">
                            <img src={workCreativeBG} alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
                            </Col>
                            <Col md="8">
                                <Card.Body>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link to="/" className="btn stretched-link">Test Button</Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
    );
}

export default WorkCard;