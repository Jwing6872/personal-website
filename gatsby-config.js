module.exports = {
  siteMetadata: {
    title: "John Wang",
    baseUrl: "localhost:8000"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `merriweather\:300,300i,400i,400,700,700i,900,900i`,
        ],
        display: 'swap'
      }
    }
  ],
};
