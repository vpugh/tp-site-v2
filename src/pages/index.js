import * as React from 'react';
import Jumbotron from '../components/index/jumbotron';
import WorkPreview from '../components/index/work-preview';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  return (
    <>
      <Jumbotron />
      <Layout floatNav>
        <div className='container'>
          {/* Work Sample Portion */}
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
