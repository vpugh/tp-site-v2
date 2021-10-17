import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WorkPreviewCard = (props) => {
  const { frontmatter, image, tags } = props;

  gsap.registerPlugin(ScrollTrigger);
  const ref = React.useRef(null);

  const nameTitle = frontmatter.title.split(' ')[0];

  React.useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.work-link'),
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: `.preview-container-${nameTitle}`,
          // markers: true,
          start: 'top center',
          end: 'bottom 80px',
        },
      }
    );
  }, [nameTitle]);

  return (
    <div ref={ref} className={`preview-container-${nameTitle}`}>
      <Link to={frontmatter.path} key={frontmatter.title} className='work-link'>
        <GatsbyImage
          image={image}
          alt={`${frontmatter.title} Screenshot`}
          className='work-preview-image'
        />
        <div className='work-preview-text'>
          <h4 className='work-preview-title'>{frontmatter.title}</h4>
          <p className='work-preview-description'>{frontmatter.description}</p>
          <p className='work-preview-tags'>{tags}</p>
        </div>
      </Link>
    </div>
  );
};

export default WorkPreviewCard;
