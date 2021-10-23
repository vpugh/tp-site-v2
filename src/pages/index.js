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
            coverPhoto {
              fluid(maxWidth: 1300, transformations: ["c_fill", "dpr_2.0"]) {
                ...CloudinaryAssetFluid
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
            coverPhoto {
              fluid(
                maxWidth: 420
                transformations: ["ar_2.22", "c_fill", "h_264"]
              ) {
                ...CloudinaryAssetFluid
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
