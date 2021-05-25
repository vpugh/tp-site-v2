import * as React from 'react';
import Jumbotron from '../components/index/jumbotron';
import WorkPreview from '../components/index/work-preview';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title='UI/UX Designer &amp; Front End Developer' />
      <Jumbotron />
      <Layout floatNav>
        <div className='container'>
          <WorkPreview data={data} />
          {/* Blog Sample Portion */}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  {
    allMdx(filter: { frontmatter: { type: { regex: "", eq: "work" } } }) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            cover_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
