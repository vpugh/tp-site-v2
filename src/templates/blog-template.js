import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/seo';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const BlogTemplate = ({ data }) => {
  const post = data.allMdx.edges[0].node.frontmatter;
  const body = data.allMdx.edges[0].node.body;
  const image = getImage(post.cover_image);
  return (
    <Layout>
      <Seo title={`Blog - ${post.title}`} description={post.excerpt} />
      <GatsbyImage
        image={image}
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
            cover_image {
              childImageSharp {
                gatsbyImageData(
                  width: 1340
                  height: 611
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
  }
`;
