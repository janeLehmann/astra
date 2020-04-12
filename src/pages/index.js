import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import StartScreen from '../components/StartScreen/StartScreen';
import SEO from '../components/seo';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  const [magic, setMagic] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        setMagic={() => {
          setMagic(prevState => !prevState);
        }}
        magic={magic}
      />
      <StartScreen magic={magic} />
      <Footer magic={magic} />
    </Layout>
  );
};

export default IndexPage;
