import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const BlogPreview = ({ data }) => {
  return (
    <div className='blog-preview-container'>
      {data.edges.map((blogData) => {
        const frontmatter = blogData.node.frontmatter;
        const image = getImage(frontmatter.cover_image);
        return (
          <Link
            style={{ color: 'var(--textColor)', textDecoration: 'none' }}
            to={frontmatter.path}
            key={frontmatter.title}
          >
            <GatsbyImage image={image} alt='test' />
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
  );
};

export default BlogPreview;
