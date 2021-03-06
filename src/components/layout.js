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
import SpinnerImage from '../images/svg/spark.svg';

// Redux
import { connect } from 'react-redux';

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

  return (
    <div>
      {global.isSubmitting && (
        <div className='fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-50 flex justify-center items-center'>
          <div className='w-25 z-40'>
            <SpinnerImage alt='Spinner' className='animate-spin' />
          </div>
          <div className='absolute bg-overlay opacity-70 w-full h-full z-20'></div>
        </div>
      )}
      <div className='text-base font-sans'>{children}</div>
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
