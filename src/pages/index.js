import * as React from 'react';
import Jumbotron from '../components/index/jumbotron';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import BlogPreview from '../components/index/blog-preview';
import PersonalBlurb from '../components/index/personal-blurb';
import WorkPreview2 from '../components/index/work-preview-2';

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title='UI/UX Designer &amp; Front End Developer' />
      <Layout floatNav>
        <Jumbotron />
        <WorkPreview2 data={data.allMdx} />
        <PersonalBlurb />
        <BlogPreview data={data.blog} displayHeader />
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
            tags
            cover_image {
              childImageSharp {
                gatsbyImageData(
                  width: 1064
                  height: 624
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
