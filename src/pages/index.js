import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import StartScreen from '../components/StartScreen/StartScreen';
import SEO from '../components/seo';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

const IndexPage = () => {
  const [magic, setMagic] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        setMagic={() => {
          setMagic(prevState => !prevState);
        }}
        magic={magic}
        setIsMenuOpen={() => {
          setIsMenuOpen(true);
        }}
      />
      <StartScreen magic={magic} />
      <Footer magic={magic} />
      {isMenuOpen && (
        <Menu
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
    </Layout>
  );
};

export default IndexPage;
