import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MarkdownLayout from "../../components/markdown/markdownLayout";
import { AdaptiveLink, HeaderWithBG, Layout } from "../../components";
import { GitHubIcon } from "../../media/icons/social_media";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkProjectPage = ({ data, children }) => {
  const frontmatter = data.mdx.frontmatter;
  const headerImg = getImage(frontmatter.headerImg);

  const renderHeaderButton = (frontmatter) => {
    let buttonLink;
    let buttonContent;

    if (frontmatter.github) {
      buttonLink = frontmatter.github;
      buttonContent = (
        <>View on GitHub {<GitHubIcon className="ms-2 mb-2" />}</>
      );
    } else {
      buttonLink = frontmatter.altLink.to;
      buttonContent = frontmatter.altLink.name;
    }

    return (
      <AdaptiveLink
        className="btn btn-outline-light"
        role="button"
        block
        to={buttonLink}
      >
        {buttonContent}
      </AdaptiveLink>
    );
  };

  return (
    <Layout>
      <Container fluid className="g-0">
        <HeaderWithBG
          title={frontmatter.name}
          imageComponent={<GatsbyImage image={headerImg} loading="eager" alt=""/>}
          children={
            <>
              <p className="work-project-page__lead mx-auto pt-md-2 pb-md-3">
                {frontmatter.description}
              </p>
              {renderHeaderButton(frontmatter)}
            </>
          }
        ></HeaderWithBG>
        <Row className="bg--light py-4 g-0">
          <Col xs="11" className="mx-auto">
            <MarkdownLayout>{children}</MarkdownLayout>
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
        description
        demo
        headerImg {
          childImageSharp {
            gatsbyImageData(
              quality: 70
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [JPG, WEBP, AVIF]
            )
          }
        }
        github
        altLink {
          to
          name
        }
        slug
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.name}</title>;

export default WorkProjectPage;