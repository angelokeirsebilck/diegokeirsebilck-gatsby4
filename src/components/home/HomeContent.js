import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import MediaText from '../blocks/MediaText';
import USP from '../blocks/USP';

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
          ... on STRAPI_ComponentContentUsp {
            __typename
            id
            Background
            uspitem {
              text
              icon {
                url
              }
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
        return <MediaText key={`TextMedia${c.id}`} content={c} />;
      case 'STRAPI_ComponentContentUsp':
        return <USP key={`Usp${c.id}`} content={c} />;
      default:
        return null;
    }
  });
};

export default HomeContent;
