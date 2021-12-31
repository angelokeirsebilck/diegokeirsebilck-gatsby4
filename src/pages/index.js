import * as React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HomeBanner from '../components/home/HomeBanner';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Home - Elektro Diego -  Voor al je algemene elektriciteitswerken'
        description='Elektro Diego - Diego Keirsebilck - Voor al je algemene elektriciteitswerken'
      />
      <Header />
      <HomeBanner />
    </Layout>
  );
};

export const query = graphql`
  {
    strapi {
      homeContent {
        Content {
          ... on STRAPI_ComponentContentTekstMedia {
            __typename
            id
            Tekst
            Titel
            Media {
              url
              imageFile {
                childImageSharp {
                  id
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
