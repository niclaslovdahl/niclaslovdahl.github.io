module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-137021112-1"
      }
    }
  ]
};

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono']
        }
      }
    }
  ]
}