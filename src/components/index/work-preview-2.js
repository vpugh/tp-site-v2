import React from 'react';
import ScrollTrigger, { gsap } from 'gsap';
import WorkPreviewCard from './work-preview-card';
import useThemePage from '../../hooks/use-theme-page';

const WorkPreview2 = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = React.useRef(null);
  const { pageVisited } = useThemePage();

  React.useEffect(() => {
    const element = ref.current;
    if (!pageVisited) {
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
    }
  }, [pageVisited]);

  return (
    <div className='container' ref={ref}>
      <div className='work-body'>
        <h3 className='work-header'>Selected Projects</h3>
        <div className='work-preview-container'>
          {data.edges.map((x) => {
            const frontm = x.node.frontmatter;
            const image = frontm?.coverPhoto?.fluid;
            const tags = frontm.tags.join(', ');
            return (
              <WorkPreviewCard
                frontmatter={frontm}
                image={image}
                tags={tags}
                key={frontm.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPreview2;
