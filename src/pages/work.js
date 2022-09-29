import * as React from "react"
import {Layout, WorkCard} from "../components"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkPage = () => {
    return (
        <Layout>
            <Container fluid>
            <Row className="cover-section__bg--dark pt-5 pb-4 py-md-5">
                <Col xs="7" md="5" className="mx-auto mt-4 mb-2 mt-md-6 mb-md-3">
                <h1 className="text-center border-bottom border-light pb-2 pb-md-3">My Work</h1>
                </Col>
            </Row>
            <Row className="main-content__bg--light py-5">
                <Col xs="10" className="mx-auto d-grid gap-4">
                    <WorkCard/>
                    <WorkCard/>
                </Col>
            </Row>
        </Container>
        </Layout>
    )
}

export default WorkPage

export const Head = () => <title>Work</title>