import * as React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HomeBanner from '../components/home/HomeBanner';
import HomeContent from '../components/home/HomeContent';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Home - Elektro Diego -  Voor al je algemene elektriciteitswerken'
        description='Elektro Diego - Diego Keirsebilck - Voor al je algemene elektriciteitswerken'
      />
      <Header />
      <HomeBanner />
      <HomeContent />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
