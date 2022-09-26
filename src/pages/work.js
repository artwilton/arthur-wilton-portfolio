import * as React from "react"
import {Layout, WorkCard} from "../components"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkPage = () => {
    return (
        <Layout>
            <div className="bg-color--off-white pt-9 pb-7">
            <Container fluid >
            <Row>
                <Col xs="5" className="mx-auto pb-5">
                    <h1 className=" text-center border-bottom border-dark">My Work</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="10" className="mx-auto" style={{maxWidth: '1200px'}}>
                    <WorkCard/>
                    <WorkCard/>
                </Col>
            </Row>
        </Container>
        </div>
        </Layout>
    )
}

export default WorkPage

export const Head = () => <title>Work</title>