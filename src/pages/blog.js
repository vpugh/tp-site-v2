import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogPreview from '../components/index/blog-preview';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title='Blog'
        description='Collection of mental musings, articles, problems, and whatever else comes to mind.'
      />
      <div className='container'>
        <div style={{ marginTop: 80 }}>
          <h2>Latest Articles & Mental Musings</h2>
          <BlogPreview data={data.allMdx} />
        </div>
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
                  width: 840
                  height: 528
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
