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

  return graphql(`
    {
      workPages: allMdx {
        edges {
          node {
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

    // res.data.allMdx.edges.forEach(({ node, next, previous }) => {
    //   createPage({
    //     path: node.frontmatter.path,
    //     component: postTemplate,
    //     context: {
    //       next,
    //       previous,
    //     },
    //   });
    // });

    // res.data.allMdx.edges.forEach((_, index, postsArr) => {
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
