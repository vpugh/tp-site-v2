import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogPreview from '../components/index/blog-preview';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className='container'>
        <h2>Latest Articles & Mental Musings</h2>
        <BlogPreview data={data.allMdx} />
      </div>
    </Layout>
  );
};

export default BlogPage;
export const indexQuery = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { type: { regex: "", eq: "blog" }, draft: { eq: false } }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            excerpt
            title
            tags
            cover_image {
              childImageSharp {
                gatsbyImageData(
                  width: 420
                  height: 264
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: { fit: COVER, cropFocus: ATTENTION }
                )
              }
            }
            date(formatString: "MMMM Do, YYYY")
          }
          timeToRead
        }
      }
    }
  }
`;
