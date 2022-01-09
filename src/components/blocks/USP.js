import React from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';

// Components
import Container from '../base/Container';

const USP = ({ content }) => {
  const { uspitem } = content;

  const spacing = content.Background === 'white' ? 'section' : 'section-bg';

  console.log(content);
  return (
    <div
      className={
        content.Background === 'yellow'
          ? 'bg-primary overflow-hidden relative'
          : 'bg-white overflow-hidden relative'
      }
    >
      <Container>
        <div
          className={`${spacing} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6`}
        >
          {uspitem.map((usp, index) => {
            return (
              <div className='flex flex-col items-center' key={index}>
                {content.Background === 'yellow' ? (
                  <SVG
                    src={`http://localhost:1337${usp.icon.url}`}
                    height={70}
                    width='100%'
                    preProcessor={(code) =>
                      code.replace(/fill=".*?"/g, 'fill="white"')
                    }
                  />
                ) : (
                  <SVG
                    src={`http://localhost:1337${usp.icon.url}`}
                    height={70}
                    width='100%'
                    preProcessor={(code) =>
                      code.replace(/fill=".*?"/g, 'fill="#fead1b"')
                    }
                  />
                )}

                <span className='text-body text-base tracking-1 inline-block mt-6 text-center font-medium'>
                  {usp.text}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default USP;
