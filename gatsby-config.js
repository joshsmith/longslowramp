module.exports = {
  siteMetadata: {
    title: `Josh Smith climbs the long, slow SaaS ramp`,
    description: `Hey there, I'm Josh Smith, a founder and full-stack developer, and I'm sharing my learnings as I climb the long, slow SaaS ramp of death.`,
    author: `@joshsmith`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://hellosift.us3.list-manage.com/subscribe/post?u=25b7cdaaf8652ed99f7511154&amp;id=534b1f2acf",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/long-slow-ramp-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
