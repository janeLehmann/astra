import React from 'react';

import Layout from '../components/Layout/Layout';
import StartScreen from '../components/StartScreen/StartScreen';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <StartScreen />

    </Layout>
  );
};

export default IndexPage;
