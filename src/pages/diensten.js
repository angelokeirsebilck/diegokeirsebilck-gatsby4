import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/base/Title';
import Footer from '../components/Footer';

const diensten = () => {
  return (
    <Layout>
      <SEO
        title='Home - Elektro Diego -  Voor al je algemene elektriciteitswerken'
        description='Elektro Diego - Diego Keirsebilck - Voor al je algemene elektriciteitswerken'
      />
      <Header />
      <Title title='Diensten' />
      <Footer />
    </Layout>
  );
};

export default diensten;
