// import { Link } from 'gatsby';
import React from 'react';
import { gsap } from 'gsap';

const Jumbotron = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.jumbo-header'),
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      element.querySelector('.jumbo-subheader'),
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <div className='jumbotron-bg' ref={ref}>
      <div className='container'>
        <div className='jumbo-text'>
          <h2 className='jumbo-header'>UI/UX Designer & Front-End Developer</h2>
          <h3 className='jumbo-subheader'>
            Quick and constantly learning creative that loves creating great{' '}
            <span className='emphasize'>solutions</span>,{' '}
            <span className='emphasize'>coding</span> cool stuff, &{' '}
            <span className='emphasize'>designing</span> things. Striving to
            make things better than I found them.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
