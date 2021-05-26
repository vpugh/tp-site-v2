import { Link } from 'gatsby';
import React from 'react';

const WorkPreview = ({ data }) => {
  return (
    <>
      <div className='work-preview-container'>
        {data.allMdx.edges.map((x) => {
          const frontm = x.node.frontmatter;
          return (
            <Link to={frontm.path} key={frontm.title} className='work-link'>
              <img
                className='work-preview-image'
                src={
                  frontm.cover_image.childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                alt={`${frontm.title} Screenshot`}
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
