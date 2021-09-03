import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ScrollTrigger, { gsap } from 'gsap';

const WorkPreview2 = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.work-body'),
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
        duration: 2,
        ease: 'expo.inOut',
      }
    );
  }, []);

  return (
    <div className='container' ref={ref}>
      <div className='work-body'>
        <h3 className='work-header'>Selected Projects</h3>
        <div className='work-preview-container'>
          {data.edges.map((x) => {
            const frontm = x.node.frontmatter;
            const image = getImage(frontm.cover_image);
            const tags = frontm.tags.join(', ');
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
                  <p className='work-preview-tags'>{tags}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPreview2;
