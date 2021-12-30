import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  // const {
  //   strapi: {
  //     homeContent: {
  //       data: {
  //         attributes: { Content },
  //       },
  //     },
  //   },
  // } = data;

  // const image = getImage(Content[0].Media.data.attributes.imageFile);

  return (
    <main>
      {/* <h1 className='text-yellow-300'>{Content[0].Titel}</h1>
      <GatsbyImage image={image} /> */}
      test hallo
    </main>
  );
};

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
