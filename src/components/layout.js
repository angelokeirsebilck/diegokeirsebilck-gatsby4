/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Images
import SpinnerImage from '../images/spark.svg';

// Redux
import { connect } from 'react-redux';

import './layout.css';

const Layout = ({ children, global }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // if (global.isSubmitting) {
  //   document.getElementsByTagName("html")[0].classList.add("overflow-hidden")
  // } else {
  //   document.getElementsByTagName("html")[0].classList.remove("overflow-hidden")
  // }
  // const overflow = global.isSubmitting ? "overflow-hidden" : ""

  return (
    <div>
      {global.isSubmitting && (
        <div className='fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-50 flex justify-center items-center'>
          <div className='w-25 z-40'>
            <img src={SpinnerImage} alt='Spinner' className='animate-spin' />
          </div>
          <div className='absolute bg-overlay opacity-70 w-full h-full z-20'></div>
        </div>
      )}
      <div className='max-w-screen-xl px-2 md:px-4 font-sans text-base text-body mx-auto'>
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  global: state.global,
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(mapStateToProps)(Layout);
