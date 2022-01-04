import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import MediaText from '../blocks/MediaText';

const query = graphql`
  {
    strapi {
      homeContent {
        Content {
          ... on STRAPI_ComponentContentTekstMedia {
            __typename
            id
            text
            title
            imagepos
            background
            link {
              url
              text
            }
            textalign
            media {
              imageFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              url
              name
            }
          }
        }
      }
    }
  }
`;

const HomeContent = () => {
  const {
    strapi: {
      homeContent: { Content },
    },
  } = useStaticQuery(query);

  return Content.map((c) => {
    switch (c.__typename) {
      case 'STRAPI_ComponentContentTekstMedia':
        return <MediaText key={c.id} content={c} />;
      default:
        return null;
    }
  });
};

export default HomeContent;
