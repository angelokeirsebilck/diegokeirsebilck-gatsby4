import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components
import ThemeButton from '../base/Button';
import Container from '../base/Container';

const Cta = ({ content }) => {
  const spacing = content.ctabackground === 'white' ? 'section' : 'section-bg';
  const textColor =
    content.ctabackground === 'yellow' ? 'text-white' : 'text-body';
  const btnClass =
    content.ctabackground === 'white' ? 'btn-primary' : 'btn-black';

  const backgroundImage = getImage(content.image.imageFile);

  return (
    <div
      className={
        content.ctabackground === 'yellow'
          ? 'bg-primary overflow-hidden relative z-10 text-white'
          : 'bg-white overflow-hidden relative z-10'
      }
    >
      <GatsbyImage
        image={backgroundImage}
        alt={content.image.name}
        className='absolute opacity-20 top-0 left-0 z-20 w-full h-full'
      />
      <div className='relative z-30'>
        <Container>
          <div className={`${spacing} grid gap-6 md:grid-cols-12 `}>
            <div className='md:col-span-4'>
              <h2
                className={`heading1-clamp font-semibold tracking-3 ${textColor}`}
              >
                {content.ctatitle}
              </h2>
            </div>
            <div className='md:col-start-9 md:col-span-4 flex flex-col md:items-end justify-between'>
              <div
                className={`heading3-clamp font-medium md:text-right ${textColor}`}
              >
                {content.ctatext}
              </div>
              {content.link && (
                <div className='mt-6'>
                  <ThemeButton
                    className={btnClass}
                    type='gatsby'
                    to={`/${content.link.url}`}
                    text={content.link.text}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Cta;
