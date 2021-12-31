import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Landing from '../components/Landing';
import Layout from '../components/layout';
import SEO from '../components/seo';

// markup
const IndexPage = ({ data }) => {
  // const {
  //   strapi: {
  //     homeContent: {
  //       data: {
  //         attributes: { Content },
  //       },
  //     },
  //   },
  // } = data;

  const {
    strapi: {
      homeContent: { Content },
    },
  } = data;

  // const image = getImage(Content[0].Media.data.attributes.imageFile);
  const image = getImage(Content[0].Media.imageFile);
  return (
    <Layout>
      <SEO
        title='Home - Elektro Diego -  Voor al je algemene elektriciteitswerken'
        description='Elektro Diego - Diego Keirsebilck - Voor al je algemene elektriciteitswerken'
      />
      <Landing />
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

// export const query = graphql`
//   {
//     strapi {
//       homeContent {
//         data {
//           attributes {
//             Content {
//               ... on STRAPI_ComponentContentMediaTekst {
//                 id
//                 Tekst
//                 Titel
//                 Media {
//                   data {
//                     attributes {
//                       url
//                       imageFile {
//                         id
//                         childImageSharp {
//                           gatsbyImageData
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
