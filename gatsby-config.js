// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Michael Brogan - Portfolio",
    description: "Personal portfolio of Michael Brogan, showcasing projects and experience.",
    siteUrl: "https://michaelnbrogan.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Michael Brogan Portfolio",
        short_name: "MBrogan",
        start_url: "/",
        background_color: "#0a192f",
        theme_color: "#0a192f",
        display: "minimal-ui",
        icon: "static/logo.png", // ✅ update path
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter:400,700`,
          `Fira+Mono:400`
        ],
        display: 'swap'
      }
    },
  ],
};
