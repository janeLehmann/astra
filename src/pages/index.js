import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import StartScreen from '../components/StartScreen/StartScreen';
import SEO from '../components/seo';

const IndexPage = () => {
  const [magic, setMagic] = useState(false);

  return (
    <Layout
      setMagic={() => {
        setMagic(prevState => !prevState);
      }}
      magic={magic}
      isMagic
      isFullScreen
    >
      <SEO title="Home" />

      <StartScreen magic={magic} />
    </Layout>
  );
};

export default IndexPage;
