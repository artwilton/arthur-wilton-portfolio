import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { GitHubIcon } from "../../media/social_media_icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkProjectPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Container fluid>
        <Row className="cover-section__bg--dark pt-5 pb-4 py-md-5 text-center">
          <Col xs="10" md="7" className="mx-auto mt-4 mb-2 mt-md-5 mb-md-3">
            <h2>{frontmatter.title}</h2>
            <p className="lead pt-md-2 pb-md-3" style={{ fontSize: "1.5rem" }}>
              {frontmatter.description}
            </p>
            {frontmatter.github ? (
              <Link
                className="btn btn-outline-light"
                role="button"
                block
                to={frontmatter.github}
              >
                View on GitHub {<GitHubIcon className="ms-2 mb-2" />}
              </Link>
            ) : (
              <Link
                className="btn btn-outline-light"
                role="button"
                block
                to={frontmatter.alt_link}
              >
                {frontmatter.alt_link_name}
              </Link>
            )}
          </Col>
        </Row>
        <Row className="main-content__bg--light py-5">
          <Col xs="10" md="8" className="mx-auto">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        github
        demo
        alt_link
        alt_link_name
        slug
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title}</title>
);

export default WorkProjectPage;
