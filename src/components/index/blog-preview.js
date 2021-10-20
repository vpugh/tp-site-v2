import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import DisplayHeader from '../shared/display-header';

const BlogPreview = ({ data, displayHeader }) => {
  return (
    <div className={`${displayHeader && 'top-margin'} container`}>
      {displayHeader && (
        <DisplayHeader
          headerTitle='Articles'
          headerLink='/blog'
          linkTitle='See All Articles'
        />
      )}
      <div className='blog-preview-container'>
        {data.edges.map((blogData) => {
          const frontmatter = blogData.node.frontmatter;
          const image = frontmatter?.coverPhoto?.fluid;
          return (
            <Link
              style={{ color: 'var(--textColor)', textDecoration: 'none' }}
              to={frontmatter.path}
              key={frontmatter.title}
            >
              <Img fluid={image} alt='test' />
              <h4 style={{ fontSize: 20, lineHeight: '24px', marginBottom: 0 }}>
                {frontmatter.title}
              </h4>
              <p style={{ marginTop: '.25rem' }}>
                {frontmatter.date} | {blogData.node.timeToRead}{' '}
                {blogData.node.timeToRead > 1 ? 'Minutes' : 'Minute'}
              </p>
              <p>{frontmatter.excerpt}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPreview;
