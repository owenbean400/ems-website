module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `${__dirname}/src/pages/documentation/`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
