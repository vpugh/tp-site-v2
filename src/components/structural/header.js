import { Link } from 'gatsby';
import React from 'react';
import ThemeSwitcher from './theme-switcher';

const Header = (props) => {
  const { floatNav } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const logoText = 'T—P';
  const activeStyle = { borderBottomColor: 'var(--textColor)' };

  const openMobileMenu = () => setIsMenuOpen(!isMenuOpen);

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
      <ThemeSwitcher />
      {isMenuOpen && (
        <nav className='mobile-menu' style={{ padding: 40 }}>
          <ThemeSwitcher />
          <div className='menu-container'>
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
          </div>
        </nav>
      )}
      <button className='hamburger-menu' onClick={openMobileMenu}>
        {isMenuOpen ? (
          <svg fill='none' viewBox='0 0 24 24' className='close-icon'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M17.25 6.75L6.75 17.25'
            ></path>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M6.75 6.75L17.25 17.25'
            ></path>
          </svg>
        ) : (
          <svg height='20' fill='none' viewBox='0 0 32 20'>
            <rect fill='currentColor' y='0' width='32' height='3'></rect>
            <rect fill='currentColor' y='8' width='32' height='3'></rect>
            <rect fill='currentColor' y='16' width='32' height='3'></rect>
          </svg>
        )}
      </button>
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
      </nav>
    </header>
  );
};

export default Header;
