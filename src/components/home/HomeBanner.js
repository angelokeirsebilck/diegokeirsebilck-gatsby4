import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import HomeBannerFigure from '../../images/svg/homebanner.svg';

const query = graphql`
  {
    strapi {
      homebanner {
        intro
        title
        image {
          imageFile {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
          url
        }
      }
    }
  }
`;

const HomeBanner = () => {
  const {
    strapi: { homebanner },
  } = useStaticQuery(query);

  const createTitleHTMLL = () => {
    return { __html: homebanner.title };
  };

  const createIntroHTMLL = () => {
    return { __html: homebanner.intro };
  };

  const image = getImage(homebanner.image.imageFile);

  return (
    <div className='md:grid gap-6 md:grid-cols-12 md:h-[calc(100vh_-_8rem)]'>
      <div className='col-span-7 flex flex-col justify-center'>
        <div
          className='display1-clamp strong-primary font-semibold mb-8 md:mb-10'
          dangerouslySetInnerHTML={createTitleHTMLL()}
        />
        <div
          className='font-medium strong-primary text-xl md:text-3xl'
          dangerouslySetInnerHTML={createIntroHTMLL()}
        />
      </div>
      <div className='col-span-5 flex items-center mt-8 md:mt-0'>
        <GatsbyImage image={image} alt='Home Figure' />
        {/* <HomeBannerFigure className='w-full' /> */}
      </div>
    </div>
  );
};

export default HomeBanner;
