import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AdaptiveLink from "../../components/adaptiveLink";
import Layout from "../../components/layout";
import { GitHubIcon } from "../../media/icons/social_media";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkProjectPage = ({ data, children }) => {
  const frontmatter = data.mdx.frontmatter;
  const headerImg = getImage(frontmatter.headerImg)

  console.log("FRONTMATTER", data)

  return (
    <Layout>
      <GatsbyImage image={headerImg} alt={frontmatter.name} />
      <Container fluid>
        <Row className="bg--dark pt-5 pb-4 py-md-5 text-center">
          <Col xs="10" md="7" className="mx-auto mt-4 mb-2 mt-md-5 mb-md-3">
            <h2>{frontmatter.name}</h2>
            <p className="work-project-page__lead lead pt-md-2 pb-md-3">
              {frontmatter.description?.full}
            </p>
            {frontmatter.github ? (
              <AdaptiveLink
                className="btn btn-outline-light"
                role="button"
                block
                to={frontmatter.github}
              >
                View on GitHub {<GitHubIcon className="ms-2 mb-2" />}
              </AdaptiveLink>
            ) : (
              <AdaptiveLink
                className="btn btn-outline-light"
                role="button"
                block
                to={frontmatter.altLink.to}
              >
                {frontmatter.altLink.name}
              </AdaptiveLink>
            )}
          </Col>
        </Row>
        <Row className="bg--light py-5">
          <Col xs="10" md="8" className="mx-auto">
            <div>{children}</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        description {
          full
        }
        demo
        cardImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        github
        altLink
        {
          to
          name
        }
        slug
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.mdx.frontmatter.name}</title>
);

export default WorkProjectPage;
