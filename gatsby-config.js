module.exports = {
  pathPrefix: "",
  siteMetadata: {
    siteUrl: `https://responsetimetrack.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/DocumentationLayout.js"),
          api_documentation: require.resolve("./src/components/ApiDocumentationLayout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 240,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/doc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `${__dirname}/src/pages/documentation/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api_documentation`,
        path: `${__dirname}/src/pages/api_documentation/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Response Time Track`,
        short_name: `Repsonse Time Track`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#0099FF`,
        display: `standalone`,
        icon: `src/images/ems_tracker_logo_web.png`,
      },
    },
  ],
};
