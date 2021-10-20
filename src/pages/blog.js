import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from 'gatsby-image';

const BlogPage = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.container'),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.work-page',
          // markers: true,
          start: 'top center',
          end: 'bottom 80px',
        },
      }
    );
  }, []);
  return (
    <Layout>
      <Seo
        title='Blog'
        description='Collection of mental musings, articles, problems, and whatever else comes to mind.'
      />
      <div ref={ref}>
        <div className='container'>
          <div className='blog-preview-container blog-page'>
            {data.allMdx.edges.map((blogData) => {
              const frontmatter = blogData.node.frontmatter;
              const image = frontmatter?.coverPhoto?.fluid;
              return (
                <Link
                  style={{
                    color: 'var(--textColor)',
                    textDecoration: 'none',
                  }}
                  to={frontmatter.path}
                  key={frontmatter.title}
                >
                  <Img fluid={image} alt={`${frontmatter.title} previews`} />
                  <h4
                    style={{
                      fontSize: 20,
                      lineHeight: '24px',
                      marginBottom: 0,
                    }}
                  >
                    {frontmatter.title}
                  </h4>
                  <p style={{ marginTop: '.25rem' }}>
                    {frontmatter.date} | {blogData.node.timeToRead}{' '}
                    {blogData.node.timeToRead > 1 ? 'Minutes' : 'Minute'}
                  </p>
                </Link>
              );
            })}
          </div>
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
