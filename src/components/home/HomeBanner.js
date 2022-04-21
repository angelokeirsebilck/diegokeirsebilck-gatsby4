import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { hyphenateSync } from 'hyphen/nl';

// Components
import Container from '../base/Container';

const query = graphql`
  {
    strapi {
      homebanner {
        intro
        title
      }
    }
  }
`;

const HomeBanner = () => {
  const {
    strapi: { homebanner },
  } = useStaticQuery(query);

  const createTitleHTMLL = () => {
    return { __html: hyphenateSync(homebanner.title, { minWordLength: 8 }) };
  };

  const createIntroHTMLL = () => {
    return { __html: homebanner.intro };
  };

  return (
    <Container>
      <div className='pt-6 md:pt-0 md:grid gap-6 md:grid-cols-12 md:h-[calc(100vh_-_8rem)]'>
        <div className='col-span-7 flex flex-col justify-center'>
          <h1
            className='display1-clamp font-sans strong-primary font-semibold mb-4 md:mb-9 tracking-4'
            dangerouslySetInnerHTML={createTitleHTMLL()}
          />
          <div
            className='font-medium strong-primary text-xl md:text-3xl'
            dangerouslySetInnerHTML={createIntroHTMLL()}
          />
        </div>
        <div className='col-span-5 flex items-center mt-6 md:mt-0'>
          <StaticImage src='../../images/homebanner.jpg' alt='Home Figure' />
        </div>
      </div>
    </Container>
  );
};

export default HomeBanner;
