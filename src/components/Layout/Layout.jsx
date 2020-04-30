/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

import './Layout.scss';

const Layout = ({ children, magic, setMagic, isMagic, isFullScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cx('layout', {
      'layout_full-screen': isFullScreen,
      'layout_is-menu-open': isMenuOpen
    })}>
      <Header
        magic={magic}
        isMagic={isMagic}
        setMagic={setMagic}
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
  setMagic: PropTypes.func,
  magic: PropTypes.bool,
  isMagic: PropTypes.bool,
  isFullScreen: PropTypes.bool,
};

Layout.defaultProps = {
  magic: true,
  setMagic: () => {},
  isMagic: false,
  isFullScreen: false,
};

export default Layout;
