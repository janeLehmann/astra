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

const Layout = ({ children, setMagic, isFullScreen, lang, engClick, ruClick, isInnerPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={cx('layout', {
        'layout_full-screen': isFullScreen,
        'layout_is-menu-open': isMenuOpen,
      })}
    >
      <Header
        setMagic={setMagic}
        setIsMenuOpen={() => {
          setIsMenuOpen(true);
        }}
        lang={lang}
        engClick={engClick}
        ruClick={ruClick}
        isInnerPage={isInnerPage}
      />
      <main className="layout__inner">{children}</main>

      <Footer isInnerPage={isInnerPage} />
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
  magic: PropTypes.string,
  isFullScreen: PropTypes.bool,
};

Layout.defaultProps = {
  magic: null,
  setMagic: () => {},
  isMagic: false,
  isFullScreen: false,
};

export default Layout;
