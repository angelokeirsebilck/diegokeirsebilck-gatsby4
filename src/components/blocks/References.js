import React from 'react';
import Container from '../base/Container';
import { hyphenateSync } from 'hyphen/nl';
import { StaticImage } from 'gatsby-plugin-image';

// Hooks
import useSwiperRef from '../../hooks/useSwiperRef';

import 'swiper/css';
import 'swiper/css/navigation';

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonPrev from '../swiper/ButtonPrev';
import ButtonNext from '../swiper/ButtonNext';

const References = ({ content }) => {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  const createTitleHTML = () => {
    return { __html: hyphenateSync(content.reftitle) };
  };

  const createTextHTMLL = ({ text }) => {
    return { __html: text };
  };
  console.log(content);

  return (
    <Container>
      <div className='section'>
        <div className='relative'>
          <h2
            className='font-sans heading1-clamp font-semibold mb-6 md:mb-12 tracking-3'
            dangerouslySetInnerHTML={createTitleHTML()}
          />
          <div className='md:absolute mb-6 md-mb-0 right-0 bottom-0 flex'>
            <ButtonPrev ref={prevElRef} />
            <div className='ml-4'>
              <ButtonNext ref={nextElRef} />
            </div>
          </div>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoHeight
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
        >
          {content.Refereceitem.map((ref, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='bg-primary-light px-16 py-6 relative'>
                  <StaticImage
                    src='../../images/quote.png'
                    alt='Quote'
                    className='absolute top-4 left-4'
                    height={35}
                  />
                  <div className='flex flex-col'>
                    <div
                      className='text-base tracking-1 leading-tight'
                      dangerouslySetInnerHTML={{ __html: ref.text }}
                    />
                    <span className='font-semibold text-2xl mt-4'>
                      {ref.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default References;
