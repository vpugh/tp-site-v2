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
          <WorkPreview data={data.allMdx} page='home' />
          <BlogPreview data={data.blog} displayHeader />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  {
    allMdx(
      limit: 6
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
