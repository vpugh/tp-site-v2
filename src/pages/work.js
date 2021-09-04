import { graphql } from 'gatsby';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const WorkPage = ({ data }) => {
  return (
    <>
      <Seo title='Some Work' />
      <Layout>
        <div>
          <div className='container'>
            <div className='work-container'>
              {data.allMdx.edges.map((x) => {
                const frontm = x.node.frontmatter;
                const image = getImage(frontm.cover_image);
                return (
                  <Link
                    to={frontm.path}
                    key={frontm.title}
                    className='work-page-link'
                  >
                    <GatsbyImage
                      image={image}
                      alt={`${frontm.title} Screenshot`}
                      className='work-image'
                    />
                    <div className='work-text'>
                      <h4 className='work-title'>{frontm.title}</h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
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
