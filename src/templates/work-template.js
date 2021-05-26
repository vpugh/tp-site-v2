import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/seo';

const WorkTemplate = ({ data }) => {
  const project = data.allMdx.edges[0].node.frontmatter;
  const body = data.allMdx.edges[0].node.body;
  return (
    <Layout>
      <Seo title={`Work - ${project.title}`} />
      <div className='container'>
        <div
          className='work-jumbo'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            margin: '0 110px',
          }}
        >
          <div style={{ width: 530 }}>
            <h4
              style={{
                fontWeight: 800,
                fontSize: 48,
                lineHeight: '56px',
                marginBottom: 28,
              }}
            >
              {project.work_jumbo_title}
            </h4>
            <p style={{ fontSize: 22 }}>
              <strong>Role:</strong> {project.role}
              <br />
              <strong>Deliverable:</strong> {project.deliverable}
              <br />
              <strong>Client:</strong> {project.client}
            </p>
            {(project.github || project.url) && (
              <div className='button-container'>
                {project.github && (
                  <a
                    className='button'
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Github Project'
                  >
                    Github Project
                  </a>
                )}
                {project.url && (
                  <a
                    className='button'
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='View Site'
                  >
                    View Site
                  </a>
                )}
              </div>
            )}
          </div>
          <div>
            <img
              style={{ maxWidth: 516, height: 'auto', marginBottom: 20 }}
              src={project.laptop_image}
              alt='mock-laptop'
            />
          </div>
        </div>
        <div className='body'>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default WorkTemplate;

export const workpageQuery = graphql`
  query workPageByPath($path: String!) {
    allMdx(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          body
          frontmatter {
            title
            path
            work_jumbo_title
            role
            deliverable
            client
            laptop_image
            github
            url
          }
        }
      }
    }
  }
`;
