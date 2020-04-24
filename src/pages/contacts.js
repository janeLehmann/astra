import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import Contacts from '../components/Contacts/Contacts';
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
        magic
        setIsMenuOpen={() => {
          setIsMenuOpen(true);
        }}
      />
      <Contacts magic={magic} />

      <Footer magic />
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
