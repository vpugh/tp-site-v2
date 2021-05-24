import { Link } from 'gatsby';
import React from 'react';

const WorkPreview = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplate: 'auto/repeat(2, 1fr)',
          gap: 100,
          marginTop: 80,
        }}
      >
        {data.allMdx.edges.map((x) => {
          const frontm = x.node.frontmatter;
          return (
            <Link
              to={frontm.path}
              key={frontm.title}
              style={{ textDecoration: 'none' }}
            >
              <img
                style={{
                  backgroundColor: '#000',
                  maxWidth: 600,
                  height: 'auto',
                  color: '#fff',
                  width: '100%',
                }}
                src={frontm.cover_image.childImageSharp.fluid.src}
                alt={`${frontm.title} Screenshot`}
              />
              <div>
                <h4
                  style={{
                    marginBottom: 0,
                    fontSize: 39,
                    lineHeight: '48px',
                    color: 'var(--textColor)',
                  }}
                >
                  {frontm.title}
                </h4>
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: '32px',
                    color: 'var(--textColor)',
                  }}
                >
                  {frontm.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default WorkPreview;
