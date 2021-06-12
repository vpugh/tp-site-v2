import { Link } from 'gatsby';
import React from 'react';

const DisplayHeader = ({ headerTitle, headerLink, linkTitle }) => {
  return (
    <div
      className='fade-in'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
      }}
    >
      <h2 style={{ fontSize: 36 }}>{headerTitle}</h2>
      <Link style={{ color: 'var(--textColor)' }} to={headerLink}>
        {linkTitle}
      </Link>
    </div>
  );
};

export default DisplayHeader;
