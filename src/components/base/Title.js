import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

// Images
// import Background from '../../images/svg/title-background-single.svg';

const Title = ({ title }) => {
  return (
    <Container>
      <h2 className='mt-6 md:mt-12font-sans heading1-clamp font-semibold pb-2 mb-6 md:mb-12 tracking-3 transform -translate-x-[5px] relative inline-block'>
        {title}
        {/* <Background className='absolute right-0 top-2 transform h-full translate-x-full' /> */}
      </h2>
    </Container>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
