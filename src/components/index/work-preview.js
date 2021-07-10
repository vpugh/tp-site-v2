import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import DisplayHeader from '../shared/display-header';
import ScrollTrigger, { gsap } from 'gsap';

const WorkPreview = ({ data, displayHeader }) => {
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
    <div ref={ref}>
      <div className='work-body'>
        {displayHeader && (
          <DisplayHeader
            headerTitle='Selected Projects'
            headerLink='/work'
            linkTitle='See All Projects'
          />
        )}
        <div className='work-preview-container'>
          {data.edges.map((x) => {
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
  );
};

export default WorkPreview;
