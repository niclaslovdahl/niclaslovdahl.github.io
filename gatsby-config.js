module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-137021112-1",
      },
    },
  ],
};
