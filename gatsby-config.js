require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `𓂙 Meg's Muses`,
    // Default title of the page
    siteTitleAlt: `Meg's Muses`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Meg's Muses`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://mycomeg.com`,
    // Used for SEO
    siteDescription: `All the cool stuff 𓂙`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/`,
    // Twitter Handle
    author: `@mycomeg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Newsletter`,
            slug: `/newsletter`,
          },
        ],
        externalLinks: [
          {
            name: `🍄 📖 🔱 👽 ⛰️`,
            url: `https://y.at/🍄📖🔱👽⛰️`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/mycomeg_/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Megan Dias' Blog 𓂙`,
        short_name: `Meg's Muses 𓂙`,
        description: `All the cool stuff 𓂙`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
