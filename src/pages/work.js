import { graphql } from 'gatsby';
import React from 'react';
import WorkPreview from '../components/index/work-preview';
import Layout from '../components/layout';

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <div className='container'>
        <WorkPreview data={data.allMdx} />
      </div>
    </Layout>
  );
};

export default WorkPage;
export const workQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { regex: "", eq: "work" } } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            cover_image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 592
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: { fit: OUTSIDE }
                )
              }
            }
          }
        }
      }
    }
  }
`;
