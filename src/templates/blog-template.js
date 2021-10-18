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
  const image = post.coverPhoto?.fixed;
  return (
    <Layout>
      <Seo title={`Blog - ${post.title}`} description={post.excerpt} />
      <Img
        fixed={image}
        alt='trshtr'
        style={{ margin: '0 auto', display: 'table' }}
      />
      <div className='container'>
        <div style={{ margin: '80px auto 0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36 }}>{post.title}</h2>
          <p>Published: {post.date}</p>
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
              fixed(
                width: 1340
                height: 611
                transformations: ["ar_1:5", "c_fill"]
              ) {
                ...CloudinaryAssetFixed
              }
            }
          }
        }
      }
    }
  }
`;
