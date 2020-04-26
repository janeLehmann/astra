/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
// import { useStaticQuery, graphql } from 'gatsby';

import './Layout.scss';

const Layout = ({ children }) => {
  const [magic, setMagic] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout">
      <Header
        setMagic={() => {
          setMagic(prevState => !prevState);
        }}
        magic={magic}
        setIsMenuOpen={() => {
          setIsMenuOpen(true);
        }}
      />
      <main className="layout__inner">{children}</main>

      <Footer magic={magic} />
      {isMenuOpen && (
        <Menu
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
