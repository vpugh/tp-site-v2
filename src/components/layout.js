import React from 'react';
import PropTypes from 'prop-types';

import Header from './structural/header';
import Footer from './structural/footer';
import useThemePage from '../hooks/use-theme-page';

const Layout = ({ children, floatNav }) => {
  useThemePage();
  return (
    <>
      <Header floatNav={floatNav} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
