import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
    <main>
      <h1 className='text-yellow-300'>{Content[0].Titel}</h1>
      <GatsbyImage image={image} alt='test' />
      test hallo
    </main>
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
