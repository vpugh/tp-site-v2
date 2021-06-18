module.exports = {
  siteMetadata: {
    siteUrl: `https://toripugh.com`,
    title: 'Tori Pugh',
    twitterUsername: '@teekatwo',
    description: `A UX Engineer bumbling through tech, also known as a front end developer & UX designer. This is a place to showoff my work and ideas and writing about my experiences and my learning adventures.`,
    author: 'Tori Pugh',
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
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
              theme: 'monokai',
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`nunito sans\:400,700,800,900`],
        display: 'swap',
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
  ],
};
