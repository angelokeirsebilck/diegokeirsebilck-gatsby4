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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [640, 768, 1024, 1280, 1536],
          backgroundColor: `transparent`,
        },
      },
    },
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
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'STRAPI',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'strapi',
        // Url to query from
        url: `${process.env.STRAPI_URL}/graphql`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:100,300,400,500,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      output: '',
      options: {
        query: `
        {
          allFile {
            edges {
              node {
                modifiedTime
                name
              }
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `,
        // resolveSiteUrl: site => {
        //   return site.siteMetadata.siteUrl
        // },
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allFile: { edges },
        }) => {
          let allPagesNew = [];

          allPages.forEach((page, index) => {
            if (!page.path.includes('404')) {
              if (page.path == '/') {
                const edgeFiltered = edges.filter(
                  (edge) => edge.node.name == 'index'
                );
                edgeFiltered.forEach((item) => {
                  const pageObject = {
                    path: page.path,
                    lastMod: item.node.modifiedTime,
                  };
                  allPagesNew.push(pageObject);
                });
              } else {
                const edgeFiltered = edges.filter(
                  (edge) => edge.node.name == page.path.replace(/\//g, '')
                );
                edgeFiltered.forEach((item) => {
                  const pageObject = {
                    path: page.path,
                    lastMod: item.node.modifiedTime,
                  };
                  allPagesNew.push(pageObject);
                });
              }
            }
          });

          return allPagesNew;
        },
        serialize: ({ path, lastMod }) => {
          return {
            url: path,
            lastmod: lastMod,
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
            sitemap: `https://elektro-diego.be/sitemap/sitemap-index.xml`,
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
