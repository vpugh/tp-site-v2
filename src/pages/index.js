import * as React from 'react';
import Jumbotron from '../components/index/jumbotron';
import WorkPreview from '../components/index/work-preview';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import BlogPreview from '../components/index/blog-preview';

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title='UI/UX Designer &amp; Front End Developer' />
      <Jumbotron />
      <Layout floatNav>
        <div className='container'>
          <WorkPreview data={data.allMdx} />
          <BlogPreview data={data.blog} />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const indexQuery = graphql`
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
                  transformOptions: { fit: COVER, cropFocus: ATTENTION }
                )
              }
            }
          }
        }
      }
    }
    blog: allMdx(
      limit: 6
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
