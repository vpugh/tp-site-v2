import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import DisplayHeader from '../shared/display-header';

const WorkPreview = ({ data, page, displayHeader }) => {
  return (
    <div className={page === 'home' && 'work fade-in'}>
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
                <p className='work-preview-description'>{frontm.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WorkPreview;
