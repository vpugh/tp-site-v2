import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/seo';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const BlogTemplate = ({ data }) => {
  const post = data.allMdx.edges[0].node.frontmatter;
  const body = data.allMdx.edges[0].node.body;
  const image = post.coverPhoto?.fluid;
  return (
    <Layout>
      <Seo title={`Blog - ${post.title}`} description={post.excerpt} />
      <div className='container'>
        <div style={{ margin: '80px auto 0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36 }}>{post.title}</h2>
          <p style={{ marginBottom: 36, marginTop: 0 }}>
            Published: {post.date}
          </p>
          <Img
            fluid={image}
            alt='trshtr'
            style={{ margin: '0 auto', borderRadius: 8 }}
          />
        </div>
        <div className='blog-body'>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default BlogTemplate;

export const workpageQuery = graphql`
  query blogPageByPath($path: String!) {
    allMdx(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          body
          frontmatter {
            title
            path
            date(formatString: "MMMM Do, YYYY")
            coverPhoto {
              fluid(
                maxWidth: 920
                transformations: ["ar_1.73", "c_fill", "dpr_2.0"]
              ) {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    }
  }
`;
