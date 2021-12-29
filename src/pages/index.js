import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// markup
const IndexPage = ({ data }) => {
  const {
    strapi: {
      homeContent: { Content },
    },
  } = data;

  const image = getImage(Content[0].Media.imageFile);

  return (
    <main>
      <h1 className='text-yellow-300'>{Content[0].Titel}</h1>
      <GatsbyImage image={image} />
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
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
