const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const workTemplate = path.resolve('src/templates/work-template.js');
  const blogTemplate = path.resolve('src/templates/blog-template.js');

  return graphql(`
    {
      workPages: allMdx(
        filter: { frontmatter: { type: { regex: "", eq: "work" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              date
              tags
            }
          }
        }
      }
      blogPages: allMdx {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
          next {
            frontmatter {
              title
              path
            }
          }
          previous {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.blogPages.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {
          next,
          previous,
        },
      });
    });

    // res.data.blogPages.edges.forEach((_, index, postsArr) => {
    //   const postsPerPage = 6;
    //   const totalPages = Math.ceil(postsArr.length / postsPerPage);
    //   const currentPage = index + 1;
    //   const isFirstPage = index === 0;
    //   const isLastPage = currentPage === totalPages;

    //   !(currentPage > totalPages) &&
    //     createPage({
    //       path: isFirstPage ? '/blog' : `/blog/${currentPage}`,
    //       component: blogTemplate,
    //       context: {
    //         limit: postsPerPage,
    //         skip: index * postsPerPage,
    //         isFirstPage,
    //         isLastPage,
    //         currentPage,
    //         totalPages,
    //       },
    //     });
    // });

    // const tags = res.data.tagsGroup.group;

    // tags.forEach((tag) => {
    //   createPage({
    //     path: `/tags/${_.kebabCase(tag.fieldValue)}`,
    //     component: tagsTemplate,
    //     context: {
    //       tag: tag.fieldValue,
    //     },
    //   });
    // });

    res.data.workPages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: workTemplate,
      });
    });
  });
};
