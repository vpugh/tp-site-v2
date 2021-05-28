import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const WorkPreview = ({ data, page }) => {
  return (
    <>
      <div
        className={
          page === 'home'
            ? 'work-preview-container fade-in'
            : 'work-preview-container'
        }
      >
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
                <p className='work-preview-description'>{frontm.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default WorkPreview;
