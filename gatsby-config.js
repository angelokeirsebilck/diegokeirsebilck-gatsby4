require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://elektro-diego.be',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Elektro Diego - Voor al je algemene elektriciteitswerken`,
    description: `Elektro Diego - Voor al je algemene elektriciteitswerken`,
    author: `@AngeloKeirsebilck`,
    twitterUsername: '@AngeloKbilck',
    siteUrl: 'https://elektro-diego.be',
    image: '/elektro-diego-logo-black.jpg',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elektro Diego Website`,
        short_name: `Elektro Diego Website`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#fead1b`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_URL,
        singleTypes: ['homebanner', 'home-content'],
        queryLimit: 1000,
      },
    },
    'gatsby-plugin-postcss',
  ],
};
