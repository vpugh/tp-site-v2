import { Link } from 'gatsby';
import React from 'react';
import ThemeSwitcher from './theme-switcher';

const Header = (props) => {
  const { floatNav } = props;
  const logoText = 'Tori Pugh';
  const activeStyle = { borderBottomColor: 'var(--textColor)' };

  return (
    <header
      style={
        floatNav ? { position: 'absolute', top: 0, right: 0, left: 0 } : null
      }
      className='navigation container'
    >
      <Link className='logo' to='/'>
        {logoText}
      </Link>
      <nav className='link-container'>
        <Link to='/work' activeStyle={activeStyle}>
          Work
        </Link>
        <Link to='/about' activeStyle={activeStyle}>
          About
        </Link>
        <Link to='/blog' activeStyle={activeStyle}>
          Blog
        </Link>
        <Link to='/contact' activeStyle={activeStyle}>
          Contact
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
