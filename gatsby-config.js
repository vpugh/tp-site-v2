require('dotenv').config();
module.exports = {
  siteMetadata: {
    siteUrl: `https://toripugh.com`,
    title: 'Tori Pugh',
    twitterUsername: '@teekatwo',
    description: `A UX Engineer bumbling through tech, also known as a front end developer & UX designer. This is a place to showoff my work and ideas and writing about my experiences and my learning adventures.`,
    author: 'Tori Pugh',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, PARALLEL_SOURCING: true },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'blackboard',
            },
          },
        ],
        extensions: [`.md`, `.mdx`],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tori Pugh's UX/UI Developer Site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tp-icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: './src/pages/work',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: './src/pages/blog',
      },
    },
    {
      // resolve: `gatsby-plugin-google-fonts`,
      // options: {
      //   fonts: [`inter\:wght@400;600;700;800`],
      //   display: 'swap',
      // },
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Inter',
            weights: ['400..900'],
            variable: true,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: '@weknow/gatsby-remark-codepen',
            options: {
              theme: 'dark',
              height: 400,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        // uploadFolder: 'uploadedImages',
      },
    },
  ],
};
