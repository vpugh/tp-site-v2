import { Link } from 'gatsby';
import React from 'react';
import useThemePage from '../../hooks/use-theme-page';

const Header = (props) => {
  const { floatNav } = props;
  const logoText = 'Tori Pugh';
  const { currentTheme, setCurrentTheme } = useThemePage();
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
        <select
          className='theme-selector'
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
          onBlur={(e) => setCurrentTheme(e.target.value)}
        >
          <option value='Orange'>Orange</option>
          <option value='Blue'>Blue</option>
          <option value='Green'>Green</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
