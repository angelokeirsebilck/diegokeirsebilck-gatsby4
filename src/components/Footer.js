import React from 'react';

import NavLinks from '../constants/main-nav';

import Container from './base/Container';
import LogoWhite from '../images/svg/elektro-diego-logo-white.svg';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'gatsby';
import ThemeButton from './base/Button';

const Footer = () => {
  return (
    <div className=''>
      <div className='text-footer bg-primary py-8 md:py-16'>
        <Container>
          <div className='lg:grid gap-6 md:grid-cols-12 text-white'>
            <div className='col-span-6 flex flex-col mb-10 md:mb-0'>
              <Link to='/'>
                <LogoWhite className='mb-6 md:mb-12' />
              </Link>

              <div className='flex mb-2'>
                <span className='font-bold mr-2.5'>T</span>
                <a
                  href='tel:+32473509041'
                  className='transition-colors hover:text-body'
                >
                  +32 473 50 90 41
                </a>
              </div>
              <div className='flex '>
                <span className='font-bold mr-2.5'>E</span>
                <a
                  href='mailto:info@elektro-diego.be'
                  className='transition-colors hover:text-body'
                >
                  info@elektro-diego.be
                </a>
              </div>
            </div>
            <div className='col-span-3 flex flex-col mb-10 md:mb-0'>
              <span className='heading4-clamp mb-6 md:mb-12 font-semibold tracking-2 lg:mt-12'>
                Menu
              </span>
              <ul className='columns-2 break-inside-avoid ml-0 mb-0'>
                {NavLinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.url}
                        className='transition-colors hover:text-body break-inside-avoid inline-block leading-none'
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='col-span-3 flex flex-col lg:items-end'>
              <span className='heading4-clamp mb-6 md:mb-12 font-semibold tracking-2 lg:mt-12'>
                Contacteer mij
              </span>
              <div className='flex items-center'>
                <ThemeButton
                  className='btn-sm btn-white'
                  type='gatsby'
                  to='/contact'
                  text='contact'
                />
                <a
                  href=''
                  target='_blank'
                  className='ml-6 text-white transition-colors hover:text-body'
                  rel='nofollow'
                >
                  <FaFacebookF color='text-inherit' size={24} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='bg-white text-body py-6'>
        <Container>
          <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <span> © {new Date().getFullYear()} Elektro Diego</span>
              <div className='flex md:ml-6 items-center md:items-start'>
                <Link
                  to='/privacy'
                  className='hover:text-primary transition-colors'
                >
                  Privacy Policy
                </Link>
                <span className='mx-1'>-</span>
                <Link
                  to='/cookies'
                  className='hover:text-primary transition-colors'
                >
                  Cookies
                </Link>
              </div>
            </div>
            <div className=''>
              <a
                href='mailto:info@angelokeirsebilck.be'
                className='hover:text-primary transition-colors'
              >
                website by aK
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
