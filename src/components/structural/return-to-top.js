import React from 'react';
import { ReturnToTopContainer } from '../../styles/styled/return-to-top';

const listenToScroll = (setCurrentScrollPosition) => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = winScroll / height;

  setCurrentScrollPosition({
    theposition: scrolled,
  });
};

const ReturnToTop = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = React.useState();
  React.useEffect(() => {
    window.addEventListener('scroll', () =>
      listenToScroll(setCurrentScrollPosition)
    );
  }, []);
  return (
    <ReturnToTopContainer>
      <div
        className='icon-holder'
        aria-hidden='true'
        style={{
          opacity: currentScrollPosition?.theposition >= 0.8 ? 1 : 0,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{ width: '100%', height: '100%' }}
          viewBox='0 0 411.79 271.53'
        >
          <path d='M299.95 9.95c-5.42-6.39-15.02-7.18-21.44-1.74-6.4 5.44-7.19 15.04-1.74 21.44l76.61 90.17H22.22c-8.41 0-15.22 6.81-15.22 15.22s6.81 15.22 15.22 15.22h331.15l-76.61 90.19c-5.45 6.4-4.67 16 1.74 21.44 2.87 2.44 6.36 3.63 9.84 3.63 4.32 0 8.6-1.83 11.61-5.36l106.3-125.11-106.3-125.1z'></path>
        </svg>
      </div>
    </ReturnToTopContainer>
  );
};

export default ReturnToTop;
