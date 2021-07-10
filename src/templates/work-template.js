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
      <Seo
        title={`Work - ${project.title}`}
        description={project.description}
      />
      <div className='container'>
        <div className='work-jumbo'>
          <div className='work-description'>
            <h4 className='project-title'>{project.work_jumbo_title}</h4>
            <p className='project-body'>
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
              className='mock-laptop'
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
