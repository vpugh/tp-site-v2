import { graphql } from 'gatsby';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WorkPage = ({ data }) => {
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
      <div ref={ref}>
        <div className='container'>
          <div className='work-preview-container work-page'>
            {data.allMdx.edges.map((x) => {
              const frontm = x.node.frontmatter;
              const image = getImage(frontm.cover_image);
              return (
                <Link to={frontm.path} key={frontm.title} className='work-link'>
                  <GatsbyImage
                    image={image}
                    alt={`${frontm.title} Screenshot`}
                    className='work-preview-image'
                  />
                  <div className='work-preview-text'>
                    <h4 className='work-preview-title'>{frontm.title}</h4>
                    <p className='work-preview-description'>
                      {frontm.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkPage;
export const workQuery = graphql`
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
                  transformOptions: { fit: OUTSIDE }
                )
              }
            }
          }
        }
      }
    }
  }
`;
