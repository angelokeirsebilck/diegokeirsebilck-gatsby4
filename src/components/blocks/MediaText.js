import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { hyphenateSync } from 'hyphen/nl';

// Images
import LinesDown from '../../images/svg/lines-down.svg';
import LinesDownRight from '../../images/svg/lines-down-right.svg';
import SparkBig from '../../images/svg/spark-big.svg';

// Components
import Container from '../base/Container';
import ThemeButton from '../base/Button';

const MediaText = ({ content }) => {
  const contentPos =
    content.imagepos === 'left' ? 'col-start-7' : 'col-start-1';
  const imgPos = content.imagepos === 'left' ? 'col-start-1' : 'col-start-8';

  const spacing = content.background === 'white' ? 'section' : 'section-bg';
  const textalign =
    content.textalign === 'center' ? 'flex flex-col justify-center' : '';

  const btnClass = content.background === 'white' ? 'btn-primary' : 'btn-black';

  const createTitleHTML = () => {
    return { __html: hyphenateSync(content.title) };
  };

  const createTextHTMLL = () => {
    return { __html: content.text };
  };

  const image = getImage(content.media.imageFile);

  let showLinesDownLeft = false;
  if (content.background === 'white' && content.imagepos === 'left')
    showLinesDownLeft = true;

  let showLinesDownRight = false;
  if (content.background === 'white' && content.imagepos !== 'left')
    showLinesDownRight = true;

  let showSpark = false;
  if (content.background === 'yellow') showSpark = true;

  const sparkPos = content.imagepos === 'left' ? 'left-0' : '-right-5/100';

  return (
    <div
      className={
        content.background === 'yellow'
          ? 'bg-primary overflow-hidden relative'
          : 'bg-white overflow-hidden relative'
      }
    >
      {showSpark && (
        <SparkBig
          className={`${sparkPos} hidden md:block absolute top-1/4 transform scale-125 z-10`}
        />
      )}
      <Container>
        <div
          className={`${spacing} md:grid grid-cols-12 gap-6 grid-flow-row-dense`}
        >
          <div
            className={`${contentPos} ${textalign} col-span-6 flex flex-col`}
          >
            <h2
              className='font-sans heading1-clamp font-semibold mb-6 md:mb-12 tracking-3'
              dangerouslySetInnerHTML={createTitleHTML()}
            />
            <div
              className='text-base tracking-1 leading-tight'
              dangerouslySetInnerHTML={createTextHTMLL()}
            />
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
          <div className={`${imgPos} col-span-5 mt-6 md:mt-0 relative`}>
            {showLinesDownLeft && (
              <LinesDown className='hidden md:block absolute -bottom-40 left-1/3 xl:-left-1/4' />
            )}
            {showLinesDownRight && (
              <LinesDownRight className='hidden md:block absolute -bottom-40 right-1/3 xl:-right-1/4' />
            )}

            <GatsbyImage image={image} alt={content.media.name} />
          </div>
        </div>
      </Container>
    </div>
  );
};

MediaText.propTypes = {
  content: PropTypes.object.isRequired,
};

export default MediaText;
