module.exports = {
  siteMetadata: {
    title: "John Wang",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `merriweather\:300,300i,400i,400,700,700i`,
          `spline sans\:300,300i,400i,400,700,700i`,
          `source sans pro` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
